'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/theme/ModeToggle';
import { NAV_LIST } from '@/constants';
import { useEffect, useState } from 'react';

export const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false); // 배경색 투명 조건

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed z-40 flex w-full flex-col items-center justify-center border-b bg-white shadow-xs dark:bg-black print:hidden',
        isScrolled
          ? 'bg-white/80 backdrop-blur-xs dark:bg-black/80'
          : 'bg-white dark:bg-black'
      )}
    >
      <div className="flex h-[var(--header-height)] w-full max-w-[var(--container-max-width)] items-center justify-between px-[var(--container-px)]">
        <div className="flex items-center font-medium">
          {NAV_LIST.map((navItem) => (
            <Link
              href={navItem.href}
              key={navItem.name}
              className={cn(
                'rounded-full px-4 py-1 text-center text-sm transition-colors hover:text-primary',
                pathname === navItem.href
                  ? 'bg-muted font-medium text-primary'
                  : 'text-muted-foreground'
              )}
            >
              {navItem.name}
            </Link>
          ))}
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};
