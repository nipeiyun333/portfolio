import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { portfolio } from '../data/portfolio'

export default function TimelineCD() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [scrollWidth, setScrollWidth] = useState(0)

  useEffect(() => {
    if (trackRef.current) {
      setScrollWidth(trackRef.current.scrollWidth - window.innerWidth + 80)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollWidth])

  const items = portfolio.cdTimeline

  return (
    <div
      ref={containerRef}
      className="section-inner"
      style={{
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '0 40px',
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: 'clamp(28px, 3vw, 48px)',
          fontWeight: 300,
          letterSpacing: 4,
          marginBottom: 60,
          color: '#8a8a92',
          paddingLeft: 20,
        }}
      >
        <span style={{ color: '#b85a3a', fontWeight: 700 }}>timeline</span> / 综艺时间线
      </motion.h2>

      <motion.div
        ref={trackRef}
        style={{
          x,
          display: 'flex',
          gap: 32,
          padding: '20px 0',
        }}
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            style={{
              minWidth: 260,
              flexShrink: 0,
              position: 'relative',
            }}
          >
            {/* CD cover */}
            <div
              style={{
                width: 260,
                height: 260,
                borderRadius: 16,
                overflow: 'hidden',
                background: '#0e0e16',
                border: '1px solid rgba(255,255,255,0.06)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 16,
              }}
            >
              {/* Circular CD effect */}
              <div
                style={{
                  width: 220,
                  height: 220,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#16161f',
                  boxShadow: 'inset 0 0 30px rgba(0,0,0,0.5)',
                }}
              >
                {item.logo ? (
                  <img
                    src={`/src/assets/${item.logo}`}
                    alt={item.title}
                    style={{
                      width: '70%',
                      height: '70%',
                      objectFit: 'contain',
                    }}
                  />
                ) : (
                  <span style={{ fontSize: 14, color: '#6a6a72', textAlign: 'center', padding: 20 }}>
                    {item.title}
                  </span>
                )}
              </div>

              {/* Year badge */}
              <div
                style={{
                  position: 'absolute',
                  top: 12,
                  left: 12,
                  background: 'rgba(184,90,58,0.9)',
                  color: '#fff',
                  fontSize: 11,
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: 6,
                  letterSpacing: 1,
                }}
              >
                {item.year}
              </div>
            </div>

            {/* Info below */}
            <h3 style={{ fontSize: 16, fontWeight: 600, color: '#e8e6e3', marginBottom: 4 }}>
              {item.title}
            </h3>
            <p style={{ fontSize: 12, color: '#6a6a72', letterSpacing: 1, lineHeight: 1.5 }}>
              {item.subtitle}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll hint */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        style={{
          textAlign: 'center',
          color: '#4a4a52',
          fontSize: 12,
          letterSpacing: 2,
          marginTop: 40,
        }}
      >
        ← 左右滑动浏览 →
      </motion.p>
    </div>
  )
}
