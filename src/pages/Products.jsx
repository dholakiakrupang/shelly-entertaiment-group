import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ArrowIcon from "../components/ArrowIcon";
import AnimateOnScroll from "../components/AnimateOnScroll";

const categories = [
  "All Products",
  "Skill-Based Games",
  "Fish Tables",
  "Promotional Game Systems",
  "Gaming Hardware & Systems",
];

const productsList = [
  {
    id: 1,
    title: "Skill Match Game System Pro",
    category: "Skill-Based Games",
    description:
      "A digital skill-based game system designed for fair play, competitive gameplay, and user engagement with advanced tracking.",
    image: "/product/product-card-1.png",
  },
  {
    id: 2,
    title: "Arcade Skill Challenge Platform",
    category: "Skill-Based Games",
    description:
      "An interactive challenge-based gaming experience built around competitive gameplay with premium hardware integration.",
    image: "/product/product-card-2.png",
  },
  {
    id: 3,
    title: "Digital Prize Showdown Edition",
    category: "Fish Tables",
    description:
      "Immersive video-based arcade experience with advanced hardware integration and stunning visual effects.",
    image: "/product/product-card-3.png",
  },
  {
    id: 4,
    title: "Ocean Quest Gaming Table",
    category: "Fish Tables",
    description:
      "Premium fish table gaming platform with multiplayer support and engaging underwater-themed gameplay.",
    image: "/product/product-card-4.png",
  },
  {
    id: 5,
    title: "Signature Trivia Advanced",
    category: "Promotional Game Systems",
    description:
      "Premium trivia hardware system engineered for commercial deployment with cloud-based content management.",
    image: "/product/product-card-5.png",
  },
  {
    id: 6,
    title: "Player Engagement Terminal Plus",
    category: "Promotional Game Systems",
    description:
      "Multi-game promotional system designed for maximum player engagement and retention with loyalty features.",
    image: "/product/product-card-6.png",
  },
  {
    id: 7,
    title: "Commercial Gaming Hardware",
    category: "Gaming Hardware & Systems",
    description:
      "Complete gaming hardware solution for commercial deployment with enterprise-grade reliability and support.",
    image: "/product/product-card-7.png",
  },
  {
    id: 8,
    title: "Multi-Station Gaming Network Hub",
    category: "Gaming Hardware & Systems",
    description:
      "Networked gaming system supporting multiple stations with centralized management and analytics dashboard.",
    image: "/product/product-card-8.png",
  },
  {
    id: 9,
    title: "Vegas Skill Tournament System",
    category: "Skill-Based Games",
    description:
      "Tournament-ready skill gaming platform with real-time leaderboards and competitive play features.",
    image: "/product/product-card-9.png",
  },
];

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryQuery = searchParams.get("category");

  const [activeCategory, setActiveCategory] = useState(() => {
    if (categoryQuery && categories.includes(categoryQuery)) {
      return categoryQuery;
    }
    return "All Products";
  });

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && categories.includes(cat)) {
      setActiveCategory(cat);
    } else if (!cat) {
      setActiveCategory("All Products");
    }
  }, [searchParams]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (category === "All Products") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const filteredProducts =
    activeCategory === "All Products"
      ? productsList
      : productsList.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-white text-[#0c0c0d]">
      {/* ============ HERO ============ */}
      <section className="relative h-[300px] sm:h-[420px] md:h-[650px] lg:h-[816px] w-full overflow-hidden bg-[#0a0a0b]">
        <div className="absolute inset-0">
          <img
            src="/product/product-banner.png"
            alt="Products Background Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-x-0 bottom-0 h-[145px] bg-gradient-to-b from-black/0 to-black"></div>
        </div>

        <div className="absolute left-0 top-[calc(50%+16px)] sm:top-[calc(50%+28px)] w-full max-w-[1440px] mx-auto inset-x-0 px-5 md:px-8 lg:px-12 xl:px-[94px] -translate-y-1/2">
          <div className="max-w-[935px]">
            <AnimateOnScroll animation="fade-up" as="h1"
              className="text-2xl sm:text-3xl md:text-5xl lg:text-[56px] xl:text-[64px] text-white uppercase font-adlam font-normal flex flex-col space-y-[4px] leading-tight md:leading-[60px] lg:leading-[70px] xl:leading-[75px]"
              style={{ letterSpacing: "-1.11px" }}
            >
              <span>Our</span>
              <span>Products</span>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={200} as="p"
              className="mt-3 md:mt-6 max-w-[626px] text-xs sm:text-sm md:text-base leading-4 sm:leading-6 md:leading-[28px] font-normal text-[#fafafa]"
              style={{ fontFamily: "Inter" }}
            >
              Liberty Rewards provides a structured overview of
              sweepstakes-based and skill-driven gaming products. All products
              listed are informational and designed for compliant, transparent
              digital entertainment environments.
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ============ FILTER BAR ============ */}
      <section className="w-full bg-white my-[24px] md:my-[50px]">
        <div className="max-w-[1440px] w-full mx-auto py-[24px] md:py-[50px] px-5 md:px-8 lg:px-12 xl:px-[94px] flex flex-col items-center gap-[24px] md:gap-[50px]">
          <AnimateOnScroll animation="fade-down" className="flex flex-col items-center gap-6">
            <span className="inline-flex items-center gap-2 rounded-[24px] border border-[#2a2a2a] bg-black px-[15px] py-[7px] text-sm text-white font-medium">
              <span className="w-2 h-2 rounded-full bg-gradient-to-b from-[#ff6a00] to-[#ffb200]"></span>
              Filter By Category
            </span>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`rounded-full px-3.5 sm:px-[23px] py-2 sm:py-[11px] font-semibold text-xs sm:text-sm transition-all duration-300 border ${
                    activeCategory === category
                      ? "border-[#ffb200] bg-white text-[#ffb200]"
                      : "border-gray-200 text-[#0c0c0d] hover:border-[#ffb200] hover:text-[#ffb200]"
                  }`}
                  style={{ fontFamily: "Inter" }}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimateOnScroll>

          {/* ============ PRODUCT GRID ============ */}
          <div className="grid w-full max-w-[1252px] grid-cols-1 gap-x-[20px] sm:gap-x-[34px] gap-y-[24px] sm:gap-y-[36px] md:gap-y-[51px] sm:grid-cols-2 lg:grid-cols-3 stagger-children">
            {filteredProducts.map((product) => (
              <AnimateOnScroll key={product.id} animation="fade-up" delay={(filteredProducts.indexOf(product) % 3) * 100} className="h-full flex flex-col">
              <Link
                to={`/products/${product.id}`}
                className="group overflow-hidden rounded-[16px] sm:rounded-[20px] md:rounded-[24px] border border-gray-200 bg-white hover:border-[#ffb200]/30 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full cursor-pointer"
                style={{ boxShadow: "0 0 5px rgba(0,0,0,0.05)" }}
              >
                <div className="relative h-[160px] sm:h-[200px] md:h-[280px] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/80 backdrop-blur-md px-3 py-1.5 text-xs uppercase tracking-wide text-white font-medium">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-br from-[#ff6a00] to-[#ffb200]"></span>
                    {product.category}
                  </span>
                </div>
                <div className="flex flex-col flex-1 gap-2 sm:gap-3 pt-[16px] sm:pt-[20px] md:pt-[23px] px-[16px] sm:px-[20px] md:px-[23px] pb-[12px] sm:pb-[15px]">
                  <h3
                    className="text-base sm:text-lg md:text-xl font-bold text-[#0c0c0d]"
                    style={{ fontFamily: "Inter" }}
                  >
                    {product.title}
                  </h3>
                  <p
                    className="text-[12px] sm:text-[13px] md:text-[14px] leading-[18px] sm:leading-[20px] md:leading-[22px] text-[#989898] font-normal"
                    style={{ fontFamily: "Inter", letterSpacing: "-0.15px", color: "#989898" }}
                  >
                    {product.description}
                  </p>
                  <div
                    className="mt-auto mb-1 sm:mb-2 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0c0c0d] group-hover:text-[#ffb200] transition-colors duration-300"
                    style={{ fontFamily: "Inter" }}
                  >
                    <span>View Details</span>
                    <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">
                      <ArrowIcon size={16} />
                    </span>
                  </div>
                </div>
              </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COMPLIANCE & LEGAL NOTE ============ */}
      <section className="w-full bg-black">
        <AnimateOnScroll animation="fade-up" className="max-w-[1440px] mx-auto py-[24px] md:py-[50px] px-5 md:px-8 lg:px-12 xl:px-[94px] flex justify-center">
          <div
            className="flex w-full max-w-[1252px] flex-col md:flex-row items-start gap-6 rounded-[24px] border border-[#ffb200]/10 p-6 md:pt-[40px] md:pr-8 lg:md:pr-[96px] md:pb-[40px] md:pl-[39px] bg-gradient-to-br from-[#111111]/85 to-[#0b0b0f]/85"
            style={{
              backgroundImage:
                "linear-gradient(168deg, rgba(17,17,17,0.8) 0%, rgba(11,11,15,0.8) 100%)",
            }}
          >
            <div className="flex w-12 h-12 shrink-0 items-center justify-center rounded-2xl border border-[#ffb200]/20 bg-gradient-to-br from-[#ff6a00]/20 to-[#ffb200]/10">
              <img
                src="/product/legal-notice.svg"
                alt="Compliance Shield"
                className="w-6 h-6 object-contain"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <h2
                  className="text-[20px] font-bold text-white leading-[28px]"
                  style={{ fontFamily: "Inter", letterSpacing: "-0.45px" }}
                >
                  Compliance &amp; Legal Note
                </h2>
                <span
                  className="inline-block rounded-full border border-[#FF8A0033] bg-[#FF8A001A] p-2 text-[12px] font-medium text-[#FF8A00] leading-[16px] tracking-[0px]"
                  style={{ fontFamily: "Inter" }}
                >
                  Required Reading
                </span>
              </div>
              <p
                className="max-w-[900px] text-base leading-[26px] text-[#B3B3B3] font-normal"
                style={{ fontFamily: "Inter", color: "#B3B3B3" }}
              >
                All products displayed are informational only and designed for
                adult audiences. Liberty Rewards focuses on transparent,
                compliant gaming solutions. These systems are intended for legal
                commercial deployment in jurisdictions where permitted. Please
                consult local regulations before deployment.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span
                  className="inline-flex items-center gap-2 rounded-full border border-[#ffb200]/10 bg-black/60 px-3 py-1.5 text-[12px] leading-[16px] text-[#888888]"
                  style={{ fontFamily: "Inter", letterSpacing: "0px", color: "#888888" }}
                >
                  <img
                    src="/product/caution-icon.svg"
                    alt="Age Restricted"
                    className="w-3.5 h-3.5"
                  />
                  Age Restricted
                </span>
                <span
                  className="inline-flex items-center gap-2 rounded-full border border-[#ffb200]/10 bg-black/60 px-3 py-1.5 text-[12px] leading-[16px] text-[#888888]"
                  style={{ fontFamily: "Inter", letterSpacing: "0px", color: "#888888" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00] shrink-0"></span>
                  Jurisdiction Specific
                </span>
                <span
                  className="inline-flex items-center gap-2 rounded-full border border-[#ffb200]/10 bg-black/60 px-3 py-1.5 text-[12px] leading-[16px] text-[#888888]"
                  style={{ fontFamily: "Inter", letterSpacing: "0px", color: "#888888" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00] shrink-0"></span>
                  Certified Systems
                </span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      <section
        id="contact"
        className="relative w-full bg-white overflow-hidden z-20"
      >
        {/* Left Side Cabinet Element */}
        <div className="hidden xl:block absolute left-0 bottom-0 select-none pointer-events-none z-10">
          <img
            src="/about-us/about-element.png"
            alt="Arcade Machine Cabinet Left"
            className="h-[442px] w-auto object-contain"
          />
        </div>

        {/* Right Side Cabinet Element */}
        <div className="hidden xl:block absolute right-0 bottom-0 select-none pointer-events-none z-10">
          <img
            src="/about-us/about-element-2.png"
            alt="Arcade Machine Cabinet Right"
            className="h-[442px] w-auto object-contain"
          />
        </div>

        <div className="relative z-30 max-w-[1440px] mx-auto w-full py-[80px] px-5 md:px-8 lg:px-12 xl:px-[94px] flex flex-col xl:flex-row items-center justify-between gap-12">

        <div className="relative flex w-full lg:w-[487px] flex-col items-start gap-6 z-10">
          <span className="inline-flex items-center gap-2 rounded-[24px] border border-[#2a2a2a] bg-[#1a1a1a] px-[15px] py-[7px] text-sm text-white">
            <span className="w-2 h-2 rounded-full bg-gradient-to-b from-[#ff6a00] to-[#ffb200]"></span>
            We're Here To Help
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-[40px] font-adlam font-normal text-[#0c0c0d] uppercase"
            style={{ lineHeight: "clamp(32px, 6vw, 50px)" }}
          >
            Let's Talk
            <br />
            <span className="text-gradient">About Project</span>
          </h2>
          <p
            className="text-[18px] leading-[28px] text-[#989898] font-normal"
            style={{ fontFamily: "Inter", letterSpacing: "-0.44px", color: "#989898" }}
          >
            Need detailed specifications, compliance documentation, or custom
            configurations? Our team provides personalized support for your
            business requirements.
          </p>
          <ul
            className="flex flex-col gap-3 text-sm text-[#B3B3B3] font-normal"
            style={{ fontFamily: "Inter", color: "#B3B3B3" }}
          >
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-[#ff6a00] to-[#ffb200]"></span>
              24-hour response time
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-[#ff6a00] to-[#ffb200]"></span>
              Custom configuration options
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-[#ff6a00] to-[#ffb200]"></span>
              Compliance documentation
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-[#ff6a00] to-[#ffb200]"></span>
              Technical specifications
            </li>
          </ul>
        </div>

        <div
          className="relative w-full lg:w-[480px] rounded-[24px] border border-gray-200 bg-white p-8 md:p-10 z-10"
          style={{ boxShadow: "0 0 10px rgba(0,0,0,0.05)" }}
        >
          <span
            className="absolute inline-flex rotate-3 items-center rounded-full text-sm font-bold text-white shadow-lg"
            style={{
              top: "38.5px",
              right: "8.21px",
              paddingTop: "8.77px",
              paddingBottom: "8.77px",
              paddingLeft: "14.45px",
              paddingRight: "14.45px",
              background: "linear-gradient(180deg, #FF8A00 0%, #FFA500 100%)",
            }}
          >
            Fast Response ⚡
          </span>
          <h3
            className="text-3xl font-bold text-[#0c0c0d]"
            style={{ fontFamily: "Inter" }}
          >
            Send an Inquiry
          </h3>
          <p
            className="mt-2 text-sm text-[#989898] font-normal"
            style={{ fontFamily: "Inter", color: "#989898" }}
          >
            Get in touch with our team for personalized assistance
          </p>

          <a
            href="mailto:info@libertyrewards.com"
            className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl py-5 text-white btn-gradient-primary"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1135 18.0721C12.1452 18.151 12.2002 18.2184 12.2712 18.2651C12.3423 18.3118 12.4259 18.3357 12.5109 18.3335C12.5959 18.3313 12.6781 18.3032 12.7467 18.2529C12.8152 18.2026 12.8668 18.1325 12.8943 18.0521L18.311 2.21879C18.3377 2.14495 18.3428 2.06504 18.3257 1.98842C18.3086 1.91179 18.27 1.84161 18.2145 1.7861C18.159 1.73059 18.0888 1.69203 18.0122 1.67495C17.9356 1.65786 17.8557 1.66295 17.7818 1.68962L1.9485 7.10629C1.86808 7.13387 1.79802 7.18539 1.74772 7.25393C1.69743 7.32247 1.66931 7.40476 1.66713 7.48975C1.66495 7.57474 1.68883 7.65836 1.73555 7.72939C1.78226 7.80042 1.84959 7.85546 1.9285 7.88712L8.53683 10.5371C8.74574 10.6208 8.93554 10.7458 9.0948 10.9048C9.25406 11.0638 9.37948 11.2534 9.4635 11.4621L12.1135 18.0721Z"
                stroke="white"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.2119 1.78906L9.09521 10.9049"
                stroke="white"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-lg font-bold" style={{ fontFamily: "Inter" }}>
              Contact Us Now
            </span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.16992 10H15.8366" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 4.16504L15.8333 9.99837L10 15.8317" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <div
            className="mt-6 flex flex-col gap-3 border-t border-gray-200 pt-4 text-sm"
            style={{ fontFamily: "Inter" }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[#989898]" style={{ color: "#989898" }}>Email</span>
              <span className="font-medium text-[#0c0c0d]">
                info@libertyrewards.com
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#989898]" style={{ color: "#989898" }}>Phone</span>
              <span className="font-medium text-[#0c0c0d]">
                +1 (555) 123-4567
              </span>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}

export default Products;
