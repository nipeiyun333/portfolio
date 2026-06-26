import { portfolio } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="section" style={{ paddingTop: 160 }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
        }}>
          {/* Left: Bio */}
          <div>
            <p className="reveal" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 13,
              color: '#b85a3a',
              letterSpacing: 4,
              textTransform: 'uppercase',
              marginBottom: 20,
            }}>
              About
            </p>
            <h2 className="reveal" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(32px, 3.5vw, 48px)',
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: 32,
              letterSpacing: -0.5,
            }}>
              用内容讲故事
              <br />
              <span style={{ color: '#b85a3a' }}>用AI造工具</span>
            </h2>
            {portfolio.bio.map((p, i) => (
              <p key={i} className="reveal"
                style={{
                  color: '#88808a',
                  fontSize: 15,
                  lineHeight: 1.9,
                  marginBottom: 20,
                }}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Right: Stats */}
          <div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 20,
            }}>
              {portfolio.stats.map((stat, i) => (
                <div key={i} className="reveal"
                  style={{
                    background: '#0e0e14',
                    border: '1px solid #1e1e2a',
                    borderRadius: 16,
                    padding: '32px 24px',
                    textAlign: 'center',
                  }}
                >
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 40,
                    fontWeight: 700,
                    color: '#b85a3a',
                    marginBottom: 8,
                  }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: 12, color: '#5a5a62', letterSpacing: 2 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal" style={{
              marginTop: 40,
              padding: 24,
              background: '#0e0e14',
              border: '1px solid #1e1e2a',
              borderRadius: 16,
            }}>
              <p style={{ fontSize: 12, color: '#5a5a62', letterSpacing: 2, marginBottom: 12 }}>
                教育背景
              </p>
              <p style={{ fontSize: 15, color: '#c8c4bc' }}>
                {portfolio.education}
              </p>
              <p style={{ fontSize: 13, color: '#88808a', marginTop: 8 }}>
              湖南长沙 · 1989
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
