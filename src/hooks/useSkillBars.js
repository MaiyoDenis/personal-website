import { useEffect } from 'react';

export const useSkillBars = () => {
  useEffect(() => {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkillBars = () => {
      skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        const windowHeight = window.innerHeight;
        const elementTop = bar.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          bar.style.width = width;
          bar.style.transition = 'width 2s ease-in-out';
        }
      });
    };

    window.addEventListener('scroll', animateSkillBars);
    // Initial check
    animateSkillBars();

    return () => {
      window.removeEventListener('scroll', animateSkillBars);
    };
  }, []);
};

export default useSkillBars;
