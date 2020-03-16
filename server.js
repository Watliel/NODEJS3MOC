const express = require('express')

var app = express()

app.use(express())
app.get('/hello', function(req, res) {
    var country = req.query. country
  if(!country){
    res.send("Which country do you want ?")
  } else {
    res.send("Hello," + country + "!" )
  }
})
var port = process.env.PORT || 3000;
app.listen(port, function (){
    console.log('lancement')
})




