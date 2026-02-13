import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-copyright">
          © {currentYear} — Diseñado y desarrollado por Jorge Sánchez
        </p>
        
        <div className="footer-links">
          <a 
            href="https://github.com/JorgeSanchezGallego" 
            target="_blank" 
            rel="noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/jorge-sanchez-gallego/" 
            target="_blank" 
            rel="noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:jorgesanchezluky@gmail.com" 
            className="footer-link"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;