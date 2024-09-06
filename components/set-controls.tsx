'use client';
import React from 'react';
import { Button } from './ui/button';
import { Ellipsis, Play, Plus, Star } from 'lucide-react';

type Props = {};

export const SetControls = (props: Props) => {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="space-x-2">
        <Button variant="outline" size="icon" onClick={() => {}}>
          <Play className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={() => {}}>
          <Star className="h-4 w-4" />
        </Button>
      </div>
      <div className="space-x-2">
        <Button variant="ghost" size="icon" onClick={() => {}}>
          <Ellipsis className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default SetControls;
