import ChapterSection, { ChapterItem } from './ChapterSection'
import { portfolio } from '../data/portfolio'

export default function Projects() {
  const baseUrl = (import.meta as any).env?.BASE_URL || '/'

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
            Selected Works
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
            精选项目
          </h2>
        </ChapterItem>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {portfolio.projects.map((project, i) => (
            <ChapterItem key={i}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr',
                  gap: 32,
                  padding: '32px 40px',
                  background: 'rgba(14,14,20,0.8)',
                  border: '1px solid rgba(30,30,42,0.6)',
                  borderRadius: 16,
                  alignItems: 'start',
                  backdropFilter: 'blur(12px)',
                  transition: 'border-color 0.3s, background 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#b85a3a'
                  e.currentTarget.style.background = 'rgba(18,18,28,0.9)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(30,30,42,0.6)'
                  e.currentTarget.style.background = 'rgba(14,14,20,0.8)'
                }}
              >
                {/* Logo */}
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 12,
                    background: '#14141e',
                    border: '1px solid #1e1e2a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 12,
                    overflow: 'hidden',
                  }}
                >
                  {project.logo ? (
                    <img
                      src={`${baseUrl}assets/${project.logo}`}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                      }}
                    />
                  ) : (
                    <span style={{ fontSize: 28 }}>🤖</span>
                  )}
                </div>

                {/* Content */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      marginBottom: 8,
                      flexWrap: 'wrap',
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 22,
                        fontWeight: 700,
                        color: '#e8e4dc',
                        letterSpacing: -0.3,
                      }}
                    >
                      {project.title}
                    </h3>
                    <span
                      style={{
                        fontSize: 11,
                        color: '#5a5a62',
                        letterSpacing: 1,
                        padding: '3px 10px',
                        border: '1px solid #2a2a34',
                        borderRadius: 4,
                      }}
                    >
                      {project.platform}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: 12,
                      color: '#b85a3a',
                      letterSpacing: 2,
                      marginBottom: 12,
                      textTransform: 'uppercase',
                    }}
                  >
                    {project.role}
                  </p>

                  <p
                    style={{
                      fontSize: 14,
                      color: '#88808a',
                      lineHeight: 1.8,
                      maxWidth: 600,
                    }}
                  >
                    {project.desc}
                  </p>
                </div>
              </div>
            </ChapterItem>
          ))}
        </div>
      </div>
    </ChapterSection>
  )
}
