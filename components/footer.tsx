import React from 'react';
import { Button } from './ui/button';
import {
  FastForwardIcon,
  PlayIcon,
  RepeatIcon,
  RewindIcon,
  ShuffleIcon,
  Volume2Icon,
} from 'lucide-react';
import { MarqueeText } from './marquee-text-old';
import { Slider } from './ui/slider';

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className="sticky bottom-0 z-10 flex h-20 shrink-0 items-center justify-between border-t border-muted bg-background px-4 md:px-6 overflow-hidden">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <ShuffleIcon className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <RepeatIcon className="h-5 w-5" />
        </Button>
        <div className="w-[185px] overflow-hidden relative">
          <MarqueeText
            text="Open The Door (That's Not My Neighbor Song) song by Justin Bieber, Billie Ellish"
            className="font-medium text-foreground"
            // underlineStrategy="split"
          />
          <MarqueeText
            text="Justin Bieber, Billie Ellish, Travis Scott, Taylor Swift, The Weekend"
            underlineStrategy="split"
            className=" text-sm font-light text-muted-foreground"
          />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center gap-4">
        <Button variant="ghost" size="icon">
          <RewindIcon className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <PlayIcon className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <FastForwardIcon className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Volume2Icon className="h-5 w-5" />
        </Button>
        <Slider
          defaultValue={[50]}
          min={0}
          max={100}
          step={1}
          className="w-24 [&>span:first-child]:h-1 [&>span:first-child]:bg-muted-foreground [&_[role=slider]]:bg-primary [&_[role=slider]]:w-3 [&_[role=slider]]:h-3 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-primary [&_[role=slider]:focus-visible]:ring-0 [&_[role=slider]:focus-visible]:ring-offset-0 [&_[role=slider]:focus-visible]:scale-105 [&_[role=slider]:focus-visible]:transition-transform"
        />
      </div>
    </footer>
  );
};
