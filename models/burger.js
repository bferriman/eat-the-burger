const orm = require("../config/orm.js");

const table = "burgers";

const burger = {
  selectAll: function(cb) {
    orm.selectAll(table, res => {
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb) {
    orm.insertOne(table, cols, vals, res => {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne(table, objColVals, condition, res => {
      cb(res);
    });
  }
};

module.exports = burger;