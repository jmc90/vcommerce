import React, { Component } from 'react';
import NavbarComponent from './components/Navbar/Navbar'
import LoginForm from './components/LogIn/LogInForm'
import RegisterForm from './components/Register/RegisterForm'
import Profile from './components/Profile/Profile'
import Store from './components/Store/Store'
import HomePage from './components/HomePage/HomePage'
import About from './components/About/About'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import ProductDetail from './components/Store/ProductDetail'
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div >
        <main>
          <NavbarComponent/>
          <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/store" component={Store} />
              <Route path="/about" component={About} />
              <Route path="/login" component={LogIn} />
              <Route path="/register" component={Register} />
              <Route path="/profile" component={Profile} />
              <Route path="/cart" component={Cart} />
              <Route exacpt path="/store/:id" component={ProductDetail} />
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
