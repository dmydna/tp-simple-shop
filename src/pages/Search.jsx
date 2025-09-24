import React, { useContext, useState ,useEffect } from "react";
import { Link, useLocation ,useNavigate } from "react-router-dom";
import {Button, Form, InputGroup} from "react-bootstrap";
import { useWindowsWidth } from "../components/useWindowSize";

function Search({toggle, setToggle}){
    
    const width = useWindowsWidth()

    const navigate = useNavigate();
    const [busqueda, setBusqueda] = useState('');
   

    function handleSubmit(){
      navigate(`/productos/search/${busqueda}`);
    }

    return (
      <Form  onSubmit={handleSubmit} className={`${width >= 1300 ? 'w-75' : '' }`}>
        <InputGroup  
           className={`${toggle ? 'bg-white' : (width >= 1300 ? 'bg-white': '') }  rounded` }>
           <input type="text"
               placeholder="Buscar productos..."
               className={`form-control ${toggle ? '' : (width < 1300 ? 'd-none' : '' )}`}
               onChange={(e) => setBusqueda(e.target.value)}
           />

           <Button variant={`${toggle ? 'ligth' : (width >= 1300 ? 'ligth': 'dark')}`}
               className={`bg-transparent bi  ${toggle ? 'bi-x-lg' : 'bi-search'} border-0`}
               onClick={  () => setToggle(prev => !prev) }
           >
           </Button>
        </InputGroup>
      </Form>

    )
}

export default Search