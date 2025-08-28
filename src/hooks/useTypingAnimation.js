import { useEffect } from 'react';

export const useTypingAnimation = () => {
    useEffect(() => {
        const typingContainer = document.querySelector('.typing-container');
        if (!typingContainer) return;

        const textElement = document.querySelector('.typing-text');
        const phrases = ["Software Engineer.", "Web Developer.", "Problem Solver."];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        function typeText() {
            const currentPhrase = phrases[phraseIndex];

            if (isDeleting) {
                textElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                textElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                typingSpeed = 1500; // Pause at end of phrase
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typingSpeed = 500; // Pause before starting new phrase
            }

            setTimeout(typeText, typingSpeed);
        }

        // Start typing animation after a delay
        setTimeout(typeText, 1000);
    }, []);
};

export default useTypingAnimation;
