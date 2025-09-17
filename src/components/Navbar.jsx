import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { NAV_ITEMS } from '../constants';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        `fixed top-0 right-0 left-0 z-50 w-full py-4 transition-all duration-300`,
        isScrolled ? 'bg-background/80 backdrop-blur-lg' : 'bg-transparent'
      )}
    >
      <div className='container flex items-center justify-between'>
        <a
          className='text-primary flex items-center text-xl font-bold'
          href='#hero'
        >
          <span className='relative z-10'>
            <span className='text-glow text-foreground'>IharStaliarou</span>
            Dev
          </span>
        </a>

        {/* desktop nav */}
        <div className='hidden space-x-4 md:flex'>
          {NAV_ITEMS.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className='text-foreground/80 hover:text-primary p-2 transition-colors duration-300'
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* mobile nav */}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className='text-foreground z-50 p-2 md:hidden'
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{' '}
        </button>

        <div
          className={cn(
            'bg-background/95 backdroup-blur-md fixed inset-0 z-40 flex flex-col items-center justify-center',
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
          </div>
        </div>
      </div>
    </nav>
  );
};
