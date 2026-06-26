import ChapterSection, { ChapterItem } from './ChapterSection'
import { portfolio } from '../data/portfolio'

export default function Timeline() {
  return (
    <ChapterSection>
      <div className="container">
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
            Timeline
          </p>
        </ChapterItem>

        <ChapterItem>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(28px, 3vw, 40px)',
              fontWeight: 700,
              marginBottom: 60,
            }}
          >
            综艺时间线
          </h2>
        </ChapterItem>

        <ChapterItem>
          <div
            style={{
              display: 'flex',
              gap: 0,
              overflowX: 'auto',
              paddingBottom: 20,
              scrollBehavior: 'smooth',
            }}
            className="timeline-scroll"
          >
            {portfolio.timeline.map((item, i) => (
              <div
                key={i}
                style={{
                  minWidth: 140,
                  flexShrink: 0,
                  textAlign: 'center',
                  position: 'relative',
                  padding: '0 16px',
                }}
              >
                {/* Year dot + line */}
                <div style={{ position: 'relative', marginBottom: 24 }}>
                  <div
                    style={{
                      width: 1,
                      height: 40,
                      background: '#1e1e2a',
                      margin: '0 auto',
                    }}
                  />
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      background:
                        i === portfolio.timeline.length - 1
                          ? '#b85a3a'
                          : '#2a2a34',
                      margin: '0 auto',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  />
                </div>

                {/* Year */}
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: '#b85a3a',
                    marginBottom: 8,
                  }}
                >
                  {item.year}
                </p>

                {/* Title */}
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: '#c8c4bc',
                    marginBottom: 4,
                  }}
                >
                  {item.title}
                </p>

                {/* Subtitle */}
                <p
                  style={{
                    fontSize: 11,
                    color: '#5a5a62',
                    letterSpacing: 1,
                    lineHeight: 1.4,
                  }}
                >
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </ChapterItem>

        <ChapterItem>
          <p
            style={{
              textAlign: 'center',
              color: '#3a3a42',
              fontSize: 11,
              letterSpacing: 2,
              marginTop: 24,
            }}
          >
            ← 左右滑动 →
          </p>
        </ChapterItem>
      </div>
    </ChapterSection>
  )
}
