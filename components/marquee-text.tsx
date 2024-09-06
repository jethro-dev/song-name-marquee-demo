'use client';
import React, {
  useRef,
  useReducer,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import { cn } from '@/lib/utils';

/**
 * MarqueeText component props
 */
type MarqueeTextProps = {
  /** The text to be animated */
  text: string;
  /** Speed of the animation in pixels per second */
  baseSpeed?: number;
  /** Duration of the pause at the end of the scroll, in seconds */
  pauseDuration?: number;
  /** Additional classes for customization */
  className?: string;
  /** Strategy for underlining text ('default' for the entire text, 'split' for individual words) */
  underlineStrategy?: 'default' | 'split';
};

/**
 * Internal state structure for MarqueeText component
 */
type State = {
  isPaused: boolean;
  isAnimating: boolean;
  remainingDuration: number;
  isOverflowing: boolean;
  animationPhase: 'left' | 'pause' | 'right' | 'idle';
};

/**
 * Action types for the reducer
 */
type Action =
  | { type: 'PAUSE'; remainingDuration: number }
  | { type: 'RESUME'; startTime: number }
  | { type: 'START_ANIMATION' }
  | { type: 'END_ANIMATION' }
  | { type: 'SET_OVERFLOWING'; isOverflowing: boolean }
  | { type: 'SET_PHASE'; phase: 'left' | 'pause' | 'right' | 'idle' };

const initialState: State = {
  isPaused: false,
  isAnimating: false,
  remainingDuration: 0,
  isOverflowing: false,
  animationPhase: 'idle',
};

/**
 * Reducer function to manage the state of the MarqueeText component
 */
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'PAUSE':
      return {
        ...state,
        isPaused: true,
        remainingDuration: action.remainingDuration,
      };
    case 'RESUME':
      return { ...state, isPaused: false };
    case 'START_ANIMATION':
      return { ...state, isAnimating: true };
    case 'END_ANIMATION':
      return { ...state, isAnimating: false, animationPhase: 'idle' };
    case 'SET_OVERFLOWING':
      return { ...state, isOverflowing: action.isOverflowing };
    case 'SET_PHASE':
      return { ...state, animationPhase: action.phase };
    default:
      return state;
  }
}

/**
 * MarqueeText component animates text horizontally across the screen.
 * It can pause on hover and resume when the mouse leaves.
 */
export const MarqueeText: React.FC<MarqueeTextProps> = ({
  text,
  baseSpeed = 200,
  pauseDuration = 1,
  className,
  underlineStrategy = 'default',
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  /**
   * Delays the execution for a specified time
   * @param ms - milliseconds to delay
   */
  const delay = (ms: number) =>
    new Promise((resolve) => {
      timeoutRef.current = setTimeout(resolve, ms);
    });

  /**
   * Clears any ongoing timeouts
   */
  const clearOngoingTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  /**
   * Checks if the text overflows its container
   * @returns boolean - true if the text overflows, false otherwise
   */
  const checkOverflow = (): boolean => {
    if (!containerRef.current || !textRef.current) return false;
    return textRef.current.scrollWidth > containerRef.current.offsetWidth;
  };

  /**
   * Calculates the duration of the animation based on the text length and base speed
   * @returns number - duration in seconds
   */
  const calculateDuration = useCallback((): number => {
    if (!containerRef.current || !textRef.current) return 0;
    const distance =
      textRef.current.scrollWidth - containerRef.current.offsetWidth;
    return distance / baseSpeed;
  }, [baseSpeed]);

  /**
   * Animates the text to the left
   * @param duration - duration in seconds for the animation
   */
  const animateLeft = useCallback(
    (duration: number) => {
      if (!textRef.current || !containerRef.current) return;
      clearOngoingTimeout(); // Clear any ongoing timeout before starting a new one

      const textElement = textRef.current;
      textElement.style.transition = `transform ${duration}s linear`;
      textElement.style.transform = `translateX(calc((100% - ${containerRef.current.offsetWidth}px) * -1))`;

      dispatch({ type: 'START_ANIMATION' });
      dispatch({ type: 'SET_PHASE', phase: 'left' });

      timeoutRef.current = setTimeout(() => {
        console.log('Left animation complete, starting pause phase...');
        startPausePhase();
      }, duration * 1000);
    },
    [containerRef],
  );

  /**
   * Animates the text back to the right (start position)
   * @param duration - duration in seconds for the animation
   */
  const animateRight = useCallback(
    (duration: number) => {
      if (!textRef.current || !containerRef.current) return;
      const textElement = textRef.current;
      textElement.style.transition = `transform ${duration}s linear`;
      textElement.style.transform = `translateX(0)`;

      dispatch({ type: 'START_ANIMATION' });
      dispatch({ type: 'SET_PHASE', phase: 'right' });

      timeoutRef.current = setTimeout(() => {
        handleAnimationEnd();
      }, duration * 1000);
    },
    [containerRef],
  );

  /**
   * Calculates the remaining duration for the current animation
   * @returns number - remaining duration in seconds
   */
  const calculateRemainingDuration = (): number => {
    if (!textRef.current || !containerRef.current) return 0;

    const computedStyle = window.getComputedStyle(textRef.current);
    const matrix = new DOMMatrixReadOnly(computedStyle.transform);
    const currentX = matrix.m41; // Get current X translation

    const fullDistance =
      textRef.current.scrollWidth - containerRef.current.offsetWidth;
    const remainingDistance =
      state.animationPhase === 'left' ? fullDistance + currentX : -currentX;

    return remainingDistance / baseSpeed;
  };

  /**
   * Pauses the animation and calculates the remaining duration
   */
  const pauseAnimation = () => {
    if (!textRef.current || !state.isAnimating) return;

    const computedStyle = window.getComputedStyle(textRef.current);
    const matrix = new DOMMatrixReadOnly(computedStyle.transform);
    const currentX = matrix.m41; // Get current X translation

    textRef.current.style.transition = 'none';
    textRef.current.style.transform = `translateX(${currentX}px)`;

    const remainingTime = calculateRemainingDuration();
    dispatch({ type: 'PAUSE', remainingDuration: remainingTime });

    clearOngoingTimeout();
  };

  /**
   * Resumes the paused animation from where it left off
   */
  const resumeAnimation = () => {
    if (!textRef.current || !state.isPaused) return;

    const translateDirection =
      state.animationPhase === 'left'
        ? `translateX(calc((100% - ${
            containerRef.current!.offsetWidth
          }px) * -1))`
        : 'translateX(0)';

    textRef.current.style.transition = `transform ${state.remainingDuration}s linear`;
    textRef.current.style.transform = translateDirection;

    dispatch({ type: 'RESUME', startTime: Date.now() });

    timeoutRef.current = setTimeout(
      state.animationPhase === 'left' ? startPausePhase : handleAnimationEnd,
      state.remainingDuration * 1000,
    );
  };

  /**
   * Handles the pause phase, waiting for a specified duration before starting the right animation
   */
  const startPausePhase = async () => {
    clearOngoingTimeout(); // Ensure no other timeouts interfere
    console.log('Entering pause phase...');
    dispatch({ type: 'SET_PHASE', phase: 'pause' });
    await delay(pauseDuration * 1000);
    console.log('Pause phase complete, starting right animation...');
    startRightAnimation();
  };

  /**
   * Starts the animation to move the text back to the start position
   */
  const startRightAnimation = () => {
    clearOngoingTimeout(); // Clear any existing timeouts
    const duration = calculateDuration();
    console.log('Starting right animation...');
    animateRight(duration);
  };

  /**
   * Marks the animation as ended and moves the text back to idle state
   */
  const handleAnimationEnd = () => {
    clearOngoingTimeout(); // Clear timeout to prevent unexpected behavior
    console.log('Animation ended, transitioning to idle...');
    dispatch({ type: 'END_ANIMATION' });
    textRef.current!.style.transition = 'none'; // Reset transition
    textRef.current!.style.transform = 'translateX(0)'; // Reset transform
  };

  /**
   * Determines whether the text should animate based on overflow status
   * @returns boolean - true if animation should start, false otherwise
   */
  const shouldAnimate = (): boolean => {
    clearOngoingTimeout();
    const overflow = checkOverflow();
    dispatch({ type: 'SET_OVERFLOWING', isOverflowing: overflow });
    return overflow;
  };

  /**
   * Starts the left animation if the text overflows and the animation has not started
   */
  const startAnimation = useCallback(async () => {
    if (!textRef.current || !containerRef.current || state.isAnimating) return;

    const duration = calculateDuration();

    animateLeft(duration);
  }, [animateLeft, calculateDuration, state.isAnimating]);

  /**
   * Handles mouse enter event, starting or pausing the animation based on state
   */
  const handleMouseEnter = () => {
    if (!shouldAnimate()) return;

    if (state.animationPhase === 'idle') {
      startAnimation();
    } else if (!state.isPaused) {
      pauseAnimation();
    }
  };

  /**
   * Handles mouse leave event, resuming the animation if it was paused
   */
  const handleMouseLeave = () => {
    if (state.isPaused && state.isOverflowing) {
      resumeAnimation();
    }
  };

  /**
   * Memoized rendering of the text with the underline strategy applied
   */
  const renderedText = useMemo(() => {
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
  }, [text, underlineStrategy]);

  /**
   * Handles component mount, checking overflow and starting animation if necessary
   */
  useEffect(() => {
    const overflow = checkOverflow();
    dispatch({ type: 'SET_OVERFLOWING', isOverflowing: overflow });
    if (overflow) {
      startAnimation();
    }
    return () => {
      clearOngoingTimeout();
    };
  }, [startAnimation]);

  useEffect(() => {
    console.log({ ...state });
  }, [state]);

  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden', className)}
    >
      <p
        ref={textRef}
        style={{ willChange: 'transform' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="whitespace-pre inline-block cursor-pointer"
      >
        {renderedText}
      </p>
    </div>
  );
};
