import { useEffect, RefObject } from 'react';

interface SwipeOptions {
  closeDirection?: 'left' | 'right'; // Choose the direction that closes the aside
  verticalThreshold?: number; // Minimum vertical distance to ignore swipe (default: 1px)
}

export const useSwipe = (
  ref: RefObject<HTMLElement>, // Ref to the target element (e.g., an aside)
  isAsideOpen: boolean,
  onOpen: () => void,
  onClose: () => void,
  options: SwipeOptions = {}, // Provide an empty object as the default value for `options`
) => {
  useEffect(() => {
    let startX: number;
    let startY: number;
    let touchStartedInAside = false;

    // Destructure with default values inside the useEffect
    const { closeDirection = 'left', verticalThreshold = 50 } = options;

    const handleTouchStart = (e: TouchEvent) => {
      // const targetElement = ref.current;
      // if (!targetElement) return;

      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;

      // // Check if the touch started inside the element bound by the ref
      // if (targetElement.contains(e.target as Node)) {
      //   touchStartedInAside = true;
      // } else {
      //   touchStartedInAside = false;
      // }
    };

    const handleTouchMove = (e: TouchEvent) => {
      // if (!touchStartedInAside) return; // Only handle swipe if touch started in the element

      const touchX = e.touches[0].clientX;
      const touchY = e.touches[0].clientY;
      const horizontalDifference = touchX - startX;
      const verticalDifference = Math.abs(touchY - startY);

      // Ignore swipe if vertical movement exceeds the threshold
      if (verticalDifference > verticalThreshold) return;

      if (closeDirection === 'left' && startX - touchX > 100 && isAsideOpen) {
        // Close on swipe left
        onClose();
      } else if (
        closeDirection === 'right' &&
        horizontalDifference > 100 &&
        isAsideOpen
      ) {
        // Close on swipe right
        onClose();
      } else if (horizontalDifference > 100 && !isAsideOpen) {
        // Open on swipe right
        onOpen();
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [ref, isAsideOpen, onOpen, onClose, options]);
};
