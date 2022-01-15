const bcrypt = require("bcryptjs");
const HttpError = require("../utils/http-error");
const Admin = require("../models/adminModel");

const adminSignup = async (req, res, next) => {
  const { Name, email, password } = req.body;

  let existingAdmin;
  try {
    existingAdmin = await Admin.findOne({
      email: email,
    });
  } catch (err) {
    console.log(err);
    const error = new HttpError("Admin Signup failed, please try later", 500);
    return next(error);
  }
  if (existingAdmin) {
    const error = new HttpError("Admin-Email already in use", 422);
    return next(error);
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError("Password encryption failed", 500);
    return next(error);
  }

  const createdAdmin = new Admin({
    firstName: firstName,
    lastName: lastName,
    password: hashedPasswaord,
    email: email,
    role: "Admin",
  });

  try {
    await createdAdmin.save();
  } catch (err) {
    console.log(err);
    const error = new HttpError("Admin Signup failed", 500);
    return next(error);
  }

  return res.json({
    message: "Admin sign up successful",
    AdminId: createdAdmin.id,
    email: createdAdmin.email,
    role: createdAdmin.role,
  });
};

const adminLogin = async (req, res, next) => {
  const { email, password } = req.body;

  let existingAdmin;
  try {
    existingAdmin = await Admin.findOne({
      email: email,
    });
  } catch (err) {
    const error = new HttpError("Admin Login failed, Please try later", 500);
    return next(error);
  }

  if (!existingAdmin) {
    const error = new HttpError("Invalid Credentials, Please try later", 403);
    return next(error);
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingAdmin.password);
  } catch (err) {
    const error = new HttpError("Invalid Credentials, Please try later", 403);
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError("Invalid Credentials, Please try later", 403);
    return next(error);
  }

  res.status(200).json({
    message: "Admin login successful",
    email: existingAdmin.email,
    age: existingAdmin.age,
    Role: existingAdmin.role,
  });
};

exports.adminLogin = adminLogin;
exports.adminSignup = adminSignup;
