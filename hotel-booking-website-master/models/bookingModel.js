const mongoose = require("mongoose");

const room = require("./roomModel");
const hotel = require("./hotelModel");
const user = require("./userModel");

const BookingSchema = new mongoose.Schema({
  hotel: {
    type: String,
  },
  city: {
    type: String,
    required: [true, "City of the Hotel is required"],
  },
  checkin: {
    type: Date,
    required: [true, "Checkin date is required"],
  },
  checkout: {
    type: Date,
    required: [true, "Checkout date is required"],
  },
  amount: {
    type: Number,
    required: [true, "Total amount is required"],
  },
  guests: {
    type: Number,
    required: [true, "Number of guests is required"],
  },
  nights: {
    type: Number,
    required: [true, "Number of nights is required"],
  },
  adults: {
    type: Number,
  },
  children: {
    type: Number,
    default: 0,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Booking", BookingSchema, "Booking");
