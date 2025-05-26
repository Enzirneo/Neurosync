import React from 'react';
import './styles/global.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import ComoFunciona from './components/ComoFunciona/ComoFunciona';
import Software from './components/Software/Software';
import Contato from './components/Contato/Contato';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <div className="background-wrapper">
        <Header />
        <Hero />
      </div>
      <Features />
      <ComoFunciona />
      <Software />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
