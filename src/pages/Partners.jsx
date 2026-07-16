import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PartnerInquiryModal from '../components/PartnerInquiryModal';

/* ──────────────────── SVG Icons ──────────────────── */
const BackArrowIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M10 3L5 8l5 5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5 text-black shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SmallArrowIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ──────────────────── Partner Data ──────────────────── */
const partnersData = [
  {
    id: 1,
    name: 'Apex Gaming Solutions',
    logo: '/partner-1.png',
    description:
      'Industry-leading manufacturer of skill-based gaming terminals and compliance software. Apex Gaming has been our hardware partner since 2019, providing enterprise-grade terminals engineered for high-traffic venues. Their products feature certified random number generation, tamper-proof hardware, and comprehensive audit logging for regulatory compliance.',
    associatedProducts: [
      {
        title: 'Arcade Challenge Platform',
        category: 'Skill-Based Games',
        image: '/product/product-card-2.png',
        productId: 2,
      },
      {
        title: 'Skill Match Elite System',
        category: 'RNG Arcade Games',
        image: '/product/product-card-1.png',
        productId: 1,
      },
    ],
    gallery: {
      main: '/product/product-card-3.png',
      left: '/product/product-card-1.png',
      right: '/product/product-card-2.png',
    },
  },
  {
    id: 2,
    name: 'SecurePay Tech',
    logo: '/partner-2.png',
    description:
      'Payment processing infrastructure for compliant gaming venues. SecurePay provides secure, PCI-compliant transaction processing with real-time fraud detection. Their platform integrates seamlessly with our gaming systems to provide transparent, auditable financial operations. SecurePay supports multi-currency transactions and offers comprehensive reporting tools for operators.',
    associatedProducts: [
      {
        title: 'Secure Analytics Platform',
        category: 'Payment Systems',
        image: '/product/product-card-5.png',
        productId: 5,
      },
    ],
    gallery: {
      main: '/product/product-card-5.png',
      left: '/product/product-card-6.png',
      right: '/product/product-card-7.png',
    },
  },
  {
    id: 3,
    name: 'Venue Masters',
    logo: '/partner-3.png',
    description:
      'Commercial venue management and analytics platform. Venue Masters delivers centralized control systems for multi-location operators. Their software suite includes inventory management, player analytics, and compliance monitoring tools. Their real-time dashboards enable operators to track performance, manage hardware remotely, and ensure all systems remain within regulatory parameters.',
    associatedProducts: [
      {
        title: 'Gaming Terminal X1',
        category: 'Sweepstakes Integration',
        image: '/product/product-card-7.png',
        productId: 7,
      },
      {
        title: 'Gaming Machine Analytics',
        category: 'Venue Hardware Platform',
        image: '/product/product-card-8.png',
        productId: 8,
      },
    ],
    gallery: {
      main: '/product/product-card-4.png',
      left: '/product/product-card-8.png',
      right: '/product/product-card-9.png',
    },
  },
];

/* ──────────────────── Associated Product Card ──────────────────── */
const AssociatedProductCard = ({ product }) => (
  <Link
    to={`/products/${product.productId}`}
    className="bg-white border border-[#e2e2e2] rounded-2xl flex items-center gap-4 p-[17px] w-full hover:shadow-md transition-shadow duration-300"
    style={{ boxShadow: '0 0 5px rgba(0,0,0,0.05)' }}
  >
    <div className="rounded-2xl w-16 h-16 overflow-hidden shrink-0 bg-[#111]">
      <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
    </div>
    <div className="flex flex-col gap-1 flex-1">
      <p className="font-semibold text-sm text-black tracking-tight" style={{ fontFamily: 'Inter' }}>
        {product.title}
      </p>
      <p className="text-xs text-[#989898]" style={{ fontFamily: 'Inter' }}>
        {product.category}
      </p>
    </div>
    <ArrowRightIcon />
  </Link>
);

/* ──────────────────── Partner Section ──────────────────── */
const PartnerSection = ({ partner, reversed, onInquire }) => (
  <section className={`w-full bg-white flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 items-center justify-center px-6 md:px-[94px] py-[50px]`}>
    {/* Info side */}
    <div className="flex flex-col gap-9 items-start w-full lg:w-[516px] shrink-0">
      <div className="flex flex-col gap-6 items-start w-full">
        {/* Logo */}
        <div
          className="rounded-[20px] w-20 h-20 flex items-center justify-center overflow-hidden border border-[rgba(255,138,0,0.1)]"
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(255,106,0,0.1) 0%, rgba(255,178,0,0.1) 100%)',
          }}
        >
          <img src={partner.logo} alt={partner.name} className="w-full h-full object-cover" />
        </div>

        {/* Name & Description */}
        <div className="flex flex-col gap-3 items-start w-full">
          <h2 className="font-adlam text-black text-3xl md:text-4xl tracking-wide">{partner.name}</h2>
          <p className="text-[#989898] text-base leading-6 tracking-tight" style={{ fontFamily: 'Inter' }}>
            {partner.description}
          </p>
        </div>

        {/* Inquire link */}
        <button
          onClick={() => onInquire(partner.name)}
          className="flex items-center gap-2 text-[#ff8a00] text-sm font-medium tracking-tight hover:text-[#ffb200] transition-colors cursor-pointer"
          style={{ fontFamily: 'Inter' }}
        >
          Inquire about this partner
          <SmallArrowIcon />
        </button>
      </div>

      {/* Associated Products */}
      <div className="flex flex-col gap-2 items-start w-full">
        <p
          className="font-semibold text-base text-[#777] tracking-widest uppercase"
          style={{ fontFamily: 'Inter' }}
        >
          Associated Products
        </p>
        <div className="flex flex-col gap-3 items-start w-full">
          {partner.associatedProducts.map((product, idx) => (
            <AssociatedProductCard key={idx} product={product} />
          ))}
        </div>
      </div>
    </div>

    {/* Gallery side */}
    <div className="flex flex-col gap-4 items-center justify-center w-full lg:w-[712px]">
      <div className="rounded-[24px] overflow-hidden w-full aspect-[712/378]">
        <img
          src={partner.gallery.main}
          alt={`${partner.name} showcase`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex gap-4 items-center w-full h-[256px] rounded-[24px] overflow-hidden">
        <div className="flex-1 h-full overflow-hidden rounded-[24px]">
          <img
            src={partner.gallery.left}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[348px] h-full shrink-0 overflow-hidden rounded-[24px]">
          <img
            src={partner.gallery.right}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

/* ──────────────────── Page Component ──────────────────── */
function Partners() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInquire = (partnerName) => {
    setSelectedPartner(partnerName || '');
    setIsInquiryOpen(true);
  };

  return (
    <div className="bg-white text-[#0c0c0d]">

      {/* ════════════════ HERO ════════════════ */}
      <section className="relative w-full bg-gradient-to-b from-[#0a0a0b] to-[#0f0f10] flex items-center justify-center px-6 md:px-[94px] pt-[140px] pb-[60px]">
        <div className="flex flex-col gap-8 items-center flex-1 max-w-3xl text-center relative w-full">

          {/* Back link */}
          <Link
            to="/"
            className="absolute left-0 top-0 flex items-center gap-2 text-[#777] text-sm tracking-tight hover:text-white transition-colors"
          >
            <BackArrowIcon />
            BACK TO HOME
          </Link>

          {/* Title */}
          <h1 className="font-adlam text-white text-4xl md:text-[64px] leading-[1.15] tracking-wide">
            Our Partners
          </h1>

          {/* Description */}
          <p
            className="text-[#b5b5b5] text-lg leading-7 tracking-tight max-w-[844px]"
            style={{ fontFamily: 'Inter' }}
          >
            Liberty Rewards collaborates with industry-trusted hardware and service providers. Our partners
            share our commitment to compliance, quality, and professional gaming solutions. This page provides
            information on our ecosystem brands and their offerings.
          </p>
        </div>
      </section>

      {/* ════════════════ PARTNER SECTIONS ════════════════ */}
      {partnersData.map((partner, index) => (
        <PartnerSection
          key={partner.id}
          partner={partner}
          reversed={index % 2 !== 0}
          onInquire={handleInquire}
        />
      ))}

      {/* ════════════════ CTA ════════════════ */}
      <section
        id="inquiry"
        className="w-full flex flex-col gap-6 items-center justify-center overflow-hidden relative px-6 md:px-[94px] py-16 bg-white"
      >
        {/* Decorative side images */}
        <div className="absolute right-0 top-0 h-full w-[300px] hidden lg:block overflow-hidden opacity-90 pointer-events-none">
          <img src="/about-us/about-element-2.png" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute left-0 top-0 h-full w-[250px] hidden lg:block overflow-hidden opacity-90 pointer-events-none">
          <img src="/about-us/about-element.png" alt="" className="h-full w-full object-cover" />
        </div>

        <div className="flex flex-col gap-3 items-center text-center relative z-10">
          <h2 className="font-adlam text-black text-3xl md:text-[40px] leading-[50px] tracking-wide">
            Explore Partnership Opportunities
          </h2>
          <p
            className="text-[#989898] text-lg md:text-xl leading-7 tracking-tight max-w-2xl"
            style={{ fontFamily: 'Inter' }}
          >
            Interested in partnering with Liberty Rewards or learning more about our ecosystem? Reach out to
            discuss collaboration opportunities.
          </p>
        </div>

        <button
          onClick={() => handleInquire('')}
          className="relative z-10 bg-gradient-to-b from-[#ff8a00] to-[#ff6a00] border border-[#ffb200] rounded-full px-6 py-3 flex items-center gap-3 text-white font-bold text-lg tracking-tight hover:shadow-[0_0_25px_rgba(255,138,0,0.5)] hover:scale-[1.02] transition-all duration-300 cursor-pointer"
          style={{ fontFamily: 'Inter' }}
        >
          General Inquiry
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <p className="relative z-10 text-[#b3b3b3] text-xs text-center" style={{ fontFamily: 'Inter' }}>
          Response time: Within 24 business hours
        </p>
      </section>

      {/* ════════════════ PARTNER INQUIRY MODAL ════════════════ */}
      <PartnerInquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        preselectedPartner={selectedPartner}
      />
    </div>
  );
}

export default Partners;
