import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import CryptoMiningClip from '../..//styles/media/crypto-mining-lg.mp4'

const HomePage = () => {
    return (
      <div>
      <Jumbotron fluid>
        <Container fluid>
          <video autoPlay muted loop id="myVideo" width='100%' >
            <source src={CryptoMiningClip} type="video/mp4"/>
          </video>
          <h1 className="display-3">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
      </div>
    )
}

export default HomePage;