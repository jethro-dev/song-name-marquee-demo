import { create } from 'zustand';

interface SidebarState {
  isOpen: boolean;

  toggle: () => void;
  open: () => void;
  close: () => void;
}

function isMobileDevice(): boolean {
  return /Mobi|Android/i.test(navigator.userAgent);
}

export const useSidebar = create<SidebarState>()((set) => ({
  isOpen: !isMobileDevice(), // Set to false if mobile
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  open: () => set((state) => ({ isOpen: true })),
  close: () => set((state) => ({ isOpen: false })),
}));
