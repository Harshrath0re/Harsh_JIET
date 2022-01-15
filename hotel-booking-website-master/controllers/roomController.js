const Room = require("../models/roomModel");
const Hotel = require("../models/hotelModel");

exports.getRoom = (req, res, next) => {
  Room.find({ hotel: req.body.hotel }).then((rooms) => res.send(room));
};

exports.postRoom = (req, res, next) => {
  Room.create(req.body)
    .then((room) => {
      Hotel.find({ name: req.body.hotel }).then((hotels) =>
        array.forEach((element) => {
          element.rooms.push("WORKS");
        })
      );
    })
    .then((room) => {
      res.send(room);
    })
    .catch(next);
};

exports.putRoom = (req, res, next) => {
  Room.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    Room.findOne({ _id: req.params.id }).then((room) => {
      res.send(room);
    });
  });
};

exports.deleteRoom = (req, res, next) => {
  Room.findByIdAndRemove({ _id: req.params.id }).then((room) => {
    res.send(room);
  });
};
