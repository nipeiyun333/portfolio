import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { portfolio } from '../data/portfolio';
import './Projects.css';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section projects" id="projects" ref={ref}>
      <div className="container">
        <div
          className="projects__header"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <p className="section__label">精选项目</p>
          <h2 className="section__title">从策划到爆款</h2>
          <p className="section__desc">
            横跨四大平台的综艺制作经验，每一个项目都是一次对内容的极致追求。
          </p>
        </div>

        <div className="projects__grid">
          {portfolio.projects.map((project, i) => (
            <div
              key={project.title}
              className="projects__card"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.1}s`,
              }}
            >
              <div
                className="projects__card-bg"
                style={{ background: project.gradient }}
              />
              <div className="projects__card-body">
                <span className="projects__card-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
