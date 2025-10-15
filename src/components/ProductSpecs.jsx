import React, { useContext, useState } from "react";
import {Table, Button, Form, InputGroup } from "react-bootstrap";



function ProductSpecs({producto, children}) {


  return (
    <>
    {children}
    <Table striped bordered hover rounded>
      <tbody>
        <tr>
          <td className="fw-bold">Brand</td>
          <td>{producto.brand}</td>
        </tr>
        <tr>
          <td  className="fw-bold">Dimensions</td>
          <td>
            {producto.dimensions.width} x {'  '}
            {producto.dimensions.height} x {'  '}
            {producto.dimensions.depth} 
            </td>
        </tr>
        <tr>
          <td className="fw-bold">Weight</td>
          <td> {producto.weight} </td>
        </tr>
        <tr>
          <td className="fw-bold">Warranty Information</td>
          <td> {producto.warrantyInformation} </td>
        </tr>
        
      </tbody>
    </Table>
    </>
    
  );
}

export default ProductSpecs;