import { motion } from 'framer-motion'
import { portfolio } from '../data/portfolio'

export default function Contact() {
  return (
    <div
      className="section-inner"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '80px 60px',
        textAlign: 'center',
      }}
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          color: '#b85a3a',
          fontSize: 13,
          letterSpacing: 5,
          marginBottom: 24,
          textTransform: 'uppercase',
        }}
      >
        Let's Talk
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          fontSize: 'clamp(36px, 5vw, 72px)',
          fontWeight: 700,
          color: '#e8e6e3',
          marginBottom: 16,
          letterSpacing: -1,
        }}
      >
        一起做点有意思的？
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{ color: '#6a6a72', fontSize: 15, marginBottom: 48, maxWidth: 400, lineHeight: 1.8 }}
      >
        如果你有综艺项目、AI产品、或者跨界合作的想法
        <br />
        欢迎来找我聊聊
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}
      >
        <a
          href={`mailto:${portfolio.email}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '16px 40px',
            background: '#b85a3a',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: 10,
            fontSize: 15,
            fontWeight: 500,
            letterSpacing: 1,
            transition: 'background 0.2s',
          }}
        >
          📧 {portfolio.email}
        </a>

        <div style={{ display: 'flex', gap: 32, marginTop: 24 }}>
          {portfolio.socials.slice(0, 3).map((s, i) => (
            <a
              key={i}
              href={s.href || '#'}
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#6a6a72',
                fontSize: 13,
                letterSpacing: 1,
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1 }}
        style={{
          color: '#3a3a42',
          fontSize: 11,
          letterSpacing: 2,
          marginTop: 80,
        }}
      >
        © {new Date().getFullYear()} {portfolio.name} · All Rights Reserved
      </motion.p>
    </div>
  )
}
