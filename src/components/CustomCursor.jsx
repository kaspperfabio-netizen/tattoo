import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('.interactive') ||
        target.classList.contains('btn')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="custom-cursor"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: `scale(${isHovering ? 1.5 : 1}) rotate(45deg)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        {/* Tattoo Needle Icon */}
        <path
          d="M10 30L30 10M30 10L32 8L35 11L33 13L30 10ZM10 30L8 32L11 35L13 33L10 30Z"
          stroke={isHovering ? '#FF6B6B' : '#6B2E6B'}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M5 35L10 30"
          stroke={isHovering ? '#FF6B6B' : '#6B2E6B'}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
};

export default CustomCursor;
