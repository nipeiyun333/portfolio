import { motion } from 'framer-motion'
import { portfolio } from '../data/portfolio'

export default function About() {
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
        <span style={{ color: '#b85a3a', fontWeight: 700 }}>about</span> / 关于我
      </motion.h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 80,
        alignItems: 'start',
        maxWidth: 1200,
      }}>
        {/* Bio text */}
        <div>
          {portfolio.bio.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{
                color: '#c8c6c3',
                fontSize: 15,
                lineHeight: 1.9,
                marginBottom: 20,
                fontWeight: i === 0 ? 400 : 300,
              }}
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24,
          }}
        >
          {portfolio.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.04)',
                borderRadius: 16,
                padding: '28px 24px',
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div style={{ fontSize: 36, fontWeight: 900, color: '#b85a3a', marginBottom: 8 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: 12, color: '#6a6a72', letterSpacing: 2 }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          display: 'flex',
          gap: 24,
          marginTop: 60,
          paddingTop: 40,
          borderTop: '1px solid rgba(255,255,255,0.04)',
        }}
      >
        {portfolio.socials.map((s, i) => (
          <a
            key={i}
            href={s.href || '#'}
            target={s.href ? '_blank' : undefined}
            rel="noreferrer"
            style={{
              color: '#6a6a72',
              fontSize: 13,
              letterSpacing: 1,
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
          >
            {s.label} / {s.value}
          </a>
        ))}
      </motion.div>
    </div>
  )
}
