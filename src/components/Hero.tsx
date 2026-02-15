import React from 'react';
import { profile } from '../config';
import '../Hero.css';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>
      
      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-label fade-in-up">Software Engineer Student</div>
          <h1 className="hero-title fade-in-up stagger-1">
            {profile.name}
          </h1>
          <p className="hero-subtitle fade-in-up stagger-2">
            {profile.title}
          </p>
          <p className="hero-description fade-in-up stagger-3">
            {profile.description}
          </p>
          <div className="hero-actions fade-in-up stagger-4">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Get In Touch
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn btn-secondary" onClick={() => window.open(profile.github, '_blank')}>
              View Work
            </button>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;