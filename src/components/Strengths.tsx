import ChapterSection, { ChapterItem } from './ChapterSection'
import { portfolio } from '../data/portfolio'

const icons = ['🎬', '🎯', '🎨', '🤖', '📱', '🚀']

export default function Strengths() {
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
            Strengths
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
            核心能力
          </h2>
        </ChapterItem>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
        >
          {portfolio.strengths.map((s, i) => (
            <ChapterItem key={i}>
              <div
                style={{
                  padding: 32,
                  background: 'rgba(14,14,20,0.8)',
                  border: '1px solid rgba(30,30,42,0.6)',
                  borderRadius: 16,
                  backdropFilter: 'blur(12px)',
                  transition: 'border-color 0.3s, transform 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#b85a3a'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(30,30,42,0.6)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    marginBottom: 16,
                    display: 'inline-block',
                    background: 'rgba(184,90,58,0.08)',
                    borderRadius: 10,
                    padding: '6px 10px',
                    lineHeight: 1,
                  }}
                >
                  {icons[i] || '✨'}
                </div>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: '#c8c4bc',
                    marginBottom: 10,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: '#6a6a72',
                    lineHeight: 1.8,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </ChapterItem>
          ))}
        </div>
      </div>
    </ChapterSection>
  )
}
