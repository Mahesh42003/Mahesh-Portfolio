// Navbar.jsx — Navigation Component
// Concepts used: useState (React Hook), conditional rendering, event handlers

import { useState } from 'react'
import './Navbar.css'

// NAV LINKS DATA — stored as an array so we can .map() over it
const navLinks = [
  { label: 'Skills',      href: '#skills' },
  { label: 'Experience',  href: '#experience' },
  { label: 'Projects',    href: '#projects' },
  { label: 'Education',   href: '#education' },
  { label: 'Contact',     href: '#contact' },
]

function Navbar() {
  // useState — tracks if mobile menu is open (true) or closed (false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">

      {/* LOGO */}
      <a href="#hero" className="nav-logo">
        MG<span>.</span>
      </a>

      {/* DESKTOP LINKS — hidden on mobile via CSS */}
      <ul className="nav-links">
        {navLinks.map((link) => (
          // .map() loops the array and creates one <li> per item
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      {/* HIRE ME BUTTON — desktop only */}
      <a href="mailto:mahesh.gudipati2020@gmail.com" className="nav-cta">
        Hire Me
      </a>

      {/* HAMBURGER BUTTON — shown only on mobile */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <span /><span /><span />
      </button>

      {/* MOBILE MENU — conditionally rendered when menuOpen is true */}
      {menuOpen && (
        <div className="mobile-menu">
          <button
            className="close-btn"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)} // close menu on click
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

    </nav>
  )
}

export default Navbar
