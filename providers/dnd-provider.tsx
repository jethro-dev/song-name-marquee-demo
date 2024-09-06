'use client';

import { DemoListItem } from '@/components/demo-list';
import { SetListItem } from '@/components/set-list';
import { Mix, Set } from '@/constant/data';
import useCurrentMixList from '@/hooks/use-current-mix-list';
import useCurrentSetList from '@/hooks/use-current-set-list';
import useDragStore from '@/hooks/use-dropped-items';
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { useState } from 'react';
import { toast } from 'sonner';

type Props = {
  children: React.ReactNode;
};

const DndProvider = ({ children }: Props) => {
  // const { addDroppedItem } = useDragStore();
  const mixes = useCurrentMixList((state) => state.items);
  const setMixes = useCurrentMixList((state) => state.setItems);

  const sets = useCurrentSetList((state) => state.items); // Assuming useCurrentSetList hook for sets
  const setSets = useCurrentSetList((state) => state.setItems);

  const [activeId, setActiveId] = useState<string | null>(null);

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5,
    },
  });
  const keyboardSensor = useSensor(KeyboardSensor, {
    coordinateGetter: sortableKeyboardCoordinates,
  });

  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);

  // Add prefix to IDs dynamically when passing them to the DndContext
  const prefixedItems = mixes.map((item) => ({
    ...item,
    id: `mix-${item.id}`, // Add prefix to original id
  }));

  const prefixedSets = sets.map((item) => ({
    ...item,
    id: `set-${item.id}`, // Add prefix to original id
  }));

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!active || !over) {
      setActiveId(null);
      return;
    }

    const activeId = active.id as string; // Remove prefix when processing
    const overId = over.id as string; // Remove prefix when processing

    // If the active and over IDs are the same, that means we are not reordering, we do nothing
    if (activeId !== overId) {
      // Handle mix reordering within the DemoList
      if (activeId.startsWith('mix') && overId.startsWith('mix')) {
        console.log('Handle mix reordering');
        const activeId = active.id.toString().replace('mix-', ''); // Remove prefix when processing
        const overId = over.id.toString().replace('mix-', ''); // Remove prefix when processing
        setMixes((prevItems) => {
          const oldIndex = prevItems.findIndex((item) => item.id === activeId);
          const newIndex = prevItems.findIndex((item) => item.id === overId);
          return arrayMove(prevItems, oldIndex, newIndex);
        });
      }

      // Handle dropping a mix into a set
      else if (activeId.startsWith('mix') && overId.startsWith('set')) {
        const activeMixId = activeId.replace('mix-', '');
        const overSetId = overId.replace('set-', '');

        // Find the mix and the target set
        const mixToAdd = mixes.find((mix) => mix.id === activeMixId);

        console.log('Mix to add: ', mixToAdd);
        console.log('Over set ID: ', overSetId);

        const updatedSets = sets.map((set) => {
          if (set.id === overSetId && mixToAdd) {
            // Add the mix to the set's mixes array
            return {
              ...set,
              mixes: [...set.mixes, mixToAdd],
            };
          }
          return set;
        });

        setSets(updatedSets);
        toast(`Added Mix ID ${activeMixId} to Set ID ${overSetId}`);
      }

      // Handle set reordering within the SetList
      else if (activeId.startsWith('set') && overId.startsWith('set')) {
        console.log('Handle set reordering');
        const activeId = active.id.toString().replace('set-', ''); // Remove prefix when processing
        const overId = over.id.toString().replace('set-', ''); // Remove prefix when processing
        setSets((prevItems) => {
          const oldIndex = prevItems.findIndex((item) => item.id === activeId);
          const newIndex = prevItems.findIndex((item) => item.id === overId);
          return arrayMove(prevItems, oldIndex, newIndex);
        });
      }
    }
  };

  // Identify the active item by checking the prefix of activeId
  const activeItem = (() => {
    if (activeId?.startsWith('mix-')) {
      // If it's a mix item
      return mixes.find((item) => item.id === activeId.replace('mix-', ''));
    } else if (activeId?.startsWith('set-')) {
      // If it's a set item
      return sets.find((item) => item.id === activeId.replace('set-', ''));
    }
    return null;
  })();

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      {children}
      <DragOverlay>
        {/* Determine which type of item is being dragged (mix or set) and render the appropriate component */}
        {activeItem && activeId?.startsWith('mix-') ? (
          <DemoListItem {...(activeItem as Mix)} isDraggingOverlay />
        ) : activeItem && activeId?.startsWith('set-') ? (
          <SetListItem {...(activeItem as Set)} isDraggingOverlay />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default DndProvider;
