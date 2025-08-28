import React from 'react'

const Button = ({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  icon, 
  className = '',
  disabled = false,
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
  
  const variants = {
    primary: "bg-red-500 hover:bg-red-600 text-white focus:ring-red-500 shadow-lg hover:shadow-xl hover:transform hover:-translate-y-1",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-500",
    outline: "border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white focus:ring-red-500",
    ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-800"
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
        {icon && <i className={`${icon} ml-2`}></i>}
      </a>
    )
  }

  return (
    <button 
      onClick={onClick} 
      disabled={disabled} 
      className={classes} 
      {...props}
    >
      {children}
      {icon && <i className={`${icon} ml-2`}></i>}
    </button>
  )
}

export default Button
