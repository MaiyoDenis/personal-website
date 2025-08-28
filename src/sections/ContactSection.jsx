import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal fade-bottom">
          <h2 className="text-3xl font-bold mb-4">Contact <span className="text-accent">Me</span></h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? Feel free to get in touch with me.
          </p>
        </div>
        
        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info reveal fade-right">
            <h3 className="contact-info-title">Contact Information</h3>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-details">
                <h4>Location</h4>
                <p>Eldoret Kenya</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h4>Email Address</h4>
                <p>denismaiyo14@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="contact-details">
                <h4>Phone Number</h4>
                <p>+254 7650-951</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-globe"></i>
              </div>
              <div className="contact-details">
                <h4>Website</h4>
                <p>www.maiyodenis.com</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="contact-form-container reveal fade-left">
            <h3 className="contact-form-title">Send Me a Message</h3>
            
            <form>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input type="text" id="name" className="form-input" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" id="email" className="form-input" placeholder="Enter your email" />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input type="text" id="subject" className="form-input" placeholder="Enter subject" />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" rows="5" className="form-input" placeholder="Enter your message"></textarea>
              </div>
              
              <button type="submit" className="btn-primary">
                Send Message <i className="fas fa-paper-plane ml-2"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
