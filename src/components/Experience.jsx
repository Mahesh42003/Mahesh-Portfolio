// Experience.jsx — Work Experience Section
// Concepts: array of objects with nested arrays, .map(), fragments

import './Experience.css'

const experiences = [
  {
    id: 1,
    emoji: '🚀',
    title: 'Graduate Engineer Trainee',
    company: 'Acel Solutions Pvt. Ltd. · Hyderabad',
    period: 'Jan 2026 – Present',
    bullets: [
      'Transitioned from intern to GET, taking end-to-end ownership of feature development across the MERN stack.',
      'Designed and developed the Digi Broadband platform — a customer management & ISP service provisioning system.',
      'Collaborated with cross-functional teams to deliver production releases within agile sprint cycles.',
      'Participated in architecture discussions, code reviews, and continuous improvement initiatives.',
    ],
  },
  {
    id: 2,
    emoji: '💼',
    title: 'MERN Stack Developer Intern',
    company: 'Acel Solutions Pvt. Ltd. · Hyderabad',
    period: 'Jul 2025 – Dec 2025',
    bullets: [
      'Developed 3+ production-ready full-stack features using React.js, Node.js, Express.js, and MongoDB — reducing manual admin effort by ~40%.',
      'Built 10+ RESTful API endpoints integrated with React frontend, cutting average API response time via MongoDB query optimization.',
      'Improved UI/UX across 5 core screens using reusable React components and Bootstrap.',
      'Implemented JWT authentication flow, securing access to role-specific dashboard modules.',
    ],
  },
]

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">

        <div className="section-head">
          <span className="section-label">Career Journey</span>
          <h2 className="section-title">Work Experience</h2>
        </div>

        <div className="timeline">
          {/* Vertical line — decorative */}
          <div className="timeline-line" />

          {experiences.map((exp) => (
            <ExperienceItem key={exp.id} exp={exp} />
          ))}
        </div>

      </div>
    </section>
  )
}

// Child component — receives one experience object as prop
function ExperienceItem({ exp }) {
  return (
    <div className="exp-item">

      {/* Circle on the timeline */}
      <div className="exp-dot">{exp.emoji}</div>

      {/* Card */}
      <div className="exp-card">

        {/* Top row: title + period badge */}
        <div className="exp-top">
          <h3 className="exp-title">{exp.title}</h3>
          <span className="exp-period">{exp.period}</span>
        </div>

        <p className="exp-company">{exp.company}</p>

        {/* Bullet points — nested .map() inside the card */}
        <ul className="exp-bullets">
          {exp.bullets.map((point, index) => (
            // index used as key since bullet text could be long
            <li key={index}>{point}</li>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default Experience
