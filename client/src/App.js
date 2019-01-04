import React, { Component } from 'react';
import NavbarComponent from './components/Navbar'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import ProductCard from './components/ProductCard'

class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent/>
        <LoginForm />
        <RegisterForm />
        <ProductCard />
      </div>
    )
  }
}

export default App;
