import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ArrowIcon from '../components/ArrowIcon';
import InquiryModal from '../components/InquiryModal';

/* ──────────────────── Product Data ──────────────────── */
const productsList = [
  {
    id: 1,
    title: 'Skill Match Game System Pro',
    category: 'Skill-Based Games',
    description:
      'A digital skill-based game system designed for fair play, competitive gameplay, and user engagement with advanced tracking.',
    longDescription:
      'The Skill Match Game System Pro is a premium-grade gaming solution designed to support fair play and compliant digital entertainment. Each system is carefully engineered for commercial environments that prioritize user engagement, responsible gameplay, and transparent operations. This product is ideal for entertainment venues seeking reliable, skill-based gaming experiences with professional-level hardware.',
    image: '/product/product-card-1.png',
    gallery: [
      '/product/product-card-1.png',
      '/product/product-card-2.png',
      '/product/product-card-3.png',
      '/product/product-card-4.png',
      '/product/product-card-5.png',
    ],
    specs: {
      'Platform Compatibility': 'Cross-platform',
      'Display Resolution': '4K / 60 FPS supported',
      'Input Method': 'Touchscreen + Physical Buttons',
      'Network Requirement': 'Ethernet / WiFi Capable',
      'Local/API Offline Capable': 'Yes',
    },
  },
  {
    id: 2,
    title: 'Arcade Skill Challenge Platform',
    category: 'Skill-Based Games',
    description:
      'An interactive challenge-based gaming experience built around competitive gameplay with premium hardware integration.',
    longDescription:
      'The Arcade Skill Challenge Platform delivers an immersive, challenge-driven gaming experience that combines cutting-edge hardware with intuitive software. Built for commercial environments, it offers competitive gameplay modes, real-time scoring, and seamless integration with venue management systems. Ideal for arcades and entertainment centers seeking engaging, skill-based attractions.',
    image: '/product/product-card-2.png',
    gallery: [
      '/product/product-card-2.png',
      '/product/product-card-1.png',
      '/product/product-card-3.png',
      '/product/product-card-5.png',
      '/product/product-card-6.png',
    ],
    specs: {
      'Platform Compatibility': 'Windows / Android',
      'Display Resolution': '1080p / 120 FPS',
      'Input Method': 'Joystick + Buttons',
      'Network Requirement': 'WiFi / LAN',
      'Local/API Offline Capable': 'Yes',
    },
  },
  {
    id: 3,
    title: 'Digital Prize Showdown Edition',
    category: 'Fish Tables',
    description:
      'Immersive video-based arcade experience with advanced hardware integration and stunning visual effects.',
    longDescription:
      'The Digital Prize Showdown Edition offers an unparalleled visual gaming experience with stunning 4K graphics and dynamic visual effects. Designed for fish table gaming enthusiasts, this system combines premium display technology with responsive controls and networked multiplayer capabilities. Perfect for venues looking to deliver captivating, prize-oriented entertainment.',
    image: '/product/product-card-3.png',
    gallery: [
      '/product/product-card-3.png',
      '/product/product-card-4.png',
      '/product/product-card-1.png',
      '/product/product-card-7.png',
      '/product/product-card-8.png',
    ],
    specs: {
      'Platform Compatibility': 'Custom OS',
      'Display Resolution': '4K / 60 FPS supported',
      'Input Method': 'Touchscreen',
      'Network Requirement': 'Ethernet Required',
      'Local/API Offline Capable': 'Limited',
    },
  },
  {
    id: 4,
    title: 'Ocean Quest Gaming Table',
    category: 'Fish Tables',
    description:
      'Premium fish table gaming platform with multiplayer support and engaging underwater-themed gameplay.',
    longDescription:
      'Ocean Quest Gaming Table brings the deep-sea adventure to life with vibrant underwater visuals and multiplayer support for up to 8 players. This premium fish table system features advanced physics simulation, progressive jackpot support, and robust anti-tamper hardware. Engineered for high-traffic venues demanding reliable, engaging entertainment.',
    image: '/product/product-card-4.png',
    gallery: [
      '/product/product-card-4.png',
      '/product/product-card-3.png',
      '/product/product-card-2.png',
      '/product/product-card-6.png',
      '/product/product-card-9.png',
    ],
    specs: {
      'Platform Compatibility': 'Custom OS',
      'Display Resolution': '4K / 60 FPS',
      'Input Method': 'Touchscreen + Trackball',
      'Network Requirement': 'Ethernet / WiFi',
      'Local/API Offline Capable': 'Yes',
    },
  },
  {
    id: 5,
    title: 'Signature Trivia Advanced',
    category: 'Promotional Game Systems',
    description:
      'Premium trivia hardware system engineered for commercial deployment with cloud-based content management.',
    longDescription:
      'Signature Trivia Advanced is a cloud-connected trivia gaming system that allows venues to deploy customizable quiz content with real-time leaderboards. Featuring a sleek commercial-grade display, wireless connectivity, and an intuitive content management dashboard, this system transforms any venue into an interactive entertainment destination.',
    image: '/product/product-card-5.png',
    gallery: [
      '/product/product-card-5.png',
      '/product/product-card-6.png',
      '/product/product-card-1.png',
      '/product/product-card-8.png',
      '/product/product-card-9.png',
    ],
    specs: {
      'Platform Compatibility': 'Web-based / Cross-platform',
      'Display Resolution': '1080p / 60 FPS',
      'Input Method': 'Touchscreen',
      'Network Requirement': 'WiFi Required',
      'Local/API Offline Capable': 'No',
    },
  },
  {
    id: 6,
    title: 'Player Engagement Terminal Plus',
    category: 'Promotional Game Systems',
    description:
      'Multi-game promotional system designed for maximum player engagement and retention with loyalty features.',
    longDescription:
      'The Player Engagement Terminal Plus is an all-in-one promotional gaming kiosk that combines multiple game types with integrated loyalty and rewards tracking. Its modular software architecture allows operators to customize game libraries, run promotional campaigns, and track player engagement metrics — all from a central dashboard.',
    image: '/product/product-card-6.png',
    gallery: [
      '/product/product-card-6.png',
      '/product/product-card-5.png',
      '/product/product-card-7.png',
      '/product/product-card-2.png',
      '/product/product-card-4.png',
    ],
    specs: {
      'Platform Compatibility': 'Windows / Linux',
      'Display Resolution': '1080p / 60 FPS',
      'Input Method': 'Touchscreen + Keyboard',
      'Network Requirement': 'Ethernet / WiFi',
      'Local/API Offline Capable': 'Yes',
    },
  },
  {
    id: 7,
    title: 'Commercial Gaming Hardware',
    category: 'Gaming Hardware & Systems',
    description:
      'Complete gaming hardware solution for commercial deployment with enterprise-grade reliability and support.',
    longDescription:
      'Our Commercial Gaming Hardware line delivers enterprise-grade reliability for demanding commercial environments. Each unit is built with industrial-quality components, advanced cooling systems, and tamper-resistant enclosures. Backed by comprehensive warranty and 24/7 technical support, these systems are engineered for continuous operation in high-traffic venues.',
    image: '/product/product-card-7.png',
    gallery: [
      '/product/product-card-7.png',
      '/product/product-card-8.png',
      '/product/product-card-1.png',
      '/product/product-card-3.png',
      '/product/product-card-9.png',
    ],
    specs: {
      'Platform Compatibility': 'Universal',
      'Display Resolution': '4K / 120 FPS supported',
      'Input Method': 'Configurable',
      'Network Requirement': 'Ethernet / WiFi / 5G',
      'Local/API Offline Capable': 'Yes',
    },
  },
  {
    id: 8,
    title: 'Multi-Station Gaming Network Hub',
    category: 'Gaming Hardware & Systems',
    description:
      'Networked gaming system supporting multiple stations with centralized management and analytics dashboard.',
    longDescription:
      'The Multi-Station Gaming Network Hub is designed for large-scale venue deployments, connecting up to 50 gaming stations through a centralized management system. Features include real-time analytics, remote diagnostics, automatic software updates, and comprehensive reporting tools. Ideal for operators managing multiple locations or large entertainment complexes.',
    image: '/product/product-card-8.png',
    gallery: [
      '/product/product-card-8.png',
      '/product/product-card-7.png',
      '/product/product-card-6.png',
      '/product/product-card-4.png',
      '/product/product-card-2.png',
    ],
    specs: {
      'Platform Compatibility': 'Linux / Custom OS',
      'Display Resolution': 'Multi-display support',
      'Input Method': 'Remote + Local',
      'Network Requirement': 'Ethernet Required',
      'Local/API Offline Capable': 'Limited',
    },
  },
  {
    id: 9,
    title: 'Vegas Skill Tournament System',
    category: 'Skill-Based Games',
    description:
      'Tournament-ready skill gaming platform with real-time leaderboards and competitive play features.',
    longDescription:
      'The Vegas Skill Tournament System is purpose-built for competitive gaming events and tournament-style play. With real-time leaderboards, bracket management, and live spectator displays, this system transforms any venue into a professional esports-style arena. Features include anti-cheat technology, player authentication, and comprehensive result tracking.',
    image: '/product/product-card-9.png',
    gallery: [
      '/product/product-card-9.png',
      '/product/product-card-1.png',
      '/product/product-card-2.png',
      '/product/product-card-5.png',
      '/product/product-card-7.png',
    ],
    specs: {
      'Platform Compatibility': 'Cross-platform',
      'Display Resolution': '4K / 144 FPS',
      'Input Method': 'Controller + Touchscreen',
      'Network Requirement': 'Low-latency Ethernet',
      'Local/API Offline Capable': 'No',
    },
  },
];

/* ──────────────────── Technology Partners ──────────────────── */
const partners = [
  {
    name: 'Apex Gaming Solutions',
    description: 'Leading provider of advanced skill-gaming software engines.',
    logo: '/product/tec-partner-1.png',
  },
  {
    name: 'SecurePay Tech',
    description: 'Trusted payment integration for commercial gaming platforms.',
    logo: '/product/tec-partner-2.png',
  },
  {
    name: 'Venue Masters',
    description: 'End-to-end venue management and deployment specialists.',
    logo: '/product/tec-partner-3.png',
  },
  {
    name: 'Excel Gaming Studio',
    description: 'Innovative game content creators for entertainment venues.',
    logo: '/product/tec-partner-4.png',
  },
];

/* ──────────────────── Document Resources ──────────────────── */
const resources = [
  {
    title: 'System Specification Sheet',
    size: 'PDF · 2.4 MB',
    icon: 'doc',
  },
  {
    title: 'Compliance Overview',
    size: 'PDF · 1.8 MB',
    icon: 'shield',
  },
  {
    title: 'Installation & Setup Guide',
    size: 'PDF · 3.1 MB',
    icon: 'doc',
  },
];

/* ──────────────────── SVG Icons ──────────────────── */
const DocIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.4997 1.66699H4.99967C4.55765 1.66699 4.13372 1.84259 3.82116 2.15515C3.5086 2.46771 3.33301 2.89163 3.33301 3.33366V16.667C3.33301 17.109 3.5086 17.5329 3.82116 17.8455C4.13372 18.1581 4.55765 18.3337 4.99967 18.3337H14.9997C15.4417 18.3337 15.8656 18.1581 16.1782 17.8455C16.4907 17.5329 16.6663 17.109 16.6663 16.667V5.83366L12.4997 1.66699Z" stroke="#FF8A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.667 1.66699V5.00033C11.667 5.44235 11.8426 5.86628 12.1551 6.17884C12.4677 6.4914 12.8916 6.66699 13.3337 6.66699H16.667" stroke="#C68A2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.33366 7.5H6.66699" stroke="#C68A2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.3337 10.833H6.66699" stroke="#C68A2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.3337 14.167H6.66699" stroke="#C68A2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-5 h-5 text-[#ff8a00]" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M10 2l7 3v5c0 5-3 8-7 9-4-1-7-4-7-9V5l7-3z" strokeLinejoin="round" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#777777" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.83301 8.33301L9.99967 12.4997L14.1663 8.33301" stroke="#777777" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 12.5V2.5" stroke="#777777" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PlayIcon = () => (
  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const BackArrowIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M10 3L5 8l5 5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ──────────────────── Component ──────────────────── */
function ProductDetail() {
  const { id } = useParams();
  const product = productsList.find((p) => p.id === Number(id));
  const [activeImage, setActiveImage] = useState(0);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  // Scroll to top on mount / product change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // 404-style fallback
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0b] text-white gap-6">
        <h1 className="font-adlam text-4xl">Product Not Found</h1>
        <p className="text-[#b5b5b5] text-lg">The product you're looking for doesn't exist.</p>
        <Link
          to="/products"
          className="border border-[#ffb200] rounded-full px-6 py-3 text-[#ffb200] font-bold hover:bg-[#ffb200]/10 transition-colors"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const specEntries = Object.entries(product.specs);

  return (
    <div className="bg-white text-[#0c0c0d]">

      {/* ════════════════ HERO ════════════════ */}
      <section className="relative w-full bg-gradient-to-b from-[#0a0a0b] to-[#0f0f10] flex items-center justify-center px-6 md:px-[94px] pt-[167px] pb-[27px] min-h-[420px]">
        <div className="flex flex-col gap-8 items-center relative w-full max-w-[1252px]">
          {/* Back link */}
          <Link
            to="/products"
            className="absolute left-0 top-0 flex items-center gap-2 text-[#777] text-sm tracking-tight hover:text-white transition-colors"
          >
            <BackArrowIcon />
            BACK TO CATALOG
          </Link>

          <div className="flex flex-col gap-8 items-center flex-1 max-w-3xl text-center w-full">
            {/* Category pill */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-full px-[15px] py-[7px] flex items-center gap-2 mb-[2px]">
              <span className="w-2 h-2 rounded-full bg-gradient-to-b from-[#ff6a00] to-[#ffb200] inline-block"></span>
              <span className="text-[#b5b5b5] text-sm tracking-tight" style={{ fontFamily: 'Inter' }}>
                {product.category}
              </span>
            </div>

            {/* Title */}
            <h1
              className="font-adlam text-white text-4xl md:text-[64px] font-normal leading-tight md:leading-[74px]"
              style={{ letterSpacing: '0.22px' }}
            >
              {product.title}
            </h1>

            {/* Description */}
            <p className="text-[#b5b5b5] text-lg leading-7 tracking-tight max-w-xl" style={{ fontFamily: 'Inter' }}>
              {product.description}
            </p>

            {/* CTA button */}
            <button
              onClick={() => setIsInquiryOpen(true)}
              className="border border-[#ffb200] rounded-full px-[15px] py-[11px] flex items-center gap-3 text-[#ffb200] font-bold text-lg tracking-tight hover:bg-[#ffb200]/10 transition-colors cursor-pointer"
              style={{ fontFamily: 'Inter' }}
            >
              Inquiry Now
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16992 10H15.8366" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 4.16504L15.8333 9.99837L10 15.8317" stroke="currentColor" strokeWidth="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ════════════════ PRODUCT OVERVIEW ════════════════ */}
      <section className="bg-white w-full flex flex-col items-start px-6 md:px-[94px] py-[60px] md:py-[100px]">
        <div className="flex flex-col lg:flex-row gap-16 items-start w-full max-w-[1440px] mx-auto">

          {/* ── Gallery ── */}
          <div className="flex-1 flex flex-col gap-6 items-start w-full max-w-[629px]">
            {/* Main image */}
            <div className="rounded-[24px] w-full overflow-hidden aspect-[4/3] bg-[#111]">
              <img
                src={product.gallery[activeImage]}
                alt={product.title}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-4 items-center w-full overflow-x-auto pb-1 no-scrollbar">
              {product.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`bg-[#111] rounded-[14px] overflow-hidden shrink-0 w-[126px] h-[120px] transition-all duration-300 border-2 ${
                    activeImage === idx
                      ? 'border-[#ffb200] shadow-[0_0_12px_rgba(255,178,0,0.3)]'
                      : 'border-[#e2e2e2] hover:border-[#ffb200]/40'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* ── Info ── */}
          <div className="flex-1 flex flex-col gap-6 items-start justify-center w-full">
            <h2 className="font-adlam text-black text-3xl md:text-[40px] leading-[50px] tracking-wide">
              Product Overview
            </h2>

            <div className="flex flex-col gap-3 items-start w-full">
              <h3 className="font-adlam text-black text-xl tracking-wide">{product.title}</h3>
              <p
                className="text-[#989898] text-base leading-7 tracking-tight"
                style={{ fontFamily: 'Inter' }}
              >
                {product.longDescription}
              </p>
            </div>

            {/* Technical Highlights card */}
            <div
              className="bg-white border border-[#e2e2e2] rounded-2xl p-8 flex flex-col gap-6 w-full lg:w-[calc(100%-69px)]"
              style={{ boxShadow: '0 0 5px rgba(0,0,0,0.05)' }}
            >
              <h3 className="font-semibold text-lg text-black tracking-tight" style={{ fontFamily: 'Inter' }}>
                Technical Highlights
              </h3>
              <div className="flex flex-col gap-4 w-full text-sm tracking-tight" style={{ fontFamily: 'Inter' }}>
                {specEntries.map(([key, value], idx) => (
                  <div
                    key={key}
                    className="flex items-center justify-between w-full"
                    style={{ paddingTop: '8.5px', paddingBottom: '8.5px' }}
                  >
                    <span className="text-[14px] leading-[20px] text-[#989898] font-normal" style={{ letterSpacing: '-0.15px' }}>{key}</span>
                    <span className="text-[14px] leading-[20px] font-medium text-black text-right" style={{ letterSpacing: '-0.15px' }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ PRODUCT RESOURCES ════════════════ */}
      <section className="bg-white w-full flex flex-col gap-12 items-start px-6 md:px-[94px] py-[50px]">
        <div className="max-w-[1440px] mx-auto w-full">
          <h2 className="font-adlam text-black text-3xl md:text-[40px] leading-[50px] tracking-wide mb-[50px]">
            Product Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full">

            {/* Docs list */}
            <div className="flex flex-col gap-4 items-start w-full order-2 md:order-1">
              {resources.map((res, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#e2e2e2] rounded-[24px] h-[90px] flex items-center justify-between px-6 w-full hover:shadow-md transition-shadow cursor-pointer"
                  style={{ boxShadow: '0 0 5px rgba(0,0,0,0.05)' }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="rounded-[10px] w-10 h-10 flex items-center justify-center border border-[rgba(255,138,0,0.1)]"
                      style={{
                        backgroundImage:
                          'linear-gradient(135deg, rgba(255,106,0,0.1) 0%, rgba(255,178,0,0.1) 100%)',
                      }}
                    >
                      <DocIcon />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-black tracking-tight" style={{ fontFamily: 'Inter' }}>
                        {res.title}
                      </p>
                      <p className="text-xs text-[#989898]" style={{ fontFamily: 'Inter' }}>
                        {res.size}
                      </p>
                    </div>
                  </div>
                  <DownloadIcon />
                </div>
              ))}
            </div>

            {/* Video/Image feature */}
            <div className="border border-[#1a1a1a] rounded-2xl flex items-center justify-center relative overflow-hidden w-full h-[303px] order-1 md:order-2">
              <div className="absolute inset-0 bg-[#111]">
                <img
                  src={product.gallery[product.gallery.length - 1]}
                  alt=""
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <button className="relative bg-[#0a0a0a]/80 border border-[#1a1a1a] rounded-full w-16 h-16 flex items-center justify-center hover:bg-[#0a0a0a] hover:scale-110 transition-all duration-300">
                <PlayIcon />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ TECHNOLOGY PARTNER ════════════════ */}
      <section className="bg-[#f6f6f6] w-full flex flex-col gap-12 items-start px-6 md:px-[94px] py-[50px]">
        <div className="max-w-[1440px] mx-auto w-full">
          <h2 className="font-adlam text-black text-3xl md:text-[40px] leading-[50px] tracking-wide mb-[50px]">
            Technology Partner
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#e2e2e2] rounded-2xl py-[31px] px-8 flex gap-6 items-start hover:shadow-lg transition-shadow duration-300"
                style={{ boxShadow: '0 0 5px rgba(0,0,0,0.05)' }}
              >
                <div
                  className="border border-[rgba(255,138,0,0.1)] rounded-2xl w-16 h-16 flex items-center justify-center overflow-hidden shrink-0"
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, rgba(255,106,0,0.1) 0%, rgba(255,178,0,0.1) 100%)',
                  }}
                >
                  <img src={partner.logo} alt={partner.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-4 items-start">
                  <div className="flex flex-col gap-2 items-start">
                    <h3
                      className="font-semibold text-lg text-black tracking-tight"
                      style={{ fontFamily: 'Inter' }}
                    >
                      {partner.name}
                    </h3>
                    <p className="text-sm text-[#989898] tracking-tight" style={{ fontFamily: 'Inter' }}>
                      {partner.description}
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="text-sm font-medium text-[#ff8a00] tracking-tight hover:text-[#ffb200] transition-colors"
                    style={{ fontFamily: 'Inter' }}
                  >
                    Inquire Partner
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ CTA ════════════════ */}
      <section
        id="contact"
        className="w-full flex flex-col gap-6 items-center justify-center overflow-hidden relative px-6 md:px-[94px] py-[64px] bg-white"
      >
        {/* Decorative side images */}
        <div className="hidden md:block absolute left-0 bottom-0 select-none pointer-events-none z-10">
          <img
            src="/about-us/about-element.png"
            alt="Arcade Machine Cabinet Left"
            className="h-[442px] w-auto object-contain"
          />
        </div>
        <div className="hidden md:block absolute right-0 bottom-0 select-none pointer-events-none z-10">
          <img
            src="/about-us/about-element-2.png"
            alt="Arcade Machine Cabinet Right"
            className="h-[442px] w-auto object-contain"
          />
        </div>

        <div className="flex flex-col gap-3 items-center text-center relative z-20">
          <h2 className="font-adlam text-black text-3xl md:text-[40px] leading-[50px] tracking-wide">
            Interested in this Product?
          </h2>
          <p
            className="text-[#989898] text-lg md:text-xl leading-7 tracking-tight max-w-none"
            style={{ fontFamily: 'Inter' }}
          >
            Our team is ready to provide specifications, compliance documentation, and deployment guidance.
          </p>
        </div>

        <button
          onClick={() => setIsInquiryOpen(true)}
          className="relative z-20 bg-gradient-to-b from-[#ff8a00] to-[#ff6a00] border border-[#ffb200] rounded-full px-[23px] py-[11px] flex items-center gap-3 text-white font-bold text-lg tracking-tight hover:shadow-[0_0_25px_rgba(255,138,0,0.5)] hover:scale-[1.02] transition-all duration-300 cursor-pointer"
          style={{ fontFamily: 'Inter' }}
        >
          Start Inquiry
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.16992 10H15.8366" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 4.16504L15.8333 9.99837L10 15.8317" stroke="currentColor" strokeWidth="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <p className="relative z-10 text-[#b3b3b3] text-xs text-center" style={{ fontFamily: 'Inter' }}>
          This page is for informational purposes only
        </p>
      </section>

      {/* ════════════════ INQUIRY MODAL ════════════════ */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        productTitle={product.title}
        productImage={product.image}
      />
    </div>
  );
}

export default ProductDetail;
