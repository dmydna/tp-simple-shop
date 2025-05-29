import React, { useState } from 'react';
import { InputGroup, Button, Form, Container } from 'react-bootstrap';

function CantidadInput( { cantidad} ){



    return(
        <InputGroup style={{width: '160px'}}>
            <Button variant='outline-secondary'>
            <i class="bi bi-trash3"></i>
            </Button>
            <Button variant='outline-secondary'> -
            </Button>
                <Form.Control
                    type='text'
                    value={cantidad}
                    className='text-center'
                ></Form.Control>

            <Button variant='outline-secondary'> +
            </Button>
        </InputGroup> 
    )
}



export default CantidadInput;