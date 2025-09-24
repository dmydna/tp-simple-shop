import React,{ useState, useContext } from "react";
import { Container } from "react-bootstrap";
import ProductoForm from "../components/FormProductos";
import ListaProductos from "../components/ListaProductos";
import { useProducts } from "../contexts/ProductosContext";



function ProductManager(){

    const {products, setProducts} = useProducts() 
    const [productoAEditar, setProductoAEditar] = useState(null)
    const [contadorId, setContadorId] = useState(30 + 1)

    const agregarProducto =  (productos) => {
        const nuevoProducto = { ...productos, id: contadorId };
        setProducts([...products, nuevoProducto])
        setContadorId(contadorId + 1)
    }

    const actualizarProducto = (productoActualizado) => {
        setProducts(products.map(p => (p.id === productoActualizado.id ? productoActualizado : p)))
        setProductoAEditar(null);
    }


    const borrarProducto = (id) => {
        setProducts(products.filter(p => p.id !== id))
    }

    const editarProducto = (producto) => {
        setProductoAEditar(producto)
    }


    return (
        <Container className="my-4">
            <h2>Gestion de Productos</h2>

            <ProductoForm
              onSubmit={productoAEditar ? actualizarProducto : agregarProducto}
              productoAEditar={productoAEditar}
              onCancel={()=> setProductoAEditar(null)}
            />
            <hr />
            <ListaProductos
              productos = {products}
              onEdit={editarProducto}
              onDelete={borrarProducto}
            />
        </Container>
    )
}


export default ProductManager