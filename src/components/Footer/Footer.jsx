import React from 'react';
import './Footer.css';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-logo">NeusoSync</p>
      <p className="footer-copy">© {new Date().getFullYear()} NeusoSync. Todos os direitos reservados.</p>

      <div className="footer-socials">
        <a
          href="https://instagram.com/neusosync"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
          data-tooltip="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/5599999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
          data-tooltip="WhatsApp"
        >
          <FaWhatsapp />
        </a>
        <a
          href="mailto:contato@neusosync.com"
          className="footer-icon"
          data-tooltip="Email"
        >
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
}
