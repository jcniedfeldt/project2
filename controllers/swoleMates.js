var express = require("express");
var router = express.Router();
var db = require("../models");

// module.exports = function(router) { 
router.get("/", function(req, res) {
  res.redirect("/profile");
})

// router to get contents of database to show onscreen
router.get("/Post", function(req, res) {
  // express callback response by calling burger.findAll
  db.swoleMate.findAll()
  .then(function(allBurgers) {
    // Wrapping the array of returned burgers in a object so it can be referenced inside our handlebars
    var hbsObject = { burgers: allBurgers };
    res.render("index", hbsObject);
  });
});

// post route -> back to profile
router.post("/post", function(req, res) {
  // takes the request object using it as input for burger.create
  db.swoleMate.create({
    name: req.body.name,
    devoured: false
  }).then(function() {
    res.redirect("/post");
  });
});

// put route -> back to profile - update status
router.put("/profile", function(req, res) {
  db.swoleMate.findById(req.params.id).then(function(data) {
    db.swoleMate.update({
      devoured: true
    }).then(function() {
    res.redirect("/profile");
    });
  });  
});

module.exports = router;