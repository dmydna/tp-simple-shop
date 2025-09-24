import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const handleAddToCart = () => {
  toast.success("Producto agregado al carrito!");
};

return (
  <>
    <button className="btn btn-success" onClick={handleAddToCart}>
      Agregar al carrito
    </button>
    <ToastContainer />
  </>
);
