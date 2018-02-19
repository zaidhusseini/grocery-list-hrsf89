var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var grocery = require('./grocery')
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.get('/grocery', (req,res)=>{
  var items = req.body;
  console.log(items);

});

app.post('/grocery',(req,res)=>{
  var item = req.body;
  grocery.store(item,res);
});

app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});

