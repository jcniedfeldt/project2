var db = require("../models");
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

  app.get("/home", function(req, res) {
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

  app.get("/profile", function(req, res) {
    db.users.findOne({where:{username:"nlibre_test"}})
      .then(result=>{
        // console.log(result.username);
        userInfo={username:result.username,
          first_name:result.first_name,
          last_name:result.last_name,
          email:result.email,
          birthday:result.birthday,
          height:result.height,
          weight:result.weight
        };
        db.posts.findAll({where:{username:userInfo.username}})
        .then(posts=>{
          res.render("profile",{userInfo:userInfo,posts:posts});  
        });
        
      }).catch(err=>{
        res.send(404);
      })
  });

  app.get("/login", function(req, res) {
    res.render("profile");
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
