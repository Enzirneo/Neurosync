import React from 'react';
import './Software.css';

export default function Software() {
  return (
    <section id="software" className="software">
      <div className="container">
        <h2>Software Inteligente</h2>
        <p className="intro">
          Controle total na palma da sua mão. O aplicativo NeusoSync permite personalizar sessões, monitorar progresso e evoluir sua performance mental com inteligência artificial.
        </p>

        <div className="features">
          <div className="feature">
            <h3>📊 Acompanhamento em tempo real</h3>
            <p>Veja gráficos de desempenho e entenda como seu cérebro responde às sessões.</p>
          </div>
          <div className="feature">
            <h3>🧠 Sessões personalizadas</h3>
            <p>Escolha o tipo de estimulação ideal para cada momento: foco, relaxamento ou memorização.</p>
          </div>
          <div className="feature">
            <h3>🤖 IA integrada</h3>
            <p>O app aprende com seus dados e sugere sessões ideais para melhorar seus resultados.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
