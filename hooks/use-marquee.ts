import { useState } from 'react';

export function useMarquee() {
  const [isAnimating, setIsAnimating] = useState<'idle' | 'left' | 'right'>(
    'idle',
  );
  const [animationPaused, setAnimationPaused] = useState(false);

  const handleMouseEnter = () => {
    if (isAnimating === 'idle') {
      setIsAnimating('left');
    }
  };

  const handleAnimationEnd = () => {
    if (isAnimating === 'left' && !animationPaused) {
      setAnimationPaused(true);
      setTimeout(() => {
        setAnimationPaused(false);
        setIsAnimating('right');
      }, 1000); // 1-second pause before reversing
    } else if (isAnimating === 'right') {
      setIsAnimating('idle');
    }
  };

  return {
    isAnimating,
    handleMouseEnter,
    handleAnimationEnd,
  };
}
