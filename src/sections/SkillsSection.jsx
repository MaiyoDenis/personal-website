import React from 'react';

const SkillsSection = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal fade-bottom">
          <h2 className="text-3xl font-bold mb-4">My <span className="text-accent">Skills</span></h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            I've honed my skills in various programming languages, frameworks, and development tools, allowing me to tackle diverse projects efficiently.
          </p>
        </div>
        <div className="skills-grid">
          {/* Frontend Skills */}
          <div className="skills-column reveal fade-right">
            <h3 className="skills-column-title">Frontend Skills</h3>
            {/* Skill 1 */}
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">JavaScript</span>
                <span className="skill-percentage text-red-500">90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="90%" style={{ width: '0%' }}></div>
              </div>
            </div>
            
            {/* Skill 2 */}
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">React.js</span>
                <span className="skill-percentage text-red-500">85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="85%" style={{ width: '0%' }}></div>
              </div>
            </div>
            
            {/* Skill 3 */}
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">HTML5/CSS3</span>
                <span className="skill-percentage text-red-500">95%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="95%" style={{ width: '0%' }}></div>
              </div>
            </div>
            
            {/* Skill 4 */}
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">Vue.js</span>
                <span className="skill-percentage text-red-500">80%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="80%" style={{ width: '0%' }}></div>
              </div>
            </div>
            
            {/* Skill 5 */}
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">Responsive Design</span>
                <span className="skill-percentage text-red-500">90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="90%" style={{ width: '0%' }}></div>
              </div>
            </div>
          </div>
          
          {/* Backend Skills */}
          <div className="skills-column reveal fade-left">
            <h3 className="skills-column-title">Backend Skills</h3>
            {/* Skill 1 */}
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">Node.js</span>
                <span className="skill-percentage text-red-500">85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="85%" style={{ width: '0%' }}></div>
              </div>
            </div>
            
            {/* Skill 2 */}
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">Python</span>
                <span className="skill-percentage text-red-500">80%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="80%" style={{ width: '0%' }}></div>
              </div>
            </div>
            
            {/* Skill 3 */}
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">SQL/NoSQL</span>
                <span className="skill-percentage text-red-500">90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="90%" style={{ width: '0%' }}></div>
              </div>
            </div>
            
            {/* Skill 4 */}
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">Java</span>
                <span className="skill-percentage text-red-500">75%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="75%" style={{ width: '0%' }}></div>
              </div>
            </div>
            
            {/* Skill 5 */}
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-name">APIs & Microservices</span>
                <span className="skill-percentage text-red-500">85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="85%" style={{ width: '0%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
