var express = require('express');
var mongoose = require('mongoose');
var app = express();
app.use(express.json());

mongoose.connect(
  'mongodb://localhost:27017/server',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'Connected to Database');
  }
);
app.listen(3000, () => {
  console.log('server listening on port  3k');
});