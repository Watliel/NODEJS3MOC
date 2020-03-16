const express = require('express')

var app = express()

app.use(express())
app.get('/hello', function(req, res) {
    var name = req.query.name;
  if(!name){
    res.send("Which name do you want ?")
  } else {
    res.send("Hello," + name + "!" )
  }
})
var port = process.env.PORT || 3000;
app.listen(port, function (){
    console.log('lancement')
})




