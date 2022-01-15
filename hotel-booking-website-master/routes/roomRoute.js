const express = require("express");
const router = express.Router();
const roomController = require("../controllers/roomController");

router.get("/getRoom", roomController.getRoom);

router.post("/postRoom", roomController.postRoom);

router.put("/putRoom/:id", roomController.putRoom);

router.delete("/deleteRoom/:id", roomController.deleteRoom);

module.exports = router;
