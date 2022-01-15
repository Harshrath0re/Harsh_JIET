import React, { useState } from "react";
import "./Card.css";
import axios from "axios";

function Card({ src, title, description, price }) {
  const [hotel, getHotel] = useState("");

  const url = "http://localhost:5050/";

  const getData = () => {
    axios
      .get(url)
      .then((res) => {
        const allHotel = res.data.hotel.allHotel;
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="card-info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

export default Card;
