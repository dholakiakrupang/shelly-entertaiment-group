import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import AnimateOnScroll from '../components/AnimateOnScroll';



const EmailIcon = () => (
  <svg className="w-5 h-5 text-[#ff8a00]" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.3359 2.66602H2.66927C1.93289 2.66602 1.33594 3.26297 1.33594 3.99935V11.9993C1.33594 12.7357 1.93289 13.3327 2.66927 13.3327H13.3359C14.0723 13.3327 14.6693 12.7357 14.6693 11.9993V3.99935C14.6693 3.26297 14.0723 2.66602 13.3359 2.66602Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.6693 4.66602L8.68927 8.46602C8.48345 8.59497 8.24548 8.66336 8.0026 8.66336C7.75973 8.66336 7.52176 8.59497 7.31594 8.46602L1.33594 4.66602" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5 text-[#ff8a00]" viewBox="0 48 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.665 59.2807V61.2807C14.6657 61.4664 14.6277 61.6502 14.5533 61.8203C14.479 61.9904 14.3699 62.1431 14.233 62.2686C14.0962 62.3941 13.9347 62.4897 13.7588 62.5492C13.5829 62.6087 13.3966 62.6308 13.2117 62.614C11.1602 62.3911 9.18966 61.6901 7.45833 60.5674C5.84755 59.5438 4.48189 58.1782 3.45833 56.5674C2.33165 54.8282 1.63049 52.848 1.41166 50.7874C1.395 50.603 1.41691 50.4172 1.47599 50.2418C1.53508 50.0664 1.63004 49.9052 1.75484 49.7685C1.87964 49.6318 2.03153 49.5225 2.20086 49.4477C2.37018 49.3729 2.55322 49.3342 2.73833 49.334H4.73833C5.06187 49.3309 5.37552 49.4454 5.62084 49.6564C5.86615 49.8674 6.02638 50.1603 6.07166 50.4807C6.15608 51.1208 6.31263 51.7492 6.53833 52.354C6.62802 52.5927 6.64744 52.852 6.59427 53.1013C6.5411 53.3506 6.41757 53.5795 6.23833 53.7607L5.39166 54.6074C6.3407 56.2764 7.72263 57.6583 9.39166 58.6074L10.2383 57.7607C10.4196 57.5815 10.6484 57.4579 10.8977 57.4048C11.1471 57.3516 11.4064 57.371 11.645 57.4607C12.2498 57.6864 12.8783 57.843 13.5183 57.9274C13.8422 57.9731 14.1379 58.1362 14.3494 58.3857C14.5608 58.6352 14.6731 58.9538 14.665 59.2807Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AddressIcon = () => (
  <svg className="w-5 h-5 text-[#ff8a00]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.6693 8.33268C16.6693 12.4935 12.0534 16.8268 10.5034 18.1652C10.359 18.2738 10.1833 18.3325 10.0026 18.3325C9.82194 18.3325 9.64617 18.2738 9.50177 18.1652C7.95177 16.8268 3.33594 12.4935 3.33594 8.33268C3.33594 6.56457 4.03832 4.86888 5.28856 3.61864C6.5388 2.36839 8.23449 1.66602 10.0026 1.66602C11.7707 1.66602 13.4664 2.36839 14.7166 3.61864C15.9669 4.86888 16.6693 6.56457 16.6693 8.33268Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 10.834C11.3807 10.834 12.5 9.7147 12.5 8.33398C12.5 6.95327 11.3807 5.83398 10 5.83398C8.61929 5.83398 7.5 6.95327 7.5 8.33398C7.5 9.7147 8.61929 10.834 10 10.834Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DropdownIcon = () => (
  <svg className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-black/60" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SubmitIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M18 2L2 8l6 3 3 6 7-15z" strokeLinejoin="round" />
  </svg>
);

/* ──────────────────── Contact Info Card ──────────────────── */
const ContactInfoCard = ({ icon, title, subtitle, value, href }) => {
  const isLink = !!href;
  const ValueElement = isLink ? 'a' : 'p';

  return (
    <div className="bg-white border border-[#e2e2e2] rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 flex gap-3 md:gap-4 items-start w-full">
      <div
        className="rounded-lg sm:rounded-[14px] w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center border border-[rgba(255,138,0,0.1)] shrink-0"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(255,106,0,0.1) 0%, rgba(255,178,0,0.1) 100%)',
        }}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-1 sm:gap-2 items-start min-w-0">
        <div>
          <h3 className="font-bold text-xs sm:text-base md:text-lg text-black tracking-tight mb-0.5 md:mb-1" style={{ fontFamily: 'Inter' }}>
            {title}
          </h3>
          <p className="text-[#989898] text-[10px] sm:text-xs md:text-sm tracking-tight" style={{ fontFamily: 'Inter' }}>
            {subtitle}
          </p>
        </div>
        <ValueElement
          href={isLink ? href : undefined}
          className={`font-medium text-xs sm:text-sm text-[#777777] tracking-tight truncate w-full ${
            isLink ? 'hover:text-[#ff8a00] transition-colors duration-200' : ''
          }`}
          style={{ fontFamily: 'Inter', color: '#777777' }}
        >
          {value}
        </ValueElement>
      </div>
    </div>
  );
};

const inquiryOptions = [
  'General Inquiry',
  'Sales',
  'Support',
  'Partnership',
];

/* ──────────────────── Contact Us Page Component ──────────────────── */
function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    inquiryType: 'General Inquiry',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white text-[#0c0c0d] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-b from-[#0a0a0b] to-[#0f0f10] flex items-center justify-center px-5 md:px-8 lg:px-12 xl:px-[94px] pt-20 sm:pt-24 md:pt-32 lg:pt-[167px] pb-6 sm:pb-8 md:pb-[50px] min-h-[200px] sm:min-h-[260px] md:min-h-[341px]">
        <div className="flex flex-col gap-4 sm:gap-6 items-center relative w-full max-w-[1252px]">


          <AnimateOnScroll animation="fade-up" className="flex flex-col gap-6 items-center w-full">
            {/* Badge */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[24px] px-3.5 py-[5px] sm:px-[15px] sm:py-[7px] flex items-center gap-1.5 sm:gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-b from-[#ff6a00] to-[#ffb200] inline-block"></span>
              <span className="text-[#b5b5b5] text-xs sm:text-sm tracking-tight" style={{ fontFamily: 'Inter' }}>
                Get In Touch
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-adlam text-white text-2xl sm:text-3xl md:text-5xl lg:text-[56px] xl:text-[64px] leading-tight md:leading-[60px] lg:leading-[70px] xl:leading-[74px] tracking-wide text-center">
              Contact Us
            </h1>
          </AnimateOnScroll>

          {/* Description */}
          <AnimateOnScroll animation="fade-up" delay={200} as="p"
            className="text-[#FAFAFA] text-xs sm:text-base md:text-lg leading-4 sm:leading-6 md:leading-7 tracking-tight text-center max-w-[738px]"
            style={{ fontFamily: 'Inter', color: '#FAFAFA' }}
          >
            Have a question or need more information? Get in touch with the Liberty Rewards team using the inquiry form below or reach out through our sales and support channels.
          </AnimateOnScroll>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="bg-white w-full overflow-hidden">
        <div className="max-w-[1440px] mx-auto w-full py-[30px] md:py-[50px] px-5 md:px-8 lg:px-12 xl:px-[94px] flex flex-col lg:flex-row gap-[24px] md:gap-[36px] items-start justify-center">
          {/* Contact Information Cards */}
          <AnimateOnScroll animation="fade-right" className="flex flex-col gap-3 sm:gap-5 md:gap-8 items-start w-full lg:w-[440px] shrink-0">
            <h2 className="font-adlam text-black text-xl sm:text-2xl md:text-3xl tracking-wide">Contact Information</h2>

            <div className="flex flex-col gap-2.5 sm:gap-3 md:gap-5 items-start w-full">
              <ContactInfoCard
                icon={<EmailIcon />}
                title="Sales Contact"
                subtitle="For product demos and commercial inquiries"
                value="sales@libertyrewards.com"
                href="mailto:sales@libertyrewards.com"
              />
              <ContactInfoCard
                icon={<EmailIcon />}
                title="Support Contact"
                subtitle="For technical assistance and compliance"
                value="support@libertyrewards.com"
                href="mailto:support@libertyrewards.com"
              />
              <ContactInfoCard
                icon={<PhoneIcon />}
                title="Direct Phone Support"
                subtitle="Available Mon-Fri, 9am - 5pm EST"
                value="+1 (555) 123-4567"
                href="tel:+15551234567"
              />
              <ContactInfoCard
                icon={<AddressIcon />}
                title="Corporate Location"
                subtitle="Liberty Rewards HQ"
                value="1234 Digital Blvd, Tech City, TC 90210"
              />
            </div>
          </AnimateOnScroll>

          {/* Inquiry Form */}
          {isSubmitted ? (
            <div className="flex-1 w-full bg-white border border-[#e2e2e2] rounded-xl sm:rounded-[24px] p-5 md:p-12 flex flex-col items-center justify-center text-center gap-4 min-h-[350px] md:min-h-[500px]" style={{ boxShadow: '0 0 10px rgba(0,0,0,0.05)' }}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#ff6a00] to-[#ffb200] flex items-center justify-center text-white mb-2">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 10l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-adlam text-black text-xl sm:text-2xl tracking-wide">Thank You!</h3>
              <p className="text-gray-500 text-xs sm:text-base max-w-sm" style={{ fontFamily: 'Inter' }}>
                Your inquiry has been submitted successfully, {formData.fullName}. Our team will review it and get back to you within 24 business hours.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ fullName: '', email: '', company: '', inquiryType: 'General Inquiry', message: '' });
                }}
                className="mt-2 text-[#ff8a00] hover:text-[#ffb200] font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
                style={{ fontFamily: 'Inter' }}
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <div className="flex-1 w-full bg-white border border-[#e2e2e2] rounded-xl sm:rounded-[24px] p-4 sm:p-6 md:p-[40px]" style={{ boxShadow: '0 0 10px rgba(0,0,0,0.05)' }}>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 sm:gap-6 w-full">
                {/* Full Name */}
                <div className="flex flex-col gap-1 sm:gap-2 items-start w-full">
                  <label className="text-xs sm:text-sm font-medium text-black tracking-tight" style={{ fontFamily: 'Inter' }}>
                    Full Name <span className="text-[#ff8a00]">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-black/[0.04] rounded-xl sm:rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 w-full text-xs sm:text-sm text-black placeholder:text-black/50 tracking-tight outline-none focus:ring-2 focus:ring-[#ffb200]/30 transition-shadow"
                    style={{ fontFamily: 'Inter' }}
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-1 sm:gap-2 items-start w-full">
                  <label className="text-xs sm:text-sm font-medium text-black tracking-tight" style={{ fontFamily: 'Inter' }}>
                    Email Address <span className="text-[#ff8a00]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className="bg-black/[0.04] rounded-xl sm:rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 w-full text-xs sm:text-sm text-black placeholder:text-black/50 tracking-tight outline-none focus:ring-2 focus:ring-[#ffb200]/30 transition-shadow"
                    style={{ fontFamily: 'Inter' }}
                  />
                </div>

                {/* Company Name */}
                <div className="flex flex-col gap-1 sm:gap-2 items-start w-full">
                  <label className="text-xs sm:text-sm font-medium text-black tracking-tight" style={{ fontFamily: 'Inter' }}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Ltd."
                    className="bg-black/[0.04] rounded-xl sm:rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 w-full text-xs sm:text-sm text-black placeholder:text-black/50 tracking-tight outline-none focus:ring-2 focus:ring-[#ffb200]/30 transition-shadow"
                    style={{ fontFamily: 'Inter' }}
                  />
                </div>

                {/* Inquiry Type Custom Dropdown */}
                <div className="flex flex-col gap-1 sm:gap-2 items-start w-full">
                  <label className="text-xs sm:text-sm font-medium text-black tracking-tight" style={{ fontFamily: 'Inter' }}>
                    Inquiry Type <span className="text-[#ff8a00]">*</span>
                  </label>
                  <div ref={dropdownRef} className="relative w-full">
                    <button
                      type="button"
                      onClick={() => setIsOpenDropdown(!isOpenDropdown)}
                      className="bg-black/[0.04] rounded-xl sm:rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 w-full text-xs sm:text-sm text-left text-black tracking-tight outline-none flex items-center justify-between border-none focus:ring-2 focus:ring-[#ffb200]/30 transition-shadow cursor-pointer"
                      style={{ fontFamily: 'Inter' }}
                    >
                      <span>{formData.inquiryType}</span>
                      <svg
                        className={`w-4 h-4 text-black/50 transition-transform duration-300 ${isOpenDropdown ? 'rotate-180' : ''}`}
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path d="M5 7.5l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    {isOpenDropdown && (
                      <div
                        className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#e2e2e2] rounded-2xl overflow-hidden z-50 flex flex-col"
                        style={{
                          boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                          animation: 'dropdownOpen 200ms ease-out forwards',
                        }}
                      >
                        <div className="max-h-[160px] overflow-y-auto flex flex-col py-2">
                          {inquiryOptions.map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => {
                                setFormData((prev) => ({ ...prev, inquiryType: opt }));
                                setIsOpenDropdown(false);
                              }}
                              className={`w-full text-left px-5 py-2.5 text-sm hover:bg-black/[0.03] transition-colors focus:outline-none cursor-pointer ${
                                formData.inquiryType === opt ? 'text-[#ff8a00] font-medium' : 'text-black'
                              }`}
                              style={{ fontFamily: 'Inter' }}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1 sm:gap-2 items-start w-full mb-[2px] sm:mb-[6px]">
                  <label className="text-xs sm:text-sm font-medium text-black tracking-tight" style={{ fontFamily: 'Inter' }}>
                    Message <span className="text-[#ff8a00]">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    rows="3"
                    className="bg-black/[0.04] rounded-xl sm:rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 w-full text-xs sm:text-sm text-black placeholder:text-black/50 tracking-tight outline-none resize-none h-[90px] sm:h-[126px] focus:ring-2 focus:ring-[#ffb200]/30 transition-shadow"
                    style={{ fontFamily: 'Inter' }}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="rounded-xl sm:rounded-2xl py-2.5 sm:py-[15px] w-full flex items-center justify-center gap-2 sm:gap-3 text-white text-xs sm:text-sm font-semibold tracking-tight border border-[#1a1a1a] bg-black btn-dark-fill cursor-pointer"
                  style={{
                    fontFamily: 'Inter',
                  }}
                >
                  <span>Submit Inquiry</span>
                  <SubmitIcon />
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Dropdown Keyframes */}
      <style>{`
        @keyframes dropdownOpen {
          from { opacity: 0; transform: scaleY(0.95); transform-origin: top; }
          to { opacity: 1; transform: scaleY(1); transform-origin: top; }
        }
      `}</style>
    </div>
  );
}

export default ContactUs;
