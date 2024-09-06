'use client';
import { placeholderSets, Set } from '@/constant/data';
import { useState } from 'react';
import { Button } from './ui/button';
import { Ellipsis, MenuIcon } from 'lucide-react';
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { cn } from '@/lib/utils';
import { CSS } from '@dnd-kit/utilities';
import useCurrentSetList from '@/hooks/use-current-set-list';

type Props = {};

export const SetList = (props: Props) => {
  const items = useCurrentSetList((state) => state.items);

  const prefixedItems = items.map((item) => ({
    ...item,
    id: `set-${item.id}`, // Add prefix to original id
  }));

  return (
    <SortableContext
      items={prefixedItems}
      strategy={verticalListSortingStrategy}
    >
      <ul className="space-y-1.5 overflow-y-auto pb-4">
        {items.map((set) => (
          <SetListItem key={set.id} {...set} />
        ))}
      </ul>
    </SortableContext>
  );
};

export const SetListItem = ({
  id,
  name,
  mixes,
  isDraggingOverlay = false,
}: { isDraggingOverlay?: boolean } & Set) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
    isOver,
    over,
    overIndex,
  } = useSortable({ id: `set-${id}` });
  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging && !isDraggingOverlay ? 0.5 : 1, // Hide the original when dragging, keep the overlay visible
  };

  // Apply the hover style based on the `isOver` state
  const hoverStyle = isOver ? 'bg-neutral-800' : 'bg-neutral-900';
  return (
    <li
      ref={setNodeRef} // Use setNodeRef to mark this item as both draggable and droppable
      style={style}
      {...attributes} // Pass down attributes for draggable behavior
      {...listeners} // Pass down listeners for dragging events
      className={cn(
        'bg-neutral-900 border-border border h-14 px-4 py-2 rounded-lg flex justify-between items-center cursor-pointer', // Do not add a custom transition and duration to it becasue it will be handled by DndKit, if we add manually it will conflict with DndKit and cause unexpected flickering
        isDraggingOverlay && 'opacity-100 cursor-grabbing',
        hoverStyle,
      )}
    >
      <div className="flex items-center">
        <div className="size-8 bg-gradient-radial from-black to-blue-500 rounded-full mr-2"></div>
        <div>
          <h2 className="font-medium text-sm line-clamp-1">{name}</h2>
          <p className="text-xs font-light text-muted-foreground line-clamp-1">
            {mixes.length} Mixes
          </p>
        </div>
      </div>

      <div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {}}
          className="w-auto h-auto p-2"
        >
          <Ellipsis className="h-4 w-4" />
        </Button>
      </div>
    </li>
  );
};
