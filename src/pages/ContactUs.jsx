import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

/* ──────────────────── SVG Icons ──────────────────── */
const BackArrowIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M10 3L5 8l5 5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

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
  <svg className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-black/60" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SubmitIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M18 2L2 8l6 3 3 6 7-15z" strokeLinejoin="round" />
  </svg>
);

/* ──────────────────── Contact Info Card ──────────────────── */
const ContactInfoCard = ({ icon, title, subtitle, value, href }) => {
  const isLink = !!href;
  const ValueElement = isLink ? 'a' : 'p';

  return (
    <div className="bg-white border border-[#e2e2e2] rounded-2xl p-6 flex gap-4 items-start w-full">
      <div
        className="rounded-[14px] w-11 h-11 flex items-center justify-center border border-[rgba(255,138,0,0.1)] shrink-0"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(255,106,0,0.1) 0%, rgba(255,178,0,0.1) 100%)',
        }}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-2 items-start">
        <div>
          <h3 className="font-bold text-lg text-black tracking-tight mb-1" style={{ fontFamily: 'Inter' }}>
            {title}
          </h3>
          <p className="text-[#989898] text-sm tracking-tight" style={{ fontFamily: 'Inter' }}>
            {subtitle}
          </p>
        </div>
        <ValueElement
          href={isLink ? href : undefined}
          className={`font-medium text-sm text-[#777] tracking-tight ${
            isLink ? 'hover:text-[#ff8a00] transition-colors duration-200' : ''
          }`}
          style={{ fontFamily: 'Inter' }}
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
      <section className="relative w-full bg-gradient-to-b from-[#0a0a0b] to-[#0f0f10] flex items-center justify-center px-5 md:px-8 lg:px-12 xl:px-[94px] pt-24 md:pt-32 lg:pt-[167px] pb-[50px] min-h-[341px]">
        <div className="flex flex-col gap-6 items-center relative w-full max-w-[1252px]">
          {/* Back link */}
          <Link
            to="/products"
            className="self-start lg:absolute lg:left-0 lg:top-0 flex items-center gap-2 text-[#777] text-sm tracking-tight hover:text-white transition-colors mb-4 lg:mb-0"
          >
            <BackArrowIcon />
            BACK TO CATALOG
          </Link>

          <div className="flex flex-col gap-6 items-center w-full">
            {/* Badge */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[24px] px-[15px] py-[7px] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-b from-[#ff6a00] to-[#ffb200] inline-block"></span>
              <span className="text-[#b5b5b5] text-sm tracking-tight" style={{ fontFamily: 'Inter' }}>
                Get In Touch
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-adlam text-white text-5xl md:text-[64px] leading-[1.15] tracking-wide text-center">
              Contact Us
            </h1>
          </div>

          {/* Description */}
          <p
            className="text-[#b5b5b5] text-lg leading-7 tracking-tight text-center max-w-[738px]"
            style={{ fontFamily: 'Inter' }}
          >
            Have a question or need more information? Get in touch with the Liberty Rewards team using the inquiry form below or reach out through our sales and support channels.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="bg-white w-full flex flex-col lg:flex-row gap-[36px] items-start justify-center px-5 md:px-8 lg:px-12 xl:px-[94px] py-[50px]">
        {/* Contact Information Cards */}
        <div className="flex flex-col gap-8 items-start w-full lg:w-[440px] shrink-0">
          <h2 className="font-adlam text-black text-3xl tracking-wide">Contact Information</h2>

          <div className="flex flex-col gap-5 items-start w-full">
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
              title="Phone"
              subtitle="Mon–Fri 9am–6pm EST"
              value="(555) 123-4567"
              href="tel:+15551234567"
            />
            <ContactInfoCard
              icon={<AddressIcon />}
              title="Address"
              subtitle="123 Freedom Blvd, Suite 100"
              value="Business District, NY"
            />
          </div>
        </div>

        {/* Inquiry Form */}
        {isSubmitted ? (
          <div className="bg-white border border-[#e2e2e2] shadow-[0_0_5px_rgba(0,0,0,0.05)] rounded-2xl p-[23px] md:p-[39px] flex flex-col items-center justify-center gap-6 w-full lg:w-[628px] min-h-[580px] self-stretch">
            <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#ff8a00] to-[#ffb200] flex items-center justify-center shadow-md">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="font-adlam text-black text-3xl tracking-wide text-center">Inquiry Submitted!</h2>
            <p className="text-[#989898] text-base text-center max-w-sm" style={{ fontFamily: 'Inter' }}>
              Thank you, {formData.fullName}. Your inquiry has been received. Our team will review your request and get back to you within 24 business hours.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ fullName: '', email: '', company: '', inquiryType: 'General Inquiry', message: '' });
              }}
              className="mt-2 text-[#ff8a00] hover:text-[#ffb200] font-semibold text-sm transition-colors cursor-pointer"
              style={{ fontFamily: 'Inter' }}
            >
              Send another inquiry
            </button>
          </div>
        ) : (
          <div className="bg-white border border-[#e2e2e2] shadow-[0_0_5px_rgba(0,0,0,0.05)] rounded-2xl p-[23px] md:p-[39px] flex flex-col gap-8 items-start w-full lg:w-[628px]">
            <div className="flex flex-col gap-2 items-start w-full">
              <h2 className="font-adlam text-black text-3xl tracking-wide">Send Us an Inquiry</h2>
              <p className="text-[#989898] text-sm tracking-tight" style={{ fontFamily: 'Inter' }}>
                Fill out the form below and we will route your request to the right department.
              </p>
            </div>

            <form className="flex flex-col gap-6 items-start w-full" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="flex flex-col gap-2 items-start w-full">
                <label className="text-sm font-medium text-black tracking-tight" style={{ fontFamily: 'Inter' }}>
                  Full Name <span className="text-[#ff8a00]">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="bg-black/[0.04] rounded-2xl px-4 py-3 w-full text-sm text-black placeholder:text-black/50 tracking-tight outline-none focus:ring-2 focus:ring-[#ffb200]/30 transition-shadow"
                  style={{ fontFamily: 'Inter' }}
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-2 items-start w-full">
                <label className="text-sm font-medium text-black tracking-tight" style={{ fontFamily: 'Inter' }}>
                  Email Address <span className="text-[#ff8a00]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                  className="bg-black/[0.04] rounded-2xl px-4 py-3 w-full text-sm text-black placeholder:text-black/50 tracking-tight outline-none focus:ring-2 focus:ring-[#ffb200]/30 transition-shadow"
                  style={{ fontFamily: 'Inter' }}
                />
              </div>

              {/* Company Name */}
              <div className="flex flex-col gap-2 items-start w-full">
                <label className="text-sm font-medium text-black tracking-tight" style={{ fontFamily: 'Inter' }}>
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Ltd."
                  className="bg-black/[0.04] rounded-2xl px-4 py-3 w-full text-sm text-black placeholder:text-black/50 tracking-tight outline-none focus:ring-2 focus:ring-[#ffb200]/30 transition-shadow"
                  style={{ fontFamily: 'Inter' }}
                />
              </div>

              {/* Inquiry Type */}
              <div className="flex flex-col gap-2 items-start w-full">
                <label className="text-sm font-medium text-black tracking-tight" style={{ fontFamily: 'Inter' }}>
                  Inquiry Type
                </label>
                <div className="relative w-full" ref={dropdownRef}>
                  {/* Trigger Button */}
                  <button
                    type="button"
                    onClick={() => setIsOpenDropdown(!isOpenDropdown)}
                    className="w-full flex items-center justify-between bg-black/[0.04] rounded-2xl px-4 py-3 text-sm font-medium text-black tracking-tight outline-none transition-shadow cursor-pointer text-left"
                    style={{ fontFamily: 'Inter' }}
                  >
                    <span>{formData.inquiryType}</span>
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
                        animation: 'dropdownOpen 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    >
                      {/* Options List */}
                      <div className="flex-1 flex flex-col gap-1 items-start">
                        {inquiryOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, inquiryType: opt }));
                              setIsOpenDropdown(false);
                            }}
                            className={`w-full text-left py-1 px-3 rounded-lg text-[16px] leading-[24px] font-medium tracking-[-0.31px] transition-all duration-150 cursor-pointer focus:outline-none ${
                              formData.inquiryType === opt
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
                        className="rounded-[20px] w-10 h-10 flex items-center justify-center shrink-0 hover:bg-black/5 cursor-pointer focus:outline-none"
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

              {/* Message */}
              <div className="flex flex-col gap-2 items-start w-full mb-[6px]">
                <label className="text-sm font-medium text-black tracking-tight" style={{ fontFamily: 'Inter' }}>
                  Message <span className="text-[#ff8a00]">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  rows="4"
                  className="bg-black/[0.04] rounded-2xl px-4 py-3 w-full text-sm text-black placeholder:text-black/50 tracking-tight outline-none resize-none h-[126px] focus:ring-2 focus:ring-[#ffb200]/30 transition-shadow"
                  style={{ fontFamily: 'Inter' }}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-black border border-[#1a1a1a] rounded-2xl py-[15px] w-full flex items-center justify-center gap-3 text-white text-sm font-semibold tracking-tight hover:bg-[#1a1a1a] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 cursor-pointer"
                style={{
                  fontFamily: 'Inter',
                }}
              >
                Submit Inquiry
                <SubmitIcon />
              </button>
            </form>
          </div>
        )}
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
