import React from 'react';
import {Card, Button} from 'react-bootstrap';

function ProductCard(image, name, price, status, quantity){
  return (
    <header className="bg-primary text-white p-3">
      <Card className="bg-dark text-light border-secondary h-100 position-relative">
              <Card.Img
                variant="top"
                src={image}
                alt={name}
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column text-center">
                <Card.Title className="fs-6 fw-bold mb-2">{name}</Card.Title>
                <div className="mb-3">
                  <span className="text-warning fw-bold">{price}</span>
                  <span className="text-warning fw-bold">{status}</span>
                </div>
                <Button variant="primary" className="mt-auto border-secondary w-100">
                  {quantity > 0 ? "InStock" : "OutStock "}
                </Button>
              </Card.Body>
            </Card>
    </header>
  );
};

export default ProductCard;