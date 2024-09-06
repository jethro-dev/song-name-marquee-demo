'use client';
import React, { useEffect, useState, useRef } from 'react';
import SetControls from './set-controls';
import { cn } from '@/lib/utils';
import { useMinibar } from '@/hooks/use-set-mini-bar';

type Props = {};

export const SetHeader = (props: Props) => {
  const [isInView, setIsInView] = useState(true);
  const openMinibar = useMinibar((state) => state.open);
  const closeMinibar = useMinibar((state) => state.close);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      {
        root: null, // Observing within the viewport
        rootMargin: '00px', // Trigger earlier (50px before the component is fully visible)
        threshold: 0.1, // Trigger when 10% of the element is visible
      },
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      closeMinibar();
    } else {
      openMinibar();
    }
  }, [isInView]);

  console.log('isInView', isInView);
  return (
    <div
      ref={componentRef}
      className={cn(
        `relative h-80 text-7xl p-4 flex-shrink-0 mb-2 flex flex-col transition-all duration-300 bg-gradient-to-br from-blue-500 to-red-500`,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-0"></div>
      <div className="relative z-0 h-full flex flex-col">
        <h2 className="font-bold transition-all duration-300">Hello, World!</h2>
        <p className="text-white transition-all duration-300 text-3xl font-light">
          Artist names...
        </p>
        <div className="mt-auto">
          <SetControls />
        </div>
      </div>
    </div>
  );
};
