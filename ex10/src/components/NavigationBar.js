import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
      <Container fluid>
        <Navbar.Brand href="#home" className="fw-bold fs-4">
          Pizza House
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-scroll" />
        <Navbar.Collapse id="navbar-scroll">
          <Nav className="ms-auto me-3 my-2 my-lg-0">
            <Nav.Link href="#home" active>Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 bg-dark text-light border-secondary"
              aria-label="Search"
            />
            <Button variant="danger">
              <i className="bi bi-search"></i>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;