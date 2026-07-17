import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ArrowIcon from "../components/ArrowIcon";
import section1Bg from "../assets/section-1-bg.png";
import section1BgElement from "../assets/section-1-bg-element.png";

function HomePage() {
  const sliderImages = [
    "/slider-img.png",
    "/slider-img.png",
    "/slider-img.png",
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const prevSlideRef = useRef(0);

  const goToSlide = (newIndex) => {
    prevSlideRef.current = activeSlide;
    setActiveSlide(newIndex);
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
    },
    {
      title: "Arcade Skill-Challenge Platform",
      category: "Skill-Based Games",
      bgImage: "/Image (Arcade Skill-Challenge Platform).png",
    },
    {
      title: "Digital Fan Table",
      category: "RNG Tables",
      bgImage: "/Image (Digital Fan Table) (1).png",
    },
    {
      title: "Gaming Terminal Hardware",
      category: "Gaming Hardware",
      bgImage: "/Image (Gaming Terminal Hardware).png",
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
      <section id="home" className="relative w-full overflow-hidden mb-[10px] min-h-[580px] lg:h-[816px] flex items-center">
        {/* Background Image that covers the hero section */}
        <img
          src={section1Bg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none z-10"
        />

        {/* Content Container */}
        <div className="relative z-20 w-full mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 xl:px-[94px] pt-[120px] pb-[80px] lg:pt-0 lg:pb-0 flex items-center justify-between">
          {/* Left Column (Width 687px) */}
          <div className="max-w-[687px] w-full text-left flex flex-col">
            <div className="flex flex-col space-y-[24px]">
              <p
                className="flex items-center space-x-2 font-medium uppercase text-[16px] leading-[24px] text-white"
                style={{ fontFamily: "Inter", letterSpacing: "0.4px" }}
              >
                <img
                  src="/shield-check.svg"
                  alt="Shield Icon"
                  className="w-5 h-5"
                />
                <span>
                  Designed for Adult Audiences • Transparent • Compliant
                </span>
              </p>

              <h1
                className="text-4xl md:text-[64px] text-white uppercase flex flex-col font-adlam font-normal"
                style={{ letterSpacing: "-1.11px" }}
              >
                <span className="leading-tight md:leading-[74px] md:whitespace-nowrap">
                  Liberty Rewards
                </span>
                <span className="leading-tight md:leading-[74px] md:whitespace-nowrap mt-[4px]">
                  Premium Sweepstakes
                </span>
                <span className="leading-tight md:leading-[74px] md:whitespace-nowrap">
                  & Skill-Based Gaming
                </span>
              </h1>

              <p
                className="text-gray-400 text-[16px] leading-[28px] font-normal"
                style={{ fontFamily: "Inter", letterSpacing: "0px" }}
              >
                Liberty Rewards is an informational platform showcasing
                sweepstakes-based and skill-driven gaming products designed
                for transparent, compliant, and engaging digital
                entertainment.
              </p>
            </div>

            <div className="mt-[32px]">
              <a
                href="#products"
                className="inline-flex items-center transition-all duration-300 hover:bg-[#FFB200]/10"
                style={{
                  border: "1px solid #FFB200",
                  paddingTop: "11px",
                  paddingBottom: "11px",
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  borderRadius: "24px",
                  color: "#FFB200",
                  fontFamily: "Inter",
                  fontWeight: 700,
                  fontSize: "18px",
                  lineHeight: "28px",
                  textAlign: "center",
                  letterSpacing: "-0.44px",
                  gap: "14px",
                }}
              >
                <span className="uppercase">
                  Explore Products
                </span>
                <ArrowIcon color="#FFB200" />
              </a>
            </div>
          </div>

          {/* Right Cabinet Element */}
          <img
            src={section1BgElement}
            alt="Arcade Machine Cabinet"
            className="absolute select-none pointer-events-none hidden lg:block"
            style={{
              top: "74.54px",
              right: "-98.61px",
              width: "clamp(350px, 41vw, 590.26px)",
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
        <div className="max-w-[1440px] w-full mx-auto py-[50px] px-5 md:px-8 lg:px-12 xl:px-[94px]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
            <div>
              <h2
                className="text-3xl md:text-[40px] font-adlam font-normal uppercase text-[#0c0c0d]"
                style={{ letterSpacing: "0.26px", lineHeight: "50px" }}
              >
                Featured Products
              </h2>
              <p
                className="text-gray-500 text-[16px] font-normal mt-[24px]"
                style={{
                  fontFamily: "Inter",
                  letterSpacing: "-0.44px",
                  lineHeight: "24px",
                }}
              >
                Discover our curated selection of premium arcade machines and
                skill-based gaming solutions.
              </p>
            </div>
            <Link
              to="/products"
              className="mt-4 md:mt-0 inline-flex items-center text-[16px] font-semibold text-[#FF5A00] hover:text-[#0c0c0d] transition-colors py-[2px]"
              style={{ fontFamily: "Inter", gap: "8px" }}
            >
              <span>View All Products</span>
              <ArrowIcon size={18} className="inline-block" />
            </Link>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[24px] mt-[50px]">
            {products.map((product, index) => {
              const colSpan =
                index === 0 || index === 3 ? "md:col-span-7" : "md:col-span-5";
              const cardHeight = index < 2 ? "h-[350px]" : "h-[250px]";
              return (
                <div
                  key={index}
                  className={`group relative ${cardHeight} rounded-[24px] overflow-hidden cursor-pointer ${colSpan}`}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url("${product.bgImage}")` }}
                  ></div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                  {/* Tags & Badges */}
                  <div className="absolute top-[24px] right-[24px]">
                    <span className="bg-black/80 backdrop-blur-md text-[12px] uppercase text-white font-medium px-4 py-1.5 rounded-full font-sans">
                      {product.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-6 left-6 md:bottom-[32px] md:left-[32px] pr-6 md:pr-0 text-white space-y-2">
                    <h3 className="text-xl md:text-[28px] font-bold uppercase tracking-wide font-sans">
                      {product.title}
                    </h3>
                    <p className="text-[14px] font-medium tracking-wide flex items-center space-x-1.5 opacity-90 group-hover:opacity-100 transition-opacity font-sans">
                      <span>View Machine</span>
                      <ArrowIcon size={16} color="white" />
                    </p>
                  </div>
                </div>
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
        <div className="max-w-[1440px] w-full mx-auto py-[50px] px-5 md:px-8 lg:px-12 xl:px-[94px]">
          <div className="text-center">
            <h2
              className="text-3xl md:text-[40px] font-adlam font-normal uppercase text-[#0c0c0d] text-center"
              style={{ letterSpacing: "0.37px", lineHeight: "50px" }}
            >
              Built on Trust and Transparency
            </h2>
            <p
              className="text-gray-500 text-[16px] font-normal mt-[24px] text-center"
              style={{
                fontFamily: "Inter",
                letterSpacing: "-0.44px",
                lineHeight: "24px",
              }}
            >
              Liberty Rewards offers a streamlined platform for showcasing
              sweepstakes and skill-based gaming products that are built with
              transparency, compliance, and professionalism at the core.
            </p>
          </div>

          {/* Features Quadrant Grid */}
          <div className="max-w-[1252px] mx-auto bg-white rounded-[24px] border border-[#E2E2E2] shadow-[0_4px_30px_rgba(0,0,0,0.01)] overflow-hidden grid grid-cols-1 md:grid-cols-2 mt-[50px]">
            
            {/* quadrant 1 */}
            <div className="border-b md:border-r border-[#E2E2E2] flex flex-col items-start text-left p-8 md:pt-[40px] md:pr-0 md:pb-[40px] md:pl-[36px]">
              <img src="/icon-transparent.svg" alt="Transparent Icon" className="w-[64px] h-[64px] object-contain mb-[40px] md:mb-[106px]" />
              <h3 
                className="text-2xl md:text-[30px] text-[#0c0c0d]"
                style={{ fontFamily: 'Inter', fontWeight: 600, lineHeight: '40px', letterSpacing: '-0.45px' }}
              >
                Transparent Product Information
              </h3>
              <p 
                className="text-gray-400 text-lg md:text-[24px] mt-[24px]"
                style={{ fontFamily: 'Inter', fontWeight: 500, lineHeight: '32px', letterSpacing: '-0.15px' }}
              >
                Clear and detailed specifications for all showcased gaming systems.
              </p>
            </div>

            {/* quadrant 2 */}
            <div className="border-b border-[#E2E2E2] flex flex-col items-start text-left p-8 md:pt-[40px] md:pr-0 md:pb-[40px] md:pl-[36px]">
              <img src="/icon-compliance.svg" alt="Compliance Icon" className="w-[64px] h-[64px] object-contain mb-[40px] md:mb-[106px]" />
              <h3 
                className="text-2xl md:text-[30px] text-[#0c0c0d]"
                style={{ fontFamily: 'Inter', fontWeight: 600, lineHeight: '40px', letterSpacing: '-0.45px' }}
              >
                Compliance-Focused Presentation
              </h3>
              <p 
                className="text-gray-400 text-lg md:text-[24px] mt-[24px]"
                style={{ fontFamily: 'Inter', fontWeight: 500, lineHeight: '32px', letterSpacing: '-0.15px' }}
              >
                Built with a strong emphasis on regulatory compliance and market standards.
              </p>
            </div>

            {/* quadrant 3 */}
            <div className="border-b md:border-b-0 md:border-r border-[#E2E2E2] flex flex-col items-start text-left p-8 md:pt-[40px] md:pr-0 md:pb-[40px] md:pl-[36px]">
              <img src="/icon-premium.svg" alt="Premium Icon" className="w-[64px] h-[64px] object-contain mb-[40px] md:mb-[106px]" />
              <h3 
                className="text-2xl md:text-[30px] text-[#0c0c0d]"
                style={{ fontFamily: 'Inter', fontWeight: 600, lineHeight: '40px', letterSpacing: '-0.45px' }}
              >
                Premium Digital Experience
              </h3>
              <p 
                className="text-gray-400 text-lg md:text-[24px] mt-[24px]"
                style={{ fontFamily: 'Inter', fontWeight: 500, lineHeight: '32px', letterSpacing: '-0.15px' }}
              >
                A high-end, user-friendly interface reflecting the quality of products we represent.
              </p>
            </div>

            {/* quadrant 4 */}
            <div className="flex flex-col items-start text-left p-8 md:pt-[40px] md:pr-0 md:pb-[40px] md:pl-[36px]">
              <img src="/icon-partner.svg" alt="Partner Icon" className="w-[64px] h-[64px] object-contain mb-[40px] md:mb-[106px]" />
              <h3 
                className="text-2xl md:text-[30px] text-[#0c0c0d]"
                style={{ fontFamily: 'Inter', fontWeight: 600, lineHeight: '40px', letterSpacing: '-0.45px' }}
              >
                Partner-Friendly Platform
              </h3>
              <p 
                className="text-gray-400 text-lg md:text-[24px] mt-[24px]"
                style={{ fontFamily: 'Inter', fontWeight: 500, lineHeight: '32px', letterSpacing: '-0.15px' }}
              >
                Designed to foster strong relationships between developers, distributors, and operators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section
        id="partners"
        className="bg-white text-brand-bg relative z-20 w-full pt-[50px] pb-[100px] overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto w-full px-5 md:px-8 lg:px-12 xl:px-[94px] text-center">
          <h2
            className="text-3xl md:text-[40px] font-adlam font-normal uppercase text-[#0c0c0d] mb-[32px] text-center"
            style={{ letterSpacing: "0.07px", lineHeight: "50px" }}
          >
            Our Technology & Product Partners
          </h2>
        </div>

        {/* Logo Carousel Container - Bleeds full screen width */}
        <div className="w-full overflow-hidden relative">
          {/* Overlay gradients on left/right for smooth fade look */}
          <div className="absolute left-0 top-0 bottom-0 w-[100px] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-[100px] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling track */}
          <div className="flex gap-[20px] w-max animate-infinite-scroll">
            {/* Render logos multiple times to ensure continuous flow */}
            {[
              ...partnerLogos,
              ...partnerLogos,
              ...partnerLogos,
              ...partnerLogos,
            ].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-white rounded-[12px] shrink-0 p-[34px]"
              >
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="max-h-[48px] object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative w-full bg-[#0a0a0b] overflow-hidden z-20">
        {/* Left Side Cabinet Element */}
        <div className="hidden lg:block absolute left-0 bottom-[25px] select-none pointer-events-none z-10">
          <img
            src="/section-elemnt.png"
            alt="Arcade Machine Cabinet Left"
            className="h-[442px] w-auto object-contain"
          />
        </div>

        {/* Right Side Cabinet Element */}
        <div className="hidden lg:block absolute right-0 bottom-[25px] select-none pointer-events-none z-10">
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

        {/* Content Container (Max width 1440px centered, padding: top/bottom 75px, left/right 318px) */}
        <div className="max-w-[1440px] mx-auto w-full relative flex items-center justify-center py-[75px] px-5 md:px-8 lg:px-20 xl:px-[318px] z-30">
          {/* Center Content Column */}
          <div className="w-full text-center flex flex-col items-center">
            <h2
              className="text-3xl md:text-[40px] font-adlam font-normal uppercase text-white mb-[24px] text-center"
              style={{ letterSpacing: "0.26px", lineHeight: "50px" }}
            >
              Looking to explore our products or collaborate with us?
            </h2>
            <p
              className="text-gray-400 text-[16px] font-normal mb-[24px] text-center"
              style={{
                fontFamily: "Inter",
                letterSpacing: "-0.45px",
                lineHeight: "24px",
              }}
            >
              High-quality partners call us home, and premium products shine
              here. Learn more about our compliant gaming solutions and
              partnership opportunities.
            </p>
            <div>
              <a
                href="#contact"
                className="inline-flex items-center transition-all duration-300 hover:bg-[#FFB200]/10"
                style={{
                  border: "1px solid #FFB200",
                  paddingTop: "11px",
                  paddingBottom: "11px",
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  borderRadius: "24px",
                  color: "#FFB200",
                  fontFamily: "Inter",
                  fontWeight: 700,
                  fontSize: "18px",
                  lineHeight: "28px",
                  textAlign: "center",
                  letterSpacing: "-0.44px",
                  gap: "14px",
                }}
              >
                <span className="uppercase">
                  Contact Our Team
                </span>
                <ArrowIcon color="#FFB200" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What Liberty Does Section */}
      <section
        id="about-details"
        className="bg-white text-[#0c0c0d] relative z-20 w-full py-[50px] overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto w-full px-5 md:px-8 lg:px-12 xl:px-[94px] relative">
          <h2
            className="text-3xl md:text-[40px] font-adlam font-normal uppercase text-[#0c0c0d] text-center mb-[50px]"
            style={{ letterSpacing: "0.37px", lineHeight: "50px" }}
          >
            What Liberty Does
          </h2>

          {/* Card Container */}
          <div className="bg-white rounded-[30px] border border-[#E2E2E2] shadow-[0_4px_30px_rgba(0,0,0,0.02)] p-8 md:p-[40px] flex flex-col md:flex-row gap-[20px] items-stretch">
            {/* Left Content column */}
            <div className="w-full md:w-1/2 flex flex-col justify-start">
              <h3
                className="font-semibold text-[24px] text-[#0c0c0d] mb-[24px]"
                style={{
                  fontFamily: "Inter",
                  letterSpacing: "-0.45px",
                  lineHeight: "28.8px",
                }}
              >
                Company Overview
              </h3>
              <div
                className="space-y-[24px] font-medium text-[16px] text-gray-400"
                style={{
                  fontFamily: "Inter",
                  letterSpacing: "-0.15px",
                  lineHeight: "24px",
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
            </div>

            {/* Right Slider Column */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="relative w-full rounded-[24px] overflow-hidden bg-black">
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
                      className="absolute inset-0 w-full h-full object-cover"
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
                      "linear-gradient(180deg, rgba(0, 0, 0, 0) 84.92%, #000000 100%)",
                  }}
                ></div>

                {/* Dots Navigation inside the slider */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-2.5 z-30">
                  {sliderImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className="transition-all duration-300 pointer-events-auto"
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
