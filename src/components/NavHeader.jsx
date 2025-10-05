import React, { useContext, useEffect, useState } from "react";
import { Container, Modal, Nav, Navbar } from "react-bootstrap";
import DropdownContext from "react-bootstrap/esm/DropdownContext";
import { Link, useLocation } from "react-router-dom";
import { useCarrito } from "../contexts/CartContext";
import { HoverProvider } from "../contexts/HoverContext";
import CartButton from "./CartButton";
import DropdownLogin from "./LoginDropdown";
import LoginModal from "./LoginModal"
import Logo from "./Logo";
import Search from "./SearchBar";
import { useWindowsWidth } from "./useWindowSize";
import context from "react-bootstrap/esm/AccordionContext";
import { ModalContext } from "../contexts/ModalContext";
import { useAuth } from "../contexts/AuthContext";
import ContactModal from "./ContactModal";


function NavHeader({onSeleccion, items}) {

  const location = useLocation();
  const width = useWindowsWidth()
  

  const { user, token, login, logout } = useAuth();
  const isAuth = token && user ? true : false

  const [showModal, onHideModal] = useState(false)
  const [showModalContact, onHideModalContact] = useState(false)

  // TODO : arreglar esto, logica de Search.jsx en Header.jsx

  const [toggleBarraBusqueda, setToggleBarraBusqueda] = useState(false);
  const toggleBarraBusquedaActiva = width <= windowSize.lg && toggleBarraBusqueda

  useEffect(() => {
    if (width >= windowSize.lg && toggleBarraBusqueda) {
      setToggleBarraBusqueda(false);
    }
  }, [width, toggleBarraBusqueda]);
  

  const [expanded, setExpanded] = useState(false);
  const {isActiveDropdown , setIsActiveDropdown} = useContext(DropdownContext)
  const {contadorCarrito} = useCarrito()


  const toggleRoute = () => { 
    location.pathname == '/carrito' ? 
    navigate(-1) || navigate('/') : navigate('/carrito')
  }



  return (
    <HoverProvider>
    <Navbar
    bg="light" 
    expand="md"       
    expanded={expanded}
    onToggle={(isOpen) => setExpanded(isOpen)}
    className={`${!isActiveDropdown ?  'sticky-top py-0' : 'py-0'} px-0 px-sm-3 py-3` }  >
      <Container>
        <Nav className=''>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Nav>
        <Logo isSearchActive={toggleBarraBusquedaActiva}/>
        <Nav className="flex-row align-items-center order-md-2">
        <div className={`${ toggleBarraBusquedaActiva ? 'd-block w-100' : 'd-flex' } `}>
          <div className={`${toggleBarraBusquedaActiva ? 'd-none' : '' } `} >
          {isAuth ?  
            <DropdownLogin/> : 
            <>
             <i onClick={()=>  onHideModal(true)} class="h3 bi bi-person-fill"></i>
             <LoginModal show={showModal} onHide={onHideModal}/> 
            </>
          }
          </div>
          {(width < 1300 ?  < Search   toggle={toggleBarraBusqueda} setToggle ={setToggleBarraBusqueda} /> : '' )} 
        </div>

        <HoverProvider>
          <CartButton  />
        </HoverProvider>
        </Nav>
        {(width >= 1300 ?  <Search /> : '' )} 
        <ContactModal show={showModalContact} onHide={onHideModalContact}/>
        <Navbar.Collapse className="order-md-1" id="basic-navbar-nav">
          <Nav className="me-auto w-100  align-items-center">
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
    </HoverProvider>
  );
}

export default NavHeader;
