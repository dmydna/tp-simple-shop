import React, { useMemo, useState } from "react";
import { Button, Dropdown, Form, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "../contexts/ProductContext";
import { useWindowsWidth } from "./useWindowSize";

function Search({toggle, setToggle}){
    
    const width = useWindowsWidth()
    const navigate = useNavigate();

    const [query, setQuery] = useState(""); 
    const {products} = useProducts()

    const [show, setShow] = useState(false);

    function handleChange(e) {
      const value = e.target.value;
      setQuery(value);
      setShow(!!value); // se abre si hay texto
    }

    function handleSubmit(e){
      e.preventDefault();
      navigate(`/productos/search/${query}?`);
      setShow(false)
    }

    // Similar a useEffect pero para datos
    const filtered = useMemo(() => {
      // filtro de forma local
      // para mostrar en el lista de coincidencia
      if (!query) return [];
      return products.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase())
      );
    }, [products, query]);

    return (
      <Form  onSubmit={handleSubmit} className={`${width >= 1300 ? 'w-75' : '' }`}>
        <InputGroup  
           className={`${toggle ? 'bg-white' : (width >= 1300 ? 'bg-white': '') }  rounded` }>
           <input type="text"
               placeholder="Buscar productos..."
               className={`form-control ${toggle ? '' : (width < 1300 ? 'd-none' : '' )}`}
               value={query}
               onChange={handleChange}
               onClick={() =>  !!query ? setShow(true) : {} }
           />

           <Button variant={`${toggle ? 'ligth' : (width >= 1300 ? 'ligth': 'dark')}`}
               className={`bg-transparent bi  ${toggle ? 'bi-x-lg' : 'bi-search'} border-0`}
               onClick={  () => setToggle(prev => !prev) }
           >
           </Button>
        </InputGroup>
        <Dropdown show={show} onToggle={(isOpen) => setShow(isOpen)} style={{zIndex:99999}}>
         {/* !! convierte a booleano cualquier expresion */}
         <Dropdown.Menu  className={`w-100`}>
         {filtered.slice(0,3).map(p => (
           <Dropdown.Item 
           onClick={() => setShow(false)}
           as={Link} to={`/productos/details/${p.title}`} key={p.id}>
              {p.title}
           </Dropdown.Item>
         ))}
        </Dropdown.Menu>
        </Dropdown>

      </Form>

    )
}

export default Search