import { useState } from 'react';
import { AREAS_OF_ACTIVITY } from '../constants';
import { CVModal } from './CVModal';

export const AboutSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id='about' className='relative px-4 py-24'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='mb-12 text-center text-3xl font-bold md:text-4xl'>
          About <span className='text-primary'> Me</span>
        </h2>

        <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2'>
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold'>
              Passionate Web Developer & Tech Creator
            </h3>

            <p className='text-muted-foreground'>
              With one year of web development experience, I specialize in
              building responsive, accessible, and performant web applications
              using modern technologies.
            </p>

            <p className='text-muted-foreground'>
              I am passionate about creating elegant solutions to complex
              problems and am constantly learning new technologies and
              techniques to stay on the cutting edge of the ever-changing web
              landscape.
            </p>

            <div className='flex flex-col justify-center gap-4 pt-4 sm:flex-row'>
              <a href='#contact' className='cosmic-button'>
                Get In Touch
              </a>

              <button
                onClick={handleOpenModal}
                className='border-primary text-primary hover:bg-primary/10 rounded-full border px-6 py-2 transition-colors duration-300'
              >
                Download CV
              </button>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-6'>
            {AREAS_OF_ACTIVITY.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className='gradient-border card-hover p-6'>
                  <div className='flex items-start gap-4'>
                    <div className='bg-primary/10 rounded-full p-3'>
                      <IconComponent className='text-primary h-6 w-6' />
                    </div>
                    <div className='text-left'>
                      <h4 className='text-lg font-semibold'>{item.title}</h4>
                      <p className='text-muted-foreground'>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <CVModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </section>
  );
};
