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

app.post('/chat', dateController.addNewDate)
app.get('/messages/all', dateController.getDates)
app.delete('/messages/last', dateController.deleteLast)
