// Projects.jsx — Projects Section
// Concepts: boolean props (featured), conditional className, template literals

import './Projects.css'

const projects = [
  {
    id: 1,
    icon: '🌐',
    name: 'Digi Broadband',
    featured: true, // boolean prop — used for conditional styling
    description:
      'Full-stack ISP customer management and service provisioning platform. Broadband plan management, subscriber onboarding, billing workflows, role-based dashboards, and automated payment reminders — reducing manual follow-ups by ~35%.',
    stack: [
      { name: 'React.js',   color: 'blue'   },
      { name: 'Node.js',    color: 'purple' },
      { name: 'Express.js', color: 'purple' },
      { name: 'MongoDB',    color: 'green'  },
      { name: 'JWT',        color: ''       },
    ]
    
  },
  {
    id: 2,
    icon: '🛒',
    name: 'E-Commerce App',
    featured: false,
    description:
      'Fully responsive shopping platform with product listing, cart management, and 3-step checkout for 50+ products. Redux for global cart state, search & filter by category/price. Deployed on Netlify with CI/CD via GitHub.',
    stack: [
      { name: 'React.js', color: 'blue' },
      { name: 'Redux',    color: 'blue' },
      { name: 'REST API', color: ''     },
    
    ],
    github: 'https://github.com/Mahesh42003/mern-ecommerce-app.git',
  },
  {
    id: 3,
    icon: '⛅',
    name: 'Weather Forecast App',
    featured: false,
    description:
      'Real-time weather for any city — temperature, humidity, wind speed, and 5-day forecast using OpenWeatherMap API. Graceful error handling and mobile-first responsive layout tested across 4 screen sizes.',
    stack: [
      { name: 'React.js',           color: 'blue' },
      { name: 'OpenWeatherMap API', color: ''     },
      { name: 'CSS3',               color: ''     },
    ],
    github: 'https://github.com/Mahesh42003/ClimateCast.git',
  },
  {
    id: 4,
    icon: '🧑‍💻',
    name: 'Portfolio Website',
    featured: false,
    description:
      'Personal developer portfolio with skills, projects, and a working contact form powered by EmailJS (zero backend). 90+ Lighthouse score. Deployed on Vercel.',
    stack: [
      { name: 'React.js', color: 'blue'  },
      { name: 'CSS3',     color: ''      },
      { name: 'Vercel',   color: 'green' },
      { name: 'EmailJS',  color: ''      },
    ],
    github: 'https://github.com/Mahesh42003/Mahesh-Portfolio.git',
  },
]

function Projects() {
  return (
    <section className="section bg-alt" id="projects">
      <div className="container">

        <div className="section-head">
          <span className="section-label">What I've Built</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-sub">Full-stack applications and frontend projects.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  )
}

// ProjectCard receives the full project object as a prop
function ProjectCard({ project }) {
  return (
    // Conditional class: if featured, add 'featured' class for extra styling
    <div className={`proj-card ${project.featured ? 'featured' : ''}`}>

      {/* Featured badge — only renders if project.featured is true */}
      {project.featured && (
        <div className="featured-badge">★ Featured Project</div>
      )}

      <div className="proj-top">
        <div className="proj-icon">{project.icon}</div>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="proj-github"
          title="View on GitHub"
        >
          ⌥ GitHub
        </a>
      </div>

      <h3 className="proj-name">{project.name}</h3>
      <p className="proj-desc">{project.description}</p>

      {/* Stack tags */}
      <div className="proj-stack">
        {project.stack.map((tech) => (
          <span key={tech.name} className={`tag ${tech.color}`}>
            {tech.name}
          </span>
        ))}
      </div>

    </div>
  )
}

export default Projects
