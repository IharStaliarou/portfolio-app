import { Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { CONTACT_INFORMATION_ITEMS, CONTACT_SECTION_ITEMS } from '../constants';
import { useEmailJS } from '../hooks/use-emailjs';

export const ContactSection = () => {
  const { toast } = useToast();
  const { isSubmitting, sendEmail } = useEmailJS();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await sendEmail(formData);

    if (success) {
      toast({
        title: 'Message sent!',
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } else {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again later.',
        variant: 'destructive',
      });
    }
  };
  return (
    <section id='contact' className='bg-secondary/30 relative px-4 py-24'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='mb-4 text-center text-3xl font-bold md:text-4xl'>
          Get In <span className='text-primary'> Touch</span>
        </h2>

        <p className='text-muted-foreground mx-auto mb-12 max-w-2xl text-center'>
          Have a project in mind or want to collaborate? Feel free to reach out.
          I&apos;m always open to discussing new opportunities.
        </p>

        <div className='grid grid-cols-1 gap-12 md:grid-cols-2'>
          <div className='space-y-8'>
            <h3 className='mb-6 text-2xl font-semibold'>
              {' '}
              Contact Information
            </h3>

            <div className='justify-center space-y-6'>
              {CONTACT_INFORMATION_ITEMS.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className='flex items-start space-x-4'>
                    <div className='bg-primary/10 rounded-full p-3'>
                      <IconComponent className='text-primary h-6 w-6' />
                    </div>
                    <div>
                      <h4 className='text-start font-medium'>{item.title}</h4>
                      <a
                        href={item.href}
                        className='text-muted-foreground hover:text-primary transition-colors'
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className='pt-8'>
              <h4 className='mb-4 font-medium'> Connect With Me</h4>
              <div className='flex justify-center space-x-4'>
                {CONTACT_SECTION_ITEMS.map((item, index) => {
                  const IconComponent = item.component;
                  return (
                    <a
                      key={index}
                      href={item.link}
                      target='_blank'
                      className='hover:text-primary animate-bounce hover:animate-none'
                    >
                      <IconComponent />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            className='bg-card rounded-lg p-8 shadow-xs'
            onSubmit={handleSubmit}
          >
            <h3 className='mb-6 text-2xl font-semibold'> Send a Message</h3>

            <form className='space-y-6' onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor='name'
                  className='mb-2 block text-sm font-medium'
                >
                  Your Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  min={2}
                  max={20}
                  required
                  className='border-input bg-background foucs:ring-2 focus:ring-primary w-full rounded-md border px-4 py-3 focus:outline-hidden'
                  placeholder='Mark Isaev'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='mb-2 block text-sm font-medium'
                >
                  Your Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className='border-input bg-background foucs:ring-2 focus:ring-primary w-full rounded-md border px-4 py-3 focus:outline-hidden'
                  placeholder='mark.isaev@gmail.com'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='mb-2 block text-sm font-medium'
                >
                  Your Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className='border-input bg-background foucs:ring-2 focus:ring-primary w-full resize-none rounded-md border px-4 py-3 focus:outline-hidden'
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className={cn(
                  'cosmic-button flex w-full items-center justify-center gap-2'
                )}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
