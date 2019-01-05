// https://codemyui.com/pure-css-responsive-footer-design/


import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer class="flex-row">
      <ul class="footer-list-top">
        <li>
          <h4 class="footer-list-header">About Us</h4>
        </li>
      </ul>
      <ul class="footer-list-top">
        <li>
          <h4 class="footer-list-header">Products</h4>
        </li>
        <li>
          <a href="/Angels/cat/id/70" class="generic-anchor footer-list-anchor">
            GPU's
          </a>
        </li>
      </ul>
      <ul class="footer-list-top">
        <li id="help">
          <h4 class="footer-list-header">Contact Us</h4>
        </li>
        <li>
          <a
            href="/shop/about-contact"
            class="generic-anchor footer-list-anchor"
            itemprop="significantLink"
          >
            CONTACT
          </a>
        </li>
      </ul>
      <section class="footer-bottom-section flex-row">
        <div class="footer-bottom-wrapper">Copyright 2019
        </div>
        <div class="footer-bottom-wrapper">
          
        </div>
      </section>
    </footer>
  );
};

export default Footer;



