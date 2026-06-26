import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80)
      const sections = ['hero', 'about', 'timeline', 'projects', 'strengths', 'contact']
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.5) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const links = [
    { id: 'hero', label: '首页' },
    { id: 'about', label: '关于' },
    { id: 'timeline', label: '履历' },
    { id: 'projects', label: '项目' },
    { id: 'strengths', label: '能力' },
    { id: 'contact', label: '联系' },
  ]

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '12px 40px' : '20px 40px',
        background: scrolled ? 'rgba(8,8,12,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.04)' : 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.3s ease',
      }}
    >
      <span
        onClick={() => scrollTo('hero')}
        style={{
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: 4,
          color: '#b85a3a',
          cursor: 'pointer',
        }}
      >
        不止于综艺
      </span>

      <div style={{ display: 'flex', gap: 32 }}>
        {links.map(l => (
          <button
            key={l.id}
            onClick={() => scrollTo(l.id)}
            style={{
              background: 'none',
              border: 'none',
              color: active === l.id ? '#e8e6e3' : '#6a6a72',
              fontSize: 13,
              fontWeight: active === l.id ? 500 : 400,
              letterSpacing: 1,
              cursor: 'pointer',
              transition: 'color 0.2s',
              padding: 0,
              fontFamily: 'inherit',
            }}
          >
            {l.label}
          </button>
        ))}
      </div>
    </motion.nav>
  )
}
