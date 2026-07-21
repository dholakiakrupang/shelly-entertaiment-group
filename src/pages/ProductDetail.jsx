import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import ArrowIcon from "../components/ArrowIcon";
import InquiryModal from "../components/InquiryModal";
import AnimateOnScroll from "../components/AnimateOnScroll";

/* ──────────────────── Product Data ──────────────────── */
const productsList = [
  {
    id: 1,
    title: "Skill Match Game System Pro",
    category: "Skill-Based Games",
    description:
      "A digital skill-based game system designed for fair play, competitive gameplay, and user engagement with advanced tracking.",
    longDescription:
      "The Skill Match Game System Pro is a premium-grade gaming solution designed to support fair play and compliant digital entertainment. Each system is carefully engineered for commercial environments that prioritize user engagement, responsible gameplay, and transparent operations. This product is ideal for entertainment venues seeking reliable, skill-based gaming experiences with professional-level hardware.",
    image: "/product/product-card-1.png",
    gallery: [
      "/product/product-card-1.png",
      "/product/product-card-2.png",
      "/product/product-card-3.png",
      "/product/product-card-4.png",
      "/product/product-card-5.png",
    ],
    specs: {
      "Platform Compatibility": "Cross-platform",
      "Display Resolution": "4K / 60 FPS supported",
      "Input Method": "Touchscreen + Physical Buttons",
      "Network Requirement": "Ethernet / WiFi Capable",
      "Local/API Offline Capable": "Yes",
    },
  },
  {
    id: 2,
    title: "Arcade Skill Challenge Platform",
    category: "Skill-Based Games",
    description:
      "An interactive challenge-based gaming experience built around competitive gameplay with premium hardware integration.",
    longDescription:
      "The Arcade Skill Challenge Platform delivers an immersive, challenge-driven gaming experience that combines cutting-edge hardware with intuitive software. Built for commercial environments, it offers competitive gameplay modes, real-time scoring, and seamless integration with venue management systems. Ideal for arcades and entertainment centers seeking engaging, skill-based attractions.",
    image: "/product/product-card-2.png",
    gallery: [
      "/product/product-card-2.png",
      "/product/product-card-1.png",
      "/product/product-card-3.png",
      "/product/product-card-5.png",
      "/product/product-card-6.png",
    ],
    specs: {
      "Platform Compatibility": "Windows / Android",
      "Display Resolution": "1080p / 120 FPS",
      "Input Method": "Joystick + Buttons",
      "Network Requirement": "WiFi / LAN",
      "Local/API Offline Capable": "Yes",
    },
  },
  {
    id: 3,
    title: "Digital Prize Showdown Edition",
    category: "Fish Tables",
    description:
      "Immersive video-based arcade experience with advanced hardware integration and stunning visual effects.",
    longDescription:
      "The Digital Prize Showdown Edition offers an unparalleled visual gaming experience with stunning 4K graphics and dynamic visual effects. Designed for fish table gaming enthusiasts, this system combines premium display technology with responsive controls and networked multiplayer capabilities. Perfect for venues looking to deliver captivating, prize-oriented entertainment.",
    image: "/product/product-card-3.png",
    gallery: [
      "/product/product-card-3.png",
      "/product/product-card-4.png",
      "/product/product-card-1.png",
      "/product/product-card-7.png",
      "/product/product-card-8.png",
    ],
    specs: {
      "Platform Compatibility": "Custom OS",
      "Display Resolution": "4K / 60 FPS supported",
      "Input Method": "Touchscreen",
      "Network Requirement": "Ethernet Required",
      "Local/API Offline Capable": "Limited",
    },
  },
  {
    id: 4,
    title: "Ocean Quest Gaming Table",
    category: "Fish Tables",
    description:
      "Premium fish table gaming platform with multiplayer support and engaging underwater-themed gameplay.",
    longDescription:
      "Ocean Quest Gaming Table brings the deep-sea adventure to life with vibrant underwater visuals and multiplayer support for up to 8 players. This premium fish table system features advanced physics simulation, progressive jackpot support, and robust anti-tamper hardware. Engineered for high-traffic venues demanding reliable, engaging entertainment.",
    image: "/product/product-card-4.png",
    gallery: [
      "/product/product-card-4.png",
      "/product/product-card-3.png",
      "/product/product-card-2.png",
      "/product/product-card-6.png",
      "/product/product-card-9.png",
    ],
    specs: {
      "Platform Compatibility": "Custom OS",
      "Display Resolution": "4K / 60 FPS",
      "Input Method": "Touchscreen + Trackball",
      "Network Requirement": "Ethernet / WiFi",
      "Local/API Offline Capable": "Yes",
    },
  },
  {
    id: 5,
    title: "Signature Trivia Advanced",
    category: "Promotional Game Systems",
    description:
      "Premium trivia hardware system engineered for commercial deployment with cloud-based content management.",
    longDescription:
      "Signature Trivia Advanced is a cloud-connected trivia gaming system that allows venues to deploy customizable quiz content with real-time leaderboards. Featuring a sleek commercial-grade display, wireless connectivity, and an intuitive content management dashboard, this system transforms any venue into an interactive entertainment destination.",
    image: "/product/product-card-5.png",
    gallery: [
      "/product/product-card-5.png",
      "/product/product-card-6.png",
      "/product/product-card-1.png",
      "/product/product-card-8.png",
      "/product/product-card-9.png",
    ],
    specs: {
      "Platform Compatibility": "Web-based / Cross-platform",
      "Display Resolution": "1080p / 60 FPS",
      "Input Method": "Touchscreen",
      "Network Requirement": "WiFi Required",
      "Local/API Offline Capable": "No",
    },
  },
  {
    id: 6,
    title: "Player Engagement Terminal Plus",
    category: "Promotional Game Systems",
    description:
      "Multi-game promotional system designed for maximum player engagement and retention with loyalty features.",
    longDescription:
      "The Player Engagement Terminal Plus is an all-in-one promotional gaming kiosk that combines multiple game types with integrated loyalty and rewards tracking. Its modular software architecture allows operators to customize game libraries, run promotional campaigns, and track player engagement metrics — all from a central dashboard.",
    image: "/product/product-card-6.png",
    gallery: [
      "/product/product-card-6.png",
      "/product/product-card-5.png",
      "/product/product-card-7.png",
      "/product/product-card-2.png",
      "/product/product-card-4.png",
    ],
    specs: {
      "Platform Compatibility": "Windows / Linux",
      "Display Resolution": "1080p / 60 FPS",
      "Input Method": "Touchscreen + Keyboard",
      "Network Requirement": "Ethernet / WiFi",
      "Local/API Offline Capable": "Yes",
    },
  },
  {
    id: 7,
    title: "Commercial Gaming Hardware",
    category: "Gaming Hardware & Systems",
    description:
      "Complete gaming hardware solution for commercial deployment with enterprise-grade reliability and support.",
    longDescription:
      "Our Commercial Gaming Hardware line delivers enterprise-grade reliability for demanding commercial environments. Each unit is built with industrial-quality components, advanced cooling systems, and tamper-resistant enclosures. Backed by comprehensive warranty and 24/7 technical support, these systems are engineered for continuous operation in high-traffic venues.",
    image: "/product/product-card-7.png",
    gallery: [
      "/product/product-card-7.png",
      "/product/product-card-8.png",
      "/product/product-card-1.png",
      "/product/product-card-3.png",
      "/product/product-card-9.png",
    ],
    specs: {
      "Platform Compatibility": "Universal",
      "Display Resolution": "4K / 120 FPS supported",
      "Input Method": "Configurable",
      "Network Requirement": "Ethernet / WiFi / 5G",
      "Local/API Offline Capable": "Yes",
    },
  },
  {
    id: 8,
    title: "Multi-Station Gaming Network Hub",
    category: "Gaming Hardware & Systems",
    description:
      "Networked gaming system supporting multiple stations with centralized management and analytics dashboard.",
    longDescription:
      "The Multi-Station Gaming Network Hub is designed for large-scale venue deployments, connecting up to 50 gaming stations through a centralized management system. Features include real-time analytics, remote diagnostics, automatic software updates, and comprehensive reporting tools. Ideal for operators managing multiple locations or large entertainment complexes.",
    image: "/product/product-card-8.png",
    gallery: [
      "/product/product-card-8.png",
      "/product/product-card-7.png",
      "/product/product-card-6.png",
      "/product/product-card-4.png",
      "/product/product-card-2.png",
    ],
    specs: {
      "Platform Compatibility": "Linux / Custom OS",
      "Display Resolution": "Multi-display support",
      "Input Method": "Remote + Local",
      "Network Requirement": "Ethernet Required",
      "Local/API Offline Capable": "Limited",
    },
  },
  {
    id: 9,
    title: "Vegas Skill Tournament System",
    category: "Skill-Based Games",
    description:
      "Tournament-ready skill gaming platform with real-time leaderboards and competitive play features.",
    longDescription:
      "The Vegas Skill Tournament System is purpose-built for competitive gaming events and tournament-style play. With real-time leaderboards, bracket management, and live spectator displays, this system transforms any venue into a professional esports-style arena. Features include anti-cheat technology, player authentication, and comprehensive result tracking.",
    image: "/product/product-card-9.png",
    gallery: [
      "/product/product-card-9.png",
      "/product/product-card-1.png",
      "/product/product-card-2.png",
      "/product/product-card-5.png",
      "/product/product-card-7.png",
    ],
    specs: {
      "Platform Compatibility": "Cross-platform",
      "Display Resolution": "4K / 144 FPS",
      "Input Method": "Controller + Touchscreen",
      "Network Requirement": "Low-latency Ethernet",
      "Local/API Offline Capable": "No",
    },
  },
];

/* ──────────────────── Technology Partners ──────────────────── */
const partners = [
  {
    name: "Apex Gaming Solutions",
    description: "Leading provider of advanced skill-gaming software engines.",
    logo: "/product/tec-partner-1.png",
  },
  {
    name: "SecurePay Tech",
    description: "Trusted payment integration for commercial gaming platforms.",
    logo: "/product/tec-partner-2.png",
  },
  {
    name: "Venue Masters",
    description: "End-to-end venue management and deployment specialists.",
    logo: "/product/tec-partner-3.png",
  },
  {
    name: "Excel Gaming Studio",
    description: "Innovative game content creators for entertainment venues.",
    logo: "/product/tec-partner-4.png",
  },
];

/* ──────────────────── Document Resources ──────────────────── */
const resources = [
  {
    title: "System Specification Sheet",
    size: "PDF · 2.4 MB",
    icon: "doc",
  },
  {
    title: "Compliance Overview",
    size: "PDF · 1.8 MB",
    icon: "shield",
  },
  {
    title: "Installation & Setup Guide",
    size: "PDF · 3.1 MB",
    icon: "doc",
  },
];

/* ──────────────────── SVG Icons ──────────────────── */
const DocIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.4997 1.66699H4.99967C4.55765 1.66699 4.13372 1.84259 3.82116 2.15515C3.5086 2.46771 3.33301 2.89163 3.33301 3.33366V16.667C3.33301 17.109 3.5086 17.5329 3.82116 17.8455C4.13372 18.1581 4.55765 18.3337 4.99967 18.3337H14.9997C15.4417 18.3337 15.8656 18.1581 16.1782 17.8455C16.4907 17.5329 16.6663 17.109 16.6663 16.667V5.83366L12.4997 1.66699Z"
      stroke="#FF8A00"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.667 1.66699V5.00033C11.667 5.44235 11.8426 5.86628 12.1551 6.17884C12.4677 6.4914 12.8916 6.66699 13.3337 6.66699H16.667"
      stroke="#C68A2B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.33366 7.5H6.66699"
      stroke="#C68A2B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.3337 10.833H6.66699"
      stroke="#C68A2B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.3337 14.167H6.66699"
      stroke="#C68A2B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg
    className="w-5 h-5 text-[#ff8a00]"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      d="M10 2l7 3v5c0 5-3 8-7 9-4-1-7-4-7-9V5l7-3z"
      strokeLinejoin="round"
    />
  </svg>
);

const DownloadIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5"
      stroke="#777777"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.83301 8.33301L9.99967 12.4997L14.1663 8.33301"
      stroke="#777777"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 12.5V2.5"
      stroke="#777777"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PlayIcon = () => (
  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const BackArrowIcon = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M10 3L5 8l5 5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ──────────────────── Component ──────────────────── */
function ProductDetail() {
  const { id } = useParams();
  const product = productsList.find((p) => p.id === Number(id));
  const [activeImage, setActiveImage] = useState(0);
  const [displayImage, setDisplayImage] = useState('');
  const [isFading, setIsFading] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [downloadingIndex, setDownloadingIndex] = useState(null);
  const [downloadSuccessToast, setDownloadSuccessToast] = useState('');
  const thumbnailScrollRef = useRef(null);

  const scrollThumbnails = (direction) => {
    if (thumbnailScrollRef.current) {
      const scrollAmount = direction === 'left' ? -150 : 150;
      thumbnailScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleResourceDownload = (res, idx) => {
    if (downloadingIndex !== null) return;
    setDownloadingIndex(idx);

    setTimeout(() => {
      const content = `Shelly Entertainment Group\n===================================\nDocument: ${res.title}\nProduct: ${product?.title || 'Gaming System'}\nSize: ${res.size}\nStatus: Official Product Documentation\n\nThis is an official specification document for ${product?.title || 'Product'}.\nGenerated on: ${new Date().toLocaleDateString()}`;

      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      const fileName = `${res.title.replace(/[^a-zA-Z0-9]/g, '_')}.txt`;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setDownloadingIndex(null);
      setDownloadSuccessToast(res.title);

      setTimeout(() => {
        setDownloadSuccessToast('');
      }, 3500);
    }, 600);
  };

  // Sync display image when product details change
  useEffect(() => {
    if (product) {
      setDisplayImage(product.gallery[0]);
      setActiveImage(0);
    }
  }, [product]);

  // Scroll to top on mount / product change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleImageChange = (index) => {
    if (index === activeImage) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveImage(index);
      setDisplayImage(product.gallery[index]);
      setIsFading(false);
    }, 150);
  };

  const handlePrevLightboxImage = () => {
    if (!product) return;
    setLightboxImageIndex((prev) => (prev === 0 ? product.gallery.length - 1 : prev - 1));
  };

  const handleNextLightboxImage = () => {
    if (!product) return;
    setLightboxImageIndex((prev) => (prev === product.gallery.length - 1 ? 0 : prev + 1));
  };

  // Keyboard controls for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') setIsLightboxOpen(false);
      if (e.key === 'ArrowLeft') handlePrevLightboxImage();
      if (e.key === 'ArrowRight') handleNextLightboxImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, lightboxImageIndex, product]);

  // 404-style fallback
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0b] text-white gap-6">
        <h1 className="font-adlam text-4xl">Product Not Found</h1>
        <p className="text-[#b5b5b5] text-lg">
          The product you're looking for doesn't exist.
        </p>
        <Link
          to="/products"
          className="rounded-full px-6 py-3 text-[#ffb200] font-bold btn-outline-gold"
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
      <section className="relative w-full bg-gradient-to-b from-[#0a0a0b] to-[#0f0f10] flex items-center justify-center pt-24 sm:pt-28 md:pt-32 lg:pt-[167px] pb-5 sm:pb-8 md:pb-[27px] min-h-[200px] sm:min-h-[300px] md:min-h-[420px]">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 xl:px-[94px] flex flex-col gap-3 sm:gap-6 md:gap-8 items-center relative w-full">
          {/* Back link */}
          <Link
            to="/products"
            className="self-start lg:absolute lg:left-0 lg:top-0 flex items-center gap-1.5 text-[#777] text-xs sm:text-sm tracking-tight hover:text-white transition-colors mt-2 mb-2 lg:mt-0 lg:mb-0"
          >
            <BackArrowIcon />
            <span>BACK TO CATALOG</span>
          </Link>

          <div className="flex flex-col gap-2.5 sm:gap-6 md:gap-8 items-center flex-1 max-w-3xl text-center w-full">
            {/* Category pill */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-full px-2.5 py-1 sm:px-[15px] sm:py-[7px] flex items-center gap-1.5 sm:gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-b from-[#ff6a00] to-[#ffb200] inline-block"></span>
              <span
                className="text-[#b5b5b5] text-[11px] sm:text-sm tracking-tight"
                style={{ fontFamily: "Inter" }}
              >
                {product.category}
              </span>
            </div>

            {/* Title */}
            <AnimateOnScroll animation="fade-up" as="h1"
              className="font-adlam text-white text-xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[64px] font-normal leading-tight md:leading-[60px] lg:leading-[70px] xl:leading-[74px]"
              style={{ letterSpacing: "0.22px" }}
            >
              {product.title}
            </AnimateOnScroll>

            {/* Description */}
            <AnimateOnScroll animation="fade-up" delay={150} as="p"
              className="text-[#FAFAFA] text-xs sm:text-base md:text-lg leading-snug sm:leading-6 md:leading-7 tracking-tight max-w-xl"
              style={{ fontFamily: "Inter", color: "#FAFAFA" }}
            >
              {product.description}
            </AnimateOnScroll>

            {/* CTA button */}
            <AnimateOnScroll animation="fade-up" delay={300}>
            <button
              onClick={() => setIsInquiryOpen(true)}
              className="border border-[#ffb200] rounded-full px-3.5 py-1.5 sm:px-[15px] sm:py-[11px] flex items-center gap-1.5 sm:gap-3 text-[#ffb200] font-bold text-xs sm:text-lg tracking-tight btn-outline-gold cursor-pointer"
              style={{ fontFamily: "Inter" }}
            >
              <span>Inquiry Now</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="sm:w-5 sm:h-5"
              >
                <path
                  d="M4.16992 10H15.8366"
                  stroke="currentColor"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 4.16504L15.8333 9.99837L10 15.8317"
                  stroke="currentColor"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ════════════════ PRODUCT OVERVIEW ════════════════ */}
      <section className="bg-white w-full py-[24px] sm:py-[40px] md:py-[100px]">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 xl:px-[94px] flex flex-col lg:flex-row gap-6 sm:gap-12 lg:gap-16 items-start w-full">
          {/* ── Gallery ── */}
          <AnimateOnScroll animation="fade-right" className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6 items-start">
            {/* Main image */}
            <div
              onClick={() => {
                setLightboxImageIndex(activeImage);
                setIsLightboxOpen(true);
              }}
              className="group/main rounded-[16px] sm:rounded-[24px] w-full overflow-hidden aspect-[4/3] bg-[#111] relative shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-[#e2e2e2] cursor-pointer"
            >
              <img
                src={displayImage || product.gallery[0]}
                alt={product.title}
                className={`w-full h-full object-cover transition-all duration-300 group-hover/main:scale-105 ${
                  isFading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              />
              {/* Click to Enlarge Hover Effect */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/main:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-black/60 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 flex items-center gap-2 transform translate-y-2 group-hover/main:translate-y-0 transition-all duration-300 text-white text-sm font-semibold">
                  <svg className="w-4 h-4 text-[#ffb200]" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3.33 7.5V3.33H7.5M12.5 3.33H16.67V7.5M16.67 12.5V16.67H12.5M7.5 16.67H3.33V12.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Click to Enlarge
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="relative w-full flex items-center gap-3">
              {/* Left Scroll Button */}
              <button
                type="button"
                onClick={() => scrollThumbnails('left')}
                className="bg-white border border-[#e2e2e2] hover:border-[#ffb200]/50 hover:shadow-sm rounded-full w-8 h-8 flex items-center justify-center shrink-0 transition-all cursor-pointer z-10"
                aria-label="Scroll left"
              >
                <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              {/* Thumbnails list wrapper */}
              <div
                ref={thumbnailScrollRef}
                className="flex gap-4 items-center flex-1 overflow-x-auto pb-2 pt-1 no-scrollbar scroll-smooth"
              >
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleImageChange(idx)}
                    onMouseEnter={() => handleImageChange(idx)}
                    className={`group relative bg-white rounded-[10px] sm:rounded-[14px] overflow-hidden shrink-0 w-[64px] h-[60px] sm:w-[100px] sm:h-[95px] md:w-[126px] md:h-[120px] transition-all duration-300 border-2 cursor-pointer ${
                      activeImage === idx
                        ? 'border-[#ffb200] shadow-[0_0_15px_rgba(255,178,0,0.35)] scale-[0.98]'
                        : 'border-[#e2e2e2] hover:border-[#ffb200]/60 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:scale-[1.02]'
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Hover Overlay with Enlarge Icon */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white transform scale-75 group-hover:scale-100 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                    </div>
                    {/* Active Indicator Overlay */}
                    <div
                      className={`absolute inset-0 bg-[#ffb200]/5 transition-opacity duration-300 ${
                        activeImage === idx ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                    {/* Indicator Dot */}
                    {activeImage === idx && (
                      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#ffb200] shadow-[0_0_8px_#ffb200]" />
                    )}
                  </button>
                ))}
              </div>

              {/* Right Scroll Button */}
              <button
                type="button"
                onClick={() => scrollThumbnails('right')}
                className="bg-white border border-[#e2e2e2] hover:border-[#ffb200]/50 hover:shadow-sm rounded-full w-8 h-8 flex items-center justify-center shrink-0 transition-all cursor-pointer z-10"
                aria-label="Scroll right"
              >
                <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </AnimateOnScroll>

          {/* ── Info ── */}
          <AnimateOnScroll animation="fade-left" delay={200} className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6 items-start justify-center">
            <h2 className="font-adlam text-black text-xl sm:text-3xl md:text-[40px] leading-tight md:leading-[50px] tracking-wide">
              Product Overview
            </h2>

            <div className="flex flex-col gap-2 sm:gap-3 items-start w-full">
              <h3 className="font-adlam text-black text-lg sm:text-xl tracking-wide">
                {product.title}
              </h3>
              <p
                className="text-[#989898] text-xs sm:text-base leading-5 sm:leading-7 tracking-tight"
                style={{ fontFamily: "Inter" }}
              >
                {product.longDescription}
              </p>
            </div>

            {/* Technical Highlights card */}
            <div
              className="bg-white border border-[#e2e2e2] rounded-xl sm:rounded-2xl p-4 sm:p-8 flex flex-col gap-3 sm:gap-6 w-full"
              style={{ boxShadow: "0 0 5px rgba(0,0,0,0.05)" }}
            >
              <h3
                className="font-semibold text-sm sm:text-lg text-black tracking-tight"
                style={{ fontFamily: "Inter" }}
              >
                Technical Highlights
              </h3>
              <div
                className="flex flex-col gap-2 sm:gap-4 w-full text-xs sm:text-sm tracking-tight"
                style={{ fontFamily: "Inter" }}
              >
                {specEntries.map(([key, value], idx) => (
                  <div
                    key={key}
                    className="flex items-center justify-between w-full"
                    style={{ paddingTop: "4px", paddingBottom: "4px" }}
                  >
                    <span
                      className="text-xs sm:text-[14px] leading-[18px] sm:leading-[20px] text-[#989898] font-normal"
                      style={{ letterSpacing: "-0.15px" }}
                    >
                      {key}
                    </span>
                    <span
                      className="text-xs sm:text-[14px] leading-[18px] sm:leading-[20px] font-medium text-black text-right"
                      style={{ letterSpacing: "-0.15px" }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ════════════════ PRODUCT RESOURCES ════════════════ */}
      <section className="bg-white w-full py-[24px] sm:py-[50px]">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 xl:px-[94px] w-full flex flex-col gap-6 sm:gap-12 items-start">
          <AnimateOnScroll animation="fade-up" as="h2" className="font-adlam text-black text-xl sm:text-3xl md:text-[40px] leading-tight md:leading-[50px] tracking-wide mb-[12px] md:mb-[50px]">
            Product Resources
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-16 w-full">
            {/* Docs list */}
            <div className="flex flex-col gap-3 sm:gap-4 items-start w-full order-2 md:order-1">
              {resources.map((res, idx) => (
                <div
                  key={idx}
                  onClick={() => handleResourceDownload(res, idx)}
                  className="group bg-white border border-[#e2e2e2] rounded-xl sm:rounded-[24px] h-[68px] sm:h-[90px] flex items-center justify-between px-4 sm:px-6 w-full hover:shadow-md hover:border-[#ffb200]/60 transition-all cursor-pointer select-none"
                  style={{ boxShadow: "0 0 5px rgba(0,0,0,0.05)" }}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div
                      className="rounded-lg sm:rounded-[10px] w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-[rgba(255,138,0,0.1)] group-hover:scale-105 transition-transform shrink-0"
                      style={{
                        backgroundImage:
                          "linear-gradient(135deg, rgba(255,106,0,0.1) 0%, rgba(255,178,0,0.1) 100%)",
                      }}
                    >
                      <DocIcon />
                    </div>
                    <div>
                      <p
                        className="text-xs sm:text-sm font-medium text-black tracking-tight group-hover:text-[#ff8a00] transition-colors"
                        style={{ fontFamily: "Inter" }}
                      >
                        {res.title}
                      </p>
                      <p
                        className="text-[10px] sm:text-xs text-[#989898]"
                        style={{ fontFamily: "Inter" }}
                      >
                        {res.size}
                      </p>
                    </div>
                  </div>

                  {/* Download button / loading indicator */}
                  <div className="flex items-center gap-2">
                    {downloadingIndex === idx ? (
                      <div className="w-5 h-5 border-2 border-[#ff8a00] border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <div className="text-[#777] group-hover:text-[#ff8a00] group-hover:scale-110 transition-all">
                        <DownloadIcon />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Video/Image feature */}
            <div
              onClick={() => {
                setIsVideoModalOpen(true);
              }}
              className="group/video border border-[#1a1a1a] rounded-xl sm:rounded-2xl flex items-center justify-center relative overflow-hidden w-full h-[180px] sm:h-[303px] order-1 md:order-2 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-[#111]">
                <img
                  src={product.gallery[product.gallery.length - 1]}
                  alt="Product Video Preview"
                  className="w-full h-full object-cover opacity-80 group-hover/video:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover/video:bg-black/40 transition-colors duration-300 flex items-center justify-center" />
              <button
                type="button"
                className="relative bg-[#0a0a0a]/80 border border-white/20 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center group-hover/video:scale-110 group-hover/video:bg-[#ffb200] group-hover/video:border-[#ffb200] transition-all duration-300 shadow-lg pointer-events-none"
              >
                <PlayIcon />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ TECHNOLOGY PARTNER ════════════════ */}
      <section className="bg-[#f6f6f6] w-full py-[24px] sm:py-[50px]">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 xl:px-[94px] w-full flex flex-col gap-6 sm:gap-12 items-start">
          <AnimateOnScroll animation="fade-up" as="h2" className="font-adlam text-black text-xl sm:text-3xl md:text-[40px] leading-tight md:leading-[50px] tracking-wide mb-[12px] md:mb-[50px]">
            Technology Partner
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full stagger-children">
            {partners.map((partner, idx) => (
              <AnimateOnScroll key={idx} animation="fade-up" delay={idx * 120}
                className="bg-white border border-[#e2e2e2] rounded-xl sm:rounded-2xl p-3.5 sm:py-[31px] sm:px-8 flex gap-3 sm:gap-6 items-start hover:shadow-lg transition-shadow duration-300"
                style={{ boxShadow: "0 0 5px rgba(0,0,0,0.05)" }}
              >
                <div
                  className="border border-[rgba(255,138,0,0.1)] rounded-xl sm:rounded-2xl w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center overflow-hidden shrink-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, rgba(255,106,0,0.1) 0%, rgba(255,178,0,0.1) 100%)",
                  }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:gap-4 items-start">
                  <div className="flex flex-col gap-1 sm:gap-2 items-start">
                    <h3
                      className="font-semibold text-sm sm:text-lg text-black tracking-tight"
                      style={{ fontFamily: "Inter" }}
                    >
                      {partner.name}
                    </h3>
                    <p
                      className="text-xs sm:text-sm text-[#989898] tracking-tight"
                      style={{ fontFamily: "Inter" }}
                    >
                      {partner.description}
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="text-xs sm:text-sm font-medium text-[#ff8a00] tracking-tight hover:text-[#ffb200] transition-colors"
                    style={{ fontFamily: "Inter" }}
                  >
                    Inquire Partner
                  </a>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
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
              Interested in this Product?
            </h2>
            <p
              className="text-[#989898] text-xs sm:text-base md:text-xl leading-4 sm:leading-6 md:leading-7 tracking-tight max-w-[800px]"
              style={{ fontFamily: "Inter" }}
            >
              Our team is ready to provide specifications, compliance
              documentation, and deployment guidance.
            </p>
          </AnimateOnScroll>

          <button
            onClick={() => setIsInquiryOpen(true)}
            className="border border-[#ffb200] rounded-full px-4 py-2.5 sm:px-[23px] sm:py-[11px] flex items-center gap-2 sm:gap-3 text-white font-bold text-xs sm:text-lg tracking-tight btn-gradient-primary cursor-pointer"
            style={{ fontFamily: "Inter" }}
          >
            <span>Start Inquiry</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sm:w-5 sm:h-5"
            >
              <path
                d="M4.16992 10H15.8366"
                stroke="currentColor"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 4.16504L15.8333 9.99837L10 15.8317"
                stroke="currentColor"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <p
            className="text-[#b3b3b3] text-[10px] sm:text-xs text-center"
            style={{ fontFamily: "Inter" }}
          >
            This page is for informational purposes only
          </p>
        </div>
      </section>

      {/* ════════════════ INQUIRY MODAL ════════════════ */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        productTitle={product.title}
        productImage={product.image}
      />

      {/* ════════════════ LIGHTBOX MODAL ════════════════ */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[150] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-10 select-none"
          onClick={() => setIsLightboxOpen(false)}
          style={{ animation: 'fadeIn 0.25s ease-out' }}
        >
          {/* Close button */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 text-white/80 hover:text-white hover:bg-white/20 transition-all cursor-pointer bg-white/10 border border-white/20 rounded-full w-12 h-12 flex items-center justify-center focus:outline-none z-[160]"
            aria-label="Close lightbox"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Left Navigation Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevLightboxImage();
            }}
            className="absolute left-4 md:left-8 text-white/80 hover:text-[#ffb200] hover:border-[#ffb200]/50 hover:bg-black/60 transition-all cursor-pointer bg-black/40 border border-white/20 rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center focus:outline-none z-[160]"
            aria-label="Previous image"
          >
            <svg className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Centered Image Container - Maximized size with no border or rounding */}
          <div
            className="relative w-full max-w-[95vw] h-full max-h-[92vh] flex flex-col items-center justify-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={product.gallery[lightboxImageIndex]}
              alt={product.title}
              className="w-full h-full max-h-[88vh] object-contain transition-all duration-300 border-none rounded-none shadow-none"
            />
            {/* Image counter */}
            <span className="text-white/90 text-sm font-medium tracking-wide bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10" style={{ fontFamily: 'Inter' }}>
              {lightboxImageIndex + 1} / {product.gallery.length}
            </span>
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNextLightboxImage();
            }}
            className="absolute right-4 md:right-8 text-white/80 hover:text-[#ffb200] hover:border-[#ffb200]/50 hover:bg-black/60 transition-all cursor-pointer bg-black/40 border border-white/20 rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center focus:outline-none z-[160]"
            aria-label="Next image"
          >
            <svg className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      )}

      {/* ════════════════ VIDEO MODAL POPUP ════════════════ */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-[170] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-10 select-none"
          onClick={() => setIsVideoModalOpen(false)}
          style={{ animation: 'fadeIn 0.25s ease-out' }}
        >
          {/* Close button */}
          <button
            onClick={() => setIsVideoModalOpen(false)}
            className="absolute top-6 right-6 text-white/80 hover:text-white hover:bg-white/20 transition-all cursor-pointer bg-white/10 border border-white/20 rounded-full w-12 h-12 flex items-center justify-center focus:outline-none z-[180]"
            aria-label="Close video modal"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Centered Video Container */}
          <div
            className="relative w-full max-w-[1000px] aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={product.videoUrl || "https://assets.mixkit.co/videos/preview/mixkit-game-arcade-machine-in-a-gaming-room-42805-large.mp4"}
              controls
              autoPlay
              className="w-full h-full object-contain"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* ════════════════ DOWNLOAD SUCCESS TOAST ════════════════ */}
      {downloadSuccessToast && (
        <div
          className="fixed bottom-6 right-6 z-[200] bg-[#0c0c0d] text-white px-5 py-3 rounded-xl border border-[#ffb200]/40 shadow-2xl flex items-center gap-3"
          style={{ animation: 'slideUp 0.3s ease-out' }}
        >
          <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold shrink-0">
            ✓
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 font-sans">Download Complete</span>
            <span className="text-sm font-medium text-white font-sans">{downloadSuccessToast}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
