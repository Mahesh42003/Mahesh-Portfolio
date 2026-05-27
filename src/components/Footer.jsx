// Footer.jsx — Footer Component
// Concepts: simple static component, new Date() for dynamic year

import './Footer.css'

const socialLinks = [
  { label: 'GitHub',   href: 'https://github.com/Mahesh42003',              icon: '🐙' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/mahesh-gudipati',     icon: '💼' },
  { label: 'Email',    href: 'mailto:mahesh.gudipati2020@gmail.com',        icon: '✉️' },
]

function Footer() {
  // new Date().getFullYear() gives the current year dynamically
  const year = new Date().getFullYear()

  return (
    <footer className="footer">

      {/* Top row */}
      <div className="footer-top">
        <div className="footer-logo">
          MG<span>.</span>
        </div>
        <p className="footer-tagline">
          Full-Stack MERN Developer · Open to Opportunities
        </p>
        <div className="footer-socials">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="footer-social-link"
              title={s.label}
            >
              {s.icon} {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="footer-divider" />

      {/* Bottom row */}
      <div className="footer-bottom">
        <p>© {year} Mahesh Gudipati. All rights reserved.</p>
        <p>Built with <span className="heart">♥</span> using React.js</p>
      </div>

    </footer>
  )
}

export default Footer
