const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const checkAuth = require("../middlewares/authentication");

router.post("/signup", userController.userSignup);
router.post("/login", userController.userLogin);

router.use(checkAuth);

router.get("/getUser", userController.userInfo);

module.exports = router;
