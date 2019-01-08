import React, { Component } from 'react'
import { withUser } from '../../context/UserProvider'
import LoginForm from './LogInForm'

class LogIn extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: ""
    }
  }

  handleChange = e => this.setState({[e.target.name]: e.target.value})

  clearInputs = () => {
    this.setState({
        email: "",
        password: ""
    })
  }

  handleLogIn = e => {
    e.preventDefault()
    const userInfo = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.logIn(userInfo)
    this.clearInputs()
  }

  render() {
    return (
      <div>
        <LoginForm
            handleChange={this.handleChange}
            handleLogIn={this.handleLogIn}
            email={this.state.email}
            password={this.state.password}
            errorMessage={this.props.signInErrorMessage} />
      </div>
    )
  }
}

export default withUser(LogIn)
