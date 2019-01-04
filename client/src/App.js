import React, { Component } from 'react';
import NavbarComponent from './components/Navbar'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent/>
        <LoginForm />
        <RegisterForm />
        <ProductCard />
        <Footer />
      </div>
    )
  }
}

export default App;
