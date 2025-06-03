import React from 'react';
import './Contato.css';
import { Mail, Instagram, PhoneCall } from 'lucide-react';

export default function Contato() {
  return (
    <section id="contato" className="contato">
      <div className="container">
        <h2>Fale com a gente</h2>
        <p>Estamos prontos para tirar dúvidas e ajudar você a potencializar seu desempenho mental com o NeusoSync.</p>

        <div className="contato-links">
          <a
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="contato-icone"
            data-tooltip="WhatsApp"
          >
            <PhoneCall size={28} />
          </a>
          <a
            href="mailto:contato@neusosync.com"
            className="contato-icone"
            data-tooltip="Email"
          >
            <Mail size={28} />
          </a>
          <a
            href="https://www.instagram.com/neusosync"
            target="_blank"
            rel="noopener noreferrer"
            className="contato-icone"
            data-tooltip="Instagram"
          >
            <Instagram size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
