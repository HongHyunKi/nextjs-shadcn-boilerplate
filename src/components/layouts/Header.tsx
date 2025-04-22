'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/theme/ModeToggle';
import { NAV_LIST } from '@/constants';

export const Header = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed z-40 flex w-full flex-col items-center justify-center border-b bg-white shadow-sm dark:bg-black print:hidden">
      <div className="flex h-[var(--header-height)] w-full max-w-[var(--container-max-width)] items-center justify-between px-[var(--container-px)]">
        <div className="flex items-center font-medium">
          {NAV_LIST.map((navItem) => (
            <Link
              href={navItem.href}
              key={navItem.name}
              className={cn(
                'rounded-full px-4 py-1 text-center text-sm transition-colors hover:text-primary',
                pathname?.startsWith(navItem.href)
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
