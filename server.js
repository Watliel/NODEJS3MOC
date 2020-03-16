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

var port = process.env.PORT || 3000;
app.listen(port, function (){
    console.log('lancement')
})




