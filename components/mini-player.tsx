'use client';
import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';
import { MarqueeText } from './marquee-text-old';

type Props = {};

export const MiniPlayer = (props: Props) => {
  return (
    <div className="relative overflow-hidden w-1/2 mx-auto group border-border border flex items-center justify-between p-4 rounded-lg gap-2.5">
      <div className="flex items-center justify-start gap-2.5">
        <div className="bg-red-500 rounded-full size-10"></div>

        <div className="w-[185px] ring-1 overflow-hidden">
          <MarqueeText
            text="Open The Door (That's Not My Neighbor Song) song by Justin Bieber, Billie Ellish"
            className="font-medium hover:underline"
            underlineStrategy="split"
          />
          <MarqueeText
            text="Justin Bieber, Billie Ellish, Travis Scott, Taylor Swift, The Weekend"
            underlineStrategy="split"
            className="hover:underline text-sm font-light text-muted-foreground"
          />

          <MarqueeText
            text="Open The Door"
            className="font-medium hover:underline"
          />
        </div>
      </div>

      <div>buttons</div>
    </div>
  );
};
