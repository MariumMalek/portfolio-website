import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';


// Updated project data with more details
const projects = [
  {
    title: 'QA-Agent-using-an-Agentic framework',
    description: 'A Question and Answer (Q&A) system using an agentic framework. Develop a system that can answer questions based on the content from the Wikipedia page on Bangladesh.',
    framework: 'CrewAI',
    imgSrc: '/image/p1.png',
    githubUrl: 'https://github.com/MariumMalek/Q-A-Agent-using-an-Agentic',
  },
  {
    title: 'ASP.NET Core Web API Project',
    description: 'This project demonstrates the use of ASP.NET Core to build a Web API with MSSQL. It provides CRUD operations for Employee and Department entities, showcasing proper handling of one-to-many relationships.',
    framework: 'ASP.NET, MSSQL, Web API ',
    imgSrc: '/image/p2.png',
    githubUrl: 'https://github.com/MariumMalek/SampleProject-of-ASP.NET',
  },
  {
    title: 'Wordpress Project 1',
    description: 'This project showcases a WordPress-based eCommerce site dedicated to skincare products. It features a user-friendly interface for browsing and purchasing various skincare items.',
    framework: 'Wordpress, e-Commerce',
    imgSrc: '/image/p3.png',
    githubUrl: 'https://gloowberry.wordpress.com/',
  },
  {
    title: 'Cyber Security Project',
    description: 'This project focuses on implementing essential cybersecurity practices and techniques. It includes threat detection, vulnerability analysis, and mitigation strategies to protect systems and data from potential security risks.',
    framework: 'Threat Detection, Vulnerability Analysis, Security Mitigation, Data Protection',
    imgSrc: '/image/p4.png',
    githubUrl: 'https://github.com/MariumMalek/cyber-security-project-',

  },
  {
    title: 'WordPress Portfolio for Graphic Design',
    description: 'This WordPress website is designed to showcase a portfolio of graphic design work. It features a clean and creative layout for displaying design projects, including illustrations, branding, and digital artwork, with detailed project descriptions and an easy-to-navigate interface.',
    framework: 'WordPress, Portfolio, Graphic Design',
    imgSrc: '/image/p5.png',
    githubUrl: 'https://mariumsgraphics.wordpress.com/',
  },
  {
    title: 'Fire-Brigade a Computer-Graphics-project',
    description: 'he project is centered around a fire-brigade simulation, showcasing key concepts of computer graphics, including 3D rendering, object manipulation, and visual effects using PyOpenGL.',
    framework: 'Python, PyOpenGL, Computer Graphics',
    imgSrc: '/image/p6.png',
    githubUrl: 'https://github.com/MariumMalek/Computer-Graphics-project',
  },
  {
    title: 'Project 7',
    description: 'This is a brief description of Project 7.',
    imgSrc: 'https://via.placeholder.com/150',
  },
  {
    title: 'Project 8',
    description: 'This is a brief description of Project 8.',
    imgSrc: 'https://via.placeholder.com/150',
  },
  {
    title: 'Project 9',
    description: 'This is a brief description of Project 9.',
    imgSrc: 'https://via.placeholder.com/150',
  },
];

function Projects() {
    return (
      <Container fluid style={{ backgroundColor: '#fddbf3', padding: '70px' }}>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="shadow-sm" style={{ height: '100%' }}>
                <Card.Img variant="top" src={project.imgSrc} alt={`Image for ${project.title}`} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  {project.framework && (
                    <Card.Text>
                      <strong>Features:</strong> {project.framework}
                    </Card.Text>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-link"
                    >
                      See More
                    </a>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
  
  export default Projects;