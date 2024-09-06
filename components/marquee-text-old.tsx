'use client';
import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import { cn } from '@/lib/utils';
import clsx from 'clsx';

type MarqueeTextProps = {
  text: string;
  baseSpeed?: number; // Pixels per second
  pauseDuration?: number; // Pause duration at the end before scrolling back
  className?: string; // Additional classes for customization
  underlineStrategy?: 'default' | 'split'; // New prop for underline strategy
};

export const MarqueeText: React.FC<MarqueeTextProps> = ({
  text,
  baseSpeed = 15, // Pixels per second
  pauseDuration = 2, // Pause duration in seconds
  className,
  underlineStrategy = 'default',
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [hasStarted, setHasStarted] = useState(false); // Track if the animation has started
  const [isAnimating, setIsAnimating] = useState(false); // Track if animation is in progress
  const [remainingDuration, setRemainingDuration] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [isOverflowing, setIsOverflowing] = useState(false); // Track if text is overflowing
  const [animationPhase, setAnimationPhase] = useState<
    'left' | 'pause' | 'right'
  >('left'); // Track the phase of animation

  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const delay = (ms: number) =>
    new Promise((resolve) => {
      timeoutRef.current = setTimeout(resolve, ms);
    });

  // Function to calculate how long the animation should take
  const calculateDuration = useCallback(() => {
    if (!containerRef.current || !textRef.current) return 0;
    const distance =
      textRef.current.scrollWidth - containerRef.current.offsetWidth;
    return distance / baseSpeed; // Calculate how long it takes in seconds based on baseSpeed
  }, [baseSpeed]);

  const clearOngoingTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const checkOverflow = () => {
    if (!containerRef.current || !textRef.current) return false;
    return textRef.current.scrollWidth > containerRef.current.offsetWidth;
  };

  const animateLeft = useCallback(
    (duration: number) => {
      if (!textRef.current || !containerRef.current) return;
      const textElement = textRef.current;
      textElement.style.transition = `transform ${duration}s linear`;
      textElement.style.transform = `translateX(calc((100% - ${containerRef.current.offsetWidth}px) * -1))`;

      setStartTime(Date.now()); // Capture when animation started
      setAnimationPhase('left'); // Set phase to 'left'
      setIsAnimating(true); // Animation in progress
    },
    [containerRef],
  );

  const animateRight = useCallback(
    (duration: number) => {
      if (!textRef.current || !containerRef.current) return;
      const textElement = textRef.current;
      textElement.style.transition = `transform ${duration}s linear`;
      textElement.style.transform = `translateX(0)`;

      setStartTime(Date.now()); // Capture when animation started for "right" phase
      setAnimationPhase('right'); // Set phase to 'right'
      setIsAnimating(true); // Animation in progress
    },
    [containerRef],
  );

  const calculateRemainingDuration = () => {
    if (!textRef.current || !containerRef.current) return 0;

    const computedStyle = window.getComputedStyle(textRef.current);
    const matrix = new DOMMatrixReadOnly(computedStyle.transform);
    const currentX = matrix.m41; // Get current X translation

    const fullDistance =
      textRef.current.scrollWidth - containerRef.current.offsetWidth;
    const remainingDistance =
      animationPhase === 'left' ? fullDistance + currentX : -currentX;

    // Calculate the time needed to cover the remaining distance at the current baseSpeed
    return remainingDistance / baseSpeed;
  };

  const pauseAnimation = () => {
    if (!textRef.current || !isAnimating) return;

    const computedStyle = window.getComputedStyle(textRef.current);
    const matrix = new DOMMatrixReadOnly(computedStyle.transform);
    const currentX = matrix.m41; // Get current X translation

    textRef.current.style.transition = 'none'; // Stop the transition
    textRef.current.style.transform = `translateX(${currentX}px)`; // Fix its position

    const remainingTime = calculateRemainingDuration();
    setRemainingDuration(remainingTime);
    setIsPaused(true);

    // Clear the timeout to pause the transition logic
    clearOngoingTimeout();
  };

  const resumeAnimation = () => {
    if (!textRef.current || !isPaused) return;

    const translateDirection =
      animationPhase === 'left'
        ? `translateX(calc((100% - ${
            containerRef.current!.offsetWidth
          }px) * -1))`
        : 'translateX(0)';

    textRef.current.style.transition = `transform ${remainingDuration}s linear`;
    textRef.current.style.transform = translateDirection;

    setIsPaused(false);
    setStartTime(Date.now());

    timeoutRef.current = setTimeout(
      animationPhase === 'left' ? startPausePhase : handleAnimationEnd,
      remainingDuration * 1000,
    );
  };

  const startPausePhase = async () => {
    setAnimationPhase('pause'); // Set phase to 'pause'
    await delay(pauseDuration * 1000); // Wait for the pause duration
    startRightAnimation(); // Proceed to animating right
  };

  const startRightAnimation = () => {
    const duration = calculateDuration();
    animateRight(duration);
    timeoutRef.current = setTimeout(() => {
      handleAnimationEnd();
    }, duration * 1000);
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false); // Mark animation as done
    setHasStarted(false); // Allow the animation to restart on hover
  };

  const shouldAnimate = () => {
    clearOngoingTimeout();
    const overflow = checkOverflow();
    setIsOverflowing(overflow);
    return overflow;
  };

  const startAnimation = useCallback(async () => {
    if (!textRef.current || !containerRef.current || isAnimating) return;

    const duration = calculateDuration(); // Calculate the dynamic duration

    // Animate text to the left
    animateLeft(duration);
    timeoutRef.current = setTimeout(() => {
      startPausePhase(); // Start the pause after animating left
    }, duration * 1000);
  }, [animateLeft, calculateDuration, isAnimating, pauseDuration]);

  const handleMouseEnter = () => {
    if (!shouldAnimate()) return;

    if (!hasStarted) {
      setHasStarted(true);
      startAnimation();
    } else if (isAnimating && !isPaused) {
      pauseAnimation();
    }
  };

  const handleMouseLeave = () => {
    if (isPaused && isOverflowing) {
      resumeAnimation();
    }
  };

  useEffect(() => {
    shouldAnimate();
    // Clean up timeouts when the component unmounts
    return () => {
      clearOngoingTimeout();
    };
  }, []);

  // Memoize the renderText function
  const renderedText = useMemo(() => {
    if (underlineStrategy === 'split') {
      return text.split(',').map((word, index) => (
        <span key={index} className="MarqueeText-Content-Text">
          {word.trim()}
        </span>
      ));
    }
    return <span className="MarqueeText-Content-Text">{text}</span>;
  }, [text, underlineStrategy]);

  const isTextOverflowing =
    (textRef.current?.scrollWidth as number) >
      (containerRef.current?.offsetWidth as number) || true;
  const shouldHideRightGradient = animationPhase === 'pause' && isAnimating;

  return (
    <div ref={containerRef} className={clsx('MarqueeText', className)}>
      <p
        ref={textRef}
        style={{ willChange: 'transform' }} // Hinting browser for optimization
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="MarqueeText-Content"
      >
        {renderedText}
      </p>

      <div
        className={clsx(
          `GradientOverlay GradientOverlay-Left`,
          !isAnimating && 'GradientOverlay--Hide',
        )}
      ></div>
      <div
        className={clsx(
          `GradientOverlay GradientOverlay-Right`,
          isTextOverflowing &&
            shouldHideRightGradient &&
            'GradientOverlay--Hide',
        )}
      ></div>
    </div>
  );
};
