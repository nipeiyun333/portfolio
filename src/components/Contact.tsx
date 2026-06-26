import { portfolio } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ paddingBottom: 80 }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p className="reveal" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 13,
          color: '#b85a3a',
          letterSpacing: 4,
          textTransform: 'uppercase',
          marginBottom: 20,
        }}>
          Contact
        </p>
        <h2 className="reveal" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(32px, 4vw, 56px)',
          fontWeight: 700,
          marginBottom: 16,
          lineHeight: 1.2,
        }}>
          一起做点有意思的？
        </h2>

        <p className="reveal" style={{
          color: '#5a5a62',
          fontSize: 15,
          maxWidth: 400,
          margin: '0 auto 48px',
          lineHeight: 1.8,
        }}>
          如果你有综艺项目、AI产品、或者跨界合作的想法，欢迎找我聊聊
        </p>

        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
          <a href={`mailto:${portfolio.email}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '16px 48px',
              background: '#b85a3a',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 500,
              letterSpacing: 1,
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#d47a5a'}
            onMouseLeave={e => e.currentTarget.style.background = '#b85a3a'}
          >
            📧 {portfolio.email}
          </a>

          <div style={{ display: 'flex', gap: 32, marginTop: 24 }}>
            {portfolio.socials.map((s, i) => (
              <a key={i}
                href={s.href || '#'}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: '#5a5a62',
                  fontSize: 13,
                  letterSpacing: 1,
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#b85a3a'}
                onMouseLeave={e => e.currentTarget.style.color = '#5a5a62'}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
