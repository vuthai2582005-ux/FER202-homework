import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const menuItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    oldPrice: '$20.00',
    price: '$14.00',
    image: '/images/pizza1.png',
    isSale: true,
  },
  {
    id: 2,
    name: 'Mushroom Pizza',
    oldPrice: '$22.00',
    price: '$17.00',
    image: '/images/pizza2.png',
    isSale: false,
  },
  {
    id: 3,
    name: 'Hawaiian Pizza',
    oldPrice: '$19.00',
    price: '$16.00',
    image: '/images/pizza3.png',
    isSale: true,
  },
  {
    id: 4,
    name: 'Pesto Pizza',
    oldPrice: '$23.00',
    price: '$17.00',
    image: '/images/pizza4.png',
    isSale: true,
  },
];

const MenuSection = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center text-light mb-4 fw-bold">Our Menu</h2>
      <Row>
        {menuItems.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={3} className="mb-4">
            <Card className="bg-dark text-light border-secondary h-100 position-relative">
              {item.isSale && (
                <Badge
                  bg="warning"
                  text="dark"
                  className="position-absolute top-0 start-0 m-2 px-2 py-1 fw-bold"
                >
                  SALE
                </Badge>
              )}
              <Card.Img
                variant="top"
                src={item.image}
                alt={item.name}
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column text-center">
                <Card.Title className="fs-6 fw-bold mb-2">{item.name}</Card.Title>
                <div className="mb-3">
                  <span className="text-decoration-line-through text-muted me-2 text-secondary">
                    {item.oldPrice}
                  </span>
                  <span className="text-warning fw-bold">{item.price}</span>
                </div>
                <Button variant="dark" className="mt-auto border-secondary w-100">
                  Buy
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MenuSection;