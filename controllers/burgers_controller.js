const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll( data => {
    const hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  if (req.body.name && req.body.name.length <= 30) {
    console.log("Input length is: " + req.body.name.length);
    burger.insertOne(["burger_name", "devoured"],
    [req.body.name, false],
    result => {
      res.json({ id: result.insertId });
    });  
  }
  else {
    res.status(404).end();
  }
});

router.put("/api/burgers/:id", function(req, res) {
  const condition = `id = ${req.params.id}`;
  burger.updateOne({
    devoured: req.body.devoured
  }, condition, result => {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;