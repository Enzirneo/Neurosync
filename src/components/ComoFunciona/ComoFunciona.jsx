import React from 'react';
import './ComoFunciona.css';

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="como-funciona">
      <div className="container">
        <h2>Como Funciona</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Conecte</h3>
            <p>Coloque o NeusoSync e conecte via Bluetooth ao aplicativo no seu smartphone.</p>
          </div>
          <div className="step">
            <h3>2. Escolha a Sessão</h3>
            <p>Selecione o tipo de estimulação neural desejada: foco, memória, relaxamento e mais.</p>
          </div>
          <div className="step">
            <h3>3. Aproveite</h3>
            <p>Inicie a sessão e sinta os benefícios da neuroestimulação portátil em minutos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
