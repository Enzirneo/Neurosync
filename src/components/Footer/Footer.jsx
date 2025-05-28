import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-logo">NeusoSync</p>
        <p className="footer-copy">© {new Date().getFullYear()} NeusoSync. Todos os direitos reservados.</p>
        <div className="footer-socials">
          <a href="https://instagram.com/neusosync" target="_blank" rel="noopener noreferrer">📷</a>
          <a href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer">💬</a>
          <a href="mailto:contato@neusosync.com">✉️</a>
        </div>
      </div>
    </footer>
  );
}
