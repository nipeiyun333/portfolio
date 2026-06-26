import { useEffect } from 'react'
import './styles/global.css'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Strengths from './components/Strengths'
import Contact from './components/Contact'
import { portfolio } from './data/portfolio'

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function App() {
  useReveal()

  return (
    <div>
      {/* Fixed nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '20px 40px',
        background: 'linear-gradient(to bottom, rgba(8,8,12,0.9), transparent)',
        pointerEvents: 'none',
      }}>
        <span style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 15, color: '#b85a3a', letterSpacing: 3,
          pointerEvents: 'auto', cursor: 'pointer',
        }}>
          不止于综艺
        </span>
        <div style={{ display: 'flex', gap: 24, pointerEvents: 'auto' }}>
          {['about', 'projects', 'contact'].map(id => (
            <a key={id} href={`#${id}`}
              style={{ color: '#5a5a62', fontSize: 12, letterSpacing: 2, textDecoration: 'none', textTransform: 'uppercase' }}>
              {id === 'about' ? '关于' : id === 'projects' ? '项目' : '联系'}
            </a>
          ))}
        </div>
      </nav>

      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Strengths />
      <Contact />

      <footer style={{
        textAlign: 'center', padding: '40px 0', color: '#3a3a42', fontSize: 11, letterSpacing: 2
      }}>
        © {new Date().getFullYear()} {portfolio.name}
      </footer>
    </div>
  )
}

export default App
