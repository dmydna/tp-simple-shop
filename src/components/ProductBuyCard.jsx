import React, { useState } from "react";
import { Card, InputGroup } from "react-bootstrap";
import { useCart } from "../contexts/CartContext";
import AddToCartButton from "./AddToCartButton";
import BuyNowButton from "./BuyNowButton";
import ProductBuyModal from "./ProductBuyModal";


function ProductBuyCard({ title, rating, ship, id, stock, price }) {
  const [modalShow, setModalShow] = useState(false);
  const {clearCart} = useCart()

  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <img className="mb-2" src={`/rating${Math.round(rating)}.png`} />
        <Card.Text className="h3">$ {price.toFixed(2)}</Card.Text>
        <Card.Text className="text-secondary">Disponible: {stock}</Card.Text>
        <Card.Text className="text-secondary mb-3">
          <i class="bi bi-truck"></i> {ship}
        </Card.Text>
      </Card.Body>
      <InputGroup className="w-100 align-items-center gap">
        <BuyNowButton
          className='m-2'
          variante='primary'
          handle={() => setModalShow(true)} 
        />
        <AddToCartButton id={id} />
        <ProductBuyModal
          show={modalShow}
          onHide={() => {
            setModalShow(false);
            clearCart();
          }}
        />
      </InputGroup>
    </Card>
  );
}

export default ProductBuyCard;
