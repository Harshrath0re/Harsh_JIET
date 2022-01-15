const Booking = require("../models/bookingModel");

exports.getBooking = (req, res, next) => {
  Booking.find({ hotel: req.body.hotel }).then((rooms) => res.send(room));
};

exports.postBooking = (req, res, next) => {
  Booking.create(req.body)
    .then((booking) => {
      res.send(booking);
    })
    .catch(next);
};

exports.putBooking = (req, res, next) => {
  Booking.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    Booking.findOne({ _id: req.params.id }).then((booking) => {
      res.send(booking);
    });
  });
};

exports.deleteBooking = (req, res, next) => {
  Booking.findByIdAndRemove({ _id: req.params.id }).then((booking) => {
    res.send(booking);
  });
};
