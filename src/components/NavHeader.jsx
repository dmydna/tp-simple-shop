import React, { useContext, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import DropdownContext from "react-bootstrap/esm/DropdownContext";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import CartButton from "./CartButton";
import ContactModal from "./ContactModal";
import DropdownLogin from "./LoginDropdown";
import LoginModal from "./LoginModal";
import Logo from "./Logo";
import SearchBarOverlay from "./SearchOverlay";
import { useWindowsWidth } from "./useWindowSize";
import { useScrollY } from "../contexts/useWindowScroll";
import LoginMenu from "./LoginMenu";


function NavHeader({onSeleccion, items}) {

  const location = useLocation();
  const width = useWindowsWidth()
  

  const { user, token, login, logout } = useAuth();
  const isAuth = token && user ? true : false

  const [showModal, onHideModal] = useState(false)
  const [showModalContact, onHideModalContact] = useState(false)


  const [expanded, setExpanded] = useState(false);
  const {isActiveDropdown , setIsActiveDropdown} = useContext(DropdownContext)
 
  const scrollY =  useScrollY()





  return (
    <Navbar
    bg="light" 
    expand="md"       
    expanded={expanded}
    onToggle={(isOpen) => setExpanded(isOpen)}
    className={`${scrollY >= 100 ? 'py-0 shadow-sm' : 'py-3'} fixed-top px-0 px-sm-3 transition` } 
    >
      <Container className="align-items-center"> 
        <dir class="m-0 p-0">
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3 border-0"/> 
          <Logo/>
        </dir>
        <div className={`d-flex align-items-center order-md-2`}>
          <SearchBarOverlay/>
          {isAuth ?  
            <DropdownLogin/> : 
            <>
             <i onClick={()=>  onHideModal(true)} class="h3 bi bi-person-fill hover-icon m-0"></i>
             <LoginModal show={showModal} onHide={onHideModal}/> 
            </>
          }

        <CartButton/> 
        </div>
        <ContactModal show={showModalContact} onHide={onHideModalContact}/>
        <Navbar.Collapse className="order-md-1" id="basic-navbar-nav">

          {/* <LoginMenu /> */}
          <Nav className="me-auto w-100 ms-5 ps-4 align-items-left">
            {items.map((item) =>
              <Nav.Link 
                as={Link} to={ item == "Contacto" ? '':  item.toLowerCase()} key={item} 
                onClick={() => { item == "Contacto" ? onHideModalContact(true) : onSeleccion(item); setExpanded(false) }}
              >
                {item}
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHeader;
