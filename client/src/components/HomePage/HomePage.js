import React, { Component } from 'react';
import CryptoMiningClip from '../..//styles/media/crypto-mining.mp4'

class HomePage extends Component {
  render() {
    return (
      <div>
        <div>
        This is the home page
        </div>
        <video controls>
          <source src={CryptoMiningClip} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    )
  }
}

export default HomePage;