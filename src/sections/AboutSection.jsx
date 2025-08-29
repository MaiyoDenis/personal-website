// src/sections/AboutSection.jsx
import React, { useState } from 'react';

const AboutSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Image paths (try multiple sources)
  const imageSources = [
    '/images/profile-pic-about.png',
    '/images/profile-pic.png', 
    'https://pfst.cf2.poecdn.net/base/image/1f08173737344e2adfab2ebbd7c0353b83d0bd27cc1024919e57f683ac64afdb?w=1024&h=1536'
  ];

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = (e) => {
    const currentSrc = e.target.src;
    const currentIndex = imageSources.indexOf(currentSrc);
    
    if (currentIndex < imageSources.length - 1) {
      // Try next image source
      e.target.src = imageSources[currentIndex + 1];
    } else {
      // All sources failed, show placeholder
      setImageError(true);
    }
  };

  return (
    <section id="about" className="about-section wave-bottom py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal fade-bottom">
          <h2 className="text-3xl font-bold mb-4">
            About <span className="text-red-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0 reveal fade-right">
            <div className="relative floating">
              <div className="absolute -left-4 -bottom-4 w-full h-full border-4 border-red-500 rounded-2xl"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl rotating-border">
                <div className="about-image-container">
                  {!imageError ? (
                    <img
                      src={imageSources[0]}
                      alt="Maiyo Denis - Professional Photo"
                      className={`about-image w-full h-auto object-cover transition-opacity duration-500 ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={handleImageLoad}
                      onError={handleImageError}
                      loading="lazy"
                    />
                  ) : (
                    <ProfileImagePlaceholder />
                  )}
                  
                  {/* Loading spinner */}
                  {!imageLoaded && !imageError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-bold mb-4 reveal fade-left">
              I'm Maiyo Denis, <span className="text-red-500">Software Engineer</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 reveal fade-left delay-100">
              I'm a dedicated software engineer with a passion for creating elegant, efficient, and innovative 
              solutions to complex problems. With expertise in full-stack development, I strive to build 
              applications that not only meet technical requirements but also deliver exceptional user experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 reveal fade-left delay-200">
              My journey in software engineering has equipped me with a diverse skill set, allowing me to adapt 
              to various technologies and frameworks. I believe in writing clean, maintainable code and employing 
              best practices to ensure scalability and performance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 reveal fade-left delay-300">
              <div className="about-info-item">
                <p className="font-medium">
                  <span className="text-red-500 mr-2">Name:</span> 
                  Maiyo Denis
                </p>
              </div>
              <div className="about-info-item">
                <p className="font-medium">
                  <span className="text-red-500 mr-2">Phone:</span> 
                  +254 7650-951
                </p>
              </div>
              <div className="about-info-item">
                <p className="font-medium">
                  <span className="text-red-500 mr-2">Experience:</span> 
                  2+ Years
                </p>
              </div>
              <div className="about-info-item">
                <p className="font-medium">
                  <span className="text-red-500 mr-2">Email:</span> 
                  denismaiyo14@gmail.com
                </p>
              </div>
              <div className="about-info-item col-span-1 sm:col-span-2">
                <p className="font-medium">
                  <span className="text-red-500 mr-2">LinkedIn:</span> 
                  <a 
                    href="https://www.linkedin.com/in/denis-maiyo-0a80aa363" 
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Denis Maiyo
                  </a>
                </p>
              </div>
            </div>
            
            <div className="reveal fade-left delay-400">
              <a 
                href="#contact" 
                className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                Contact Me <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Fallback component when image fails to load
const ProfileImagePlaceholder = () => (
  <div className="w-full h-96 bg-gradient-to-br from-red-500 to-purple-600 flex items-center justify-center text-white">
    <div className="text-center">
      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
        <i className="fas fa-user text-4xl"></i>
      </div>
      <h3 className="text-2xl font-bold">Maiyo Denis</h3>
      <p className="text-white/80">Software Engineer</p>
    </div>
  </div>
);

export default AboutSection;