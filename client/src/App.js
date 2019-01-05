import React, { Component } from 'react';
import NavbarComponent from './components/Navbar/Navbar'
import LoginForm from './components/Login/LoginForm'
import RegisterForm from './components/Register/RegisterForm'
import Profile from './components/Profile/Profile'
import Store from './components/Store/Store'
import Home from './components/Home'
import About from './components/About/About'
import Cart from './components/Cart/Cart'
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
