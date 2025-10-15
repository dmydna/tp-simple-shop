import { Button, Container } from 'react-bootstrap';
import { useProducts } from "../contexts/ProductContext";
import left from "/src/assets/angle-ts-left.svg";
import LinkArrow from './LinkArrow';
import { useEffect, useMemo } from 'react';
// Componente que muestra los botones de paginación

const Pagination = () => {


   const { totalPaginas, paginaActual, setPaginaActual, setProducts } =  useProducts()
    // Cambia a una página específica si está dentro del rango
const irAPagina = (numeroPagina) => {
    if (numeroPagina >= 1 && numeroPagina <= totalPaginas) {
      setPaginaActual(numeroPagina);
    }
  };


  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [paginaActual]);




  return (
    <Container fluid="xl" className="d-flex mt-4 my-5 flex-wrap small">
      {/* Botón Anterior */}
      <Button
        variant="outline-primary"
        className={`rounded border text-dark transitions h-white mx-1 mb-2
             ${paginaActual == 1 ? 'd-none' : ''} `}
        disabled={paginaActual === 1}
        onClick={() => irAPagina(paginaActual - 1)}
      >
      <i class="bi bi-chevron-left"></i>
      {/* <i class="bi bi-caret-left"></i> */}
      </Button>

     {/* Botones numerados */}
      {Array.from({ length: totalPaginas }, (_, indice) => (
        <Button
          key={indice + 1}
          variant={paginaActual === indice + 1 ? 'primary' : 'outline-primary'}
          className={`rounded border h-white mx-1 mb-2 
              ${(paginaActual === indice + 1 ? 'text-white': 'text-dark')} 
              ${(totalPaginas == 1 && 'd-none')}`}
          onClick={() => irAPagina(indice + 1)}
        >
          {indice + 1}
        </Button>
      ))}

            {/* Botón Siguiente */}
      <Button
        variant="outline-primary"
        className={`rounded border text-dark h-white mx-1 mb-2
             ${paginaActual == totalPaginas ? 'd-none' : ''}`}
        disabled={paginaActual === totalPaginas}
        onClick={() => irAPagina(paginaActual + 1)}
      >
        <i class="bi bi-chevron-right"></i>
      </Button>
    </Container>
  );
};

export default Pagination;