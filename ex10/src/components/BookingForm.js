import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Đã gửi thông tin đặt bàn!');
    console.log(formData);
  };

  return (
    <Container className="my-5">
      <h2 className="text-center text-light mb-4 fw-bold">Book Your Table</h2>
      <Form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '800px' }}>
        <Row className="mb-3">
          <Col md={4} className="mb-3 mb-md-0">
            <Form.Group controlId="formName">
              <Form.Label className="text-light fs-6">Your Name *</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-dark text-light border-secondary"
              />
            </Form.Group>
          </Col>

          <Col md={4} className="mb-3 mb-md-0">
            <Form.Group controlId="formDate">
              <Form.Label className="text-light fs-6">Date *</Form.Label>
              <Form.Control
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="bg-dark text-light border-secondary"
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="formService">
              <Form.Label className="text-light fs-6">Select a Service *</Form.Label>
              <Form.Select
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="bg-dark text-light border-secondary"
              >
                <option value="">Choose service...</option>
                <option value="dine-in">Dine In</option>
                <option value="takeaway">Takeaway</option>
                <option value="event">Private Event</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-4" controlId="formMessage">
          <Form.Label className="text-light fs-6">Please share your message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            className="bg-dark text-light border-secondary"
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="warning" type="submit" className="px-4 py-2 fw-bold">
            Send Message
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default BookingForm;