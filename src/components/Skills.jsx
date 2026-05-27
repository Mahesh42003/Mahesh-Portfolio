// Skills.jsx — Skills Section Component
// Concepts: array of objects, .map(), props passing to child component

import './Skills.css'

// DATA — defined outside component so it doesn't re-create on every render
const skillCategories = [
  {
    id: 1,
    icon: '⚛️',
    title: 'Frontend',
    colorClass: 'icon-blue',
    skills: [
      { name: 'React.js',         color: 'blue' },
      { name: 'Redux',            color: 'blue' },
      { name: 'JavaScript ES6+',  color: '' },
      { name: 'HTML5',            color: '' },
      { name: 'CSS3',             color: '' },
      { name: 'Bootstrap',        color: '' },
    ],
  },
  {
    id: 2,
    icon: '🖥️',
    title: 'Backend',
    colorClass: 'icon-purple',
    skills: [
      { name: 'Node.js',       color: 'purple' },
      { name: 'Express.js',    color: 'purple' },
      { name: 'REST API',      color: '' },
      { name: 'JWT Auth',      color: '' },
      { name: 'MVC Pattern',   color: '' },
    ],
  },
  {
    id: 3,
    icon: '🗄️',
    title: 'Databases',
    colorClass: 'icon-green',
    skills: [
      { name: 'MongoDB',  color: 'green' },
      { name: 'SQL',      color: '' },
      { name: 'SQLite',   color: '' },
      { name: 'CRUD Ops', color: '' },
    ],
  },
  {
    id: 4,
    icon: '🛠️',
    title: 'DevOps & Tools',
    colorClass: 'icon-amber',
    skills: [
      { name: 'Git & GitHub', color: '' },
      { name: 'Vercel',       color: '' },
      { name: 'Netlify',      color: '' },
      { name: 'Postman',      color: '' },
      { name: 'Agile/Scrum',  color: '' },
    ],
  },
]

// PARENT COMPONENT
function Skills() {
  return (
    <section className="section bg-alt" id="skills">
      <div className="container">

        {/* Section heading */}
        <div className="section-head">
          <span className="section-label">What I Work With</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-sub">Full-stack capabilities across frontend, backend, databases, and dev tooling.</p>
        </div>

        {/* Grid of SkillCard components */}
        <div className="skills-grid">
          {skillCategories.map((category) => (
            // Each category is passed as props to SkillCard
            <SkillCard key={category.id} category={category} />
          ))}
        </div>

      </div>
    </section>
  )
}

// CHILD COMPONENT — receives 'category' as a prop (like a parameter)
// Props = data passed from parent to child
function SkillCard({ category }) {
  return (
    <div className="skill-card">

      {/* Icon box */}
      <div className={`skill-icon ${category.colorClass}`}>
        {category.icon}
      </div>

      {/* Category title */}
      <h3 className="skill-category-title">{category.title}</h3>

      {/* Tags row */}
      <div className="tags-row">
        {category.skills.map((skill) => (
          <span
            key={skill.name}
            className={`tag ${skill.color}`} // applies color class from global.css
          >
            {skill.name}
          </span>
        ))}
      </div>

    </div>
  )
}

export default Skills
