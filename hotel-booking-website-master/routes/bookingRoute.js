const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");

router.get("/getBooking", bookingController.getBooking);

router.post("/postBooking", bookingController.postBooking);

router.put("/putBooking/:id", bookingController.putBooking);

router.delete("/deleteBooking/:id", bookingController.deleteBooking);

module.exports = router;
