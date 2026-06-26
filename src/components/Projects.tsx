import { portfolio } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="reveal" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 13,
          color: '#b85a3a',
          letterSpacing: 4,
          textTransform: 'uppercase',
          marginBottom: 20,
        }}>
          Selected Works
        </p>
        <h2 className="reveal" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(28px, 3vw, 40px)',
          fontWeight: 700,
          marginBottom: 60,
        }}>
          精选项目
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {portfolio.projects.map((project, i) => (
            <div key={i} className="reveal"
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
                gap: 32,
                padding: '32px 40px',
                background: '#0e0e14',
                border: '1px solid #1e1e2a',
                borderRadius: 16,
                alignItems: 'start',
                transition: 'border-color 0.3s, background 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#b85a3a';
                e.currentTarget.style.background = '#12121c';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#1e1e2a';
                e.currentTarget.style.background = '#0e0e14';
              }}
            >
              {/* Logo */}
              <div style={{
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
              }}>
                {project.logo ? (
                  <img
                    src={`/src/assets/${project.logo}`}
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
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  marginBottom: 8,
                  flexWrap: 'wrap',
                }}>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 22,
                    fontWeight: 700,
                    color: '#e8e4dc',
                    letterSpacing: -0.3,
                  }}>
                    {project.title}
                  </h3>
                  <span style={{
                    fontSize: 11,
                    color: '#5a5a62',
                    letterSpacing: 1,
                    padding: '3px 10px',
                    border: '1px solid #2a2a34',
                    borderRadius: 4,
                  }}>
                    {project.platform}
                  </span>
                </div>

                <p style={{
                  fontSize: 12,
                  color: '#b85a3a',
                  letterSpacing: 2,
                  marginBottom: 12,
                  textTransform: 'uppercase',
                }}>
                  {project.role}
                </p>

                <p style={{
                  fontSize: 14,
                  color: '#88808a',
                  lineHeight: 1.8,
                  maxWidth: 600,
                }}>
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
