import React, { Component } from 'react';
import NavbarComponent from './components/Navbar'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'

class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent/>
        <LoginForm />
        <RegisterForm />
      </div>
    )
  }
}

export default App;
