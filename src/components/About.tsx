import React from 'react';
import { profile } from '../config';
import '../About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Get to know me</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              Hello! I'm {profile.name}, a passionate {profile.title} with a deep love for creating elegant solutions to complex problems.
            </p>
            <p>
              {profile.description}
            </p>
            <p>
              I believe in writing clean, maintainable code and creating user experiences that are both beautiful and functional. My approach combines technical expertise with creative problem-solving to deliver exceptional results.
            </p>
            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">2+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">5+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat">
                <div className="stat-number">8+</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="visual-card">
              <div className="card-decoration"></div>
              <div className="code-snippet">
                <div className="code-line">
                  <span className="code-keyword">const</span>{' '}
                  <span className="code-variable">developer</span> = {'{'}
                </div>
                <div className="code-line code-indent">
                  <span className="code-property">name</span>:{' '}
                  <span className="code-string">"{profile.name.split(' ')[0]}"</span>,
                </div>
                <div className="code-line code-indent">
                  <span className="code-property">role</span>:{' '}
                  <span className="code-string">"{profile.title}"</span>,
                </div>
                <div className="code-line code-indent">
                  <span className="code-property">passion</span>:{' '}
                  <span className="code-string">"Web Development"</span>,
                </div>
                <div className="code-line code-indent">
                  <span className="code-property">learning</span>:{' '}
                  <span className="code-boolean">true</span>
                </div>
                <div className="code-line">{'};'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;