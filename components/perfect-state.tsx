'use client';
import React, { useRef, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

type MarqueeTextProps = {
  text: string;
  baseSpeed?: number; // Pixels per second
  pauseDuration?: number; // Pause duration at the end before scrolling back
  className?: string; // Additional classes for customization
  underlineStrategy?: 'default' | 'split'; // New prop for underline strategy
};

export const MarqueeText: React.FC<MarqueeTextProps> = ({
  text,
  baseSpeed = 200, // Default speed of 100 pixels per second
  pauseDuration = 1,
  className,
  underlineStrategy = 'default',
}) => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPaused, setIsPaused] = useState(false);
  const [isReturning, setIsReturning] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Clear the active timeout if any
  const clearActiveTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // Calculate duration based on scroll distance and speed
  const calculateDuration = useCallback(
    (scrollDistance: number) => scrollDistance / baseSpeed,
    [baseSpeed],
  );

  // Start the animation to scroll text left
  const animateLeft = useCallback((duration: number) => {
    if (textRef.current && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      textRef.current.style.transition = `transform ${duration}s linear`;
      textRef.current.style.transform = `translateX(calc(-100% + ${containerWidth}px))`;
      setIsReturning(false);
    }
  }, []);

  // Start the animation to scroll text right (back to start)
  const animateRight = useCallback((duration: number) => {
    if (textRef.current) {
      textRef.current.style.transition = `transform ${duration}s linear`;
      textRef.current.style.transform = `translateX(0)`;
      setIsReturning(true);
    }
  }, []);

  // Reset all states after the animation completes
  const resetAnimationState = useCallback(() => {
    setIsPaused(false);
    setIsReturning(false);
    setAnimationStarted(false);
    clearActiveTimeout(); // Clear any leftover timeout
  }, []);

  // Trigger the scrolling animations
  const animateScroll = useCallback(() => {
    if (textRef.current && containerRef.current) {
      const textWidth = textRef.current.scrollWidth;
      const containerWidth = containerRef.current.offsetWidth;

      // If text is not overflowing, no need to animate
      if (textWidth <= containerWidth) return;

      const scrollDistance = textWidth - containerWidth;
      const duration = calculateDuration(scrollDistance);

      // Start the left scroll animation
      animateLeft(duration);

      // After scrolling left, pause, then scroll back
      timeoutRef.current = setTimeout(() => {
        if (!isPaused) {
          timeoutRef.current = setTimeout(() => {
            animateRight(duration);
            timeoutRef.current = setTimeout(
              () => resetAnimationState(),
              duration * 1000,
            );
          }, pauseDuration * 1000);
        }
      }, duration * 1000);
    }
  }, [
    animateLeft,
    animateRight,
    calculateDuration,
    pauseDuration,
    isPaused,
    resetAnimationState,
  ]);

  // Handle mouse enter: start animation or pause/resume
  const handleMouseEnter = () => {
    if (textRef.current && containerRef.current) {
      const textWidth = textRef.current.scrollWidth;
      const containerWidth = containerRef.current.offsetWidth;

      if (textWidth <= containerWidth) return;

      if (!animationStarted) {
        setAnimationStarted(true);
        animateScroll();
      } else if (!isPaused) {
        setIsPaused(true);
        clearActiveTimeout(); // Clear any active timeout
        const computedStyle = window.getComputedStyle(textRef.current);
        const matrix = new DOMMatrix(computedStyle.transform);
        const currentX = matrix.m41;
        textRef.current.style.transition = '';
        textRef.current.style.transform = `translateX(${currentX}px)`;
      }
    }
  };

  // Handle mouse leave: resume paused animation
  const handleMouseLeave = () => {
    if (isPaused && textRef.current && containerRef.current) {
      setIsPaused(false);
      const textWidth = textRef.current.scrollWidth;
      const containerWidth = containerRef.current.offsetWidth;
      const scrollDistance = textWidth - containerWidth;
      const computedStyle = window.getComputedStyle(textRef.current);
      const matrix = new DOMMatrix(computedStyle.transform);
      const currentX = matrix.m41;
      const remainingDistance = isReturning
        ? currentX
        : scrollDistance + currentX;
      const remainingDuration = Math.abs(remainingDistance) / baseSpeed;

      textRef.current.style.transition = `transform ${remainingDuration}s linear`;
      if (isReturning) {
        textRef.current.style.transform = `translateX(0)`;
      } else {
        textRef.current.style.transform = `translateX(calc(-100% + ${containerWidth}px))`;
      }

      // Resume animation with the correct timing
      timeoutRef.current = setTimeout(() => {
        animateScroll();
      }, remainingDuration * 1000);
    }
  };

  // Render text with the correct underline strategy
  const renderText = () => {
    if (underlineStrategy === 'split') {
      return text.split(',').map((word, index) => (
        <span
          key={index}
          className="inline-block whitespace-pre hover:underline after:content-[','] last:after:content-[''] mr-0.5"
        >
          {word.trim()}
        </span>
      ));
    }
    return <span className="hover:underline">{text}</span>;
  };

  return (
    <div
      className={cn('relative overflow-hidden', className)}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      ref={containerRef}
      style={{ willChange: 'transform' }} // Hinting browser for optimization
    >
      <p
        ref={textRef}
        className="marquee-text whitespace-pre inline-block cursor-pointer"
      >
        {renderText()}
      </p>
    </div>
  );
};
