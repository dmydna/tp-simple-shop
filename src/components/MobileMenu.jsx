import React, { useState } from "react";
import { Button, Nav, Offcanvas } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


function MobileMenu({children}) {
  const [show, setShow] = useState(false);


  const navigate = useNavigate()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { user, token, login, logout } = useAuth();
  const isAuth = token && user ? true : false

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleLogin = () => {
    show && 
    setShow(false);
    navigate('/login');
  }

  return (
    <>
      <Button className="d-md-none" variant="light" onClick={handleShow}>
        <span class="navbar-toggler-icon"></span>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          {/* <Logo></Logo> */}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="px-5">
        {!isAuth ? (
          <>
          {children({ show, handleClose })}

          <div className="mt-5">
            <Button
              variant="primary"
              className="py-3 fw-medium fs-5 w-100 mb-3"
              style={{ opacity: 0.8 }}
              onClick={handleLogin}
            >
              <i class="bi bi-box-arrow-in-left me-2"></i>
              Iniciar sesión
            </Button>
    
            <Button
              variant="outline-dark"
              className="py-3 fw-medium fs-5 w-100"
              style={{ opacity: 0.8 }}
              onClick={handleLogin}
            >
              Registrarse
            </Button>
          </div>
          </>
          ) : (
          <>
          <Nav className="me-auto w-100 border-bottom">
            {[
              { to: '/perfil/admin', label: 'Perfil' },
              { to: '/admin', label: 'Dashboard' },
            ].map(({ to, label }) => (
              <Nav.Link
                key={to}
                onClick={handleClose}
                as={Link}
                to={to}
                className="fw-semibold fs-5 py-2 m-1"
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
    
          {children({ show, handleClose })}
    
          <Button
            variant="danger"
            className="py-3 mt-5 fw-medium fs-5 w-100"
            style={{ opacity: 0.8 }}
            onClick={handleLogout}
          >
            <i className="bi bi-box-arrow-right me-2"></i>
            Cerrar sesión
          </Button>
          </>
          )}
      </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}




export default MobileMenu;