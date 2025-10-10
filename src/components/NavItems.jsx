import React from "react";
import {Nav} from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";

function NavItems({items, onSeleccion ,onHideModalContact, setShow, show, className}){

    const handleContact = () =>{ 
      show == null ? 
      onHideModalContact(true) : 
      navigate('/contacto'), 
      setShow(false)
    }
    const handleClick = (item) => {  
      onSeleccion(item) ;
      setShow(false)
    }
    const navigate = useNavigate()
    return(
        <Nav className="me-auto w-100 align-items-left">
        {items.map((item) =>
          item != "Contacto" && 
          <Nav.Link 
            className={className}
            as={Link} to={item.toLowerCase()} key={item} 
            onClick={handleClick}
          >  
            {item}
          </Nav.Link>
        )}
        <Nav.Link 
            className={className}
            onClick={handleContact}
        >
          Contacto
        </Nav.Link>
      </Nav>
    )
}


export default NavItems