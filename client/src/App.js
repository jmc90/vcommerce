import React, { Component } from 'react';
import NavbarComponent from './components/Navbar'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import ProductCard from './components/ProductCard'
import Store from './components/Store'

class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent/>
        <LoginForm />
        <RegisterForm />
        <ProductCard />
        <Store />
      </div>
    )
  }
}

export default App;
