import React from "react";
import { skills } from "../config";
import { skillIcons } from "../utils/SkillIcons";
import "../Skills.css";

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
                {skillCategory.items.map((skill: string, skillIndex: number) => {
                  const Icon = skillIcons[skill];

                  return (
                    <div
                      key={skill}
                      className="skill-item"
                      style={{ animationDelay: `${skillIndex * 0.1}s` }}
                    >
                      <span className="skill-icon">
                        {Icon ? <Icon size={22} /> : null}
                      </span>

                      <span className="skill-name">{skill}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-visual">
          <div className="orbit-container">
            <div className="orbit orbit-1">
              <div className="orbit-dot" />
            </div>
            <div className="orbit orbit-2">
              <div className="orbit-dot" />
            </div>
            <div className="orbit orbit-3">
              <div className="orbit-dot" />
            </div>
            <div className="center-dot" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
