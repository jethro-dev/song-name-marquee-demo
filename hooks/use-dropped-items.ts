import { create } from 'zustand';
import { Mix } from '@/constant/data';

type DragState = {
  droppedItems: Mix[];
  addDroppedItem: (item: Mix) => void;
  removeItem: (itemId: string) => void;
};

const useDragStore = create<DragState>((set) => ({
  droppedItems: [],
  addDroppedItem: (item) =>
    set((state) => ({
      droppedItems: [...state.droppedItems, item],
    })),
  removeItem: (itemId) =>
    set((state) => ({
      droppedItems: state.droppedItems.filter((item) => item.id !== itemId),
    })),
}));

export default useDragStore;
