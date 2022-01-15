const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const HttpError = require("../utils/http-error");

const userSignup = async (req, res, next) => {
  const { name, age, email, password, role } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({
      email: email,
    });
  } catch (err) {
    console.log(err);
    const error = new HttpError("Signup failed, please try later", 500);
    return next(error);
  }
  if (existingUser) {
    const error = new HttpError("Email already in use", 422);
    return next(error);
  }

  let hashedPasswaord;
  try {
    hashedPasswaord = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError("Password encryption failed", 500);
    return next(error);
  }

  const createdUser = new User({
    name: name,
    password: hashedPasswaord,
    email: email,
    age: age || 0,
    role: "User",
  });

  try {
    await createdUser.save();
  } catch (err) {
    console.log(err);
    const error = new HttpError("Signup failed", 500);
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      {
        userId: existingUser.id,
        email: existingUser.email,
        age: existingUser.age,
      },
      "userSecretKey",
      { expiresIn: "2h" }
    );
  } catch (err) {
    const error = new HttpError("Login Failed, Please try later", 403);
    return next(error);
  }

  return res.json({
    userId: createdUser.id,
    email: createdUser.email,
    token: token,
  });
};

const userLogin = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({
      email: email,
    });
  } catch (err) {
    const error = new HttpError("Login failed, Please try later", 500);
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError("Invalid Credentials, Please try later", 403);
    return next(error);
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpError("Invalid Credentials, Please try later", 403);
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError("Invalid Credentials, Please try later", 403);
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      {
        userId: existingUser.id,
        email: existingUser.email,
        age: existingUser.age,
      },
      "userSecretKey",
      { expiresIn: "2h" }
    );
  } catch (err) {
    const error = new HttpError("Login Failed, Please try later", 403);
    return next(error);
  }

  res.status(200).json({
    email: existingUser.email,
    age: existingUser.age,
    token: token,
  });
};

const userGetInfo = async (req, res, next) => {
  const { email } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({
      email: email,
    });
  } catch (err) {
    console.log(err);
    const error = new HttpError("no user found", 500);
    return next(error);
  }

  if (existingUser) {
    res.json({
      firstName: existingUser.firstName,
      lastName: existingUser.lastName,
      dob: existingUser.dob,
      password: existingUser.password,
      role: existingUser.role,
    });
  }
};

exports.userSignup = userSignup;
exports.userLogin = userLogin;
exports.userInfo = userGetInfo;
