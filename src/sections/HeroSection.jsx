import React from 'react';
import useTypingAnimation from '@hooks/useTypingAnimation';

const HeroSection = () => {
    useTypingAnimation();

    return (
        <section id="home" className="hero-section">
            <div id="particles-js" className="particle-background"></div>
            <div className="container mx-auto px-4 z-10">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 md:pr-12">
                        <h5 className="text-lg font-medium mb-2 text-gray-600 dark:text-gray-400 reveal fade-bottom">HELLO</h5>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 reveal fade-bottom delay-1">
                            I'm Maiyo Denis a <br />
                            <div className="typing-container overflow-hidden">
                                <span className="typing-text text-accent">Software Engineer.</span>
                            </div>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 reveal fade-bottom delay-2">
                            A passionate software engineer with a knack for problem-solving and building innovative solutions. My expertise spans across various programming languages, frameworks, and technologies.
                        </p>
                        <div className="reveal fade-bottom delay-3">
                            <a href="#projects" className="btn-primary">
                                View Portfolio <i className="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 mt-12 md:mt-0 reveal fade-left delay-4">
                        <div className="relative floating">
                            <div className="absolute -right-4 -bottom-4 w-full h-full border-4 border-accent rounded-2xl"></div>
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl rotating-border">
                                <div className="hero-image-placeholder">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-32 h-32 text-accent">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                                    </svg>
                                    <div className="hero-text-overlay">
                                        <div>
                                            <h2 className="text-7xl md:text-8xl font-bold text-white opacity-20">SOFTWARE</h2>
                                            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">DEVELOPER</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-down hidden md:block"></div>
        </section>
    );
};

export default HeroSection;
