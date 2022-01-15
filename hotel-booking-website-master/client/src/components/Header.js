import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-icon"
          src="https://www.mcicon.com/wp-content/uploads/2020/12/Architecture_Hotel_1-copy-15.jpg"
          alt="icon"
        />
      </Link>
      <div className="header-center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header-right">
        <Link className="register" to="/Login">
          Login
        </Link>
        <Link className="register" to="/SignUp">
          Signup
        </Link>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
