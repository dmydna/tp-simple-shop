import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import UserLogin from "./UserLogin";
import { useLocation } from 'react-router-dom';



function Header() {

  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark" className="px-3">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <i className="bi bi-bag-heart-fill"></i>
          <b> Simple SHOP</b>
        </Navbar.Brand>
        {location.pathname != '/login' ? <UserLogin /> : '' }
      </Container>
    </Navbar>
  );
}

export default Header;
