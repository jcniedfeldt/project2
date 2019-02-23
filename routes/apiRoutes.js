var db = require("../models");

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
  app.get("/api/profile", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/profile", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(
  //     dbExample
  //   ) {
  //     res.json(dbExample);
  //   });
  // });
  app.get("/api/status-updates", function(req, res) {
    // res.render("profile");
    db.posts
      .findAll({
        order: [["createdAt", "DESC"]]
      })
      .then(userposts => {
        res.json(userposts);
      })
      .catch(err => {
        console.log(err);
      });
  });
  app.get("/api/status-updates/:username", function(req, res) {
    // res.render("profile");
    db.posts
      .findAll({
        where: { username: req.params.username },
        order: [["createdAt", "DESC"]]
      })
      .then(userposts => {
        res.json(userposts);
      })
      .catch(err => {
        console.log(err);
      });
  });
  app.post("/api/status-update", function(req, res) {
    db.posts
      .create(req.body)
      .then(function(newpost) {
        res.json(newpost);
      })
      .catch(err => {
        console.log(err);
        res.send(404);
      });
    // res.render("profile");
  });
  app.put("/api/status-update/:id", function(req, res) {
    db.posts
      .update(req.body, { where: { id: parseInt(req.params.id) } })
      .then(function(result) {
        res.json(result);
      })
      .catch(err => {
        console.log(err);
      });
    // res.render("profile");
  });
  app.delete("/api/status-update/:id", function(req, res) {
    db.posts
      .destroy({ where: { id: parseInt(req.params.id) } })
      .then(function(result) {
        res.json(result);
      })
      .catch(err => {
        console.log(err);
      });
    // res.render("profile");
  });
  // app.put("/api/user-info/:username", function(req, res) {
  //   // res.render("profile");
  // });
  app.get("/api/user-info/:username", function(req, res) {
    // res.render("profile");
    // console.log(db);
    db.users
      .findOne({ where: { username: req.params.username } })
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
