import React from 'react';
import './Contato.css';

export default function Contato() {
  return (
    <section id="contato" className="contato">
      <div className="container">
        <h2>Fale com a gente</h2>
        <p>Tem dúvidas? Nosso time está pronto para te ajudar.</p>
        <form className="contato-form">
          <input type="text" placeholder="Seu nome" required />
          <input type="email" placeholder="Seu e-mail" required />
          <textarea placeholder="Sua mensagem..." required />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}
