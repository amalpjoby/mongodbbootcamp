var express = require('express');
const { User } = require("../schema/index");
var controller = require("../controller/index");
var methods = require("../methods/index");

var router = express.Router();

/**
 *  Route for books.
 */ 
router.get('/', function(req, res, next) {
  res.render('profiles', { title: "profiles"});
});


/**
 * Route for New profile form
 */
router.get('/add', function(req, res, next) {
  res.render('addprofile', { title: 'add profile' });
});

/**
 * route for storing the newly added profile
 */
router.post('/add/store', function(req, res, next) {
  controller.createUser(req, res);
  res.render('addprofile', { title: 'add profile' });
});

/**
 * Route for Showing the list of all entries
 */
router.get('/list', function(req, res, next) {
  User.find({}, function(err, data) {
    if(err) {
      console.info(`err ${err}`);
    } else{
      res.render('list', {title: "list",data: data});
    };
  })
});

router.get('/delete', function(req, res, next) {
  res.render('delete', { title: "delete"});
});

router.post('/delete/deleteuser', function(req, res, next) {
  User.findOneAndDelete({firstname: req.body.firstname}, function(err, data) {
    if(err) {
      console.log(`err ${err}`);
    } else {
      console.log(`deleted ${data}`);
      res.render('deleted', {title: "deleted"});
    }
  })
});

module.exports = router;