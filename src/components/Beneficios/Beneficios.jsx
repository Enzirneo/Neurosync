import React, { useState } from "react";
import "./Beneficios.css";

const beneficiosData = [
  {
    titulo: "Melhoria Cognitiva",
    descricao: "Aumente sua capacidade de foco, memória e aprendizado de forma natural.",
    imagem: "/images/melhoriacognitiva.png",
  },
  {
    titulo: "Sessões Rápidas",
    descricao: "Resultados em minutos com sessões de curta duração e máxima eficiência.",
    imagem: "/images/sessoesrapidas.png",
  },
  {
    titulo: "Controle via App",
    descricao: "Configure tudo no aplicativo: tipos de sessão, intensidade e duração.",
    imagem: "/images/controleapp.png",
  },
  {
    titulo: "Portabilidade",
    descricao: "Use onde quiser. Ideal para casa, trabalho ou viagens.",
    imagem: "/images/portabilidade.png",
  },
];

export default function Beneficios() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? beneficiosData.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === beneficiosData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToIndex = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="beneficios" className="beneficios">
      <div className="container">
        <h2>Benefícios do NeusoSync</h2>
        <p className="intro">
          Resultados reais para sua mente, com tecnologia de ponta em
          neuroestimulação portátil.
        </p>

        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-wrapper">
            <div className="carousel-inner">
              {beneficiosData.map(({ titulo, descricao, imagem }, idx) => (
                <div
                  key={idx}
                  className={`carousel-item ${idx === activeIndex ? "active" : ""}`}
                >
                  <img src={imagem} alt={titulo} className="d-block w-100" />
                  <div className="carousel-caption">
                    <h3>{titulo}</h3>
                    <p>{descricao}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-control carousel-prev"
              type="button"
              onClick={prev}
              aria-label="Anterior"
            >
              ‹
            </button>
            <button
              className="carousel-control carousel-next"
              type="button"
              onClick={next}
              aria-label="Próximo"
            >
              ›
            </button>

          </div>

          <div className="carousel-indicators">
            {beneficiosData.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={idx === activeIndex ? "active" : ""}
                aria-current={idx === activeIndex ? "true" : undefined}
                aria-label={`Slide ${idx + 1}`}
                onClick={() => goToIndex(idx)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
