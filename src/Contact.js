import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  const textStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.6',
  };

  const colStyle = {
    padding: '100px 80px', // Add padding on the left and right sides
  };

  return (
    <Container fluid>
      <Row className="align-items-center" style={{ height: '70vh' }}>
        <Col md={6} className="text-center" style={colStyle}>
          <h1 className="display-4">Get in Touch</h1>
          <p style={textStyle}>
            <FaMapMarkerAlt /> Dhaka, Bangladesh
            <br />
            <FaEnvelope /> malekmarium01.com
            <br />
            <FaPhoneAlt /> +880 1234-567890
          </p>
        </Col>
        <Col md={6} className="text-center text-md-end">
          {/* This column is empty; you can add other content if needed */}
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
