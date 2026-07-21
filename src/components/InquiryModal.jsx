import React, { useState, useEffect, useRef } from 'react';

const InquiryModal = ({ isOpen, onClose, productTitle, productImage }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const modalRef = useRef(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  // Close on backdrop click
  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ fullName: '', email: '', company: '', message: '' });
      onClose();
    }, 3000);
  };

  // Reset submitted state when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6"
      onClick={handleBackdropClick}
      style={{ animation: 'fadeIn 0.25s ease-out' }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative bg-white rounded-2xl flex flex-col gap-3 sm:gap-6 md:gap-8 items-start p-4 sm:p-6 md:px-10 w-full max-w-[655px] max-h-[92vh] sm:max-h-[90vh] overflow-y-auto no-scrollbar"
        style={{
          boxShadow: '0 20px 30px rgba(0,0,0,0.15)',
          animation: 'slideUp 0.3s ease-out',
        }}
      >
        {/* Heading */}
        <div className="flex flex-col items-start w-full relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="relative self-end bg-white border border-[#e2e2e2] rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shrink-0 hover:bg-gray-50 hover:border-gray-300 transition-colors cursor-pointer z-50"
            aria-label="Close modal"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-black" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
            </svg>
          </button>

          <h2
            className="text-xl sm:text-3xl lg:text-[40px] text-black tracking-wide mb-1 sm:mb-3 leading-tight lg:leading-[50px]"
            style={{
              fontFamily: '"ADLaM Display", sans-serif',
              fontWeight: 400,
              letterSpacing: '0.37px',
            }}
          >
            Product Inquiry
          </h2>
          <p className="text-[#989898] text-xs sm:text-base tracking-tight" style={{ fontFamily: 'Inter' }}>
            Fill out the form below and our team will respond within 24 business hours
          </p>
        </div>

        {/* Product info card */}
        <div
          className="bg-[#fafafa] border border-[#e2e2e2] rounded-xl sm:rounded-2xl flex items-center gap-3 sm:gap-4 py-2 px-3 sm:py-[15px] sm:px-4 md:py-[19px] md:px-5 w-full"
        >
          <div className="rounded-[8px] sm:rounded-[10px] w-10 h-10 sm:w-[50px] sm:h-[50px] overflow-hidden shrink-0 bg-[#111]">
            <img
              src={productImage}
              alt={productTitle}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-0.5 sm:gap-1 items-start">
            <p className="font-semibold text-[10px] sm:text-xs text-black uppercase tracking-wider" style={{ fontFamily: 'Inter' }}>
              Inquiring About
            </p>
            <p className="text-xs sm:text-sm text-[#989898] font-medium" style={{ fontFamily: 'Inter' }}>
              {productTitle}
            </p>
          </div>
        </div>

        {/* Success state */}
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center gap-4 w-full py-10">
            <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#ff8a00] to-[#ffb200] flex items-center justify-center">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-adlam text-black text-2xl tracking-wide">Inquiry Sent!</h3>
            <p className="text-[#989898] text-sm text-center max-w-xs" style={{ fontFamily: 'Inter' }}>
              Thank you for your interest. Our team will get back to you within 24 business hours.
            </p>
          </div>
        ) : (
          /* Form */
          <form className="flex flex-col gap-2.5 sm:gap-4 md:gap-6 items-start w-full" onSubmit={handleSubmit}>

            <div className="flex flex-col gap-1 sm:gap-2 items-start w-full">
              <label className="text-xs sm:text-sm font-medium text-black tracking-tight" style={{ fontFamily: 'Inter' }}>
                Full Name <span className="text-[#c68a2b]">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="bg-black/[0.04] rounded-xl sm:rounded-2xl px-3.5 py-2 sm:px-4 sm:py-3 w-full text-xs sm:text-base text-black placeholder:text-black/50 tracking-tight outline-none focus:ring-2 focus:ring-[#ffb200]/30 transition-shadow"
                style={{ fontFamily: 'Inter' }}
              />
            </div>

            <div className="flex flex-col gap-1 sm:gap-2 items-start w-full">
              <label className="text-xs sm:text-sm font-medium text-black tracking-tight" style={{ fontFamily: 'Inter' }}>
                Email Address <span className="text-[#c68a2b]">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@company.com"
                required
                className="bg-black/[0.04] rounded-xl sm:rounded-2xl px-3.5 py-2 sm:px-4 sm:py-3 w-full text-xs sm:text-base text-black placeholder:text-black/50 tracking-tight outline-none focus:ring-2 focus:ring-[#ffb200]/30 transition-shadow"
                style={{ fontFamily: 'Inter' }}
              />
            </div>

            <div className="flex flex-col gap-1 sm:gap-2 items-start w-full">
              <label className="text-xs sm:text-sm font-medium text-black tracking-tight" style={{ fontFamily: 'Inter' }}>
                Company Name <span className="text-[#c68a2b]">*</span>
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
                required
                className="bg-black/[0.04] rounded-xl sm:rounded-2xl px-3.5 py-2 sm:px-4 sm:py-3 w-full text-xs sm:text-base text-black placeholder:text-black/50 tracking-tight outline-none focus:ring-2 focus:ring-[#ffb200]/30 transition-shadow"
                style={{ fontFamily: 'Inter' }}
              />
            </div>

            <div className="flex flex-col gap-1 sm:gap-2 items-start w-full">
              <label className="text-xs sm:text-sm font-medium text-black tracking-tight" style={{ fontFamily: 'Inter' }}>
                Message <span className="text-[#c68a2b]">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your inquiry..."
                required
                className="bg-black/[0.04] rounded-xl sm:rounded-2xl px-3.5 py-2 sm:px-4 sm:py-3 w-full text-xs sm:text-base text-black placeholder:text-black/50 tracking-tight outline-none resize-none h-[70px] sm:h-[100px] md:h-[146px] focus:ring-2 focus:ring-[#ffb200]/30 transition-shadow"
                style={{ fontFamily: 'Inter' }}
              />
            </div>

            <button
              type="submit"
              className="bg-black border border-[#1a1a1a] rounded-xl sm:rounded-2xl h-[42px] sm:h-[50px] md:h-[58px] w-full flex items-center justify-center gap-2 text-white text-xs sm:text-base font-semibold tracking-tight hover:bg-[#1a1a1a] active:scale-[0.99] transition-all cursor-pointer"
              style={{ fontFamily: 'Inter' }}
            >
              Send Inquiry
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 2L2 8l6 3 3 6 7-15z" strokeLinejoin="round" />
              </svg>
            </button>

          </form>
        )}
      </div>

      {/* Inline keyframes */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default InquiryModal;
