import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ProductCard({ image, name, price, status, quantity, onAddToCart }) {
  return (
    <header className="bg-primary text-white p-3">
      <Card className="bg-dark text-light border-secondary h-100 position-relative">
        <Card.Img
          variant="top"
          src={image}
          alt={name}
          style={{height: '500px'}}
        />
        <Card.Body className="d-flex flex-column text-center">
          <Card.Title className="fs-6 fw-bold mb-2">{name}</Card.Title>
          <div className="mb-2">
            <span className="text-warning fw-bold">{price}</span>
          </div>
          <div className="mb-2">
            <span className="text-warning fw-bold">{status}</span>
          </div>
          <div className="mb-3 text-info fw-bold">
            Số lượng: {quantity}
          </div>
          <Button 
            variant="primary" 
            className="mt-auto border-secondary w-100"
            onClick={onAddToCart}
            disabled={quantity <= 0}
          >
            {quantity > 0 ? "Add to Card" : "Out Of Stock "}
          </Button>
        </Card.Body>
      </Card>
    </header>
  );
};

export default ProductCard;