import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="about-section wave-bottom">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal fade-bottom">
          <h2 className="text-3xl font-bold mb-4">About <span className="text-accent">Me</span></h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 reveal fade-right">
            <div className="relative floating">
              <div className="absolute -left-4 -bottom-4 w-full h-full border-4 border-accent rounded-2xl"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl rotating-border">
                <div className="about-image-placeholder">
                    <img src="/assets/images/profile pic.pngg" alt="" className="about-image-placeholders" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-bold mb-4 reveal fade-left">I'm Maiyo Denis, <span className="text-accent">Software Engineer</span></h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 reveal fade-left delay-1">
              I'm a dedicated software engineer with a passion for creating elegant, efficient, and innovative solutions to complex problems. With expertise in full-stack development, I strive to build applications that not only meet technical requirements but also deliver exceptional user experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 reveal fade-left delay-2">
              My journey in software engineering has equipped me with a diverse skill set, allowing me to adapt to various technologies and frameworks. I believe in writing clean, maintainable code and employing best practices to ensure scalability and performance.
            </p>
            <div className="about-info-grid mb-8 reveal fade-left delay-3">
              <div className="about-info-item">
                <p className="font-medium"><span className="about-info-label">Name:</span> Maiyo Denis</p>
              </div>
              <div className="about-info-item">
                <p className="font-medium"><span className="about-info-label">Phone:</span> +254 7650-951</p>
              </div>
              <div className="about-info-item">
                <p className="font-medium"><span className="about-info-label">Experience:</span> 2 Years</p>
              </div>
              <div className="about-info-item">
                <p className="font-medium"><span className="about-info-label">Email:</span> denismaiyo14@gmail.com</p>
              </div>
              <div className="about-info-item">
                <p className="font-medium"><span className="about-info-label">LinkedIn:</span> <a href="https://www.linkedin.com/in/denis-maiyo-0a80aa363" className="about-info-link">Denis Maiyo</a></p>
              </div>
            </div>
            <div className="reveal fade-left delay-4">
              <a href="#contact" className="btn-primary">
                Contact Me <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
