import { portfolio } from '../data/portfolio'
import { ChapterItem } from './ChapterSection'

export default function Hero() {
  return (
    <div
      style={{
        padding: '0 60px',
        maxWidth: 700,
        width: '100%',
      }}
    >
      <ChapterItem>
        <p
          style={{
            color: '#b85a3a',
            fontSize: 13,
            letterSpacing: 6,
            marginBottom: 24,
            textTransform: 'uppercase',
            fontFamily: "'Noto Sans SC', sans-serif",
            fontWeight: 300,
          }}
        >
          {portfolio.subtitle}
        </p>
      </ChapterItem>

      <ChapterItem>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(48px, 8vw, 100px)',
            fontWeight: 700,
            lineHeight: 1.1,
            color: '#e8e4dc',
            marginBottom: 20,
            letterSpacing: -2,
            textShadow: '0 4px 30px rgba(0,0,0,0.3)',
          }}
        >
          {portfolio.tagline}
        </h1>
      </ChapterItem>

      <ChapterItem>
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(18px, 2.5vw, 32px)',
            fontWeight: 400,
            color: '#b85a3a',
            fontStyle: 'italic',
            textShadow: '0 2px 20px rgba(0,0,0,0.4)',
          }}
        >
          {portfolio.name}
        </p>
      </ChapterItem>
    </div>
  )
}
