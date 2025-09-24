import React, { useContext, useState, useEffect } from "react";
import { Nav as BootstrapNav, Button, Container, Navbar } from "react-bootstrap";
import { Link, useLocation ,useNavigate } from "react-router-dom";
import { DropdownContext } from "../contexts/DropdownContext";
import { useCarrito } from "../contexts/CarritoContext";


function Nav({items, onSeleccion}) {

  const navigate = useNavigate();
  const location = useLocation();

  const [expanded, setExpanded] = useState(false);
  const {isActiveDropdown , setIsActiveDropdown} = useContext(DropdownContext)
  const {contadorCarrito} = useCarrito()


  const toggleRoute = () => { 
    location.pathname == '/carrito' ? 
    navigate(-1) || navigate('/') : navigate('/carrito')
  }

  const [carritoBoton, setCarritoBoton] = useState({icon: 'cart3', contador: contadorCarrito})

  const mouseOverHandle =  () => {
    location.pathname == '/carrito' ? 
    setCarritoBoton({icon :'x', contador: ''} ) : {}
  }
  const mouseOutHandle = () => { 
    setCarritoBoton( {icon :'cart3', contador: contadorCarrito } )
  }

  useEffect(() => {
    setCarritoBoton( {icon :'cart3', contador: contadorCarrito } )
  }, [contadorCarrito]); 




  return (
    <Navbar 
      bg="light" 
      expand="md"       
      expanded={expanded}
      onToggle={(isOpen) => setExpanded(isOpen)}
      className={ !isActiveDropdown ?  'sticky-top py-0' : 'py-0'} >
      <Container>
        <Navbar.Toggle 
        aria-controls="basic-navbar-nav" />
        <BootstrapNav className='order-md-last'>
        <Button 
         onClick={ toggleRoute } 
         onMouseEnter={ mouseOverHandle } 
         onMouseLeave={ mouseOutHandle }
         className='fw-bold fs-3 d-flex' variant="outline-black">
            <i className={`bi bi-${ carritoBoton.icon  }`}></i>
            <p className='mx-2 my-0'>
              {contadorCarrito == 0 ? '' : carritoBoton.contador}
            </p>
        </Button>
        </BootstrapNav>
        <Navbar.Collapse id="basic-navbar-nav">
          <BootstrapNav className="me-auto w-100  align-items-center">
            {items.map((item) =>
              <BootstrapNav.Link 
                as={Link} to={item.toLowerCase()} key={item} 
                onClick={() => { onSeleccion(item); setExpanded(false) }}
              >
                {item}
              </BootstrapNav.Link>
            )}
          </BootstrapNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;
