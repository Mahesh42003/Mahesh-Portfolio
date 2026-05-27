// Hero.jsx — Hero Section Component
// Concepts: props-like data arrays, JSX rendering, className

import './Hero.css'

// STATS DATA — array of objects, each has a number and label
const stats = [
  { num: '15+', label: 'API Endpoints Built' },
  { num: '40%', label: 'Admin Effort Reduced' },
  { num: '4+',  label: 'Projects Shipped' },
]

function Hero() {
  return (
    <section className="hero section" id="hero">

      {/* Decorative glow blobs — pure CSS visuals */}
      <div className="glow glow-1" />
      <div className="glow glow-2" />

      <div className="container hero-inner">

        {/* ── LEFT COLUMN ── */}
        <div className="hero-left">

          {/* Available badge */}
          <div className="hero-badge">
            <span className="dot" />
            Available for opportunities
          </div>

          {/* Main heading */}
          <h1 className="hero-name">
            Mahesh<br />
            <span className="highlight">Gudipati</span>
          </h1>

          {/* Role line */}
          <p className="hero-role">
            <strong>Full-Stack MERN Developer</strong> based in Hyderabad, India
          </p>

          {/* Description */}
          <p className="hero-desc">
            Building production-ready web applications with React.js, Node.js,
            Express.js & MongoDB. Currently a Graduate Engineer Trainee at
            Acel Solutions — shipping features, designing APIs, and solving
            real problems for real users.
          </p>

          {/* CTA Buttons */}
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact"  className="btn-secondary">Get in Touch</a>
          </div>

          {/* Stats row — .map() over stats array */}
          <div className="hero-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-item">
                <div className="stat-num">{stat.num}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>

        {/* ── RIGHT COLUMN — Tech Stack Visual ── */}
        <div className="hero-right">
          <TechStackCard />
        </div>

      </div>
    </section>
  )
}

// TechStackCard — a small sub-component inside Hero.jsx
// Concept: you can create multiple components in one file
function TechStackCard() {
  const techs = [
    { icon: '⚛️', name: 'React.js',   color: 'blue'   },
    { icon: '🟢', name: 'Node.js',    color: 'green'  },
    { icon: '⚡', name: 'Express.js', color: 'purple' },
    { icon: '🍃', name: 'MongoDB',    color: 'green'  },
    { icon: '🔐', name: 'JWT Auth',   color: 'blue'   },
    { icon: '📦', name: 'Redux',      color: 'purple' },
  ]

  return (
    <div className="tech-card">
      <div className="tech-card-header">
        <div className="dots">
          <span className="dot-r" />
          <span className="dot-y" />
          <span className="dot-g" />
        </div>
        <span className="tech-card-title">tech-stack.js</span>
      </div>

      <div className="tech-grid">
        {techs.map((tech) => (
          <div key={tech.name} className={`tech-item tech-${tech.color}`}>
            <span className="tech-icon">{tech.icon}</span>
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero
