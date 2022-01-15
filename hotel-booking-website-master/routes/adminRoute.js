const express = require("express");
const adminController = require("../controllers/adminController");
const router = express.Router();

router.post("/signup", adminController.adminSignup);
router.post("/login", adminController.adminLogin);

module.exports = router;
