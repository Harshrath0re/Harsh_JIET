const mongoose = require("mongoose");
const Room = require("./roomModel");

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Hotel name is required"],
  },
  city: {
    type: String,
    required: [true, "City of the Hotel is required"],
  },
  stars: {
    type: Number,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: "Room" }],
});

module.exports = mongoose.model("Hotel", HotelSchema, "Hotel");
