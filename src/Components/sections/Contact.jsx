import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../../data/personalInfo';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSend = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_rnu3n0g';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!templateId || !publicKey) {
      setTimeout(() => {
        setLoading(false);
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      }, 1000);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          to_name: personalInfo.name
        },
        publicKey
      );
      setStatus({ type: 'success', message: 'Message delivered! I will reply soon.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', message: 'Failed to send. Please email me directly.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacts" className="py-12 sm:py-16 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto font-mono relative">
      {/* Background Dotted Matrix Pattern with float */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-8 -left-6 w-20 h-28 dotted-matrix -z-10 pointer-events-none" 
      />

      {/* Section Header with Responsive Line */}
      <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center"
        >
          <span className="text-[#C778DD]">#</span>contacts
        </motion.h2>

        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-[1px] bg-[#C778DD] origin-left flex-1 max-w-[140px] sm:max-w-xs" 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        
        {/* Left Column: Description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7 space-y-4 sm:space-y-5 text-xs sm:text-base leading-relaxed text-[#ABB2BF]"
        >
          <p>
            I'm interested in full-time front-end engineering roles, contract opportunities, and freelance projects. However, if you have other requests or questions, don't hesitate to reach out!
          </p>

          <div className="pt-2">
            <motion.button
              whileHover={{ scale: 1.04, x: 2 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => setShowModal(true)}
              className="retro-btn cursor-pointer text-xs sm:text-sm py-2.5 px-4 shadow-[0_0_12px_rgba(199,120,221,0.2)] inline-flex items-center gap-2"
            >
              <span>Send Direct Message</span>
              <span className="text-sm">✉</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Right Column: Outline Box "Message me here" */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="md:col-span-5 flex justify-start md:justify-end w-full"
        >
          <div className="border border-[#ABB2BF]/60 hover:border-[#C778DD] transition-all duration-300 p-5 sm:p-6 bg-[#282C33] w-full max-w-sm space-y-3.5 sm:space-y-4 text-xs sm:text-sm shadow-md hover:shadow-[0_0_20px_rgba(199,120,221,0.15)]">
            <div className="text-white font-semibold text-xs tracking-wider flex items-center justify-between pb-2 border-b border-[#ABB2BF]/20">
              <span>Message me here</span>
              <span className="w-2 h-2 bg-[#98C379] rounded-full animate-ping" />
            </div>

            {/* Phone */}
            <motion.a
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.96 }}
              href={`tel:${personalInfo.contact.phone}`}
              className="flex items-center gap-3 text-[#ABB2BF] hover:text-white transition-colors group py-1"
            >
              <FaPhoneAlt className="w-4 h-4 text-[#C778DD] group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="truncate">{personalInfo.contact.phone}</span>
            </motion.a>

            {/* Email */}
            <motion.a
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.96 }}
              href={`mailto:${personalInfo.contact.email}`}
              className="flex items-center gap-3 text-[#ABB2BF] hover:text-white transition-colors group py-1"
            >
              <FaEnvelope className="w-4 h-4 text-[#C778DD] group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="truncate">{personalInfo.contact.email}</span>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.96 }}
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-[#ABB2BF] hover:text-white transition-colors group py-1"
            >
              <FaLinkedin className="w-4 h-4 text-[#C778DD] group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="truncate">linkedin/in/kppraveen</span>
            </motion.a>

            {/* GitHub */}
            <motion.a
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.96 }}
              href={personalInfo.contact.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-[#ABB2BF] hover:text-white transition-colors group py-1"
            >
              <FaGithub className="w-4 h-4 text-[#C778DD] group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="truncate">github/praveenkp1510</span>
            </motion.a>
          </div>
        </motion.div>

      </div>

      {/* Quick Email Modal with AnimatePresence */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="border border-[#C778DD] p-5 sm:p-8 bg-[#282C33] w-full max-w-lg max-h-[92vh] overflow-y-auto relative font-mono shadow-[0_0_30px_rgba(199,120,221,0.25)] z-10"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-[#ABB2BF] hover:text-white text-sm cursor-pointer p-1"
              >
                [✕]
              </button>

              <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 flex items-center gap-1.5">
                <span className="text-[#C778DD]">#</span>send-message
              </h3>
              <p className="text-xs text-[#ABB2BF] mb-5 sm:mb-6">
                Fill out the details below to reach out directly.
              </p>

              {status.message && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-3 mb-4 text-xs border ${
                    status.type === 'success' 
                      ? 'border-emerald-500 text-emerald-300 bg-emerald-950/40' 
                      : 'border-rose-500 text-rose-300 bg-rose-950/40'
                  }`}
                >
                  {status.message}
                </motion.div>
              )}

              <form onSubmit={handleSend} className="space-y-4">
                <div>
                  <label className="block text-xs text-[#ABB2BF] mb-1">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-3 py-2 bg-[#282C33] border border-[#ABB2BF]/50 text-white text-sm focus:outline-none focus:border-[#C778DD] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#ABB2BF] mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-3 py-2 bg-[#282C33] border border-[#ABB2BF]/50 text-white text-sm focus:outline-none focus:border-[#C778DD] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#ABB2BF] mb-1">Message</label>
                  <textarea
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message here..."
                    className="w-full px-3 py-2 bg-[#282C33] border border-[#ABB2BF]/50 text-white text-sm focus:outline-none focus:border-[#C778DD] transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="retro-btn-gray text-xs sm:text-sm py-2 px-3.5 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={loading}
                    className="retro-btn text-xs sm:text-sm py-2 px-3.5 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? 'Sending...' : 'Send Message ->'}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
