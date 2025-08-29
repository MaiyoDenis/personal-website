const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application with user authentication, product management, and payment processing.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
    category: 'web',
    hiddenContent: {
      features: [
        'User authentication and authorization',
        'Product catalog with search and filtering',
        'Shopping cart and wishlist functionality',
        'Payment processing with Stripe integration',
        'Order management system',
        'Admin dashboard for product management'
      ],
      technologies: 'React, Node.js, Express, MongoDB, Stripe, JWT, Redux',
      challenges: 'Implementing secure payment processing and real-time inventory management',
      achievements: 'Successfully processed over 1000+ transactions with 99.9% uptime'
    }
  },
  {
    id: 2,
    title: 'Fitness Tracking App',
    description: 'A mobile application that tracks workouts, nutrition, and provides personalized fitness plans.',
    tags: ['React Native', 'Firebase', 'GraphQL', 'Redux', 'Chart.js'],
    category: 'mobile',
    hiddenContent: {
      features: [
        'Workout tracking with custom routines',
        'Nutrition logging with calorie counter',
        'Progress charts and analytics',
        'Social features for sharing achievements',
        'Personalized workout recommendations',
        'Offline functionality for workouts'
      ],
      technologies: 'React Native, Firebase, GraphQL, Redux, Chart.js, Expo',
      challenges: 'Optimizing performance for smooth workout tracking and real-time sync',
      achievements: 'Featured in App Store with 10,000+ downloads and 4.8-star rating'
    }
  },
  {
    id: 3,
    title: 'Task Management System',
    description: 'A collaborative task management platform with real-time updates and comprehensive reporting.',
    tags: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io', 'Jest'],
    category: 'api',
    hiddenContent: {
      features: [
        'Real-time task collaboration',
        'Team management and permissions',
        'Time tracking and reporting',
        'File attachments and comments',
        'Custom workflows and automation',
        'Integration with third-party tools'
      ],
      technologies: 'Vue.js, Express, PostgreSQL, Socket.io, JWT, Jest, Docker',
      challenges: 'Implementing real-time collaboration features and ensuring data consistency',
      achievements: 'Used by 50+ teams with 95% user satisfaction rating'
    }
  },
  {
    id: 4,
    title: 'Weather Forecast API',
    description: 'A robust weather API service providing accurate forecasts and historical data.',
    tags: ['Python', 'FastAPI', 'Redis', 'Docker', 'AWS'],
    category: 'api',
    hiddenContent: {
      features: [
        'Real-time weather data from multiple sources',
        'Historical weather data access',
        'Geolocation-based forecasts',
        'Rate limiting and caching',
        'Webhook notifications for weather alerts',
        'Comprehensive API documentation'
      ],
      technologies: 'Python, FastAPI, Redis, Docker, AWS Lambda, PostgreSQL',
      challenges: 'Aggregating data from multiple weather sources and ensuring API reliability',
      achievements: 'Serving 1M+ API requests daily with 99.95% uptime'
    }
  },
  {
    id: 5,
    title: 'Social Media Dashboard',
    description: 'A comprehensive dashboard for managing multiple social media accounts and analytics.',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'OAuth'],
    category: 'web',
    hiddenContent: {
      features: [
        'Multi-platform social media integration',
        'Scheduled posting and content calendar',
        'Analytics and performance tracking',
        'Audience insights and engagement metrics',
        'Team collaboration features',
        'Custom report generation'
      ],
      technologies: 'React, TypeScript, Node.js, MongoDB, OAuth, Chart.js, WebSocket',
      challenges: 'Integrating with multiple social media APIs and handling rate limits',
      achievements: 'Helped businesses increase social engagement by 40% on average'
    }
  }
];

export default projects;
