/**
 * Mongoose Schema Methods for User model.
 */

const { userSchema } = require("../schema/index");

/**
 * Instance methods: These are the methods which are used to manipulate the individual document.
 */
userSchema.methods.getIfAdult = function () {
  return this.age > 18;
};


userSchema.methods.getIfBday = function (date) {
  return (this.bday == date);
};

/**
 * Static methods: These are the methods which are used to query the whole collection.
 * - Add a function property to schema.statics
 */
userSchema.statics.findByAge = function (age, callback) {
  this.find({ age: age }, callback);
};

userSchema.statics.findByBday = function (date, callback) {
  this.find({ bday: date.substring(5)}, callback);
};
/**
 * Static methods
 * - Call the Schema#static() function
 */
// userSchema.static("findByLastName", function (lastname, callback) {
//   this.find({ lastname: lastname }, callback);
// });

/**
 * Static methods
 * - Call the Schema#static() function
 */
 userSchema.static("findByFirstName", function (firstname, callback) {
  this.find({ firstname: firstname }, callback);
});

/**
 * Virtual Methods:The virtual methods are not persisted to MongoDB.
 *  The method contains getters and setters which are used to combine the mongoose fields.
 */
// userSchema.virtual("fullName").get(function () {
//   return this.firstname + " " + this.lastname;
// });

// userSchema.virtual("bday").get(function () {
//   return this.dob.getDay().toString()+"/"+this.dob.getMonth().toString();
// });