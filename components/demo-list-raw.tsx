'use client';
import React, { useState } from 'react';
import { placeholderTrackList, Track } from '@/constant/data';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { cn } from '@/lib/utils';

type Props = {};

export const DemoListRaw = (props: Props) => {
  const [items, setItems] = useState(placeholderTrackList);

  return (
    <ul className="ring-1 ring-neutral-800 rounded-md p-2 h-full max-w-sm w-full space-y-2 overflow-y-auto overflow-x-hidden">
      <DndContext collisionDetection={closestCenter}>
        {items.map((item) => (
          <DemoListItem key={item.id} {...item} />
        ))}
      </DndContext>
    </ul>
  );
};

interface DemoListItemProps extends Track {
  isDraggingOverlay?: boolean;
}

const DemoListItem = ({ id, title, artist, duration }: DemoListItemProps) => {
  return (
    <li
      className={cn(
        `p-4 bg-muted rounded-md cursor-grab border border-neutral-700`,
      )}
    >
      <h2 className="font-medium">{title}</h2>
      <p className="font-light text-sm text-muted-foreground">
        {artist} - {duration} seconds
      </p>
    </li>
  );
};
