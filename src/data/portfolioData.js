export const PORTFOLIO_DATA = {
  personal: {
    name: 'Okunola Joshua Akintomiwa',
    shortName: 'Okunola Akintomiwa',
    role: 'Full-Stack Software Developer',
    tagline:
      'Building scalable, end-to-end web applications with JavaScript, TypeScript, React, Next.js, and Node.js—combining analytical precision with clean software engineering.',
    location: 'Nigeria / Remote',
    availability: 'Open to Full-Stack Roles & Freelance',
    email: 'okunolaolatunde2018@gmail.com',
    github: 'https://github.com/Peskidoo2000',
    facebook: 'https://www.facebook.com/okunola.olatunde.581',
    whatsapp: '2349073502307',
    linkedin: 'https://linkedin.com', // Add LinkedIn URL if he has one
    education: {
      course: 'Geological Technology',
      year: '2019',
    },
    resumeSummary:
      'Full-Stack Software Developer proficient in JavaScript, TypeScript, React, Next.js, and Node.js. Brings a strong analytical foundation in Geological Technology (2019) to architecting, building, and deploying modern web platforms and administrative systems.',
  },

  projects: [
    {
      id: 1,
      title: 'Admin Medic Near Me',
      category: 'Full-Stack',
      description:
        'Administrative management portal for a healthcare and medical locator platform, enabling real-time oversight of providers, bookings, and platform operations.',
      impact: 'Streamlined medical service administration and centralized provider workflow tracking.',
      architecture: [
        { layer: 'Frontend', tech: 'React / Next.js, Tailwind CSS' },
        { layer: 'Backend', tech: 'Node.js, REST API' },
        { layer: 'Language', tech: 'JavaScript / TypeScript' },
        { layer: 'Deployment', tech: 'Render Cloud Hosting' },
      ],
      tags: ['React', 'Node.js', 'JavaScript', 'Tailwind CSS'],
      liveUrl: 'https://admin-medic-near-me.onrender.com',
      repoUrl: 'https://github.com/Peskidoo2000',
      featured: true,
    },
    {
      id: 2,
      title: 'Bethar Concept',
      category: 'Full-Stack',
      description:
        'Modern corporate web application built to showcase business services, brand identity, and client engagement workflows with a clean, responsive layout.',
      impact: 'Delivered a fast, mobile-first business presence hosted with automated deployment.',
      architecture: [
        { layer: 'Frontend', tech: 'React, Next.js, Tailwind CSS' },
        { layer: 'Backend & Logic', tech: 'Node.js, JavaScript' },
        { layer: 'Hosting', tech: 'Render Web Service' },
      ],
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      liveUrl: 'https://bethar-concept-aaes.onrender.com',
      repoUrl: 'https://github.com/Peskidoo2000',
      featured: true,
    },
    {
      id: 3,
      title: 'Devcasta Clone',
      category: 'Web Apps',
      description:
        'Full-featured developer platform replica recreating modern UI patterns, interactive navigation, and structured content layouts.',
      impact: 'Demonstrated pixel-accurate frontend engineering and modular component reuse.',
      architecture: [
        { layer: 'Frontend', tech: 'React, TypeScript, Tailwind CSS' },
        { layer: 'Components', tech: 'Modular UI Architecture' },
        { layer: 'Deployment', tech: 'Render Cloud' },
      ],
      tags: ['React', 'TypeScript', 'JavaScript', 'UI Engineering'],
      liveUrl: 'https://devcasta-clone.onrender.com',
      repoUrl: 'https://github.com/Peskidoo2000',
      featured: false,
    },
    {
      id: 4,
      title: 'Clevix',
      category: 'Web Apps',
      description: 'A web application available as a live deployment.',
      impact: 'Explore the Clevix application online.',
      architecture: [{ layer: 'Platform', tech: 'Clevix Web App' }],
      tags: ['Web App'],
      liveUrl: 'https://clevix-theta.vercel.app/',
      repoUrl: 'https://github.com/Peskidoo2000',
      featured: true,
    },
  ],

  skills: [
    {
      category: 'Core Languages',
      icon: 'frontend',
      description: 'Strongly-typed and modern dynamic web programming.',
      items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
    },
    {
      category: 'Frontend Frameworks',
      icon: 'backend',
      description: 'Interactive, SEO-ready, and responsive user interfaces.',
      items: ['React', 'Next.js', 'Tailwind CSS', 'Responsive Design'],
    },
    {
      category: 'Backend & Runtime',
      icon: 'database',
      description: 'Server-side logic, RESTful APIs, and data integration.',
      items: ['Node.js', 'Express.js', 'REST APIs', 'API Integration'],
    },
    {
      category: 'Tools & Deployment',
      icon: 'cloud',
      description: 'Version control, cloud hosting, and continuous deployment.',
      items: ['Git', 'GitHub', 'Render', 'Vercel'],
    },
  ],

  experience: [
    {
      period: 'Present',
      role: 'Full-Stack Software Developer',
      company: 'Freelance & Independent Builds',
      highlights: [
        'Architected, built, and deployed end-to-end web applications including Admin Medic Near Me, Bethar Concept, and Devcasta Clone.',
        'Developed modular frontend applications using React, Next.js, and TypeScript backed by Node.js services.',
      ],
    },
    {
      period: '2019',
      role: 'Geological Technology (Graduate)',
      company: 'Academic Foundation',
      highlights: [
        'Earned qualification in Geological Technology, building strong analytical problem-solving, data interpretation, and technical documentation skills.',
      ],
    },
  ],

  principles: [
    {
      title: 'Analytical Problem Solving',
      detail: 'Applying a structured, data-driven mindset from Geological Technology to software architecture.',
    },
    {
      title: 'Type-Safe & Clean Code',
      detail: 'Leveraging TypeScript, React, and Next.js to build predictable, maintainable web applications.',
    },
    {
      title: 'End-to-End Delivery',
      detail: 'Taking ideas from component design and Node.js logic all the way to live production deployment.',
    },
  ],
};