import React from 'react';
import './styles/global.css';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <div className="background-wrapper">
        <Header />
        <Hero />
      </div>
      <Features />
      <Footer />
    </>
  );
}

export default App;
