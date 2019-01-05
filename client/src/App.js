import React, { Component } from 'react';
import NavbarComponent from './components/Navbar'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Profile from './components/Profile'
import Store from './components/Store'
import Footer from './components/Footer/Footer'
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div >
        <main>
          <NavbarComponent/>
          <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/store" component={Store} />
              <Route path="/about" component={About} />
              <Route path="/login" component={LoginForm} />
              <Route path="/register" component={RegisterForm} />
              <Route path="/profile" component={Profile} />
              <Route path="/cart" component={Cart} />
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
