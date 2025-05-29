import React from 'react';
import './ComoFunciona.css';

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="como-funciona">
      <div className="como-funciona-container">
        <div className="como-funciona-content">
          <div className="como-funciona-image">
            <img src="/images/jogador.png" alt="Ilustração do NeusoSync" />
          </div>
          <div className="como-funciona-text">
            <h2>Como Funciona</h2>
            <p>
              O NeusoSync utiliza impulsos neurais seguros para melhorar seu foco, memória e produtividade.
              Após vestir o headset, conecte-o facilmente ao aplicativo via Bluetooth.
              Em segundos, você poderá escolher sessões personalizadas que se adaptam à sua rotina e objetivos.
              Toda a tecnologia de neuroestimulação portátil na palma da sua mão.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
