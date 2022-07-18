var express = require('express');
const { User } = require("../schema/index");
// const controller = require("../controller/index");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'User Database Home page' });
  
});

module.exports = router;