import { motion } from 'framer-motion'
import { portfolio } from '../data/portfolio'

export default function ProjectsShowcase() {
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
        <span style={{ color: '#b85a3a', fontWeight: 700 }}>projects</span> / 精选项目
      </motion.h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(480px, 1fr))',
        gap: 40,
        maxWidth: 1400,
      }}>
        {portfolio.projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            style={{
              background: project.gradient,
              borderRadius: 20,
              padding: 40,
              border: '1px solid rgba(255,255,255,0.04)',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              minHeight: 280,
            }}
          >
            {/* Subtle overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.03), transparent 70%)',
              pointerEvents: 'none',
            }} />

            {/* Logo */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              marginBottom: 24,
              position: 'relative',
              zIndex: 1,
            }}>
              {project.logo ? (
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: 12,
                  overflow: 'hidden',
                  background: 'rgba(255,255,255,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 8,
                }}>
                  <img
                    src={`/src/assets/${project.logo}`}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              ) : (
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: 12,
                  background: 'rgba(184,90,58,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 24,
                }}>
                  🤖
                </div>
              )}
              <div>
                <h3 style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: '#e8e6e3',
                  marginBottom: 4,
                  letterSpacing: 0.5,
                }}>
                  {project.title}
                </h3>
                <span style={{
                  fontSize: 11,
                  color: '#b85a3a',
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                }}>
                  {project.category}
                </span>
              </div>
            </div>

            {/* Description */}
            <p style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: 14,
              lineHeight: 1.8,
              maxWidth: 500,
              position: 'relative',
              zIndex: 1,
            }}>
              {project.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
