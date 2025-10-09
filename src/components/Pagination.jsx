import { Button } from 'react-bootstrap';
import { useProducts } from "../contexts/ProductContext";
import left from "/src/assets/angle-ts-left.svg";

// Componente que muestra los botones de paginación

const Pagination = () => {

   const { totalPaginas, paginaActual, setPaginaActual, setProducts } =  useProducts()
    // Cambia a una página específica si está dentro del rango
const irAPagina = (numeroPagina) => {
    if (numeroPagina >= 1 && numeroPagina <= totalPaginas) {
      setPaginaActual(numeroPagina);
    }
  };

  return (
    <div className="d-flex container mt-4 my-5 flex-wrap">
      {/* Botón Anterior */}
      <Button
        variant="outline-secondary"
        className="mx-1 mb-2 rounded"
        disabled={paginaActual === 1}
        onClick={() => irAPagina(paginaActual - 1)}
      >
      <i class><img width={20} src={left}/></i>
      {/* <i class="bi bi-caret-left"></i> */}
      </Button>

     {/* Botones numerados */}
      {Array.from({ length: totalPaginas }, (_, indice) => (
        <Button
          key={indice + 1}
          variant={paginaActual === indice + 1 ? 'primary' : 'outline-primary'}
          className="mx-1 mb-2 rounded fw-bold"
          onClick={() => irAPagina(indice + 1)}
        >
          {indice + 1}
        </Button>
      ))}

            {/* Botón Siguiente */}
      <Button
        variant="outline-secondary"
        className="mx-1 mb-2 rounded"
        disabled={paginaActual === totalPaginas}
        onClick={() => irAPagina(paginaActual + 1)}
      >
        <i class><img style={{rotate: '180deg'}} width={20} src={left}/></i>
        {/* <i class="bi bi-caret-right"></i> */}
      </Button>
    </div>
  );
};

export default Pagination;