import { useState, useEffect } from 'react';

const useStatsCounter = (targets = []) => {
    const [counts, setCounts] = useState(targets.map(() => 0));

    useEffect(() => {
        const speed = 2000;
        let animationFrameId;
        let startTime;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;

            setCounts(prevCounts => {
                return prevCounts.map((count, index) => {
                    const target = targets[index];
                    const progress = Math.min(elapsed / speed, 1);
                    return Math.floor(progress * target);
                });
            });

            if (elapsed < speed) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                setCounts(targets);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [targets]);

    return counts;
};

export default useStatsCounter;
