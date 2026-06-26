import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

interface ScrollRevealCharacterProps {
  /** 图片URL */
  imageUrl?: string;
  /** 文字内容 */
  text?: string;
  /** 文字副标题 */
  subtext?: string;
}

export default function ScrollRevealCharacter({
  imageUrl,
  text = '15年综艺制作人',
  subtext = '横跨四大平台',
}: ScrollRevealCharacterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // 人物从右滑入 + 透明度变化 + 缩放
  const characterX = useTransform(scrollYProgress, [0, 0.4, 0.6], [300, 0, 0]);
  const characterOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [0, 1, 1]);
  const characterScale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);

  // 文字从下滑入
  const textY = useTransform(scrollYProgress, [0.3, 0.5], [60, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);

  // 背景视差
  const bgY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section ref={containerRef} className="scroll-reveal-section">
      <motion.div className="scroll-reveal-bg" style={{ y: bgY }} />
      <div className="scroll-reveal-content container">
        <motion.div
          className="scroll-reveal-character"
          style={{
            x: characterX,
            opacity: characterOpacity,
            scale: characterScale,
          }}
        >
          {imageUrl ? (
            <img src={imageUrl} alt="人物" />
          ) : (
            <div className="scroll-reveal-placeholder">
              <span>👤</span>
            </div>
          )}
        </motion.div>

        <motion.div
          className="scroll-reveal-text"
          style={{ y: textY, opacity: textOpacity }}
        >
          <span className="section__label">Scroll Story</span>
          <h2 className="section__title">{text}</h2>
          <p className="scroll-reveal-sub">{subtext}</p>
          <div className="scroll-reveal-line" />
        </motion.div>
      </div>
    </section>
  );
}
