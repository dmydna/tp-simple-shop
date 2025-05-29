import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function Header({ usuario, tipo }) {
  return (
    <Navbar bg="dark" variant="dark" className="px-3">
      <Container>
        <Navbar.Brand>
          <i className="bi bi-bag-heart-fill"></i>
          <b className='m-2'>ShopCity</b>
        </Navbar.Brand>
        <Navbar.Text className="ms-auto text-white">
          {tipo} - {usuario}
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Header;
