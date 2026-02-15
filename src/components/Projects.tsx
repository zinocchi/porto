import React from 'react';
import { projects } from '../config';
import '../Project.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">My work</span>
          <h2 className="section-title">Last Project</h2>
          <p className="section-description">
            A selection of projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <div className="project-number">
                  {String(project.id).padStart(2, '0')}
                </div>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-image-overlay"></div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.techStack.map((tech: any, index: any) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link} 
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View Project →</span>
                </a>
              </div>

              <div className="project-decoration"></div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Interested in seeing more?</p>
          <button className="btn btn-secondary" onClick={() => window.scrollTo({ top: document.getElementById('contact')?.offsetTop, behavior: 'smooth' })}>
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;