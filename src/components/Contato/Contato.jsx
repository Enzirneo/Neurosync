import React from 'react';
import './Contato.css';

export default function Contato() {
  return (
    <section id="contato" className="contato">
      <div className="container">
        <h2>Fale com a gente</h2>
        <p>Estamos prontos para tirar dúvidas e ajudar você a potencializar seu desempenho mental com o NeusoSync.</p>

        <div className="contato-links">
          <a href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer" className="contato-btn whatsapp">
            📱 WhatsApp
          </a>
          <a href="mailto:contato@neusosync.com" className="contato-btn email">
            ✉️ contato@neusosync.com
          </a>
          <a href="https://www.instagram.com/neusosync" target="_blank" rel="noopener noreferrer" className="contato-btn instagram">
            📷 Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
