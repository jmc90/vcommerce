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

  register = userInfo => {
    axios.post('/auth/register', userInfo).then(res => {
       const { user, token } = res.data
       localStorage.setItem("user", JSON.stringify(user))
       localStorage.setItem("token", token)
       this.setState({
         user: user,
         token: token,
         logInErrorMessage: "",
         registerErrorMessage: ""
       })
     })
     .catch(err => this.handleError(err.response.data.errMsg, 'register'))
   }

   logIn = userInfo => {
    axios.post('/auth/login', userInfo).then(res => {
      const { token, user } = res.data
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))
      this.setState({
        user: user,
        token: token,
        logInErrorMessage: "",
        registerErrorMessage: ""
      })
      this.getUserEntries()
    })
    .catch(err => this.handleError(err.response.data.errMsg, 'logIn'))
  }

   handleError = (err, errRoute) => {
    if (errRoute === 'logIn') {
      this.setState({
        logInErrorMessage: err
    })
    } else if (errRoute === 'register') {
      this.setState({
        registerErrorMessage: err
      })
    }
  }

  logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    this.setState({
        entries: [],
        singleEntry: {},
        user: {},
        token: ""
    })
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