import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
 } from 'reactstrap';
 import {Link} from 'react-router-dom'

 class NavbarComponent extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">vCommerceStore.com</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                  <Link to="/"> Home </Link>
                  <Link to="/store"> Store </Link>
                  <Link to="/about"> About </Link>
                  <Link to="/wishlist"> Wishlist </Link>
                  <Link to="/cart"> Cart </Link>
                  <Link to="/profile"> Profile </Link>
                  <Link to="/register"> Register </Link>
                  <Link to="/login"> Login </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        
      </div>
    );
  }
}


export default NavbarComponent

