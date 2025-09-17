import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/lib/emailjs-config';

export const useEmailJS = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = async (params) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const templateParams = {
        from_name: params.name,
        from_email: params.email,
        to_name: 'Ihar Staliarou',
        message: params.message,
        reply_to: params.email,
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      if (response.status === 200) {
        setIsSuccess(true);
        return true;
      } else {
        throw new Error('Failed to send email');
      }
    } catch (err) {
      console.error('EmailJS error:', err);
      const errorMessage = err.message || 'Failed to send message';
      setError(errorMessage);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setIsSubmitting(false);
    setIsSuccess(false);
    setError(null);
  };

  return {
    isSubmitting,
    isSuccess,
    error,
    sendEmail,
    reset,
  };
};