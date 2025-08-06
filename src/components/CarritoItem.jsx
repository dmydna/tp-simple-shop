import React, { useContext } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { ProductosContext } from "../contexts/ProductosContext";
import CarritoCantidad from "./CarritoCantidad";

function CarritoItem(){

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


      const  limpiarItemCarrito = (productoCarrito) => {

        setContadorCarrito((prevContador) => 
          prevContador - productoCarrito.cantidad)
        setTotalCarrito((prevTotal) => 
          prevTotal - (productoCarrito.price * productoCarrito.cantidad))
    
        setProducts((prevProducts) => // retorno implicito de un array 
          prevProducts.map((item) => 
            item.id === productoCarrito.id
            ? { ...item, stock: item.stock + productoCarrito.cantidad } 
            : item 
          )
        );
    
        setProductosEnCarrito((prevProductos) =>
          prevProductos.filter((item) =>
            item.id !== productoCarrito.id 
        ))
    
      }

    return (
        <>
        {productosEnCarrito.map((item) => (
            <Card key={item.id}  className="m-2">
              <Row className="g-0" md={4}>
                <Col className="col-md-2">
                  <Card.Img src={item.thumbnail} />
                </Col>
                <Col className="col-md-4">
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text className="h1">
                      $ {(item.price).toFixed(2)}
                    </Card.Text>
                    <Card.Text className="text-secondary">
                      Disponible: {item.stock - item.cantidad || 0}
                    </Card.Text>
                    <CarritoCantidad
                      limpiarItemCarrito={limpiarItemCarrito}
                      producto={item}
                    />
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          ))}
        </>
        
    )
}

export default CarritoItem