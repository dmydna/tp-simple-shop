import React, { useState } from 'react';
import { InputGroup, Button, Form, Container } from 'react-bootstrap';

function CantidadInput( { producto, decProductoCarrito, incProductoCarrito, limpiarProductoCarrito} ){


    return(
        <InputGroup style={{width: '160px'}}>
            <Button onClick={ () => limpiarProductoCarrito(producto) } variant='outline-secondary'>
            <i className="bi bi-trash3"></i>
            </Button>
            <Button onClick={ ()=> decProductoCarrito(producto) } variant='outline-secondary'> - </Button>
                <Form.Control
                    type='text'
                    value={ producto.cantidad }
                    className='text-center'
                ></Form.Control>
            <Button onClick={ ()=> incProductoCarrito(producto) } variant='outline-secondary'> + </Button>

        </InputGroup> 
    )
}



export default CantidadInput;