import React from 'react';
import { profile } from '../config';
import '../Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              {/* {profile.name.split(' ').map((word: any[]) => word[0]).join('')} */}
            </div>
            <p className="footer-tagline">
              Building digital experiences with passion and precision
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer-section">
              <h4>Connect</h4>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={`mailto:${profile.email}`}>
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} {profile.name}. All rights reserved.</p>
          <p>Built with React, TypeScript & Vite</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;