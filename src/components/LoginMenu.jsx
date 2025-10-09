import React from "react";
import { Button, Card, CardBody, Col, Nav, Row } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

function LoginMenu(){

    const { user, token, login, logout } = useAuth();

    return(
        <Nav className="ms-auto w-100  align-items-left d-md-none">
             <div className="d-flex">
                <img  style={{fontSize: "60px"}} src="/user.png" />
                <div >  
                  <b style={{fontSize: "15px"}} className="m-0">{user}</b>
                  <Nav.Link  style={{fontSize: "13px"}} as={Link} to={'/perfil'}  onClick={() => { }} >
                      Perfil
                  </Nav.Link>
                  </div>
             </div>

  
          <Nav.Link 
            as={Link} to={'/perfil'}
            onClick={() => { }}
          >
            Dashboard
          </Nav.Link>
          <hr className="my-2"/>
      </Nav>
    )
}

export default LoginMenu