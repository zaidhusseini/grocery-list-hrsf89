var db = require('../database/index.js')

var store = function(item,res){
  db.save(item,res);
}

var retrieve = function(res){
  console.log('retrieving')
  db.retrieve(res);
}

module.exports.store = store;
module.exports.retrieve = retrieve;