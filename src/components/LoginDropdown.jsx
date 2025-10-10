import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { DropdownContext } from "../contexts/DropdownContext";
import Login from '../pages/Login';
import { useWindowsWidth } from "./useWindowSize";


function DropdownLogin({className}) {

  const width = useWindowsWidth()

  const loginRedirect = () => width < 445 && !isAuth ? navigate('/login') : '' 
  const { user, token, login, logout } = useAuth();
  const isAuth = token && user ? true : false
  const {isActive , setIsActive} = useContext(DropdownContext)
  
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };


  return (
      <Dropdown
        align="end"
        className={className}
        onClick={loginRedirect}
        onToggle={(isOpen) => setIsActive(isOpen) }
      >
        <Dropdown.Toggle
          id="user-dropdown"
          variant="light"
          className="border-0 bg-transparent p-0"

        >
          <i className="bi bi-person-circle h4 hover-icon m-0"></i>
        </Dropdown.Toggle>
  
        {isAuth && (
          <Dropdown.Menu
            className={`shadow-sm ${width < 445 ? "d-md-none" : ""}`}
            style={{ minWidth: "220px" }}
          >
            {/* Perfil info */}
            <Dropdown.Item
              as={Link}
              to={`/perfil/${user}`}
              className="border-bottom py-2"
            >
              <div>
                <b className="fw-semibold">{user}</b>
                <p className="m-0 small text-secondary">Ver perfil completo</p>
              </div>
            </Dropdown.Item>
  
            {/* Links de navegación */}
            <Dropdown.Item as={Link} to={`/perfil/${user}`}>
              <i className="bi bi-person me-2"></i> Perfil
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/admin">
              <i className="bi bi-gear me-2"></i> Dashboard
            </Dropdown.Item>
  
            <Dropdown.Divider />
  
            {/* Logout */}
            <Dropdown.Item as="div" className="text-center">
              <Button
                variant="outline-primary"
                size="sm"
                onClick={handleLogout}
                className="w-100"
              >
                <i className="bi bi-box-arrow-right me-1"></i> Cerrar sesión
              </Button>
            </Dropdown.Item>
          </Dropdown.Menu>
        )}
      </Dropdown>
  );
}

export default DropdownLogin;