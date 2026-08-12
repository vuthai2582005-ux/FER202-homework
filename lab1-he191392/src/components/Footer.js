import { Form } from 'react-bootstrap';
import React from 'react';

function Footer() {
  return (
    <Form>
      <div className="text-center text-light" style={{ backgroundColor: 'gray', padding: '20px', marginTop: '20px', borderRadius: '10px' }}>
        <div>Student Name: Vu Doanh Thai</div>
        <div>Student ID: HE191392</div>
        <div>Class Name: FER202</div>
        <div>Student Email: abc@gmail.com</div>
      </div>
    </Form>
  );
};

export default Footer;