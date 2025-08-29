import { useEffect } from 'react';

let triggerReveal;

export const useScrollReveal = () => {
  useEffect(() => {
    const revealOnScroll = () => {
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    triggerReveal = revealOnScroll;

    window.addEventListener('scroll', revealOnScroll);
    // Initial check
    revealOnScroll();

    return () => {
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, []);
};

export const triggerRevealAnimation = () => {
  if (triggerReveal) {
    triggerReveal();
  }
};

export default useScrollReveal;
