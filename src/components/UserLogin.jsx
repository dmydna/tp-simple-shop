import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate } from "react-router-dom";
import { DropdownContext } from "../contexts/DropdownContext";
import Login from '../pages/Login';



function UserLogin() {

    const navigate = useNavigate();
    const isAuth = localStorage.getItem("auth") === "true";
  
    const cerrarSesion = () => {
      localStorage.removeItem("auth");
      navigate("/login");
    };
  
    const {isActiveDropdown , setIsActiveDropdown} = useContext(DropdownContext)

    const userID = 'usuario123'

    const handleToggleClick = () => {
        setIsActiveDropdown(prev => !prev);
      };

  return (
    <Dropdown align="end" onToggle={(isOpen) => setIsActiveDropdown(isOpen)} >
      <Dropdown.Toggle variant="dark" id="dropdown-basic"  >
        <i className='bi-person-circle h4'></i>{"  "}{isAuth && ( userID )}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {/* Enlaces que solo se muestran si el usuario está autenticado */}
        {isAuth && (
        <>
            <Dropdown.Item  as={Link} to="/perfil/usuario123">
              Perfil
            </Dropdown.Item >
            <Dropdown.Item  as={Link} to="/admin">
              Admin
            </Dropdown.Item>
        </>
         )}
         {/* Mostrar botón de login o logout según autenticación */}
         {!isAuth ? (
                <Login />
         ) : (
            <Dropdown.Item>
                <Button  variant="primary" onClick={cerrarSesion}>
                    Cerrar sesión
                </Button>
            </Dropdown.Item>

         )}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default UserLogin;