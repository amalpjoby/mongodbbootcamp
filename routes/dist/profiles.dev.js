"use strict";

var express = require('express');

var _require = require("../schema/index"),
    User = _require.User;

var controller = require("../controller/index");

var methods = require("../methods/index");

var router = express.Router();
/**
 *  Route for books.
 */

router.get('/', function (req, res, next) {
  res.render('profiles', {
    title: "profiles"
  });
});
/**
 * Route for New profile form
 */

router.get('/add', function (req, res, next) {
  res.render('addprofile', {
    title: 'add profile'
  }); // console.info(res);
});
/**
 * route for storing the newly added profile
 */

router.post('/add/store', function (req, res, next) {
  controller.createUser(req, res);
});
/**
 * Route for Showing the list of all entries
 */

router.get('/list', function (req, res, next) {
  User.find({}, function (err, data) {
    if (err) {
      console.info("err ".concat(err));
    } else {
      res.render('list', {
        title: "list",
        data: data
      }); // res.send(data[2].firstname);
    }

    ;
  });
});
router.get('/delete', function (req, res, next) {
  res.render('delete', {
    title: "delete"
  });
});
router.post('/delete/deleteuser', function (req, res, next) {
  User.findOneAndDelete({
    firstname: req.body.firstname
  }, function (err, data) {
    if (err) {
      console.log("err ".concat(err));
    } else {
      console.log("deleted ".concat(data));
      res.render('deleted', {
        title: "deleted"
      });
    }
  });
});
module.exports = router;