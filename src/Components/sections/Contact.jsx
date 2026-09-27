import React, { useState, useCallback } from 'react';
import { useInView } from '../../hooks/useInView';
import { Button } from '../ui/Button';
import { personalInfo } from '../../data/personalInfo';
import { sendContactEmail } from '../../utils/emailjs';
import { 
  MdEmail, 
  MdPhone, 
  MdLocationOn, 
  MdSend,
  MdContentCopy
} from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const Contact = () => {
  const [contactRef] = useInView({ threshold: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await sendContactEmail({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  }, [formData.email, formData.message, formData.name]);

  const copyToClipboard = useCallback(async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setSubmitStatus(`${type} copied!`);
      setTimeout(() => setSubmitStatus(''), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }, []);

  return (
    <section ref={contactRef} id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto section-shell">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 comic-title comic-text-shadow">
            Get In <span className="text-primary-600">Touch</span>
          </h2>
          <div className="speech-bubble inline-block max-w-2xl">
            Feel free to reach out for collaborations, opportunities, or a quick hello.
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="comic-panel rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary-600 mb-6 comic-title">Let's Connect</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-300">
                  <MdEmail className="text-2xl text-primary-600 flex-shrink-0" />
                  <div className="flex-1">
                    <a
                      href={`mailto:${personalInfo.contact.email}`}
                      className="hover:text-primary-600"
                    >
                      {personalInfo.contact.email}
                    </a>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalInfo.contact.email, 'Email')}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                    aria-label="Copy email"
                  >
                    <MdContentCopy className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-4 text-gray-300">
                  <MdPhone className="text-2xl text-primary-600 flex-shrink-0" />
                  <div className="flex-1">{personalInfo.contact.phone}</div>
                  <button
                    onClick={() => copyToClipboard(personalInfo.contact.phone, 'Phone')}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                    aria-label="Copy phone"
                  >
                    <MdContentCopy className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-4 text-gray-300">
                  <MdLocationOn className="text-2xl text-primary-600 flex-shrink-0" />
                  <div className="flex-1">{personalInfo.contact.location}</div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="comic-button inline-flex items-center gap-2 px-6 py-3 text-white"
                >
                  <FaLinkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="comic-button inline-flex items-center gap-2 px-6 py-3 text-white"
                >
                  <FaGithub className="w-5 h-5" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="comic-panel rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary-600 mb-6 comic-title">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#121212] border border-[#303030] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors duration-200"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#121212] border border-[#303030] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#121212] border border-[#303030] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors duration-200 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full comic-button"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <MdSend />
                      Send Message
                    </span>
                  )}
                </Button>

                {submitStatus && (
                  <div
                    className={`p-4 rounded-lg text-center ${
                      submitStatus === 'success' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                        : 'bg-red-500/20 text-red-400 border border-red-500/50'
                    }`}
                  >
                    {submitStatus === 'success' 
                      ? 'Message sent successfully! I\'ll get back to you soon.' 
                      : submitStatus.includes('copied')
                      ? submitStatus
                      : 'Failed to send message. Please try again.'}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
