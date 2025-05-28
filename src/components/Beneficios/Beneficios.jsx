import React from 'react';
import './Beneficios.css';

export default function Beneficios() {
  return (
    <section id="beneficios" className="beneficios">
      <div className="container">
        <h2>Benefícios do NeusoSync</h2>
        <p className="intro">Resultados reais para sua mente, com tecnologia de ponta em neuroestimulação portátil.</p>
        
        <div className="benefits-grid">
          <div className="benefit">
            <h3>🧠 Melhoria Cognitiva</h3>
            <p>Aumente sua capacidade de foco, memória e aprendizado de forma natural.</p>
          </div>
          <div className="benefit">
            <h3>⏱ Sessões Rápidas</h3>
            <p>Resultados em minutos com sessões de curta duração e máxima eficiência.</p>
          </div>
          <div className="benefit">
            <h3>📱 Controle via App</h3>
            <p>Configure tudo no aplicativo: tipos de sessão, intensidade e duração.</p>
          </div>
          <div className="benefit">
            <h3>🌐 Portabilidade</h3>
            <p>Use onde quiser. Ideal para casa, trabalho ou viagens.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
