import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    // This style will make the footer stick to the bottom without affecting the main app layout
    <footer className="mt-auto py-3" style={{ width: '100%', position: 'relative', marginTop: 'auto', backgroundColor: '#000', color: '#fff' }}>
      <Container>
        <Row>
          <Col md={4} className="text-center">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          <Col md={4} className="text-center">
            <h5>Contact</h5>
            <p>Email: example@example.com</p>
          </Col>
          <Col md={4} className="text-center">
            <h5>Follow Us</h5>
            <p>Social media links</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
