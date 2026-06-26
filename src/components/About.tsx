import ChapterSection, { ChapterItem } from './ChapterSection'
import { portfolio } from '../data/portfolio'

export default function About() {
  return (
    <ChapterSection>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'center',
          }}
        >
          {/* Left: Bio */}
          <div>
            <ChapterItem>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 13,
                  color: '#b85a3a',
                  letterSpacing: 4,
                  textTransform: 'uppercase',
                  marginBottom: 20,
                }}
              >
                About
              </p>
            </ChapterItem>

            <ChapterItem>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(32px, 3.5vw, 48px)',
                  fontWeight: 700,
                  lineHeight: 1.2,
                  marginBottom: 32,
                  letterSpacing: -0.5,
                }}
              >
                用内容讲故事
                <br />
                <span style={{ color: '#b85a3a' }}>用AI造工具</span>
              </h2>
            </ChapterItem>

            {portfolio.bio.map((p, i) => (
              <ChapterItem key={i}>
                <p
                  style={{
                    color: '#88808a',
                    fontSize: 15,
                    lineHeight: 1.9,
                    marginBottom: 20,
                  }}
                >
                  {p}
                </p>
              </ChapterItem>
            ))}
          </div>

          {/* Right: Stats */}
          <div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 20,
              }}
            >
              {portfolio.stats.map((stat, i) => (
                <ChapterItem key={i}>
                  <div
                    style={{
                      background: 'rgba(14,14,20,0.8)',
                      border: '1px solid rgba(30,30,42,0.6)',
                      borderRadius: 16,
                      padding: '32px 24px',
                      textAlign: 'center',
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 40,
                        fontWeight: 700,
                        color: '#b85a3a',
                        marginBottom: 8,
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: '#5a5a62',
                        letterSpacing: 2,
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </ChapterItem>
              ))}
            </div>

            <ChapterItem>
              <div
                style={{
                  marginTop: 40,
                  padding: 24,
                  background: 'rgba(14,14,20,0.8)',
                  border: '1px solid rgba(30,30,42,0.6)',
                  borderRadius: 16,
                  backdropFilter: 'blur(12px)',
                }}
              >
                <p
                  style={{
                    fontSize: 12,
                    color: '#5a5a62',
                    letterSpacing: 2,
                    marginBottom: 12,
                  }}
                >
                  教育背景
                </p>
                <p style={{ fontSize: 15, color: '#c8c4bc' }}>
                  {portfolio.education}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: '#88808a',
                    marginTop: 8,
                  }}
                >
                  湖南长沙 · 1989
                </p>
              </div>
            </ChapterItem>
          </div>
        </div>
      </div>
    </ChapterSection>
  )
}
