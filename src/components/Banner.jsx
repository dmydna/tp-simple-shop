import React from "react";
import { Container } from "react-bootstrap";

function Banner(){

    return (
        <div className="gradientBanner">
        <Container className="p-5">
            <div className="col-md-6">
                <img height="300" className="opacity-0" src="/skincare.png" /></div>
            <div className="col-md-6"></div>
        </Container>
        </div>

    )
}

export default Banner;