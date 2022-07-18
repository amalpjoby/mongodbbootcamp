"use strict";

/**
 * Mongoose Schema Methods for User model.
 */
var _require = require("../schema/index"),
    userSchema = _require.userSchema;
/**
 * Instance methods: These are the methods which are used to manipulate the individual document.
 */


userSchema.methods.getIfAdult = function () {
  return this.age > 18;
};
/**
 * Static methods: These are the methods which are used to query the whole collection.
 * - Add a function property to schema.statics
 */


userSchema.statics.findByAge = function (age, callback) {
  this.find({
    age: age
  }, callback);
};
/**
 * Static methods
 * - Call the Schema#static() function
 */


userSchema["static"]("findByLastName", function (lastname, callback) {
  this.find({
    lastname: lastname
  }, callback);
});
/**
 * Static methods
 * - Call the Schema#static() function
 */

userSchema["static"]("findByFirstName", function (firstname, callback) {
  this.find({
    firstname: firstname
  }, callback);
});
/**
 * Virtual Methods:The virtual methods are not persisted to MongoDB.
 *  The method contains getters and setters which are used to combine the mongoose fields.
 */

userSchema.virtual("fullName").get(function () {
  return this.firstname + " " + this.lastname;
});