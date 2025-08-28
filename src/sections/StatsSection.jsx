import React from 'react';

const StatsSection = () => {
  return (
    <section className="stats-section wave-bottom">
      <div className="container mx-auto px-4">
        <div className="stats-grid">
          {/* Stat 1 */}
          <div className="reveal fade-bottom">
            <h2 className="stat-number">
              <span className="stat-counter text-red-500" data-target="5">3</span><span className="stat-number text-red-500">+</span>
            </h2>
            <p className="stat-label">Years Of Experience</p>
          </div>

          {/* Stat 2 */}
          <div className="reveal fade-bottom delay-1">
            <h2 className="stat-number">
              <span className="stat-counter text-red-500" data-target="120">15</span><span className="stat-number text-red-500">+</span>
            </h2>
            <p className="stat-label">Projects Completed</p>
          </div>

          {/* Stat 3 */}
          <div className="reveal fade-bottom delay-2">
            <h2 className="stat-number">
              <span className="stat-counter text-red-500" data-target="50">12</span><span className="stat-number text-red-500">+</span>
            </h2>
            <p className="stat-label">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
