import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { DropdownContext } from "../contexts/DropdownContext";
import Login from '../pages/Login';
import { useWindowsWidth } from "./useWindowSize";


function DropdownLogin() {

  const width = useWindowsWidth()

  const loginRedirect = () => width < 445 && !isAuth ? navigate('/login') : '' 
  const { user, token, login, logout } = useAuth();
  const isAuth = token && user ? true : false
  const {isActiveDropdown , setIsActiveDropdown} = useContext(DropdownContext)
  
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };


  return (
    <Dropdown 
     align="end"  
     onClick={ loginRedirect } 
     onToggle={(isOpen) => setIsActiveDropdown(isOpen) } 
    >
      <Dropdown.Toggle variant="ligth" id="dropdown-basic"  >
        <i className='bi-person-circle h4 hover-icon'></i>
        {/* {"  "}{isAuth && ( width <= 800 ? '' : user )} */}
      </Dropdown.Toggle>
      <Dropdown.Menu className={ !isAuth && width < 445 ? 'd-md-none' : '' }
        style={{zIndex: '99999999'}}
      >
        {/* Enlaces que solo se muestran si el usuario está autenticado */}
        {isAuth && (
         <>
           <Dropdown.Item style={{borderBottom: "1px solid rgb(0 0 0 / 15%)"}} as={Link} to={`/perfil/${user}`}>
             <b className="fw-bold">User01:</b>
             <br/>
             <p className="m-0 text-secondary">{user}</p>
           </Dropdown.Item >
           <Dropdown.Item  as={Link} to={`/perfil/${user}`}>
           <i class="bi bi-person me-1 hover-icon"></i> Perfil
           </Dropdown.Item >
           <Dropdown.Item  as={Link} to="/admin">
           <i class="bi bi-gear me-1"></i> Dashboard
           </Dropdown.Item>
         </>
        )}
         {/* Mostrar botón de login o logout según autenticación */}
         {!isAuth ? 
         (<Login />) : 
         (<Dropdown.Item>
            <Button  variant="primary" onClick={handleLogout}>
            <i class="bi bi-box-arrow-in-left"></i> Cerrar sesión
            </Button>
          </Dropdown.Item>)}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownLogin;