"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", dark);
  }, [dark]);

  const navigateToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="row container">
      <a href="#" className="logo">
        <img src="/images/logo.svg" alt="logo" />
      </a>

      <button
        className={`toggleMenu ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`navigation row ${menuOpen ? "active" : ""}`}>
        <ul className="row">
          <li><a onClick={() => navigateToSection("#service")}>Layanan</a></li>
          <li><a onClick={() => navigateToSection("#about-us")}>Tentang</a></li>
          <li><a onClick={() => navigateToSection("#product")}>Produk</a></li>
          <li><Link target="_blank" href="/portofolio" onClick={() => setMenuOpen(false)}>Portofolio</Link></li>
          <li><a onClick={() => navigateToSection("#contact-container")}>Kontak</a></li>
          <li>
            <button
              className="lightDark"
              onClick={() => setDark((v) => !v)}
              aria-label="Toggle dark mode"
            >
              {dark ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M3 12h2M19 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}