//const ip = require("ip");
module.exports = {
  getHomePage: (req, res) => {
    let query = "SELECT * FROM `players` ORDER BY id ASC"; // query database to get all the players
    let query_temp = "SELECT * FROM `players_temp` ORDER BY id ASC";
    // execute query
    db.query(query, (err, result) => {
      db.query(query_temp,(err, result_temp)=>{
        if(err) {
          res.redirect('/')
        }
        //console.log(ip.address());
        //console.log(result_temp);
        res.render("index.ejs", {
          title: "Welcome to Socka | View Players",
          players: [...result_temp,...result]
        });
        if (err) {
          res.redirect("/");
        }
        //result = [ ...result ,result_temp]
      })
      
    });
  },
};
