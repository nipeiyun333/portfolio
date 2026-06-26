import { motion } from 'framer-motion'
import { portfolio } from '../data/portfolio'

export default function Strengths() {
  return (
    <div className="section-inner" style={{ padding: '0 60px' }}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: 'clamp(28px, 3vw, 48px)',
          fontWeight: 300,
          letterSpacing: 4,
          marginBottom: 60,
          color: '#8a8a92',
        }}
      >
        <span style={{ color: '#b85a3a', fontWeight: 700 }}>strengths</span> / 核心能力
      </motion.h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 24,
        maxWidth: 1200,
      }}>
        {portfolio.strengths.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.04)',
              borderRadius: 16,
              padding: 32,
              transition: 'all 0.3s',
              cursor: 'default',
            }}
          >
            <div style={{
              fontSize: 32,
              marginBottom: 16,
              display: 'inline-block',
              background: 'rgba(184,90,58,0.1)',
              borderRadius: 12,
              padding: '8px 12px',
              lineHeight: 1,
            }}>
              {s.icon}
            </div>
            <h3 style={{
              fontSize: 17,
              fontWeight: 600,
              color: '#e8e6e3',
              marginBottom: 12,
            }}>
              {s.title}
            </h3>
            <p style={{
              fontSize: 13,
              color: '#8a8a92',
              lineHeight: 1.8,
            }}>
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
