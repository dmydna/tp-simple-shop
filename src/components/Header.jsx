import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Header({ usuario, tipo }) {
  return (
    <Navbar bg="dark" variant="dark" className="px-3">
      <Container>
        <Navbar.Brand as={Link} to='/'>
         <i className="bi bi-bag-heart-fill"></i> 
         <b>Simple SHOP</b></Navbar.Brand>
        <Navbar.Text className="ms-auto text-white">
         <i className="bi bi-person-circle"></i> {tipo} - {usuario}
        </Navbar.Text>
      </Container>

    </Navbar>
  );
}

export default Header;
