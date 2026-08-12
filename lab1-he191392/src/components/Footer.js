import {Row, Col, Form } from 'react-bootstrap';
import React from 'react';

function Footer(){
  return (
    <Form>
        <Row className="mb-3">
          <Col md={3} className="mb-3 mb-md-0">
            <Form.Group controlId="formName">
              <Form.Label className="text-light fs-6">Student Name: </Form.Label>
              <Form.Control
                type="text"
                placeholder="Vu Doanh Thai"
                className="bg-dark text-light border-secondary"
              />
            </Form.Group>
          </Col>
          <Col md={3} className="mb-3 mb-md-0">
            <Form.Group controlId="formName">
              <Form.Label className="text-light fs-6">Student id: </Form.Label>
              <Form.Control
                type="text"
                placeholder="HE191392"
                className="bg-dark text-light border-secondary"
              />
            </Form.Group>
          </Col>
          <Col md={3} className="mb-3 mb-md-0">
            <Form.Group controlId="formName">
              <Form.Label className="text-light fs-6">Class Name: </Form.Label>
              <Form.Control
                type="text"
                placeholder="FER202"
                className="bg-dark text-light border-secondary"
              />
            </Form.Group>
          </Col>
          <Col md={3} className="mb-3 mb-md-0">
            <Form.Group controlId="formName">
              <Form.Label className="text-light fs-6">Student Email: </Form.Label>
              <Form.Control
                type="text"
                placeholder="abc@gmail.com"
                className="bg-dark text-light border-secondary"
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
  );
};

export default Footer;