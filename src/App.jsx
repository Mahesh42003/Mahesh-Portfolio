// App.jsx — Root Component
// This is the main file. It imports all section components
// and assembles them into one full page.

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

import './styles/global.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
