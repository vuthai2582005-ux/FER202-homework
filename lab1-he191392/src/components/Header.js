import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';

function Header(){
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
      <Container fluid className="px-0">
        <img src="Images/logo.jpg"  style={{ height: '180px'}}/>

        <Navbar.Collapse id="navbar-scroll">
          <Nav className="ms-auto me-3 my-2 my-lg-0">
            <Nav.Link href="#home" active>Home</Nav.Link>
            <Nav.Link href="#about">Products</Nav.Link>
            <Nav.Link href="#men">Men</Nav.Link>
            <Nav.Link href="#woman">Woman</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;



