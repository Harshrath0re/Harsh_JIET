const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  hotel: {
    type: String,
  },
  number: {
    type: String,
    required: [true, "Room number is required"],
  },
  type: {
    type: String,
    required: [true, "Please specify room type"],
  },
  price: {
    type: Number,
    required: [true, "Please specify price per night"],
  },
  maxGuests: {
    type: Number,
    required: [true, "Please specify maximum number of guests allowed"],
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Room", RoomSchema, "Room");
