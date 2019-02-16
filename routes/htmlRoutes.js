// var db = require("../models");
//TODO going to have to update this when we figure out the structure of the db
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
    // db.Example.findAll({}).then(function(dbExamples) {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     examples: dbExamples
    //   });
    // });
  });

  // Load example page and pass in an example by id
  app.get("/home/:username", function(req, res) {
    //TODO add db call to get user information and pass to render
    res.render("profile", { username: req.params.username });
    // db.Users.findOne({ where: { username: req.params.username } }).then(
    //   function(dbExample) {
    //     res.render("example", {
    //       example: dbExample
    //     });
    //   }
    // );
  });

  app.get("/login", function(req, res) {
    res.render("login");
  });
  app.get("/signup", function(req, res) {
    res.render("signup");
  });
  app.get("/about", function(req, res) {
    res.render("about");
  });
  app.get("/contact", function(req, res) {
    res.render("contact");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
