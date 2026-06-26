import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { portfolio } from '../data/portfolio';
import './Contact.css';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="contact__bg" />
      <div className="container contact__inner">
        <div
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <p className="section__label">联系方式</p>
          <h2 className="contact__title">一起创造</h2>
          <p className="contact__text">
            如果你有一个想法，一个项目，<br />
            或者只是想知道综艺和 AI 能碰撞出什么火花——<br />
            我随时愿意聊聊。
          </p>

          <div className="contact__links">
            <a href={`mailto:${portfolio.email}`} className="contact__btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4l-10 8L2 4" />
              </svg>
              发送邮件
            </a>
            <a href={`tel:${portfolio.phone}`} className="contact__btn contact__btn--outline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              打电话
            </a>
          </div>

          <div className="contact__info">
            <span>{portfolio.location}</span>
            <span className="contact__dot">·</span>
            <span>{portfolio.email}</span>
            <span className="contact__dot">·</span>
            <span>{portfolio.phone}</span>
          </div>
        </div>
      </div>

      <footer className="contact__footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {portfolio.name} · 用镜头讲故事</p>
        </div>
      </footer>
    </section>
  );
}
