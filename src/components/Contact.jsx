// Contact.jsx — Contact Section Component
// Concepts: useState for form inputs, onChange handler, controlled inputs

import { useState } from 'react'
import './Contact.css'

// Contact link data — array of objects
const contactLinks = [
  {
    id: 1,
    icon: '✉️',
    label: 'Email',
    value: 'mahesh.gudipati2020@gmail.com',
    href: 'mailto:mahesh.gudipati2020@gmail.com',
  },
  {
    id: 2,
    icon: '📞',
    label: 'Phone',
    value: '+91 630-133-1913',
    href: 'tel:+916301331913',
  },
  {
    id: 3,
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/mahesh-gudipati',
    href: 'https://linkedin.com/in/mahesh-gudipati',
  },
  {
    id: 4,
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/Mahesh42003',
    href: 'https://github.com/Mahesh42003',
  },
]

function Contact() {
  // useState for each form field
  // format: const [value, setValue] = useState(initialValue)
  const [name,    setName]    = useState('')
  const [email,   setEmail]   = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [sent,    setSent]    = useState(false)

  // Called when form is submitted
  function handleSubmit() {
    if (!name || !email || !message) {
      alert('Please fill in Name, Email, and Message.')
      return
    }
    // In real project: send via EmailJS or backend API
    setSent(true)
    // Reset fields after 3 seconds
    setTimeout(() => {
      setSent(false)
      setName(''); setEmail(''); setSubject(''); setMessage('')
    }, 3000)
  }

  return (
    <section className="section bg-alt" id="contact">
      <div className="container">

        <div className="contact-inner">

          {/* ── LEFT: info + links ── */}
          <div className="contact-text">
            <span className="section-label">Let's Connect</span>
            <h2 className="section-title">Open to Opportunities</h2>
            <p className="section-sub">
              I'm actively looking for full-stack or MERN developer roles.
              Whether you have a project or a position — let's talk.
            </p>

            {/* Contact link cards */}
            <div className="contact-links">
              {contactLinks.map((link) => (
                <ContactLink key={link.id} link={link} />
              ))}
            </div>
          </div>

          {/* ── RIGHT: contact form ── */}
          <div className="contact-form-card">
            <h3>Send a Message</h3>

            {/* Row: Name + Email side by side */}
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                {/* Controlled input: value comes from state, onChange updates state */}
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                placeholder="Job opportunity / Collaboration..."
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                rows={5}
                placeholder="Tell me about the role or project..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            {/* Conditional rendering: show success or button */}
            {sent ? (
              <div className="success-msg">✅ Message sent! I'll get back to you soon.</div>
            ) : (
              <button className="form-submit" onClick={handleSubmit}>
                Send Message →
              </button>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

// Child component for each contact link row
function ContactLink({ link }) {
  return (
    <a
      href={link.href}
      className="contact-link"
      target={link.href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
    >
      <div className="contact-link-icon">{link.icon}</div>
      <div className="contact-link-info">
        <div className="contact-link-label">{link.label}</div>
        <div className="contact-link-value">{link.value}</div>
      </div>
      <span className="contact-link-arrow">→</span>
    </a>
  )
}

export default Contact
