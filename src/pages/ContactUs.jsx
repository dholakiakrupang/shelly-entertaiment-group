import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/* ──────────────────── SVG Icons ──────────────────── */
const BackArrowIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M10 3L5 8l5 5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5 text-[#ff8a00]" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M2 5l8 6 8-6M2 5v10h16V5" strokeLinejoin="round" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5 text-[#ff8a00]" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M4 3h3l2 5-2 1c1 2 3 4 5 5l1-2 5 2v3c0 1-1 2-2 2C9 19 1 11 1 5c0-1 1-2 2-2z" />
  </svg>
);

const AddressIcon = () => (
  <svg className="w-5 h-5 text-[#ff8a00]" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M10 18s6-5.5 6-10a6 6 0 10-12 0c0 4.5 6 10 6 10z" strokeLinejoin="round" />
    <circle cx="10" cy="8" r="2" />
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
          <h3 className="font-bold text-lg text-black tracking-tight" style={{ fontFamily: 'Inter' }}>
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
      <section className="w-full bg-gradient-to-b from-[#0a0a0b] to-[#0f0f10] flex flex-col items-center gap-6 px-6 md:px-[94px] pt-[140px] pb-[50px] relative">
        {/* Back link */}
        <Link
          to="/products"
          className="absolute left-[24px] md:left-[94px] top-[100px] flex items-center gap-2 text-[#777] text-sm tracking-tight hover:text-white transition-colors"
        >
          <BackArrowIcon />
          BACK TO CATALOG
        </Link>

        {/* Badge */}
        <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[24px] px-4 py-2 flex items-center gap-2 mt-4 md:mt-0">
          <span className="w-2 h-2 rounded-full bg-gradient-to-b from-[#ff6a00] to-[#ffb200] inline-block"></span>
          <span className="text-[#b5b5b5] text-sm tracking-tight" style={{ fontFamily: 'Inter' }}>
            Get In Touch
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-adlam text-white text-5xl md:text-[64px] leading-[1.15] tracking-wide text-center">
          Contact Us
        </h1>

        {/* Description */}
        <p
          className="text-[#b5b5b5] text-lg leading-7 tracking-tight text-center max-w-[738px]"
          style={{ fontFamily: 'Inter' }}
        >
          Have a question or need more information? Get in touch with the Liberty Rewards team using the inquiry form below or reach out through our sales and support channels.
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className="bg-white w-full flex flex-col lg:flex-row gap-9 items-start justify-center px-6 md:px-[94px] py-[50px]">
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
          <div className="bg-white border border-[#e2e2e2] shadow-[0_0_5px_rgba(0,0,0,0.05)] rounded-2xl p-6 md:p-10 flex flex-col items-center justify-center gap-6 w-full lg:w-[628px] min-h-[580px] self-stretch">
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
          <div className="bg-white border border-[#e2e2e2] shadow-[0_0_5px_rgba(0,0,0,0.05)] rounded-2xl p-6 md:p-10 flex flex-col gap-8 items-start w-full lg:w-[628px]">
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
                <div className="relative w-full">
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="appearance-none bg-black/[0.04] rounded-2xl px-4 py-3 w-full text-sm font-medium text-black tracking-tight outline-none focus:ring-2 focus:ring-[#ffb200]/30 transition-shadow cursor-pointer"
                    style={{ fontFamily: 'Inter' }}
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Sales">Sales</option>
                    <option value="Support">Support</option>
                    <option value="Partnership">Partnership</option>
                  </select>
                  <DropdownIcon />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 items-start w-full">
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
                className="bg-black rounded-2xl py-4 w-full flex items-center justify-center gap-3 text-white text-sm font-semibold tracking-tight hover:shadow-[0_0_25px_rgba(255,138,0,0.4)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                style={{
                  backgroundImage: 'linear-gradient(180deg, rgb(255,138,0) 0%, rgb(255,165,0) 100%)',
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
    </div>
  );
}

export default ContactUs;
