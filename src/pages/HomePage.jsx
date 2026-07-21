import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ArrowIcon from "../components/ArrowIcon";
import AnimateOnScroll from "../components/AnimateOnScroll";
import section1Bg from "../assets/section-1-bg.png";
import section1BgElement from "../assets/section-1-bg-element.png";

function HomePage() {
  const sliderImages = [
    "/slider-img.png",
    "/Image (Skill Match Game System).png",
    "/Image (Arcade Skill-Challenge Platform).png",
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const prevSlideRef = useRef(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goToSlide = (newIndex) => {
    prevSlideRef.current = activeSlide;
    setActiveSlide(newIndex);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 35;
    if (distance > minSwipeDistance) {
      goToSlide((activeSlide + 1) % sliderImages.length);
    } else if (distance < -minSwipeDistance) {
      goToSlide((activeSlide - 1 + sliderImages.length) % sliderImages.length);
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((activeSlide + 1) % sliderImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [activeSlide]);

  const products = [
    {
      title: "Skill Match Game System",
      category: "Skill-Based Games",
      bgImage: "/Image (Skill Match Game System).png",
      link: "/products?category=Skill-Based Games",
    },
    {
      title: "Arcade Skill-Challenge Platform",
      category: "Skill-Based Games",
      bgImage: "/Image (Arcade Skill-Challenge Platform).png",
      link: "/products?category=Skill-Based Games",
    },
    {
      title: "Digital Fan Table",
      category: "Fish Tables",
      bgImage: "/Image (Digital Fan Table) (1).png",
      link: "/products?category=Fish Tables",
    },
    {
      title: "Gaming Terminal Hardware",
      category: "Gaming Hardware & Systems",
      bgImage: "/Image (Gaming Terminal Hardware).png",
      link: "/products?category=Gaming Hardware %26 Systems",
    },
  ];

  const partnerLogos = [
    "/partner-1.png",
    "/partner-2.png",
    "/partner-3.png",
    "/partner-4.png",
    "/partner-5.png",
  ];

  return (
    <>
      {/* Hero Section (Section 1) */}
      <section
        id="home"
        className="relative w-full overflow-hidden mb-[10px] min-h-[440px] sm:min-h-[480px] md:min-h-[500px] lg:min-h-[540px] xl:h-[816px] flex items-center"
      >
        {/* Background Image that covers the hero section */}
        <img
          src={section1Bg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none z-10"
        />

        {/* Content Container */}
        <div className="relative z-30 w-full mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 xl:px-[94px] pt-[85px] sm:pt-[95px] md:pt-[90px] lg:pt-[105px] xl:pt-0 pb-[30px] sm:pb-[40px] lg:pb-[40px] xl:pb-0 flex items-center justify-between">
          {/* Left Column (Width 687px on desktop) */}
          <div className="max-w-[687px] w-full text-left flex flex-col relative z-30">
            <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-3.5 lg:space-y-4 xl:space-y-[24px]">
              <AnimateOnScroll
                animation="fade-up"
                delay={0}
                as="p"
                className="flex items-center space-x-2 font-medium uppercase text-xs sm:text-sm md:text-sm lg:text-base leading-snug text-white"
                style={{ fontFamily: "Inter", letterSpacing: "0.4px" }}
              >
                <img
                  src="/shield-check.svg"
                  alt="Shield Icon"
                  className="w-5 h-5 shrink-0"
                />
                <span>
                  Designed for Adult Audiences • Transparent • Compliant
                </span>
              </AnimateOnScroll>

              <AnimateOnScroll
                animation="fade-up"
                delay={150}
                as="h1"
                className="text-2xl sm:text-3xl md:text-[38px] lg:text-[46px] xl:text-[64px] text-white uppercase flex flex-col font-adlam font-normal leading-tight md:leading-[46px] lg:leading-[54px] xl:leading-[74px]"
                style={{ letterSpacing: "-1.11px" }}
              >
                <span className="xl:whitespace-nowrap">
                  Liberty Rewards
                </span>
                <span className="xl:whitespace-nowrap mt-[4px]">
                  Premium Sweepstakes
                </span>
                <span className="xl:whitespace-nowrap">
                  & Skill-Based Gaming
                </span>
              </AnimateOnScroll>

              <AnimateOnScroll
                animation="fade-up"
                delay={300}
                as="p"
                className="text-[#FAFAFA] text-xs sm:text-sm md:text-sm lg:text-base leading-[20px] sm:leading-[24px] md:leading-[22px] lg:leading-[26px] xl:leading-[28px] font-normal max-w-[560px] lg:max-w-none"
                style={{
                  fontFamily: "Inter",
                  letterSpacing: "0px",
                  color: "#FAFAFA",
                }}
              >
                Liberty Rewards is an informational platform showcasing
                sweepstakes-based and skill-driven gaming products designed for
                transparent, compliant, and engaging digital entertainment.
              </AnimateOnScroll>
            </div>

            <AnimateOnScroll
              animation="fade-up"
              delay={450}
              className="mt-[16px] sm:mt-[20px] md:mt-[24px] lg:mt-[28px] xl:mt-[32px]"
            >
              <Link
                to="/products"
                className="btn-outline-gold inline-flex items-center text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] py-[8px] sm:py-[10px] md:py-[10px] lg:py-[11px] px-[12px] sm:px-[16px]"
                style={{
                  border: "1px solid #FFB200",
                  borderRadius: "24px",
                  color: "#FFB200",
                  fontFamily: "Inter",
                  fontWeight: 700,
                  lineHeight: "24px",
                  textAlign: "center",
                  letterSpacing: "-0.44px",
                  gap: "10px",
                }}
              >
                <span className="uppercase">Explore Products</span>
                <ArrowIcon color="#FFB200" />
              </Link>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Right Cabinet Element — Absolute Background Graphic scaling from 1440px down to mobile */}
        <div className="absolute inset-0 w-full max-w-[1440px] mx-auto pointer-events-none z-20 overflow-hidden">
          <img
            src={section1BgElement}
            alt="Arcade Machine Cabinet"
            className="absolute select-none pointer-events-none transition-all duration-300 opacity-40 sm:opacity-60 md:opacity-85 lg:opacity-100"
            style={{
              top: "74.54px",
              right: "-22.61px",
              width: "clamp(260px, 41vw, 590.2625931217872px)",
              height: "auto",
              transform: "rotate(3.23deg)",
              borderRadius: "295.13px",
            }}
          />
        </div>

        {/* Bottom Horizontal Overlay/Gradient */}
        <div
          className="absolute left-1/2 -translate-x-1/2 z-15 pointer-events-none w-full h-[80px] md:h-[120px] lg:h-[174px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(43, 7, 18, 0.1) 0%, #0E0509 49.74%, #000000 100%)",
            bottom: "0px",
            opacity: 1,
          }}
        ></div>
      </section>

      {/* Featured Products Section */}
      <section
        id="products"
        className="bg-white text-brand-bg relative z-20 w-full"
      >
        <div className="max-w-[1440px] w-full mx-auto py-[30px] md:py-[50px] px-5 md:px-8 lg:px-12 xl:px-[94px]">
          <AnimateOnScroll
            animation="fade-up"
            className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-4 md:gap-8"
          >
            <div className="max-w-[700px] w-full">
              <h2
                className="text-2xl sm:text-3xl lg:text-[40px] font-adlam font-normal uppercase text-[#0c0c0d] leading-tight lg:leading-[50px]"
                style={{ letterSpacing: "0.26px" }}
              >
                Featured Products
              </h2>
              <p
                className="text-[#989898] text-[14px] sm:text-[14px] md:text-[16px] font-normal mt-3 sm:mt-[24px]"
                style={{
                  fontFamily: "Inter",
                  letterSpacing: "-0.44px",
                  lineHeight: "24px",
                  color: "#989898",
                }}
              >
                Discover our curated selection of premium arcade machines and
                skill-based gaming solutions.
              </p>
            </div>
            <Link
              to="/products"
              className="mt-2 md:mt-0 inline-flex items-center whitespace-nowrap shrink-0 text-[14px] sm:text-[14px] md:text-[16px] font-semibold text-[#CC8E00] py-[2px] btn-text-link gap-1.5 sm:gap-2"
              style={{ fontFamily: "Inter" }}
            >
              <span className="whitespace-nowrap">View All Products</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block shrink-0"
              >
                <path
                  d="M4.16406 10H15.8307"
                  stroke="#CC8E00"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 4.16406L15.8333 9.9974L10 15.8307"
                  stroke="#CC8E00"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </AnimateOnScroll>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[16px] sm:gap-[20px] md:gap-[24px] mt-[24px] sm:mt-[36px] md:mt-[50px] stagger-children">
            {products.map((product, index) => {
              const colSpan =
                index === 0 || index === 3 ? "md:col-span-7" : "md:col-span-5";
              const cardHeight = index < 2 ? "h-[200px] sm:h-[240px] md:h-[300px] lg:h-[350px]" : "h-[180px] sm:h-[220px] md:h-[250px] lg:h-[280px]";
              return (
                <AnimateOnScroll
                  key={index}
                  animation="fade-up"
                  delay={index * 150}
                  className={colSpan}
                >
                  <Link
                    to={product.link}
                    className={`group relative ${cardHeight} w-full block rounded-[16px] sm:rounded-[20px] md:rounded-[24px] overflow-hidden cursor-pointer`}
                  >
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url("${product.bgImage}")` }}
                    ></div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                    {/* Tags & Badges */}
                    <div className="absolute top-[14px] right-[14px] sm:top-[20px] sm:right-[20px] md:top-[20px] md:right-[20px] lg:top-[24px] lg:right-[24px]">
                      <span className="bg-black/80 backdrop-blur-md text-[10px] sm:text-[11px] md:text-[11px] lg:text-[12px] uppercase text-white font-medium px-2.5 sm:px-3 lg:px-4 py-1 lg:py-1.5 rounded-full font-sans whitespace-nowrap">
                        {product.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 md:bottom-[24px] md:left-[24px] lg:bottom-[32px] lg:left-[32px] pr-4 sm:pr-6 md:pr-6 lg:pr-8 text-white space-y-1 sm:space-y-1.5 lg:space-y-2">
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-[28px] font-bold uppercase tracking-wide font-sans leading-snug md:leading-tight lg:leading-tight">
                        {product.title}
                      </h3>
                      <p className="text-[13px] sm:text-[14px] md:text-[13px] lg:text-[14px] font-medium tracking-wide flex items-center space-x-1 sm:space-x-1.5 text-[#B5B5B5] font-sans">
                        <span>View Machine</span>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                        >
                          <path
                            d="M4.16406 10H15.8307"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 4.16406L15.8333 9.9974L10 15.8307"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </p>
                    </div>
                  </Link>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust & Transparency Section */}
      <section
        id="about"
        className="bg-[#F6F6F6] text-[#0c0c0d] relative z-20 w-full"
      >
        <div className="max-w-[1440px] w-full mx-auto py-[30px] md:py-[50px] px-5 md:px-8 lg:px-12 xl:px-[94px]">
          <div className="text-center">
            <AnimateOnScroll
              animation="fade-up"
              as="h2"
              className="text-2xl sm:text-3xl lg:text-[40px] font-adlam font-normal uppercase text-[#0c0c0d] text-center leading-tight lg:leading-[50px]"
              style={{ letterSpacing: "0.37px" }}
            >
              Built on Trust and Transparency
            </AnimateOnScroll>
            <AnimateOnScroll
              animation="fade-up"
              delay={150}
              as="p"
              className="text-[#989898] text-[14px] sm:text-[14px] md:text-[16px] font-normal mt-[16px] md:mt-[24px] text-center"
              style={{
                fontFamily: "Inter",
                letterSpacing: "-0.15px",
                lineHeight: "1.55",
                color: "#989898",
              }}
            >
              Liberty Rewards offers a streamlined platform for showcasing
              sweepstakes and skill-based gaming products that are built with
              transparency, compliance, and professionalism at the core.
            </AnimateOnScroll>
          </div>

          {/* Features Quadrant Grid */}
          <AnimateOnScroll
            animation="scale-up"
            delay={200}
            className="max-w-[1252px] mx-auto bg-white rounded-[24px] border border-[#E2E2E2] shadow-[0_4px_30px_rgba(0,0,0,0.01)] overflow-hidden grid grid-cols-1 md:grid-cols-2 mt-[30px] sm:mt-[40px] md:mt-[50px]"
          >
            {/* quadrant 1 */}
            <div className="border-b md:border-r border-[#E2E2E2] flex flex-col items-start text-left p-5 sm:p-6 md:p-7 lg:pt-[40px] lg:pr-0 lg:pb-[40px] lg:pl-[36px]">
              <img
                src="/icon-transparent.svg"
                alt="Transparent Icon"
                className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] lg:w-[64px] lg:h-[64px] object-contain mb-[16px] md:mb-[24px] lg:mb-[106px]"
              />
              <h3
                className="text-lg sm:text-xl md:text-[22px] lg:text-[30px] text-[#0c0c0d]"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  lineHeight: "clamp(24px, 4vw, 40px)",
                  letterSpacing: "-0.45px",
                }}
              >
                Transparent Product Information
              </h3>
              <p
                className="text-[#989898] text-sm md:text-[15px] lg:text-[24px] mt-[10px] md:mt-[14px] lg:mt-[24px]"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  lineHeight: "clamp(20px, 3vw, 32px)",
                  letterSpacing: "-0.15px",
                  color: "#989898",
                }}
              >
                Clear and detailed specifications for all showcased gaming
                systems.
              </p>
            </div>

            {/* quadrant 2 */}
            <div className="border-b border-[#E2E2E2] flex flex-col items-start text-left p-5 sm:p-6 md:p-7 lg:pt-[40px] lg:pr-0 lg:pb-[40px] lg:pl-[36px]">
              <img
                src="/icon-compliance.svg"
                alt="Compliance Icon"
                className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] lg:w-[64px] lg:h-[64px] object-contain mb-[16px] md:mb-[24px] lg:mb-[106px]"
              />
              <h3
                className="text-lg sm:text-xl md:text-[22px] lg:text-[30px] text-[#0c0c0d]"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  lineHeight: "clamp(24px, 4vw, 40px)",
                  letterSpacing: "-0.45px",
                }}
              >
                Compliance-Focused Presentation
              </h3>
              <p
                className="text-[#989898] text-sm md:text-[15px] lg:text-[24px] mt-[10px] md:mt-[14px] lg:mt-[24px]"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  lineHeight: "clamp(20px, 3vw, 32px)",
                  letterSpacing: "-0.15px",
                  color: "#989898",
                }}
              >
                Built with a strong emphasis on regulatory compliance and market
                standards.
              </p>
            </div>

            {/* quadrant 3 */}
            <div className="border-b md:border-b-0 md:border-r border-[#E2E2E2] flex flex-col items-start text-left p-5 sm:p-6 md:p-7 lg:pt-[40px] lg:pr-0 lg:pb-[40px] lg:pl-[36px]">
              <img
                src="/icon-premium.svg"
                alt="Premium Icon"
                className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] lg:w-[64px] lg:h-[64px] object-contain mb-[16px] md:mb-[24px] lg:mb-[106px]"
              />
              <h3
                className="text-lg sm:text-xl md:text-[22px] lg:text-[30px] text-[#0c0c0d]"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  lineHeight: "clamp(24px, 4vw, 40px)",
                  letterSpacing: "-0.45px",
                }}
              >
                Premium Digital Experience
              </h3>
              <p
                className="text-[#989898] text-sm md:text-[15px] lg:text-[24px] mt-[10px] md:mt-[14px] lg:mt-[24px]"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  lineHeight: "clamp(20px, 3vw, 32px)",
                  letterSpacing: "-0.15px",
                  color: "#989898",
                }}
              >
                A high-end, user-friendly interface reflecting the quality of
                products we represent.
              </p>
            </div>

            {/* quadrant 4 */}
            <div className="flex flex-col items-start text-left p-5 sm:p-6 md:p-7 lg:pt-[40px] lg:pr-0 lg:pb-[40px] lg:pl-[36px]">
              <img
                src="/icon-partner.svg"
                alt="Partner Icon"
                className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] lg:w-[64px] lg:h-[64px] object-contain mb-[16px] md:mb-[24px] lg:mb-[106px]"
              />
              <h3
                className="text-lg sm:text-xl md:text-[22px] lg:text-[30px] text-[#0c0c0d]"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  lineHeight: "clamp(24px, 4vw, 40px)",
                  letterSpacing: "-0.45px",
                }}
              >
                Partner-Friendly Platform
              </h3>
              <p
                className="text-[#989898] text-sm md:text-[15px] lg:text-[24px] mt-[10px] md:mt-[14px] lg:mt-[24px]"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  lineHeight: "clamp(20px, 3vw, 32px)",
                  letterSpacing: "-0.15px",
                  color: "#989898",
                }}
              >
                Designed to foster strong relationships between developers,
                distributors, and operators.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Partners Section */}
      <section
        id="partners"
        className="bg-white text-brand-bg relative z-20 w-full pt-[30px] md:pt-[36px] lg:pt-[50px] pb-[40px] md:pb-[50px] lg:pb-[100px] overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto w-full px-5 md:px-8 lg:px-12 xl:px-[94px] text-center">
          <AnimateOnScroll
            animation="fade-up"
            as="h2"
            className="text-2xl sm:text-3xl lg:text-[40px] font-adlam font-normal uppercase text-[#0c0c0d] mb-[20px] md:mb-[24px] lg:mb-[32px] text-center leading-tight lg:leading-[50px]"
            style={{ letterSpacing: "0.07px" }}
          >
            Our Technology & Product Partners
          </AnimateOnScroll>
        </div>

        {/* Logo Carousel Container - Bleeds full screen width */}
        <div className="w-full overflow-hidden relative flex select-none">
          {/* Overlay gradients on left/right for smooth fade look */}
          <div className="absolute left-0 top-0 bottom-0 w-[24px] sm:w-[50px] md:w-[100px] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-[24px] sm:w-[50px] md:w-[100px] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Track 1 */}
          <div className="flex shrink-0 gap-4 sm:gap-6 md:gap-[20px] pr-4 sm:pr-6 md:pr-[20px] items-center animate-marquee">
            {partnerLogos.map((logo, index) => (
              <div
                key={`track1-${index}`}
                className="flex items-center justify-center bg-white rounded-[8px] sm:rounded-[12px] shrink-0 px-4 py-3 sm:p-[18px] md:p-[20px] lg:p-[34px]"
              >
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="h-[32px] sm:h-9 md:h-[38px] lg:h-[48px] w-auto max-w-[125px] sm:max-w-[150px] md:max-w-[140px] lg:max-w-none object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>

          {/* Scrolling Track 2 (Identical Clone for Seamless Infinite Loop) */}
          <div className="flex shrink-0 gap-4 sm:gap-6 md:gap-[20px] pr-4 sm:pr-6 md:pr-[20px] items-center animate-marquee" aria-hidden="true">
            {partnerLogos.map((logo, index) => (
              <div
                key={`track2-${index}`}
                className="flex items-center justify-center bg-white rounded-[8px] sm:rounded-[12px] shrink-0 px-4 py-3 sm:p-[18px] md:p-[20px] lg:p-[34px]"
              >
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="h-[32px] sm:h-9 md:h-[38px] lg:h-[48px] w-auto max-w-[125px] sm:max-w-[150px] md:max-w-[140px] lg:max-w-none object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative w-full bg-[#0a0a0b] overflow-hidden z-20">
        {/* Left Side Cabinet Element */}
        <div className="hidden xl:block absolute left-0 bottom-0 select-none pointer-events-none z-10">
          <img
            src="/section-elemnt.png"
            alt="Arcade Machine Cabinet Left"
            className="h-[442px] w-auto object-contain"
          />
        </div>

        {/* Right Side Cabinet Element */}
        <div className="hidden xl:block absolute right-0 bottom-0 select-none pointer-events-none z-10">
          <img
            src={section1BgElement}
            alt="Arcade Machine Cabinet Right"
            className="h-[442px] w-auto object-contain"
          />
        </div>

        {/* Dark overlay covering background & images */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{ backgroundColor: "#00000066" }}
        ></div>

        {/* Glow effect centered on top of cabinets & overlay */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-[25]"
          style={{
            width: "700px",
            height: "700px",
            background:
              "linear-gradient(180deg, rgba(255, 106, 0, 0.2) 0%, rgba(255, 178, 0, 0.2) 100%)",
            filter: "blur(250px)",
            opacity: 0.8,
          }}
        ></div>

        {/* Content Container (Max width 1440px centered) */}
        <div className="max-w-[1440px] mx-auto w-full relative flex items-center justify-center py-[36px] sm:py-[40px] md:py-[48px] lg:py-[75px] px-5 md:px-8 xl:px-[318px] z-30">
          {/* Center Content Column */}
          <div className="max-w-[760px] w-full text-center flex flex-col items-center">
            <AnimateOnScroll
              animation="blur-in"
              as="h2"
              className="text-2xl sm:text-3xl lg:text-[40px] font-adlam font-normal uppercase text-white mb-[12px] md:mb-[18px] lg:mb-[24px] text-center leading-tight md:leading-[38px] lg:leading-[50px]"
              style={{ letterSpacing: "0.26px" }}
            >
              Looking to explore our products or collaborate with us?
            </AnimateOnScroll>
            <AnimateOnScroll
              animation="fade-up"
              delay={150}
              as="p"
              className="text-[#B3B3B3] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-normal mb-[16px] md:mb-[22px] lg:mb-[24px] text-center max-w-[620px] lg:max-w-[760px]"
              style={{
                fontFamily: "Inter",
                letterSpacing: "-0.44px",
                lineHeight: "24px",
                color: "#B3B3B3",
              }}
            >
              High-quality partners call us home, and premium products shine
              here. Learn more about our compliant gaming solutions and
              partnership opportunities.
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={300}>
              <Link
                to="/contact"
                className="btn-outline-gold inline-flex items-center text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] py-[8px] sm:py-[10px] md:py-[10px] lg:py-[11px] px-[14px] sm:px-[16px]"
                style={{
                  border: "1px solid #FFB200",
                  borderRadius: "24px",
                  color: "#FFB200",
                  fontFamily: "Inter",
                  fontWeight: 700,
                  lineHeight: "24px",
                  textAlign: "center",
                  letterSpacing: "-0.44px",
                  gap: "10px",
                }}
              >
                <span className="uppercase">Contact Our Team</span>
                <ArrowIcon color="#FFB200" />
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* What Liberty Does Section */}
      <section
        id="about-details"
        className="bg-white text-[#0c0c0d] relative z-20 w-full overflow-hidden"
      >
        <div className="max-w-[1440px] w-full mx-auto py-[30px] md:py-[36px] lg:py-[50px] px-5 md:px-8 lg:px-12 xl:px-[94px] relative">
          <AnimateOnScroll
            animation="fade-up"
            as="h2"
            className="text-2xl sm:text-3xl lg:text-[40px] font-adlam font-normal uppercase text-[#0c0c0d] text-center mb-[16px] sm:mb-[20px] md:mb-[28px] lg:mb-[50px]"
            style={{ letterSpacing: "0.37px", lineHeight: "clamp(32px, 5vw, 50px)" }}
          >
            What Liberty Does
          </AnimateOnScroll>

          {/* Card Container */}
          <div className="bg-white rounded-[20px] sm:rounded-[24px] lg:rounded-[30px] border border-[#E2E2E2] shadow-[0_4px_30px_rgba(0,0,0,0.02)] p-5 sm:p-6 md:p-8 lg:p-[40px] flex flex-col md:flex-col lg:flex-row gap-5 md:gap-6 lg:gap-[20px] items-stretch">
            {/* Left Content column */}
            <AnimateOnScroll
              animation="fade-right"
              className="w-full lg:w-1/2 flex flex-col justify-start"
            >
              <h3
                className="font-semibold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-[#0c0c0d] mb-[12px] md:mb-[14px] lg:mb-[24px]"
                style={{
                  fontFamily: "Inter",
                  letterSpacing: "-0.45px",
                  lineHeight: "1.2",
                }}
              >
                Company Overview
              </h3>
              <div
                className="space-y-[12px] sm:space-y-[14px] lg:space-y-[24px] font-medium text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#989898]"
                style={{
                  fontFamily: "Inter",
                  letterSpacing: "-0.15px",
                  lineHeight: "1.55",
                  color: "#989898",
                }}
              >
                <p>
                  Liberty Rewards provides an organized and transparent overview
                  of sweepstakes-based and skill-driven gaming products. Our
                  focus is on presenting compliant gaming solutions, product
                  information, and partner offerings through a clean and
                  professional digital experience.
                </p>
                <p>
                  The platform is designed to help users easily understand
                  available gaming options, reward opportunities, promotional
                  features, and participation details in one place. By keeping
                  information clear, structured, and accessible, Liberty Rewards
                  creates a smoother experience for users who want to explore
                  entertainment-based products with confidence.
                </p>
                <p>
                  We also prioritize responsible engagement, transparency, and
                  compliance across all platform experiences. Every offering is
                  presented with attention to clarity, user understanding, and
                  industry-aligned standards, helping both players and partners
                  interact within a trusted digital environment.
                </p>
                <p>
                  Through strategic partnerships and a user-first approach,
                  Liberty Rewards aims to connect audiences with engaging
                  sweepstakes-style games, skill- based entertainment, and
                  reward-driven opportunities. Our goal is to provide a reliable
                  destination where users can discover, learn, and participate
                  through a simple and professional interface.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Right Slider Column */}
            <AnimateOnScroll
              animation="fade-left"
              delay={200}
              className="w-full lg:w-1/2 flex flex-col justify-center"
            >
              <div
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className="relative w-full rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] overflow-hidden bg-black group/slider select-none cursor-grab active:cursor-grabbing max-h-[300px] sm:max-h-[340px] md:max-h-[360px] lg:max-h-none"
              >
                {/* Template image to establish natural aspect ratio and height */}
                <img
                  src={sliderImages[0]}
                  alt="Slider Template"
                  className="w-full h-auto block opacity-0 pointer-events-none"
                />

                {sliderImages.map((img, idx) => {
                  const isActive = activeSlide === idx;
                  const isPrev = prevSlideRef.current === idx && !isActive;
                  return (
                    <img
                      key={idx}
                      src={img}
                      alt={`Slide ${idx + 1}`}
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                      style={{
                        opacity: isActive || isPrev ? 1 : 0,
                        zIndex: isActive ? 10 : isPrev ? 5 : 0,
                        transition: isActive
                          ? "opacity 700ms ease-in-out"
                          : "none",
                      }}
                    />
                  );
                })}

                {/* Gradient overlay on top of images */}
                <div
                  className="absolute inset-0 z-20 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.8) 100%)",
                  }}
                ></div>

                {/* Dots Navigation inside the slider */}
                <div className="absolute bottom-4 md:bottom-5 lg:bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-2.5 z-30">
                  {sliderImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className="transition-all duration-300 pointer-events-auto cursor-pointer"
                      style={{
                        width: activeSlide === idx ? "40px" : "6px",
                        height: "6px",
                        borderRadius: "100px",
                        backgroundColor:
                          activeSlide === idx ? "#FFAC01" : "#E2E2E2",
                        opacity: 1,
                      }}
                    />
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
