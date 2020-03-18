const mongoose = require('mongoose')

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
