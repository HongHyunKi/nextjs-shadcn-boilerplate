'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/theme/ModeToggle';

const navList = [{ name: 'Home', href: '/' }];

export const Header = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed z-40 flex w-full flex-col items-center justify-center border-b bg-background shadow-sm print:hidden">
      <div className="mt-1 flex h-[64px] w-full max-w-[1200px] items-center justify-between px-4">
        <div className="flex items-center font-medium">
          {navList.map((navItem) => (
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
