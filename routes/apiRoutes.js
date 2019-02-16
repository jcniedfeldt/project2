var db = require("../models");

module.exports = function(app) {
  // Get all examples
  // app.get("/api/examples", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  // // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(
  //     dbExample
  //   ) {
  //     res.json(dbExample);
  //   });
  // });
  // app.get("/api/status-updates", function(req, res) {
  //   // res.render("profile");
  // });
  // app.post("/api/status-update", function(req, res) {
  //   // res.render("profile");
  // });
  // app.put("/api/status-update/:id", function(req, res) {
  //   // res.render("profile");
  // });
  // app.put("/api/user-info/:username", function(req, res) {
  //   // res.render("profile");
  // });
  app.get("/api/user-info/:username", function(req, res) {
    // res.render("profile");
    // console.log(db);
    db.users
      .findOne({ where: { user_name: req.params.username } })
      .then(userinfo => {
        res.json(userinfo);
      })
      .catch(err => {
        console.log(err);
      });
  });
  // app.post("/api/login", function(req, res) {
  //   // res.render("profile");
  // });
  // app.post("/api/signup", function(req, res) {
  //   // res.render("profile");
  // });
  // app.post("/api/contact", function(req, res) {
  //   // res.render("profile");
  // });
};
