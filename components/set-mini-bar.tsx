'use client';
import { useMinibar } from '@/hooks/use-set-mini-bar';
import { cn } from '@/lib/utils';
import React from 'react';
import SetControls from './set-controls';

type Props = {};

export const SetMinibar = (props: Props) => {
  const isOpen = useMinibar((state) => state.isOpen);
  return (
    <div
      className={cn(
        'sticky top-0 z-40 w-full bg-black border-b border-border h-14 flex items-center justify-between  text-white px-4 md:px-6 transition-all duration-300',
        isOpen ? 'opacity-100' : 'opacity-0 -mt-14',
      )}
    >
      <div>
        <h2 className="font-bold">Hello, World!</h2>
        <p className="text-xs font-light text-muted-foreground">
          Artist names...
        </p>
      </div>
      <SetControls />
    </div>
  );
};
