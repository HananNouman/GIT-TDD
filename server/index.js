const express = require('express');
const path = require('path');
const db = require('../database/index.js');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../angular-client/')));

app.get('/cats', function (req, res) {
	db.Cat.find({}, function (err, cats) {
       res.send(cats);
    });

  // TODO - your code here! 
});

app.post('/cats', function (req, res) {
  // TODO - your code here!
  var data = {catName:req.body.catName,
  ownerEmail:req.body.ownerEmail,
  imageUrl:req.body.imageUrl,
  adoptionMessage:req.body.adoptionMessage}
 
  db.save(data, function(err,dataa){
  	if(err)
  	console.log(err)
  	console.log('save')
  res.sendStatus(201,dataa)
  })
  
})



let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
module.exports = app


