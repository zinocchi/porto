import React, { useState, useEffect } from "react";
import type { Theme } from "../hooks/Usetheme";
import { profile } from "../config";
import "../Header.css";

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["hero", "about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-content">
        {/* Desktop Navigation - Selalu muncul di desktop */}
        <nav className="nav desktop-nav">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <button
              key={item}
              className={`nav-link ${activeSection === item.toLowerCase() ? "active" : ""}`}
              onClick={() => scrollToSection(item.toLowerCase())}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Mobile View */}
        <div className="mobile-header">
          {/* Mobile - Dropdown Menu saat di atas */}
          {!scrolled && (
            <div className="mobile-dropdown">
              <button 
                className="mobile-dropdown-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                Menu
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {mobileMenuOpen && (
                <div className="mobile-dropdown-menu">
                  {["About", "Skills", "Projects", "Contact"].map((item) => (
                    <button
                      key={item}
                      className="mobile-dropdown-link"
                      onClick={() => scrollToSection(item.toLowerCase())}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Mobile - Navigation saat di-scroll */}
          {scrolled && (
            <nav className="nav mobile-nav">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  className={`nav-link ${activeSection === item.toLowerCase() ? "active" : ""}`}
                  onClick={() => scrollToSection(item.toLowerCase())}
                >
                  {item}
                </button>
              ))}
            </nav>
          )}
        </div>

        <div className="header-right">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z" fill="currentColor"/>
                <path d="M10 1V3M10 17V19M19 10H17M3 10H1M16.364 16.364L14.95 14.95M5.05 5.05L3.636 3.636M16.364 3.636L14.95 5.05M5.05 14.95L3.636 16.364" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" fill="currentColor"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;