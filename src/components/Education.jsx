// Education.jsx
// Concepts: simple data + map, clean component structure

import './Education.css'

const education = [
  {
    id: 1,
    degree: 'B.Tech — Electronics And Communication Engineering',
    school: 'SVCE, Chittoor',
    year: '2020 – 2024',
    cgpa: '8.34 / 10',
    badge: 'Top 15% of batch',
  },
  {
    id: 2,
    degree: 'Intermediate (Class XII) — MPC',
    school: 'Sri Chaitanya Junior College',
    year: '2018 – 2020',
    cgpa: '8.61 / 10',
    badge: null, // null means no badge — we handle this with conditional rendering
  },
]

function Education() {
  return (
    <section className="section" id="education">
      <div className="container">

        <div className="section-head">
          <span className="section-label">Academic Background</span>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="edu-grid">
          {education.map((edu) => (
            <EduCard key={edu.id} edu={edu} />
          ))}
        </div>

      </div>
    </section>
  )
}

function EduCard({ edu }) {
  return (
    <div className="edu-card">
      <div className="edu-icon">🎓</div>
      <h3 className="edu-degree">{edu.degree}</h3>
      <p className="edu-school">{edu.school}</p>
      <div className="edu-chips">
        <span className="edu-chip">{edu.year}</span>
        <span className="edu-chip cgpa">CGPA {edu.cgpa}</span>
        {/* Only render badge chip if badge value exists */}
        {edu.badge && <span className="edu-chip">{edu.badge}</span>}
      </div>
    </div>
  )
}

export default Education
