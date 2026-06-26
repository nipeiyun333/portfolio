import VideoBackground from './components/VideoBackground'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Strengths from './components/Strengths'
import Contact from './components/Contact'

export default function App() {
  return (
    <div style={{ position: 'relative' }}>
      {/* Fixed full-screen video — the cinematic canvas */}
      <VideoBackground />

      {/* Content overlays that scroll over the video */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        {/* Re-enable pointer events per section */}
        <div style={{ pointerEvents: 'auto' }}>
          <Hero />
        </div>
        <div style={{ pointerEvents: 'auto' }}>
          <About />
        </div>
        <div style={{ pointerEvents: 'auto' }}>
          <Timeline />
        </div>
        <div style={{ pointerEvents: 'auto' }}>
          <Projects />
        </div>
        <div style={{ pointerEvents: 'auto' }}>
          <Strengths />
        </div>
        <div style={{ pointerEvents: 'auto' }}>
          <Contact />
        </div>

        {/* Extra scroll space for the final section */}
        <div style={{ height: '40vh', pointerEvents: 'none' }} />
      </div>
    </div>
  )
}
