import React from 'react';
import './Features.css';

export default function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Veja o NeusoSync em ação</h2>
        <p>Assista ao vídeo e descubra como nosso headset pode transformar seu desempenho mental.</p>

        <video autoPlay muted loop controls className="video-player">
        <source src="/videos/videoplayback.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo.
        </video>

      </div>
    </section>
  );
}
