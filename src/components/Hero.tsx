import { portfolio } from '../data/portfolio';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Video Background */}
      <div className="hero__bg">
        <div className="hero__gradient" />
      </div>

      <div className="hero__content container">
        <div className="hero__badge">VARIETY DIRECTOR · AI PRODUCT MANAGER</div>
        <h1 className="hero__title">
          {portfolio.role.split('/').map((part, i) => (
            <span key={i}>
              {part.trim()}
              {i === 0 && <span className="hero__title-divider">/</span>}
            </span>
          ))}
        </h1>
        <p className="hero__sub">倪浩钧 · Nǐ Hàojūn</p>
        <div className="hero__actions">
          <a href="#projects" className="hero__btn hero__btn--primary">
            查看作品
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contact" className="hero__btn hero__btn--outline">
            联系我
          </a>
        </div>
      </div>

      <div className="hero__scroll">
        <span>SCROLL</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
