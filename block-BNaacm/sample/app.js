var express =('express');

var mongoose = ('mongoose')


// connect to database

mongoose.connect('mongodb://localhost/sample',
  {useNewUrlParser: true , useUnifiedTopology:true},
  (err)=>{
    console.log(err ? err : "Connected true") 
  })

var app = express()

app.get('/',(req,res) => {
  res.send('welcome');
})



// listener

app.listen( 4000, ()=>{
    console.log("server listening on port 4000");
});      

