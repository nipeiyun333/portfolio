import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const setup = () => {
      // Global scrub: entire page scroll controls video time
      ScrollTrigger.create({
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        onUpdate: (self) => {
          if (video.readyState >= 2) {
            video.currentTime = self.progress * video.duration
          }
        },
      })
    }

    if (video.readyState >= 1) {
      setup()
    } else {
      video.addEventListener('loadedmetadata', setup)
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay — fades in as user scrolls deeper */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(135deg, rgba(8,8,12,0.35) 0%, rgba(8,8,12,0.15) 40%, rgba(8,8,12,0.05) 70%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Vignette for readability of overlays */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at center, transparent 60%, rgba(8,8,12,0.5) 100%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}
