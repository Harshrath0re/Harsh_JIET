const Hotel = require("../models/hotelModel");

exports.getHotel = (req, res, next) => {
  // Hotel.find({name: req.query.hotelName})
  // .then( hotels => res.send(hotels));
  Hotel.find({ name: req.body.name })
    .populate("rooms")
    .exec((err, hotels) => {
      if (err) {
        res.send({ error: err.message });
      } else {
        res.send(hotels);
      }
    });
};

exports.postHotel = (req, res, next) => {
  Hotel.create(req.body)
    .then((hotel) => {
      res.send(hotel);
    })
    .catch(next);
};

exports.putHotel = (req, res, next) => {
  Hotel.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    Hotel.findOne({ _id: req.params.id }).then((hotel) => {
      res.send(hotel);
    });
  });
};

exports.deleteHotel = (req, res, next) => {
  Hotel.findByIdAndRemove({ _id: req.params.id }).then((hotel) => {
    res.send(hotel);
  });
};
