var express = require('express');
const { User } = require("../schema/index");
var controller = require("../controller/index");
var methods = require("../methods/index");

var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('queries', { title: "title"});
});

router.post('/bday', function(req, res, next) {
  console.log(req.body);
  User.findByBday( req.body.date, function(err, data) {
    if(err) {
      console.log(`err ${err}`);
    } else {
      res.render('list', {title: "Bday folks", data: data});
    }
  })
});

module.exports = router;