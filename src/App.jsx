import React, { Suspense, lazy } from 'react';
import './styles/global.css';

const Header = lazy(() => import('./components/Header/Header'));
const Hero = lazy(() => import('./components/Hero/Hero'));
const Features = lazy(() => import('./components/Features/Features'));
const ComoFunciona = lazy(() => import('./components/ComoFunciona/ComoFunciona'));
const Software = lazy(() => import('./components/Software/Software'));
const Beneficios = lazy(() => import('./components/Beneficios/Beneficios'));
const Contato = lazy(() => import('./components/Contato/Contato'));
const Footer = lazy(() => import('./components/Footer/Footer'));

function App() {
  return (
    <>
      <div className="background-wrapper">
        <Header />
        <Hero />
      </div>

      <main>
        <Features />
        <ComoFunciona />
        <Software />
        <Beneficios />
        <Contato />
      </main>

      <Footer />
    </>
  );
}

export default App;
