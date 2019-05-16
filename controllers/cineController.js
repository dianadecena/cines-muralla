const sequelize = require("../config/database");

exports.viewHome = (req, res) => {
    res.render("home", { title: 'home' });
  };