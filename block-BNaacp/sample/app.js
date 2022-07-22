var express = require('express');
var mongoose = require('mongoose');
var app = express();
var User = require('./models/user');
app.use(express.json());
mongoose.connect(
  'mongodb://localhost:27017/sample',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'Connected to Database');
  }
);

app.post('/user', (req, res) => {
  User.create(req.body, (err, user) => {
    console.log(err);
    res.json(user);
  });
});

app.get('/user', (req, res) => {
  User.find({}, (err, user) => {
    console.log(err, user);
    res.json({ User: user });
  });
});
app.get('/user/:id', (req, res) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    console.log(err);
    res.json(user);
  });
});

//update

app.put('/user/:id', (req, res) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true }, (err, updateUserName) => {
    console.log(err);
    res.json(updateUserName);
  });
});

//dalete
app.delete('/user/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, userDelete) => {
    res.send(`${userDelete.name} is deleted`);
  });
});

app.listen(3000, () => {
  console.log('server is listening on port 3k');
});