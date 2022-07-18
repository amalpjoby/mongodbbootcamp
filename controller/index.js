/**
 * Mongoose User model.
 */
const { User } = require("../schema/index");

const HttpStatus = require("http-status-codes");

/*------------------------------CREATE OPERATIONS--------------------------*/

/**
 * Creating the new user
 */
module.exports.createUser = (req, res) => {
  // Creating a user object from frontend data
  var bd = req.body.dob.substring(5);
  const newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    address: req.body.address,
    dob: req.body.dob,
    phone: req.body.phone,
    bday: bd
  });

  // Saving the user in the database
  newUser.save(function (err, user) {
    console.log('err', err);
    if (err)
      return res
        .status(HttpStatus.StatusCodes.NOT_FOUND)
        .json({ message: "User cannot be created" });
    console.log(`stored : ${user}`);
    // res.status(HttpStatus.StatusCodes.OK).json({ user });
  });
};

/*------------------------------READ OPERATIONS--------------------------*/

/**
 * Reading the existing user using request parameters.
 */
module.exports.readUser = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err)
      return res
        .status(HttpStatus.StatusCodes.NOT_FOUND)
        .json({ message: "Error fetching the user by id" });
    res.status(HttpStatus.StatusCodes.OK).json({ user });
  });
};

/**
 * Reading the Last Name user using request parameters.
 */
module.exports.getByLastName = (req, res) => {
  // It was earlier defined as a static method inside methods/index.js
  User.findByLastName("Ch", function (err, data) {
    if (err)
      return res
        .status(HttpStatus.StatusCodes.BAD_REQUEST)
        .json({ message: "Lastname Mismatch" });
    res.status(HttpStatus.StatusCodes.OK).json({ data });
  });
};

/**
 * Fetching the user based on the age.
 */
module.exports.getByAge = (req, res) => {
  // It was earlier defined as a static method inside methods/index.js
  User.findByAge(20, (err, data) => {
    if (err)
      return res
        .status(HttpStatus.StatusCodes.BAD_REQUEST)
        .json({ message: "Age Mismatch" });
    res.status(HttpStatus.StatusCodes.OK).json(data);
  });
};

/**
 * Reading the full name of the user based on the given object id
 */
module.exports.getFullname = (req, res) => {
  User.findById({ _id: "5d91d0cdc6044d08ec7e2581" }).exec((err, user) => {
    if (err) {
      res.status(HttpStatus.StatusCodes.BAD_REQUEST).json({ message: "Internal Error" });
    }
    res.status(HttpStatus.StatusCodes.OK).json(user.fullName);
  });
};

/*
 * Reading the user by it's id and checking if he is adult or not
 */
module.exports.getName = (req, res) => {
  User.findOne({ _id: "5d91d0cdc6044d08ec7e2581" }).exec((err, user) => {
    if (err)
      return res
        .status(HttpStatus.StatusCodes.BAD_REQUEST)
        .json({ message: "User not defined" });

    // getIfAdult was defines as an instance method earlier in methods/index.js
    res.status(HttpStatus.StatusCodes.OK).json(user.getIfAdult());
  });
};

/*------------------------------UPDATE OPERATION--------------------------*/

/**
 * Updating the exisiting user from the database collection
 */
module.exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, user) => {
    if (err)
      return res
        .status(HttpStatus.StatusCodes.BAD_REQUEST)
        .json({ message: "Cannot update the user" });
    res.status(200).json({ user });
  });
};

/*------------------------------DELETE OPERATION--------------------------*/

/**
 * Deleting the user from the database.
 */
module.exports.deleteUser = (req, res) => {
  User.findByIdAndRemove(req.params.id, err => {
    if (err)
      return res
        .status(HttpStatus.StatusCodes.FORBIDDEN)
        .json({ message: "Request cannot be processed" });
    res.status(HttpStatus.StatusCodes.OK).json({ message: "User Removed" });
  });
};
