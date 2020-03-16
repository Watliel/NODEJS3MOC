const express = require('express')

var app = express()

app.use(express.json())
app.get('/hello', function(req, res) {
    res.send('Hello World')
})
var port = process.env.PORT || 5000;
app.listen(port, function (){
    console.log('lancement')
})




