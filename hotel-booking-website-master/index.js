const express = require("express");
const mongoose = require("mongoose");
const hotelRoute = require("./routes/hotelRoute");
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const bookingRoute = require("./routes/bookingRoute");
const roomRoute = require("./routes/roomRoute");
const app = express();
const cors = require("cors");

mongoose
  .connect("mongodb://localhost:27017/hotel_database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected!");
  })
  .catch(() => {
    console.log("Database not connected!");
  });

app.use(express.json());
// app.use(express.urlencoded());

app.use("/hotel", hotelRoute);
app.use("/user", userRoute);
app.use("/admin", adminRoute);
app.use("/booking", bookingRoute);
app.use("/room", roomRoute);

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

app.use(cors());

const PORT = 5050;

app.listen(PORT, () =>
  console.log(`Server started at port http://localhost:${PORT}/`)
);
