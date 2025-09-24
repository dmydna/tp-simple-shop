import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useProducts } from "../contexts/ProductosContext";


// Componente que muestra los botones de paginación

const Paginador = () => {

   const { totalPaginas, paginaActual, setPaginaActual, setProducts } =  useProducts()
    // Cambia a una página específica si está dentro del rango
const irAPagina = (numeroPagina) => {
    if (numeroPagina >= 1 && numeroPagina <= totalPaginas) {
      setPaginaActual(numeroPagina);
    }
  };

  return (
    <div className="d-flex justify-content-center mt-4 flex-wrap">
      {/* Botón Anterior */}
      <Button
        variant="outline-secondary"
        className="mx-1 mb-2"
        disabled={paginaActual === 1}
        onClick={() => irAPagina(paginaActual - 1)}
      >
      <i class="bi bi-caret-left"></i>
      </Button>

     {/* Botones numerados */}
      {Array.from({ length: totalPaginas }, (_, indice) => (
        <Button
          key={indice + 1}
          variant={paginaActual === indice + 1 ? 'primary' : 'outline-primary'}
          className="mx-1 mb-2"
          onClick={() => irAPagina(indice + 1)}
        >
          {indice + 1}
        </Button>
      ))}

            {/* Botón Siguiente */}
      <Button
        variant="outline-secondary"
        className="mx-1 mb-2"
        disabled={paginaActual === totalPaginas}
        onClick={() => irAPagina(paginaActual + 1)}
      >
        <i class="bi bi-caret-right"></i>
      </Button>
    </div>
  );
};

export default Paginador;