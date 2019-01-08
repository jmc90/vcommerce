import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link} from 'react-router-dom'

const LogInForm = ({handleChange, handleLogIn, email, password, errorMessage}) => {
  return (
    <div>
      <Form className="text-center rounded border border-dark p-5" onSubmit={handleLogIn}>
        <h1>Log In</h1>
        <FormGroup>
          <Label for="email">E-Mail</Label>
          <Input
            type="text"
            name="email"
            id="email"
            value={email}
            placeholder="E-Mail"
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
