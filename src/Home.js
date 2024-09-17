import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // For social media icons
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap styles are included

function Home() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column', // Stack items vertically
    justifyContent: 'center', // Center items vertically
    alignItems: 'flex-start', // Align items to the start (left side)
    height: '80vh', // Full viewport height
    padding: '120px', // Adjust padding as needed
  };

  const textStyle = {
    fontWeight: 'bold',
    margin: 0,
  };

  const headingStyle = {
    ...textStyle,
    fontSize: '6rem', // Adjust font size as needed
  };

  const subheadingStyle = {
    ...textStyle,
    fontSize: '3rem',
    marginBottom: '2.5rem', // Adjust font size as needed
  };

  const buttonStyle = {
    backgroundColor: '#f8f9fa', // Light color similar to btn-light
    color: '#000', // Black text color
    border: 'none',
    borderRadius: '10px', // Rounded corners
    padding: '5px 10px', // Padding
    fontWeight: 'bold',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '0.5rem', // Floating effect
  };

  const socialIconStyle = {
    color: '#000', // Black color for icons
    marginRight: '10px',
    marginBottom: '0.5rem', // Space between icons
  };

  return (
    <div style={containerStyle}>
      <div>
        <h1 style={headingStyle}>Hi There,</h1>
        <h2 style={subheadingStyle}>I'm Marium Malek</h2>
        <Link to="/about-me">
          <button type="button" className="btn" style={buttonStyle}>
            About Me
          </button>
        </Link>
        <div className="mt-3">
          <a href="https://github.com/MariumMalek" target="_blank" rel="noopener noreferrer" style={socialIconStyle}>
            <FaGithub size={30} />
          </a>
          <a href="https://bd.linkedin.com/in/mariummalek" target="_blank" rel="noopener noreferrer" style={socialIconStyle}>
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
