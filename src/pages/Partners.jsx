import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PartnerInquiryModal from '../components/PartnerInquiryModal';
import AnimateOnScroll from '../components/AnimateOnScroll';



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
    logo: '/product/tec-partner-1.png',
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
      left: '/staff/Image (Venue Masters gallery 2).png',
      right: '/product/product-card-2.png',
    },
  },
  {
    id: 2,
    name: 'SecurePay Tech',
    logo: '/product/tec-partner-2.png',
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
      main: '/product/product-card-1.png',
      left: '/product/product-card-6.png',
      right: '/product/product-card-7.png',
    },
  },
  {
    id: 3,
    name: 'Venue Masters',
    logo: '/product/tec-partner-3.png',
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
      main: '/staff/partner-img-grid.png',
      left: '/product/product-card-8.png',
      right: '/product/product-card-9.png',
    },
  },
];

/* ──────────────────── Associated Product Card ──────────────────── */
const AssociatedProductCard = ({ product }) => (
  <Link
    to={`/products/${product.productId}`}
    className="bg-white border border-[#e2e2e2] rounded-xl sm:rounded-2xl flex items-center gap-3 sm:gap-4 py-2.5 sm:py-4 px-3 sm:px-[17px] w-full hover:shadow-md transition-shadow duration-300"
    style={{ boxShadow: '0 0 5px rgba(0,0,0,0.05)' }}
  >
    <div className="rounded-lg sm:rounded-2xl w-10 h-10 sm:w-16 sm:h-16 overflow-hidden shrink-0 bg-[#111]">
      <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
    </div>
    <div className="flex flex-col gap-0.5 sm:gap-1 flex-1">
      <p className="font-semibold text-xs sm:text-sm text-black tracking-tight" style={{ fontFamily: 'Inter' }}>
        {product.title}
      </p>
      <p className="text-[10px] sm:text-xs text-[#989898]" style={{ fontFamily: 'Inter' }}>
        {product.category}
      </p>
    </div>
    <ArrowRightIcon />
  </Link>
);

const PartnerSection = ({ partner, reversed, onInquire }) => (
  <section className="w-full bg-white overflow-hidden">
    <div className={`max-w-[1440px] mx-auto w-full py-[50px] px-5 md:px-8 lg:px-12 xl:px-[94px] flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 items-start justify-center`}>
      {/* Info side */}
      <AnimateOnScroll animation={reversed ? 'fade-left' : 'fade-right'} className="flex flex-col gap-9 items-start w-full lg:w-[516px] shrink-0">
        <div className="flex flex-col gap-6 items-start w-full">
          {/* Logo */}
          <div
            className="rounded-[14px] sm:rounded-[20px] w-12 h-12 sm:w-20 sm:h-20 flex items-center justify-center overflow-hidden border border-[rgba(255,138,0,0.1)]"
            style={{
              backgroundImage: 'linear-gradient(135deg, rgba(255,106,0,0.1) 0%, rgba(255,178,0,0.1) 100%)',
            }}
          >
            <img src={partner.logo} alt={partner.name} className="w-full h-full object-cover" />
          </div>

          {/* Name & Description */}
          <div className="flex flex-col gap-2 sm:gap-3 items-start w-full">
            <h2
              className="font-adlam text-black text-xl sm:text-3xl lg:text-[40px] font-normal leading-tight lg:leading-[50px]"
              style={{ letterSpacing: '0.37px' }}
            >
              {partner.name}
            </h2>
            <p className="text-[#989898] text-[14px] sm:text-base leading-4 sm:leading-6 tracking-tight" style={{ fontFamily: 'Inter' }}>
              {partner.description}
            </p>
          </div>

          {/* Inquire link */}
          <button
            onClick={() => onInquire(partner.name)}
            className="flex items-center gap-2 text-[#ff8a00] text-sm font-medium tracking-tight btn-text-link cursor-pointer"
            style={{ fontFamily: 'Inter' }}
          >
            Inquire about this partner
            <SmallArrowIcon />
          </button>
        </div>

        {/* Associated Products */}
        <div className="flex flex-col gap-2 items-start w-full">
          <p
            className="font-semibold text-xs sm:text-base text-[#777777] tracking-widest uppercase"
            style={{ fontFamily: 'Inter', color: '#777777' }}
          >
            Associated Products
          </p>
          <div className="flex flex-col gap-3 items-start w-full stagger-children">
            {partner.associatedProducts.map((product, idx) => (
              <AnimateOnScroll key={idx} animation="fade-up" delay={idx * 150} className="w-full">
                <AssociatedProductCard product={product} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </AnimateOnScroll>

      {/* Gallery side */}
      <AnimateOnScroll animation={reversed ? 'fade-right' : 'fade-left'} delay={200} className="flex flex-col gap-3 sm:gap-4 items-center justify-center w-full lg:w-[712px]">
        <div className="rounded-[16px] sm:rounded-[24px] overflow-hidden w-full aspect-[16/9] sm:aspect-[712/366] shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-[#e2e2e2]">
          <img
            src={partner.gallery.main}
            alt={`${partner.name} showcase`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="flex flex-row items-center w-full h-[120px] sm:h-[200px] lg:h-[256px] rounded-[16px] sm:rounded-[24px] overflow-hidden border border-[#e2e2e2]">
          <div className="w-1/2 sm:w-auto h-full overflow-hidden flex-1">
            <img
              src={partner.gallery.left}
              alt=""
              className="w-full h-full object-cover scale-[1.08] hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="w-1/2 sm:w-auto h-full overflow-hidden flex-1">
            <img
              src={partner.gallery.right}
              alt=""
              className="w-full h-full object-cover scale-[1.08] hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>
      </AnimateOnScroll>
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
      <section className="relative w-full bg-gradient-to-b from-[#0a0a0b] to-[#0f0f10] flex items-center justify-center px-5 md:px-8 lg:px-12 xl:px-[94px] pt-20 sm:pt-24 md:pt-32 lg:pt-[167px] pb-6 sm:pb-12 md:pb-[77px] min-h-[200px] sm:min-h-[300px] md:min-h-[420px]">
        <div className="flex flex-col gap-4 sm:gap-8 items-center relative w-full max-w-[1252px]">

          <div className="flex flex-col gap-4 sm:gap-8 items-center flex-1 max-w-3xl text-center w-full">
            {/* Title */}
            <AnimateOnScroll animation="fade-up" as="h1"
              className="font-adlam text-white text-2xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[64px] font-normal leading-tight md:leading-[60px] lg:leading-[70px] xl:leading-[74px]"
              style={{ letterSpacing: '0.22px' }}
            >
              Our Partners
            </AnimateOnScroll>

            {/* Description */}
            <AnimateOnScroll animation="fade-up" delay={200} as="p"
              className="text-[#FAFAFA] text-[14px] sm:text-base md:text-lg leading-4 sm:leading-6 md:leading-7 tracking-tight max-w-none"
              style={{ fontFamily: 'Inter', color: '#FAFAFA' }}
            >
              Liberty Rewards collaborates with industry-trusted hardware and service providers. Our partners
              share our commitment to compliance, quality, and professional gaming solutions. This page provides
              information on our ecosystem brands and their offerings.
            </AnimateOnScroll>
          </div>
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
        className="relative w-full bg-white overflow-hidden z-20"
      >
        {/* Decorative side images */}
        <div className="hidden xl:block absolute left-0 bottom-0 select-none pointer-events-none z-10">
          <img
            src="/about-us/about-element.png"
            alt="Arcade Machine Cabinet Left"
            className="h-[442px] w-auto object-contain"
          />
        </div>
        <div className="hidden xl:block absolute right-0 bottom-0 select-none pointer-events-none z-10">
          <img
            src="/about-us/about-element-2.png"
            alt="Arcade Machine Cabinet Right"
            className="h-[442px] w-auto object-contain"
          />
        </div>

        <div className="relative z-30 max-w-[1440px] mx-auto w-full py-[24px] sm:py-[40px] md:py-[80px] px-5 md:px-8 lg:px-12 xl:px-[94px] flex flex-col gap-3 sm:gap-6 items-center justify-center">
          <AnimateOnScroll animation="fade-up" className="flex flex-col gap-2 sm:gap-3 items-center text-center">
            <h2 className="font-adlam text-black text-xl sm:text-3xl md:text-[40px] leading-tight md:leading-[50px] tracking-wide">
              Explore Partnership Opportunities
            </h2>
            <p
              className="text-[#989898] text-[14px] sm:text-base md:text-xl leading-4 sm:leading-6 md:leading-7 tracking-tight max-w-[800px]"
              style={{ fontFamily: 'Inter' }}
            >
              Interested in partnering with Liberty Rewards or learning more about our ecosystem? Reach out to
              discuss collaboration opportunities.
            </p>
          </AnimateOnScroll>

          <button
            onClick={() => handleInquire('')}
            className="border border-[#ffb200] rounded-full px-4 py-2.5 sm:px-[23px] sm:py-[11px] flex items-center gap-2 sm:gap-3 text-white font-bold text-xs sm:text-lg tracking-tight btn-gradient-primary cursor-pointer"
            style={{ fontFamily: 'Inter' }}
          >
            <span>General Inquiry</span>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-5 sm:h-5">
              <path d="M4.16992 10H15.8366" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 4.16504L15.8333 9.99837L10 15.8317" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <p className="text-[#b3b3b3] text-[10px] sm:text-xs text-center" style={{ fontFamily: 'Inter' }}>
            Response time: Within 24 business hours
          </p>
        </div>
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
