import emailjs from '@emailjs/browser';

export async function sendContactEmail({ name, email, message }) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('Email service is not configured.');
  }

  return await emailjs.send(
    serviceId,
    templateId,
    {
      from_name: name,
      from_email: email,
      message,
      reply_to: email,
    },
    { publicKey }
  );
}

