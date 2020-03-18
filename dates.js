const mongoose = require('mongoose')
const db = require('mongodb')
const fs = require('fs')
const MongoClient = require('mongodb').MongoClient;
//const client = new MongoClient(bddURL, { useNewUrlParser: true, useUnifiedTopology: true });

const dateSchema = new mongoose.Schema({
	date: {
		type: Date
    },
    msg: {
        type: String
    }
});
var date = mongoose.model("date", dateSchema);

exports.getDates = (req, res) => {
   date.find({})
  .then(dateSchema => {
      console.log('Dates on response')
      res.send(dateSchema)
  }) .catch(err => {
      res.send(err)
  })
}
exports.addNewDate = (req,res) => {
	let dateTime = new date({
        date: new Date,
        msg: 'demain = ' + req.query.msg
	})
	dateTime.save((err, dateSchema)=> {
		if(err){
			res.send(err)
		}
		res.json(dateSchema)
		console.log('Date ajouté')
	})
}
exports.deleteLast = (req, res) => {
    
    date.find({})
    
    .then(dateSchema => {
        //var last = JSON.parse(dateSchema[dateSchema.length-1])
        var last = dateSchema[dateSchema.length-1]
        var id = last._id
        console.log(id)

        date.deleteOne({_id: id}, (err) => {
            if(err){
                res.send(err)
            }
            res.send('supprimé')
        })
    })/*.catch(err) {
        console.log(err)
    }*/


     
}
