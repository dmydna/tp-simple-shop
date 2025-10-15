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
      !! query && 
      navigate(`/productos/search/${query}?`);
      setToggle(false);
      setShow(false);
    }

    function handleFilter(e){
      e.preventDefault();
      navigate(`/productos/`);
      setToggle(false)
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
      <div className="d-flex w-100">
        
        <Form
          onSubmit={handleSubmit}
          className={`w-100 bg-white border mx-2 rounded custom-input-group  
            ${ !toggle && width < 1300 ? "d-none" : "" } `}
        >
          
          <InputGroup>
            <input
              type="text"
              placeholder="Buscar productos..."
              className={`form-control border-0 no-focus`}
              value={query}
              onChange={handleChange}
              onClick={() => (!!query ? setShow(true) : {})}
            />

            <Button
              style={{opacity: .4}}
              variant="ligth"
              className={`bi bi-sliders border-0 hover-icon`}
              onClick={(e)=> handleFilter(e)} >
            </Button>
            <Button variant="ligth" 
              style={{opacity: .4}}
              className={`bi-search border-0 hover-icon`}
              onClick={(e)=> handleSubmit(e)} >
            </Button>
          </InputGroup>
          <Dropdown
            show={show}
            onToggle={(isOpen) => setShow(isOpen)}
            style={{ zIndex: 99999 }}
          >
            {/* !! convierte a booleano cualquier expresion */}
            <Dropdown.Menu className={`w-100`}>
              {filtered.slice(0, 3).map((p) => (
                <Dropdown.Item
                  onClick={() => {
                    setShow(false);
                    setToggle(false);
                  }}
                  as={Link}
                  to={`/productos/details/${p.title}`}
                  key={p.id}
                >
                  {p.title}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Form>
        <Button
          onClick={()=> setToggle((prev)=>!prev)}
          variant="ligth"
          className={`bg-transparent  d-xl-none border-0 bi
              ${ toggle ? "bi-x-lg" : "bi-search"} `}>
        </Button>
      </div>
    );
}

export default Search