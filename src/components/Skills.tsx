import React from 'react';
import { skills } from '../config';
import './Skills.css';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What I work with</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-description">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skillCategory, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{skillCategory.category}</h3>
              <div className="skills-list">
                {skillCategory.items.map((skill: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, skillIndex: React.Key | null | undefined) => (
                  <div 
                    key={skillIndex} 
                    className="skill-item"
                    style={{ animationDelay: `${skillIndex * 0.1}s` }}
                  >
                    <span className="skill-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-visual">
          <div className="orbit-container">
            <div className="orbit orbit-1">
              <div className="orbit-dot"></div>
            </div>
            <div className="orbit orbit-2">
              <div className="orbit-dot"></div>
            </div>
            <div className="orbit orbit-3">
              <div className="orbit-dot"></div>
            </div>
            <div className="center-dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;