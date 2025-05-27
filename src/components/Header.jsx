import React from 'react';
import { Navbar } from 'react-bootstrap';

function Header({ usuario, tipo }) {
  return (
    <Navbar bg="dark" variant="dark" className="px-3">
      <Navbar.Brand><b>Simple SHOP</b></Navbar.Brand>
      <Navbar.Text className="ms-auto text-white">
        {tipo} - {usuario}
      </Navbar.Text>
    </Navbar>
  );
}

export default Header;
