'use client';
import React from 'react';
import { Button } from './ui/button';
import {
  AirplayIcon,
  CompassIcon,
  Ellipsis,
  HeartIcon,
  HomeIcon,
  Library,
  MenuIcon,
  Music2Icon,
  Plus,
} from 'lucide-react';
import Link from 'next/link';
import { useSwipe } from '@/hooks/use-swipe';
import { useSidebar } from '@/hooks/use-sidebar';
import { Droppable } from './droppable';
import useDragStore from '@/hooks/use-dropped-items';
import { DemoListItem } from './demo-list';
import { SetList } from './set-list';
import { StemIcon } from './stem-icon';

type Props = {};

const Sidebar = (props: Props) => {
  const ref = React.useRef<HTMLElement>(null);
  const isOpen = useSidebar((state) => state.isOpen);
  const toggle = useSidebar((state) => state.toggle);
  const open = useSidebar((state) => state.open);
  const close = useSidebar((state) => state.close);
  const { droppedItems } = useDragStore();

  useSwipe(ref, isOpen, open, close);

  return (
    <aside
      ref={ref}
      className={`z-0 h-[100dvh] border-muted transition-all duration-200 ${
        isOpen ? 'w-[20rem] border-r' : 'w-0 border-none'
      }`}
    >
      <div className="w-[20rem] h-full pt-2 pb-4 flex flex-col">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <Button variant="ghost" size="icon" onClick={toggle}>
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
        <nav className="mt-4 space-y-1 px-4">
          <Link
            href="/"
            onClick={close}
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
            prefetch={true}
          >
            <HomeIcon className="h-5 w-5" />
            Home
          </Link>
          <Link
            href="/demo"
            onClick={close}
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
            prefetch={true}
          >
            <CompassIcon className="h-5 w-5" />
            Discover
          </Link>
          <Link
            href="/"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
            prefetch={true}
          >
            <Library className="h-5 w-5" />
            Sets
          </Link>
          <Link
            href="/"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
            prefetch={true}
          >
            <HeartIcon className="h-5 w-5" />
            Favorites
          </Link>
        </nav>

        <div className="relative mx-4 h-full flex flex-col overflow-auto z-0">
          <div className="flex items-center justify-between mb-2 h-10">
            <h3 className="text-xs text-muted-foreground font-light">
              Your Sets
            </h3>
            <div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {}}
                className="w-auto h-auto p-2"
              >
                <Plus className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {}}
                className="w-auto h-auto p-2"
              >
                <Ellipsis className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <SetList />
          <div className="absolute top-8 w-full bg-gradient-to-b from-background to-transparent h-6 z-10"></div>
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-background to-transparent h-6 z-10"></div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
