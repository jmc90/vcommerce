import React from "react"
import "./Footer.css"

const Footer = () => {
  return ( 

    <footer className="vcommFooter">
        <div className="container">
            <div className="row">
                <div className="col-sm-3 myCols">
                    <h5>Get started</h5>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/register">Sign up</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>
                <div className="col-sm-3 myCols">
                    <h5>About us</h5>
                    <ul>
                        <li><a href="/">Company Info</a></li>
                        <li><a href="/contact">Contact us</a></li>
                        <li><a href="/">Reviews</a></li>
                    </ul>
                </div>
                <div className="col-sm-3 myCols">
                    <h5>Support</h5>
                    <ul>
                        <li><a href="/">FAQ</a></li>
                        <li><a href="/">Help desk</a></li>
                        <li><a href="/">Forums</a></li>
                    </ul>
                </div>
                <div className="col-sm-3 myCols">
                    <h5>Legal</h5>
                    <ul>
                        <li><a href="/">Terms of Service</a></li>
                        <li><a href="/">Terms of Use</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="social-networks">
            <a href="/" className="twitter"><i className="fa fa-twitter"></i></a>
            <a href="/" className="facebook"><i className="fa fa-facebook-official"></i></a>
            <a href="/" className="google"><i className="fa fa-google-plus"></i></a>
        </div>
        <div className="footer-copyright">
            <p>© 2019 Copyright Crypto Minerz </p>
        </div>
    </footer>


  );
};

export default Footer;

