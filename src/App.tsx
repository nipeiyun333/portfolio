import './styles/global.css'
import Hero from './components/Hero'
import ScrollCharacter from './components/ScrollCharacter'
import About from './components/About'
import TimelineCD from './components/TimelineCD'
import ProjectsShowcase from './components/ProjectsShowcase'
import Strengths from './components/Strengths'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="app">
      <Navbar />
      <ScrollCharacter />
      <section id="hero" className="section" style={{ minHeight: '100vh' }}>
        <Hero />
      </section>
      <section id="about" className="section">
        <About />
      </section>
      <section id="timeline" className="section" style={{ minHeight: '80vh', paddingBottom: 0 }}>
        <TimelineCD />
      </section>
      <section id="projects" className="section">
        <ProjectsShowcase />
      </section>
      <section id="strengths" className="section">
        <Strengths />
      </section>
      <section id="contact" className="section">
        <Contact />
      </section>
    </div>
  )
}

export default App
