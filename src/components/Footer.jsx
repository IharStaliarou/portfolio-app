import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className='bg-card border-border relative mt-12 flex flex-wrap items-center justify-between border-t px-4 py-12 pt-8'>
      {' '}
      <p className='text-muted-foreground text-sm'>
        {' '}
        &copy; {new Date().getFullYear()} IharStaliarouDev.co. All rights
        reserved.
      </p>
      <a
        href='#hero'
        className='bg-primary/10 hover:bg-primary/20 text-primary rounded-full p-2 transition-colors'
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
