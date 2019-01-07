import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavLink,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
 } from 'reactstrap';
 import {Link} from 'react-router-dom'
 import './navbarStyle.css'

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

        <div>
        <Navbar color="medium" className='myNavbar' light expand="md">
          <NavbarBrand href="/">vCommerceStore.com</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              
              <NavItem >
                <NavLink color="dark"  href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/store">Store</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  My Account
                </DropdownToggle>
                <DropdownMenu right>
                <DropdownItem>
                  <Link to="/register"> Register </Link>
                </DropdownItem>
                  <DropdownItem>
                  <Link to="/login"> Login </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/wishlist"> Wishlist </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/cart"> Cart </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link to="/profile"> Profile </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

      </div>
    );
  }
}


export default NavbarComponent

