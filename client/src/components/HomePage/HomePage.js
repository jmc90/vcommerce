import React from "react";
// import { Jumbotron, Container } from 'reactstrap';
import CryptoMiningClip from "../..//styles/media/crypto-mining-lg.mp4";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="content">
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        width="100%"
      >
        <source src={CryptoMiningClip} type="video/mp4" />
      </video>
    </div>
  );
};

export default HomePage;
