'use client';
import { cn } from '@/lib/utils';
import { useDroppable } from '@dnd-kit/core';
type Props = {
  id: string;
  children: React.ReactNode;
};
export const Droppable = ({ id, children }: Props) => {
  const { setNodeRef, isOver, active, node, over, rect } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className={cn(
        `h-full w-full transition-colors duration-200`,
        isOver ? 'bg-white/[0.05]' : 'bg-transparent',
      )}
    >
      {children}
    </div>
  );
};
