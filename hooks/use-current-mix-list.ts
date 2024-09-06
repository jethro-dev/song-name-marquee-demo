import { create } from 'zustand';
import { Mix, placeholderMixes } from '@/constant/data';

type ListState = {
  items: Mix[];
  setItems: (newItems: Mix[] | ((prevItems: Mix[]) => Mix[])) => void;
};

export const useCurrentMixList = create<ListState>((set) => ({
  items: placeholderMixes, // Initial state

  // setItems function that accepts either an array or a function to derive new items from previous items
  setItems: (newItems) =>
    set((state) => ({
      items: typeof newItems === 'function' ? newItems(state.items) : newItems,
    })),
}));

export default useCurrentMixList;
