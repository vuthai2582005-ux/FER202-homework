import React from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";

function Header({ cartCount = 0 }) {
  return (
    <Navbar bg="light" variant="light" expand="lg" className="px-3">
      <Container fluid className="px-0 ">
        <div className='d-flex justify-content-between align-items-center w-100'>
          <img src="Images/logo.jpg" alt="Logo" style={{ height: '70px', objectFit: 'contain' }} />

          <Navbar.Collapse id="navbar-scroll">
            <Nav className="ms-auto me-3 my-2 my-lg-0">
              <Nav.Link href="#home" active>Home</Nav.Link>
              <Nav.Link href="#about">Products</Nav.Link>
              <Nav.Link href="#men">Men</Nav.Link>
              <Nav.Link href="#woman">Woman</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="position-relative me-2 cursor-pointer">
            <FaShoppingCart size={24} />
            <Badge 
              bg="danger" 
              pill 
              className="position-absolute top-0 start-100 translate-middle"
            >
              {cartCount}
            </Badge>
          </div>
        </div>

      </Container>
    </Navbar>
  );
};

export default Header;



