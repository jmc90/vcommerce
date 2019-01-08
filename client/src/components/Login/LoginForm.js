import React, { Component} from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

const LogInForm = ({handleChange, handleSignIn, email, password, errorMessage}) => {
  return (
    <div className="page d-flex justify-content-center align-items-center">
    <Form className="register-signin bg-info text-center rounded" onSubmit={handleSignIn}>
      <h1>Log In</h1>
      <FormGroup>
        <Label for="email">email</Label>
        <Input
          type="text"
          name="email"
          id="email"
          value={email}
          placeholder="E-mail"
          onChange={handleChange}
          required />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          value={password}
          placeholder="Password"
          onChange={handleChange}
          required />
      </FormGroup>
      <Button>Log In</Button>
      <Link className="d-block" to="/register">Don't have an account?</Link>
      {
        errorMessage &&
        <p style={{color: "red"}}>{errorMessage}</p>
      }
    </Form>
  </div>
  )
}

export default LogInForm
