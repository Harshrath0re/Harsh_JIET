const express = require("express");
const router = express.Router();
const hotelControllers = require("../controllers/hotelController");

router.get("/getHotel", hotelControllers.getHotel);

router.post("/postHotel", hotelControllers.postHotel);

router.put("/putHotel/:id", hotelControllers.putHotel);

router.delete("/deleteHotel/:id", hotelControllers.deleteHotel);

module.exports = router;
