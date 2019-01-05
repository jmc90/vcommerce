import React, { Component } from 'react'
import axios from 'axios'
const todoAxios = axios.create();

todoAxios.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

const UserContext = React.createContext()

class UserProvider extends Component {
  constructor() {
    super()
    this.state = {
      user: JSON.parse(localStorage.getItem("user")) || {},
      token: localStorage.getItem("token") || "",
      logInErrorMessage: "",
      registerErrorMessage: ""
    }
  }

 

  render() {
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          
        }}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export default UserProvider


export const withUser = C => props => (
  <UserContext.Consumer>
    {value => <C {...props} {...value} />}
  </UserContext.Consumer>
)