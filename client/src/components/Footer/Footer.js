import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="grid1">
        <h2>grid1</h2>
      </div>
      <div className="grid2">
        <h2>grid2</h2>
      </div>
      <div className="grid3">
        <div className="subscribe">
          <h2>Subscribe To Our Newsletter:</h2>
          <input type="text" placeholder="Email" />
        </div>
      </div>
      <h5>Copyright 2019</h5>
    </div>
  );
};
export default Footer;
