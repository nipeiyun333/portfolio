import { useEffect, useState } from 'react';
import { portfolio } from '../data/portfolio';
import './Navbar.css';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const navItems = [
  { label: '首页', href: '#hero' },
  { label: '关于', href: '#about' },
  { label: '项目', href: '#projects' },
  { label: '能力', href: '#strengths' },
  { label: '联系', href: '#contact' },
];

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#hero" className="navbar__logo">
          {portfolio.name.split('').map((ch, i) =>
            i === 1 ? <span key={i} className="navbar__logo-accent">{ch}</span> : ch
          )}
        </a>

        <ul className={`navbar__links${mobileOpen ? ' navbar__links--open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <button
              className="navbar__theme-btn"
              onClick={onToggleTheme}
              aria-label="切换主题"
            >
              {theme === 'dark' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>
          </li>
        </ul>

        <button
          className={`navbar__hamburger${mobileOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="菜单"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
