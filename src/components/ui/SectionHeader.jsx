import React from 'react'
import RevealAnimation from './RevealAnimation'

const SectionHeader = ({ title, highlight, description }) => {
  return (
    <div className="text-center mb-16">
      <RevealAnimation>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {title} {highlight && <span className="text-red-500">{highlight}</span>}
        </h2>
        <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
        {description && (
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            {description}
          </p>
        )}
      </RevealAnimation>
    </div>
  )
}

export default SectionHeader
