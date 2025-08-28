import { useEffect } from 'react';

export const useStatsCounter = () => {
    useEffect(() => {
        const counters = document.querySelectorAll('.counter');
        const speed = 2000; // The lower the slower

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });
    }, []);
};

export default useStatsCounter;
