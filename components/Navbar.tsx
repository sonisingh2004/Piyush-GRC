"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <Link href="/" className="nav-logo">
        PIYUSH <span>GRC</span>
      </Link>

      {/* Hamburger Menu Icon */}
      <button
        className={`hamburger ${mobileMenuOpen ? "active" : ""}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${mobileMenuOpen ? "mobile-active" : ""}`}>
        {[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Projects", href: "#projects" },
          { label: "Features", href: "#features" },
          { label: "Contact", href: "#contact" },
        ].map((item) => (
          <li key={item.label}>
            <Link href={item.href} onClick={closeMobileMenu}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link href="#contact" className="nav-cta" onClick={closeMobileMenu}>
        Get a Quote
      </Link>
    </nav>
  );
}
