import React, { Component } from 'react';
import NavbarComponent from './components/Navbar'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Profile from './components/Profile'
import Store from './components/Store'
import Home from './components/Home'
import About from './components/About'
import Cart from './components/Cart'
import Footer from './components/Footer/Footer'
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent/>

        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/store" component={Store} />
            <Route path="/about" component={About} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/profile" component={Profile} />
            <Route path="/cart" component={Cart} />
        </Switch>

        <Footer />
      </div>
    )
  }
}

export default App;
