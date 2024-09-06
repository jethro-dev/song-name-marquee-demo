import { create } from 'zustand';
import { Set, placeholderSets } from '@/constant/data';

type ListState = {
  items: Set[];
  setItems: (newItems: Set[] | ((prevItems: Set[]) => Set[])) => void;
};

export const useCurrentSetList = create<ListState>((set) => ({
  items: placeholderSets, // Initial state

  // setItems function that accepts either an array or a function to derive new items from previous items
  setItems: (newItems) =>
    set((state) => ({
      items: typeof newItems === 'function' ? newItems(state.items) : newItems,
    })),
}));

export default useCurrentSetList;
