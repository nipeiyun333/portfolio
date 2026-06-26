import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { portfolio } from '../data/portfolio';
import './About.css';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container">
        <div className="about__grid">
          {/* Left: Avatar + Info */}
          <div
            className="about__left"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <div className="about__avatar-wrapper">
              <div className="about__avatar">
                <span className="about__avatar-text">
                  {portfolio.name[0]}
                </span>
              </div>
              <div className="about__avatar-ring" />
            </div>
            <h3 className="about__name">{portfolio.name}</h3>
            <p className="about__role">{portfolio.role}</p>

            <div className="about__socials">
              {portfolio.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href || '#'}
                  className="about__social-item"
                  {...(s.href ? { target: '_blank', rel: 'noopener' } : {})}
                >
                  <span className="about__social-label">{s.label}</span>
                  <span className="about__social-value">{s.value}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Bio + Stats */}
          <div
            className="about__right"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s',
            }}
          >
            <p className="section__label">关于我</p>
            <h2 className="section__title">幕后到台前<br />从传统到未来</h2>

            <div className="about__bio">
              {portfolio.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="about__stats">
              {portfolio.stats.map((stat) => (
                <div key={stat.label} className="about__stat">
                  <span className="about__stat-value">{stat.value}</span>
                  <span className="about__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
