import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Header({ usuario, tipo }) {
  return (
    <Navbar bg="dark" variant="dark" className="px-3">
      <Container>
        <Navbar.Brand as={Link} to='/'><b>Simple SHOP</b></Navbar.Brand>
        <Navbar.Text className="ms-auto text-white">
          {tipo} - {usuario}
        </Navbar.Text>
      </Container>

    </Navbar>
  );
}

export default Header;
