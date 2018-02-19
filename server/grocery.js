var db = require('../database/index.js')

var store = function(item,res){
  db(item,res);
}

var retrieve = function(item, res){

}

module.exports.store = store;
module.exports.retrieve = retrieve;