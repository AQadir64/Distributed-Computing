const ip = require("ip");
const config = require("../config.json");
const shaheer = config.shaheer;
const qadir = config.qadir;
module.exports = {
  getHomePage: (req, res) => {
    let query = "SELECT * FROM `patient` ORDER BY id ASC"; // query database to get all the players
    let query_temp = "SELECT * FROM `patient_temp` ORDER BY id ASC";
    // execute query
    console.log(ip.address());
    db.query(query, (err, result) => {
      if (ip.address() === "10.57.23.196") {
        console.log("helloo");
        db.query(query_temp, (err, result_temp) => {
          if (err) {
            res.redirect("/");
          }
          //console.log(ip.address());
          //console.log(result_temp);
          res.render("index.ejs", {
            title: "Welcome to Socka | View Players",
            players: [...result_temp, ...result]
          });
          //result = [ ...result ,result_temp]
        });
      } else if (ip.address() === shaheer.host) {
        db2.query(query_temp, (err, result_temp) => {
          if (err) {
            res.redirect("/");
          }
          //console.log(ip.address());
          //console.log(result_temp);
          res.render("index.ejs", {
            title: "Welcome to Socka | View Players",
            players: [...result_temp, ...result]
          });
          if (err) {
            res.redirect("/");
          }
          //result = [ ...result ,result_temp]
        });
      } else if (ip.address() === qadir.host) {
        db3.query(query_temp, (err, result_temp) => {
          if (err) {
            res.redirect("/");
          }
          //console.log(ip.address());
          //console.log(result_temp);
          res.render("index.ejs", {
            title: "Welcome to Socka | View Players",
            players: [...result_temp, ...result]
          });
          if (err) {
            res.redirect("/");
          }
          //result = [ ...result ,result_temp]
        });
      }
    });
  }
};
