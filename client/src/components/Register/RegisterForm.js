import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link} from 'react-router-dom'

const RegisterForm = ({handleChange, handleRegister, name, email, password, errorMessage}) => {
    return (
      <div>
      <Form className="text-center rounded border border-dark p-5" onSubmit={handleRegister}>
        <h1>Register</h1>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            id="name" 
            type="text"
            name="name"
            value={name}
            placeholder="First Name"
            onChange={handleChange}
            required />
        </FormGroup>
        <FormGroup>
          <Label for="email">Username</Label>
          <Input
            id="email" 
            type="text"
            name="email"
            value={email}
            placeholder="Username"
            onChange={handleChange}
            required />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            id="password" 
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
            required />
        </FormGroup>
        <Button>Register</Button>
        <Link className="d-block" to="/login">Already Registered?</Link>
        {
          errorMessage &&
          <p style={{color: "red"}}>{errorMessage}</p>
        }

      </Form>
    </div>
    )
}

export default RegisterForm
