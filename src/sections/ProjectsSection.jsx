import React, { useState, useEffect } from 'react';
import projects from '../utils/projectsData';
import { triggerRevealAnimation } from '../hooks/useScrollReveal';
import ProjectDetailsModal from '../components/ui/ProjectDetailsModal';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  useEffect(() => {
    triggerRevealAnimation();
  }, [filter]);

  const openDetails = (project) => {
    setSelectedProject(project);
  };

  const closeDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects-section wave-bottom">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal fade-bottom">
          <h2 className="text-3xl font-bold mb-4">My <span className="text-accent">Projects</span></h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in software engineering.
          </p>
        </div>

        <div className="projects-filter reveal fade-bottom delay-1">
          <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
          <button className={`filter-btn ${filter === 'web' ? 'active' : ''}`} onClick={() => setFilter('web')}>Web Apps</button>
          <button className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`} onClick={() => setFilter('mobile')}>Mobile Apps</button>
          <button className={`filter-btn ${filter === 'api' ? 'active' : ''}`} onClick={() => setFilter('api')}>API Development</button>
        </div>

        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <div key={project.id} className={`project-item ${project.category} reveal fade-bottom delay-2`}>
                <div className="project-card">
                  <div className="project-image">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-16 h-16 text-accent">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <div className="hover-overlay">
                      <div className="text-white text-center">
                        <h4 className="text-xl font-bold mb-2">View Project</h4>
                        <p>Click to see details</p>
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map(tag => (
                        <span key={tag} className="project-tag">{tag}</span>
                      ))}
                    </div>
                    <button className="project-link btn-view-details" onClick={() => openDetails(project)}>View Details</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No projects found in this category.</p>
          )}
        </div>

        {selectedProject && (
          <ProjectDetailsModal project={selectedProject} onClose={closeDetails} />
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
