import React from "react";
import "./Footer.css";
import About from "./About";

function Footer() {
  return (
    <div className="footer">
      <p>No rights reserved - this is a demo!</p>
      <p>
        Privacy · Terms · Sitemap · <About />
      </p>
    </div>
  );
}

export default Footer;
