var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/groceries');

var grocerySchema = mongoose.Schema({
  item: {type:String, unique:true},
  quantity: Number
});

var Grocery = mongoose.model('grocerylist', grocerySchema);

module.exports.save = function(item, res){

  var groceryItem = new Grocery({
    item: item.item,
    quantity: item.quantity
  });

  groceryItem.save(function(err,data){
    if (err){
     res.status(500).send(err); //send error content
    } else{
      res.status(201).send(data); //item created in DB
    }
    

  });

}

module.exports.retrieve = function(res){
 
  Grocery.find(function(err, results){
    if (err){
      res.status(500).send(err); //handle server error
    } else {
      res.send(results);
    }
  }).sort({quantity:-1});

}