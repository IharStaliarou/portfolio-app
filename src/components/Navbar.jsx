import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { NAV_ITEMS } from '../constants';

export const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

        {/* mobile menu button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className='text-foreground z-50 p-2 md:hidden'
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};
