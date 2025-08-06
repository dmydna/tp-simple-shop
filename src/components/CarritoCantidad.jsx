import React, { useContext, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { ProductosContext } from "../contexts/ProductosContext";

function CarritoCantidad({ producto, limpiarProductoCarrito }) {
  const {
    productosEnCarrito,
    setProductosEnCarrito,
    products,
    setProducts,
    contadorCarrito,
    setContadorCarrito,
    totalCarrito,
    setTotalCarrito,
  } = useContext(ProductosContext);

  const [cantidad, setCantidad] = useState(0)

  const disminuirProductoCarrito = (productoCarrito) => {
    if (productoCarrito.cantidad <= 0) {
      return;
    }
    setContadorCarrito((prevContador) =>
      productoCarrito.stock ? prevContador - 1 : prevContador
    );
    setTotalCarrito((prevTotal) =>
      productoCarrito.stock ? prevTotal - 1 : prevTotal
    );

    setProductosEnCarrito((prevProductos) =>
      prevProductos.map((item) =>
        item.id === productoCarrito.id && item.stock
          ? { ...item, cantidad: item.cantidad - 1 } // Incrementa la cantidad
          : item
      )
    );

    setProducts(
      (prevProducts) => // retorno implicito de un array
        prevProducts.map((item) =>
          item.id === productoCarrito.id && item.stock
            ? { ...item, stock: item.stock + 1 }
            : item
      )
    );
  };

  const incrementarProductoCarrito = (productoCarrito) => {

    const esProductoDisponible = productoCarrito.stock - productoCarrito.cantidad  != 0;

    if (!esProductoDisponible) {
      return;
    }

    setContadorCarrito((prevContador) =>
      productoCarrito.stock ? prevContador + 1 : prevContador
    );
    setTotalCarrito((prevTotal) =>
      productoCarrito.stock ? prevTotal + 1 : prevTotal
    );

    setProductosEnCarrito((prevProductos) =>
      prevProductos.map((item) =>
        item.id === productoCarrito.id && item.stock
          ? { ...item, cantidad: item.cantidad + 1 } // Incrementa la cantidad
          : item
      )
    );

    setProducts(
      (
        prevProducts // retorno implicito de un array
      ) =>
        prevProducts.map((item) =>
          item.id === productoCarrito.id && item.stock
            ? { ...item, stock: item.stock - 1 }
            : item
        )
    );
  };

  return (
    <InputGroup style={{ width: "160px" }}>
      <Button
        onClick={() => limpiarProductoCarrito(producto)}
        variant="outline-secondary"
      >
        <i className="bi bi-trash3"></i>
      </Button>
      <Button
        onClick={() => disminuirProductoCarrito(producto)}
        variant="outline-secondary"
      >{" "}-{" "}
      </Button>
      <Form.Control readOnly
        type="text"
        value={producto.cantidad}
        className="text-center"
      ></Form.Control>
      <Button
        onClick={() => incrementarProductoCarrito(producto)}
        variant="outline-secondary"
      >{" "}+{" "}
      </Button>
    </InputGroup>
  );
}

export default CarritoCantidad;
