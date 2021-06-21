import React, { useState } from 'react';
import {Link } from 'react-router-dom'
import { useSelector} from 'react-redux'
import './header.scss'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';

const Header = (props) => {
  const {userInfo} = useSelector(state => state.user);
  const [isOpen, setIsOpen] = useState(false);
  // console.log(process.env.NODE_ENV, "NODE_ENV,SHOWROOM_URL", NODE_ENV && NODE_ENV, SHOWROOM_URL && SHOWROOM_URL )
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">MFE Project</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/showroom">Showroom</Link>
            </NavItem>
            <NavItem>
              <Link to="/orders">Orders</Link>
            </NavItem>
          </Nav>
          <Nav>
          <NavItem className="logout">
            <div>{APP_VERSION && APP_VERSION}</div>
            { userInfo ? <div>{`${userInfo?.result?.firstName} ${userInfo?.result?.lastName}`}</div> : ""}
              <Link to="/logout">{ userInfo ? 'Log Out' : 'Log In'}</Link>
          </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;

