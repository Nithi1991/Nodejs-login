const express = require("express");
const router = express.Router();

router.get('/', function (req, res, next) {
  const products = [
    {
      name: "Alappuzha",
      about: "There is the whole of Kerala in one side, and then there is this heavenly tourist destination called Alappuzha or Alleppey!",
      image: "https://www.ekeralatourism.net/wp-content/uploads/2018/03/Alleppey.jpg",
      price: `5000/- perday`
    },
    {
      name: "Wayanad ",
      about: "Cradled in the lap of the Western Ghats, Wayanad truly deserves a top rank in the list of places to visit in Kerala. ",
      image: "https://www.ekeralatourism.net/wp-content/uploads/2018/03/Wayanad.jpg",
      price: `1000/- perday`
    },
    {
      name: "Cochin ",
      about: "Kochi or Cochin is a unique placein God’s Own Country that is perfectly blended with cultural values and modern ideas!  ",
      image: "https://www.ekeralatourism.net/wp-content/uploads/2018/03/Cochin.jpg",
      price: `2000/- perday`
    },
    {
      name: "Munnar ",
      about: "Yet another gorgeous hill station in the lap of the fascinating Western Ghats, Munnar needs no introduction. ",
      image: "https://www.ekeralatourism.net/wp-content/uploads/2015/12/munnar-1.png",
      price: `2000/- perday`
    }
  ]

  if (req.session.login) {
    res.render('home', { products });
  } else {
    res.redirect("/");

  }
});

module.exports = router;



