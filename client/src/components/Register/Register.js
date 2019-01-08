import React, { Component } from 'react'
import { withUser } from '../../context/UserProvider'
import RegisterForm from './RegisterForm'

class Register extends Component {
  constructor() {
    super() 
    this.state = {
      name: "",
      email: "",
      password: ""
    }
  }

  handleChange = e => this.setState({[e.target.name]: e.target.value})

  clearInputs = () => {
    this.setState({
      name: "",
      email: "",
      password: ""
    })
  }

  handleRegister = e => {
    e.preventDefault()
    console.log(this.state)
    const userInfo = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }
    this.props.register(userInfo)
    this.clearInputs()
  }


  render() {
    console.log(this.props)
    return (
      <div className="d-flex justify-content-center m-5">
        <RegisterForm
          handleChange={this.handleChange}
          handleRegister={this.handleRegister}
          name={this.state.name}
          email={this.state.email}
          password={this.state.password}
          errorMessage={this.props.registerErrorMessage} />
      </div>
    )
  }
}

export default withUser(Register)
