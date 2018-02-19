var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/groceries');

var grocerySchema = mongoose.Schema({
  item: String,
  quantity: Number
});

var Grocery = mongoose.model('grocerylist', grocerySchema);

module.exports = function(item, res){

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

