import React, { useState, useEffect, useRef } from 'react';

const partnerOptions = [
  'General/All',
  'Apex Gaming Solutions',
  'SecurePay Tech',
  'Venue Masters',
  'Excel Gaming Studio',
];

const PartnerInquiryModal = ({ isOpen, onClose, preselectedPartner = '' }) => {
  const [formData, setFormData] = useState({
    partner: 'General/All',
    fullName: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const modalRef = useRef(null);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpenDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Set preselected partner when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setIsOpenDropdown(false);
      setFormData((prev) => ({
        ...prev,
        partner: preselectedPartner && partnerOptions.includes(preselectedPartner)
          ? preselectedPartner
          : 'General/All',
      }));
    }
  }, [isOpen, preselectedPartner]);

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
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ partner: 'General/All', fullName: '', email: '', company: '', message: '' });
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
      onClick={handleBackdropClick}
      style={{ animation: 'partnerFadeIn 0.25s ease-out' }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative bg-white rounded-2xl flex flex-col gap-8 items-start px-6 py-6 md:px-10 w-full max-w-[655px] max-h-[90vh] overflow-y-auto"
        style={{
          boxShadow: '0 20px 30px rgba(0,0,0,0.15)',
          animation: 'partnerSlideUp 0.3s ease-out',
        }}
      >
        {/* Heading */}
        <div className="flex flex-col items-start w-full relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="relative self-end bg-white border border-[#e2e2e2] rounded-full w-10 h-10 flex items-center justify-center shrink-0 hover:bg-gray-50 hover:border-gray-300 transition-colors cursor-pointer z-50"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5 text-black" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
            </svg>
          </button>

          <h2
            className="text-[40px] text-black tracking-wide mb-3"
            style={{
              fontFamily: '"ADLaM Display", sans-serif',
              fontWeight: 400,
              lineHeight: '50px',
              letterSpacing: '0.37px',
            }}
          >
            Partner Inquiry
          </h2>
          <p className="text-[#989898] text-base tracking-tight" style={{ fontFamily: 'Inter' }}>
            Fill out the form below and our team will respond within 24 business hours
          </p>
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
          <form className="flex flex-col gap-6 items-start w-full mb-[10px]" onSubmit={handleSubmit}>

            {/* Select Partner */}
            <div className="flex flex-col gap-2 items-start w-full">
              <label className="text-sm font-medium text-black tracking-tight" style={{ fontFamily: 'Inter' }}>
                Select Partner <span className="text-[#c68a2b]">*</span>
              </label>
              <div className="relative w-full" ref={dropdownRef}>
                {/* Trigger Button */}
                <button
                  type="button"
                  onClick={() => setIsOpenDropdown(!isOpenDropdown)}
                  className="w-full flex items-center justify-between bg-black/[0.04] rounded-2xl px-4 py-3 text-base font-medium text-black tracking-tight outline-none transition-shadow cursor-pointer text-left"
                  style={{ fontFamily: 'Inter' }}
                >
                  <span>{formData.partner}</span>
                  <svg
                    className="w-5 h-5 text-black/60 shrink-0"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Custom Expanded Dropdown List */}
                {isOpenDropdown && (
                  <div
                    className="absolute left-0 top-0 w-full bg-[#e2e2e2] rounded-[24px] p-3 z-50 flex items-start gap-[10px] shadow-[0_12px_30px_rgba(0,0,0,0.15)] transition-all"
                    style={{
                      animation: 'partnerDropdownOpen 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    {/* Options List */}
                    <div className="flex-1 flex flex-col gap-1 items-start">
                      {partnerOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, partner: opt }));
                            setIsOpenDropdown(false);
                          }}
                          className={`w-full text-left py-1 px-3 rounded-lg text-[16px] leading-[24px] font-medium tracking-[-0.31px] transition-all duration-150 cursor-pointer focus:outline-none ${
                            formData.partner === opt
                              ? 'text-black font-semibold'
                              : 'text-black/70 hover:text-black hover:bg-black/5'
                          }`}
                          style={{ fontFamily: 'Inter' }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>

                    {/* Arrow Button */}
                    <button
                      type="button"
                      onClick={() => setIsOpenDropdown(false)}
                      className="rounded-[20px] w-10 h-10 flex items-center justify-center shrink-0 hover:bg-black/5 cursor-pointer focus:outline-none mt-0"
                    >
                      <svg
                        className="w-5 h-5 text-black"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path d="M15 13l-5-5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Full Name */}
            <div className="flex flex-col gap-2 items-start w-full">
              <label className="text-sm font-medium text-black tracking-tight" style={{ fontFamily: 'Inter' }}>
                Full Name <span className="text-[#c68a2b]">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="bg-black/[0.04] rounded-2xl px-4 py-3 w-full text-base text-black placeholder:text-black/50 tracking-tight outline-none focus:ring-2 focus:ring-[#ffb200]/30 transition-shadow"
                style={{ fontFamily: 'Inter' }}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2 items-start w-full">
              <label className="text-sm font-medium text-black tracking-tight" style={{ fontFamily: 'Inter' }}>
                Email Address <span className="text-[#c68a2b]">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@company.com"
                required
                className="bg-black/[0.04] rounded-2xl px-4 py-3 w-full text-base text-black placeholder:text-black/50 tracking-tight outline-none focus:ring-2 focus:ring-[#ffb200]/30 transition-shadow"
                style={{ fontFamily: 'Inter' }}
              />
            </div>

            {/* Company */}
            <div className="flex flex-col gap-2 items-start w-full">
              <label className="text-sm font-medium text-black tracking-tight" style={{ fontFamily: 'Inter' }}>
                Company Name <span className="text-[#c68a2b]">*</span>
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
                required
                className="bg-black/[0.04] rounded-2xl px-4 py-3 w-full text-base text-black placeholder:text-black/50 tracking-tight outline-none focus:ring-2 focus:ring-[#ffb200]/30 transition-shadow"
                style={{ fontFamily: 'Inter' }}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2 items-start w-full">
              <label className="text-sm font-medium text-black tracking-tight" style={{ fontFamily: 'Inter' }}>
                Message <span className="text-[#c68a2b]">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your inquiry..."
                required
                className="bg-black/[0.04] rounded-2xl px-4 py-3 w-full text-base text-black placeholder:text-black/50 tracking-tight outline-none resize-none h-[146px] focus:ring-2 focus:ring-[#ffb200]/30 transition-shadow"
                style={{ fontFamily: 'Inter' }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-black border border-[#1a1a1a] rounded-2xl h-[58px] w-full flex items-center justify-center gap-2 text-white text-base font-semibold tracking-tight hover:bg-[#1a1a1a] active:scale-[0.99] transition-all cursor-pointer"
              style={{ fontFamily: 'Inter' }}
            >
              Send Inquiry
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 2L2 8l6 3 3 6 7-15z" strokeLinejoin="round" />
              </svg>
            </button>

          </form>
        )}
      </div>

      {/* Inline keyframes */}
      <style>{`
        @keyframes partnerFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes partnerSlideUp {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes partnerDropdownOpen {
          from { opacity: 0; transform: scaleY(0.95); transform-origin: top; }
          to { opacity: 1; transform: scaleY(1); transform-origin: top; }
        }
      `}</style>
    </div>
  );
};

export default PartnerInquiryModal;
