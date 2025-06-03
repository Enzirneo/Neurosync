import React, { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <img src="/images/logo.png" alt="Logo" className="logo" />

        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#como-funciona" onClick={() => setMenuOpen(false)}>COMO FUNCIONA</a>
          <a href="#software" onClick={() => setMenuOpen(false)}>SOFTWARE</a>
          <a href="#beneficios" onClick={() => setMenuOpen(false)}>BENEFÍCIOS</a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>SUPORTE</a>
        </nav>
      </div>
    </header>
  );
}
