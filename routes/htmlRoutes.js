// var db = require("../models");
//TODO going to have to update this when we figure out the structure of the db

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index");
    // db.Example.findAll({}).then(function(dbExamples) {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     examples: dbExamples
    //   });
    // });
  });

  app.get("/home", function (req, res) {
    //TODO add db call to get user information and pass to render
    res.render("profile", { username: req.body.username });
    // db.Users.findOne({ where: { username: req.params.username } }).then(
    //   function(dbExample) {
    //     res.render("example", {
    //       example: dbExample
    //     });
    //   }
    // );
  });

  // Load example page and pass in an example by id
  app.get("/home/:username", function (req, res) {
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

  app.get("/login", function (req, res) {
    res.render("login");
  app.get("/profile", function(req, res) {
    res.render("profile");
  });

  app.get("/login", function(req, res) {
    res.render("profile");
  });
  app.post("/login", passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }));
  app.get("/signup", function (req, res) {
    res.render("signup");
  });
  app.get("/about", function (req, res) {
    res.render("about");
  });
  app.get("/contact", function (req, res) {
    res.render("contact");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
