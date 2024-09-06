'use client';
import React from 'react';
import { Button } from './ui/button';
import { BellIcon, MenuIcon, Music2Icon, SearchIcon } from 'lucide-react';
import { Input } from './ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useSidebar } from '@/hooks/use-sidebar';
import Link from 'next/link';
import { StemIcon } from './stem-icon';

type Props = {};

export const Header = (props: Props) => {
  const isAsideOpen = useSidebar((state) => state.isOpen);
  const toggleAside = useSidebar((state) => state.toggle);
  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between border-b border-muted bg-background px-4 md:px-6">
      <div className="flex items-center gap-4 flex-1">
        {!isAsideOpen && (
          <Button
            variant="ghost"
            size="icon"
            className=""
            onClick={toggleAside}
          >
            <MenuIcon className="h-6 w-6" />
          </Button>
        )}
        <Link href="/" className="flex items-center gap-2" prefetch={true}>
          <StemIcon className="size-8" />
          <span className="text-base font-bold">STEM.FM</span>
        </Link>
        <div>
          <div className="relative flex-1">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for artists, songs, and more"
              className="w-full rounded-full pl-8 pr-4 bg-white/[0.02] focus:bg-white/[0.1] text-muted-foreground transition-colors search-cancel:appearance-none"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <BellIcon className="h-5 w-5" />
        </Button>
        <Avatar className="h-8 w-8 border">
          <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
          <AvatarFallback>AC</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};
