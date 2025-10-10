import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Alert, Card } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

import LoginForm from "../components/LoginForm";


function Login(){

    useEffect(() => {
        const scrollX = (document.body.scrollWidth - window.innerWidth) / 2;
        const scrollY = (document.body.scrollHeight - window.innerHeight) / 2;
        window.scrollTo(scrollX, scrollY);
    }, []);

    return (
    <LoginForm className={'bg-light rounded p-5'} style={{maxWidth: 500, minWidth:400}}>
         <div className="d-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 m-0">Iniciar sesión</h1>
        </div>
    </LoginForm>
    )
}

export default Login;

