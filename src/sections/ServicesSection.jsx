import React from 'react';

const ServicesSection = () => {
  return (
    <section id="services" className="services-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal fade-bottom">
          <h2 className="text-3xl font-bold mb-4">My <span className="text-accent">Services</span></h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are the professional services I offer. Each service is delivered with attention to detail and commitment to excellence.
          </p>
        </div>
        <div className="services-grid">
          {/* Service 1 */}
          <div className="service-card reveal fade-bottom delay-1">
            <div className="service-icon">
              <i className="fas fa-code text-3xl"></i>
            </div>
            <h3 className="service-title">Web Development</h3>
            <p className="service-count">20 Projects</p>
            <p className="service-description">
              Building responsive, scalable web applications using modern technologies and frameworks.
            </p>
          </div>

          {/* Service 2 */}
          <div className="service-card reveal fade-bottom delay-2">
            <div className="service-icon">
              <i className="fas fa-mobile-alt text-3xl"></i>
            </div>
            <h3 className="service-title">Mobile App Development</h3>
            <p className="service-count">15 Projects</p>
            <p className="service-description">
              Creating native and cross-platform mobile applications for iOS and Android platforms.
            </p>
          </div>

          {/* Service 3 */}
          <div className="service-card reveal fade-bottom delay-3">
            <div className="service-icon">
              <i className="fas fa-database text-3xl"></i>
            </div>
            <h3 className="service-title">Database Design</h3>
            <p className="service-count">110 Projects</p>
            <p className="service-description">
              Designing efficient database architectures and optimizing query performance.
            </p>
          </div>

          {/* Service 4 */}
          <div className="service-card reveal fade-bottom delay-4">
            <div className="service-icon">
              <i className="fas fa-cloud text-3xl"></i>
            </div>
            <h3 className="service-title">Cloud Solutions</h3>
            <p className="service-count">95 Projects</p>
            <p className="service-description">
              Implementing scalable cloud infrastructure and deploying applications to cloud platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
