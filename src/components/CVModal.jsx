import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export const CVModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = (filename) => {
    const link = document.createElement('a');
    link.href = `/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onClose();
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
      <div className='bg-card relative mx-4 w-full max-w-md rounded-lg p-6 shadow-lg'>
        <button
          onClick={onClose}
          className='text-muted-foreground hover:text-foreground absolute top-4 right-4 cursor-pointer transition-colors'
        >
          <X
            size={20}
            className='hover:text-primary animate-pulse hover:animate-none'
          />
        </button>

        <h3 className='mb-4 text-center text-xl font-semibold'>Download CV</h3>

        <p className='text-muted-foreground mb-6 text-center'>
          Choose your preferred language
        </p>

        <div className='space-y-3'>
          <button
            onClick={() => handleDownload('CV_Ihar_Staliarou_en.pdf')}
            className={cn(
              'bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-lg px-4 py-3 transition-colors duration-300 hover:cursor-pointer'
            )}
          >
            Download English CV
          </button>

          <button
            onClick={() => handleDownload('CV_Ihar_Staliarou_ru.pdf')}
            className={cn(
              'border-primary text-primary hover:bg-primary/10 w-full rounded-lg border px-4 py-3 transition-colors duration-300 hover:cursor-pointer'
            )}
          >
            Download Russian CV
          </button>
        </div>
      </div>
    </div>
  );
};
