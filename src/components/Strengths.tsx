import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { portfolio } from '../data/portfolio';
import './Strengths.css';

export default function Strengths() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section strengths" id="strengths" ref={ref}>
      <div className="container">
        <div
          className="strengths__header"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <p className="section__label">核心能力</p>
          <h2 className="section__title">跨界 · 融合 · 创新</h2>
          <p className="section__desc">
            15年行业沉淀 + AI前沿探索，打造不可替代的复合竞争力。
          </p>
        </div>

        <div className="strengths__grid">
          {portfolio.strengths.map((item, i) => (
            <div
              key={item.title}
              className="strengths__card"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.08}s`,
              }}
            >
              <span className="strengths__icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
