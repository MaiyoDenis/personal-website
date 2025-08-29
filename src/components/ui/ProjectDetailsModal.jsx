import React from 'react';

const ProjectDetailsModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="project-details-modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="modal-content bg-white dark:bg-gray-900 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          className="modal-close absolute top-4 right-4 text-2xl font-bold text-gray-700 dark:text-gray-300 hover:text-red-500 z-10"
          onClick={onClose}
          aria-label="Close project details"
        >
          &times;
        </button>
        
        <div className="space-y-6">
          {/* Project Header */}
          <div className="text-center">
            <h3 className="project-title text-3xl font-bold mb-2 text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="project-description text-lg text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="project-tags flex flex-wrap justify-center gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="project-tag bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Hidden Content Sections */}
          {project.hiddenContent && (
            <div className="space-y-6 border-t border-gray-200 dark:border-gray-700 pt-6">
              {/* Key Features */}
              {project.hiddenContent.features && (
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Key Features</h4>
                  <ul className="space-y-2">
                    {project.hiddenContent.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-accent mr-2 mt-1">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies Used */}
              {project.hiddenContent.technologies && (
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Technologies Used</h4>
                  <p className="text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                    {project.hiddenContent.technologies}
                  </p>
                </div>
              )}

              {/* Challenges Overcome */}
              {project.hiddenContent.challenges && (
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Challenges Overcome</h4>
                  <p className="text-gray-700 dark:text-gray-300">{project.hiddenContent.challenges}</p>
                </div>
              )}

              {/* Achievements */}
              {project.hiddenContent.achievements && (
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Achievements</h4>
                  <p className="text-gray-700 dark:text-gray-300 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border-l-4 border-green-500">
                    {project.hiddenContent.achievements}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center pt-4">
            <button
              onClick={onClose}
              className="btn-primary px-6 py-2 text-lg"
            >
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;
