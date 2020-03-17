const express = require('express')
const mongoose = require('mongoose')
const router = require('express').Router()
var app = express()
const dateController = require('./dates')

app.use(express())

var port = process.env.PORT || 3000;

app.listen(port, function (){
	const url = "mongodb+srv://Arnaud:Arnaud@cluster0-rnqbu.mongodb.net/test?retryWrites=true&w=majority"
	mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}).then(() => {
		console.log('Connected to Database !')
	}).catch(err => {
		console.log('Error during the connection to the database', err)
		process.exit()
	})
	console.log('lancement du server')
})

app.post('/newDate', dateController.addNewDate)
app.get('/getDates', dateController.getDates)
/*
app.get('/hello', function(req, res) {
    var name = req.query.name;
  if(!name){
    res.send("Which name do you want ?")
  } else {
    res.send("Hello," + name + "!" )
  }
})
/*
app.post('/chatBox', function (req, res) {		

	var response = req.body.msg.split(' ')
	var k = response[0]
//lecture
	var content = fs.readFileSync('reponses.json')
	var object = JSON.parse(content)

	if (response.length === 1) {

		(k in object) ? 
		res.send(k + ': ' + object[k])
		: res.send('Donnée Introuvable ' + k + '...')
	}

	if (response.length === 3) {
        object[k] = response[2]
        //ecriture reponse
		var data = JSON.stringify(object)
		fs.writeFileSync('reponses.json', data)

		res.send('Merci pour cette information !')
	}
})
*/