import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function AboutMe() {
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
        <Col md={6} className="text-center text-md-start" style={colStyle}>
          <h1 className="display-4">About Me</h1>
          <p style={textStyle}>
            I'm Marium Malek, a Computer Science graduate from BRAC University with a passion for technology and innovation. My journey has been enriched by my role as a Teaching Assistant, where I supported and inspired students, and my freelance work on Fiverr, where I tackled a variety of projects.
            <br /><br />
            I have hands-on experience with the MERN stack, PHP, ASP.NET, and WordPress, allowing me to create versatile and impactful digital solutions. I thrive on blending creativity with technical skills to build engaging and effective web applications.
            <br /><br />
            Explore my work and let's connect to bring your next project to life!
          </p>
        </Col>
        <Col md={6} className="text-center text-md-end">
          {/* This column is empty; you can add other content if needed */}
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
