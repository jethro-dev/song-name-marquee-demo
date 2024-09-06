'use client';
import React, { useState } from 'react';
import {
  Mix,
  placeholderMixes,
  placeholderTrackList,
  Track,
} from '@/constant/data';
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { cn } from '@/lib/utils';
import useCurrentSetList from '@/hooks/use-current-set-list';
import useCurrentMixList from '@/hooks/use-current-mix-list';

type Props = {};

export const DemoList = (props: Props) => {
  const items = useCurrentMixList((state) => state.items);
  // Add the prefix only when passing to SortableContext
  const prefixedItems = items.map((item) => ({
    ...item,
    id: `mix-${item.id}`, // Dynamically add the prefix for DndKit
  }));

  return (
    <SortableContext
      items={prefixedItems}
      strategy={verticalListSortingStrategy}
    >
      <ul className="ring-1 ring-neutral-800 rounded-md p-2 h-full w-full space-y-2 overflow-y-auto overflow-x-hidden relative z-0 bg-background">
        {items.map((item) => (
          <DemoListItem key={item.id} {...item} />
        ))}
      </ul>
    </SortableContext>
  );
};

interface DemoListItemProps extends Mix {
  isDraggingOverlay?: boolean;
}

export const DemoListItem = ({
  id,
  tracks,
  isDraggingOverlay = false,
}: DemoListItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: 'mix-' + id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging && !isDraggingOverlay ? 0.5 : 1, // Hide the original when dragging, keep the overlay visible
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={cn(
        `h-16 px-4 py-2 bg-muted rounded-md cursor-grab border border-neutral-700 flex items-center relative z-0`,
        isDraggingOverlay && 'opacity-100 cursor-grabbing',
      )}
    >
      <div className="w-full flex items-center justify-between">
        {tracks?.slice(0, 2).map((track, index) => (
          <div
            key={track.id}
            className={cn('text-left', index == 1 && 'text-right')}
          >
            <h2 className="font-medium text-sm md:text-base line-clamp-1">
              {track.title}
            </h2>
            <p className="font-light text-xs md:text-sm text-muted-foreground line-clamp-1">
              {track.artist}
            </p>
          </div>
        ))}
      </div>
    </li>
  );
};
