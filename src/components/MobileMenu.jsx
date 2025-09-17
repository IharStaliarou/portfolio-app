import { cn } from '@/lib/utils';
import { NAV_ITEMS } from '../constants';
import { ThemeToggle } from './ThemeToggle';

export const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      className={cn(
        'bg-background/95 fixed inset-0 z-40 flex flex-col items-center justify-center backdrop-blur-lg',
        'transition-all duration-300 md:hidden',
        isMenuOpen
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0'
      )}
    >
      <div className='flex flex-col space-y-8 text-xl'>
        {NAV_ITEMS.map((item, key) => (
          <a
            key={key}
            href={item.href}
            className='text-foreground/80 hover:text-primary transition-colors duration-300'
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}
        <div className=''>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};
