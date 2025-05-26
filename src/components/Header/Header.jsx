import React, { useEffect, useState } from "react";
import "./Header.css";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

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
      <div className="header-main">
        <div className="header-container">
          <img src="/images/logo.png" alt="Logo" className="logo" />
          <nav className="nav-links">
            <a href="#como-funciona">COMO FUNCIONA</a>
            <a href="#software">SOFTWARE</a>
            <a href="#contato">SUPORTE</a> 
          </nav>
          <div className="header-actions">
            <div className="search-box">
              <input type="text" placeholder="Pesquisa..." />
              <FaSearch />
            </div>
            <FaUser className="icon" />
            <FaShoppingCart className="icon" />
          </div>
        </div>
      </div>
    </header>
  );
}
