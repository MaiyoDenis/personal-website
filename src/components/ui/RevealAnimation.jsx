import React from 'react'

const RevealAnimation = ({ 
  children, 
  direction = 'bottom', 
  delay = '', 
  className = '' 
}) => {
  const directionClasses = {
    bottom: 'reveal fade-bottom',
    left: 'reveal fade-left',
    right: 'reveal fade-right',
    top: 'reveal fade-top',
    scale: 'reveal fade-scale'
  }

  const classes = `${directionClasses[direction]} ${delay} ${className}`

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default RevealAnimation
