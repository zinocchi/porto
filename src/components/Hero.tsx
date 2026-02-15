import React from "react";
import { profile } from "../config";
import "../Hero.css";
import profileImage from "../assets/aziz1.jpeg";

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getConnect = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-grid">
          <div className="hero-text">
            <h1 className="hero-title fade-in-up stagger-1">{profile.name}</h1>

            <h2 className="hero-subtitle fade-in-up stagger-2">
              Full Stack Software <span className="hero-accent">Developer</span>
            </h2>

            <p className="hero-description fade-in-up stagger-3">
              {profile.description}
            </p>

            <div className="hero-buttons fade-in-up stagger-4">
              <button className="btn btn-primary" onClick={getConnect}>
                Get in Touch
              </button>
              <button className="btn btn-outline" onClick={scrollToContact}>
                Contact Me
              </button>
            </div>
          </div>

          <div className="hero-image-wrapper fade-in-up stagger-2">
            <div className="hero-image">
              <img src={profileImage} alt={profile.name} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
