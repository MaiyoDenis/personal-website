import React, { useState, useEffect, useRef, useMemo } from 'react';
import useStatsCounter from '../hooks/useStatsCounter';

const StatsSection = () => {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  const targets = useMemo(() => (startCount ? [5, 120, 50] : [0, 0, 0]), [startCount]);
  const counts = useStatsCounter(targets);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="stats-section wave-bottom">
      <div className="container mx-auto px-4">
        <div className="stats-grid">
          {/* Stat 1 */}
          <div className="reveal fade-bottom">
            <h2 className="stat-number visible">
              <span className="stat-counter">{counts[0]}</span><span className="stat-number visible">+</span>
            </h2>
            <p className="stat-label">Years Of Experience</p>
          </div>

          {/* Stat 2 */}
          <div className="reveal fade-bottom delay-1">
            <h2 className="stat-number visible">
              <span className="stat-counter">{counts[1]}</span><span className="stat-number visible">+</span>
            </h2>
            <p className="stat-label">Projects Completed</p>
          </div>

          {/* Stat 3 */}
          <div className="reveal fade-bottom delay-2">
            <h2 className="stat-number visible">
              <span className="stat-counter">{counts[2]}</span><span className="stat-number visible">+</span>
            </h2>
            <p className="stat-label">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
