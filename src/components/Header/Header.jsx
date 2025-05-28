import React, { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <img src="/images/logo.png" alt="Logo" className="logo" />
        <nav className="nav-links">
          <a href="#como-funciona">COMO FUNCIONA</a>
          <a href="#software">SOFTWARE</a>
          <a href="#contato">SUPORTE</a> 
        </nav>
      </div>
    </header>
  );
}
