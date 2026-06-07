import React, { useState } from 'react';
import { portfolioAPI } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await portfolioAPI.submitContact(formData);
      setStatus({
        type: 'success',
        message: response.message || 'Thank you for your message! I will get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
          #contact-section * {
            font-family: "Outfit", sans-serif;
          }
        `}
      </style>

      <section id="contact" className="bg-white px-4 py-16">
        <div id="contact-section" className="w-full mx-auto flex flex-col md:flex-row max-md:items-center justify-center gap-12 md:gap-16">
          {/* Left Side */}
          <div className="flex flex-col mt-10 max-w-md">
            <p className="text-sm max-md:text-center font-medium text-zinc-500 uppercase mb-2">Get In Touch</p>
            <h1 className="text-5xl max-md:text-center font-bold text-zinc-900 mb-4 leading-tight">Contact <span className="text-indigo-600">Me</span></h1>
            <p className="text-xl/relaxed text-zinc-400 max-md:text-center mb-6">Let's turn your ideas into meaningful products that solve real problems and create real impact.</p>
            <div className="flex items-center max-md:justify-center gap-5 mt-7">
              <a href="https://www.facebook.com/itsshiwad" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-indigo-600 transition-all duration-200 hover:scale-110" aria-label="Facebook">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/itsshiwad/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-indigo-600 transition-all duration-200 hover:scale-110" aria-label="Instagram">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.679-.072-4.948-.2-4.358-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://github.com/Shiwad" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-indigo-600 transition-all duration-200 hover:scale-110" aria-label="GitHub">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
              <a href="https://www.tiktok.com/@radbual" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-indigo-600 transition-all duration-200 hover:scale-110" aria-label="TikTok">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.74-3.94-1.72-.01 2.93-.01 5.85-.02 8.78-.08 1.75-.7 3.51-1.95 4.78-1.49 1.62-3.83 2.44-6.05 2.21-2.21-.13-4.31-1.35-5.35-3.32-1.43-2.62-1.11-6.17 1.02-8.36 1.54-1.68 4.11-2.36 6.32-1.72v4.12c-1.22-.44-2.63-.16-3.57.78-.85.86-1.12 2.23-.6 3.37.47 1.15 1.72 1.88 2.96 1.69 1.15-.1 2.19-.99 2.42-2.14.06-2.73.03-5.46.04-8.19-.01-4.73-.01-9.45-.01-14.18Z"/></svg>
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full max-w-sm border border-zinc-300 rounded-2xl p-8">
            <h2 className="text-base font-medium text-zinc-800 mb-5.5">Send Message</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2.5">
                <label className="text-xs text-zinc-400">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="bg-zinc-50 border border-zinc-300 rounded-lg px-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 outline-none focus:border-zinc-500 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <label className="text-xs text-zinc-400">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="bg-zinc-50 border border-zinc-300 rounded-lg px-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 outline-none focus:border-zinc-500 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <label className="text-xs text-zinc-400">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message.."
                  rows="4"
                  className="bg-zinc-50 border border-zinc-300 rounded-lg px-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 outline-none focus:border-zinc-500 transition-colors resize-none"
                />
              </div>

              {status.message && (
                <div
                  className={`p-4 rounded-lg text-sm ${
                    status.type === 'success'
                      ? 'bg-green-50 text-green-600 border border-green-200'
                      : 'bg-red-50 text-red-600 border border-red-200'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-black hover:bg-black/90 disabled:opacity-50 text-white text-base py-3 rounded-lg transition-colors cursor-pointer mt-1"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
