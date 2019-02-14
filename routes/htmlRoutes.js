var db = require("../models");
//TODO going to have to update this when we figure out the structure of the db
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index.html");
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
    res.render("profile.html", { username: req.params.username });
    // db.Users.findOne({ where: { username: req.params.username } }).then(
    //   function(dbExample) {
    //     res.render("example", {
    //       example: dbExample
    //     });
    //   }
    // );
  });

  app.get("/login", function(req, res) {
    res.render("login.html");
  });
  app.get("/signup", function(req, res) {
    res.render("signup.html");
  });
  app.get("/about", function(req, res) {
    res.render("about.html");
  });
  app.get("/contact", function(req, res) {
    res.render("contact.html");
  });

  // ############# API ###################
  app.get("/api/status-updates", function(req, res) {
    // res.render("profile.html");
  });
  app.post("/api/status-update", function(req, res) {
    // res.render("profile.html");
  });
  app.put("/api/status-update/:id", function(req, res) {
    // res.render("profile.html");
  });
  app.put("/api/user-info", function(req, res) {
    // res.render("profile.html");
  });
  app.post("/api/login", function(req, res) {
    // res.render("profile.html");
  });
  app.post("/api/signup", function(req, res) {
    // res.render("profile.html");
  });
  app.post("/api/contact", function(req, res) {
    // res.render("profile.html");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
