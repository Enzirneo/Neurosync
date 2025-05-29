import React from 'react';
import './Software.css';

export default function Software() {
  return (
    <section id="software" className="software">
      <div className="software-container">
        <div className="software-content">
          <div className="software-text">
            <h2>Software Inteligente</h2>
            <p>
              Controle total na palma da sua mão. O aplicativo NeusoSync permite personalizar sessões,
              monitorar progresso e evoluir sua performance mental com inteligência artificial.
            </p>

            <ul className="software-feature-list">
              <li>
                <strong>Acompanhamento em tempo real:</strong> Veja gráficos de desempenho e entenda como seu cérebro responde às sessões.
              </li>
              <li>
                <strong>Sessões personalizadas:</strong> Escolha o tipo de estimulação ideal para cada momento: foco, relaxamento ou memorização.
              </li>
              <li>
                <strong>IA integrada:</strong> O app aprende com seus dados e sugere sessões ideais para melhorar seus resultados.
              </li>
            </ul>
          </div>

          <div className="software-image">
            <img src="/images/software.png" alt="App NeusoSync" />
          </div>
        </div>
      </div>
    </section>
  );
}
