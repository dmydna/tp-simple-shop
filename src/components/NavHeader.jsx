import React, { useContext, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import DropdownContext from "react-bootstrap/esm/DropdownContext";
import { useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useScrollY } from "../contexts/useWindowScroll";
import CartButton from "./CartButton";
import ContactModal from "./ContactModal";
import DropdownLogin from "./LoginDropdown";
import LoginModal from "./LoginModal";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavItems from "./NavItems";
import SearchBarOverlay from "./SearchOverlay";
import { useWindowsWidth } from "./useWindowSize";

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
        <MobileMenu>
          {({show, handleClose})=>(
             <NavItems  
               show={show} 
               setShow={handleClose} 
               items={items} 
               onSeleccion={onSeleccion} 
               setExpanded={setExpanded}
               className={'fw-semibold fs-5 fs-md-6 py-2 m-1'}
             />
          )}

        </MobileMenu>
        <dir class="m-0 p-0">
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3 border-0"/>  */}
          <Logo/>
        </dir>
        <div className={`d-flex align-items-center order-md-2`}>
          <SearchBarOverlay/>
          {isAuth ?  
            <DropdownLogin className="d-none d-md-block" /> : 
            <>
             <i 
              onClick={()=>  onHideModal(true)} 
              class="h3 bi bi-person-fill hover-icon m-0 d-none d-md-block"
             >
             </i>
             <LoginModal show={showModal} onHide={onHideModal}/> 
            </>
          }

        <CartButton/> 
        </div>
        <ContactModal show={showModalContact} onHide={onHideModalContact}/>
        <Navbar.Collapse className="order-md-1" id="basic-navbar-nav">
          {/* <LoginMenu /> */}
          <NavItems 
            items={items} 
            onSeleccion={onSeleccion} 
            onHideModalContact={onHideModalContact}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHeader;
