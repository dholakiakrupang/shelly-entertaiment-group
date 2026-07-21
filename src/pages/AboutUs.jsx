import React from "react";
import { Link } from "react-router-dom";
import ArrowIcon from "../components/ArrowIcon";
import AnimateOnScroll from "../components/AnimateOnScroll";
import useCountUp from "../hooks/useCountUp";

const stats = [
  { value: "500+", label: "Venues Served" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Support" },
  { value: "100%", label: "Compliant" },
];

const checklistItems = [
  "Fully compliant gaming systems",
  "Transparent reward mechanisms",
  "Enterprise-grade security",
  "Real-time analytics dashboard",
];

const trustValues = [
  {
    icon: "/about-us/about-trust-1.svg",
    title: "Transparency",
    description: "In product presentation",
  },
  {
    icon: "/about-us/about-trust-2.svg",
    title: "Compliance",
    description: "Focused information delivery",
  },
  {
    icon: "/about-us/about-trust-3.svg",
    title: "Premium",
    description: "Digital experience",
  },
  {
    icon: "/about-us/about-trust-4.svg",
    title: "Responsible",
    description: "Gaming communication",
  },
  {
    icon: "/about-us/about-trust-5.svg",
    title: "Collaborative",
    description: "Partnership approach",
  },
];

const teamMembers = [
  {
    name: "Michael Chen",
    initials: "MC",
    role: "Chief Executive Officer",
    bio: "Former gaming industry executive with 15+ years leading compliant entertainment platforms",
    image: "/about-us/Image (Michael Chen).png",
  },
  {
    name: "Sarah Martinez",
    initials: "SM",
    role: "Chief Technology Officer",
    bio: "Technology innovator specializing in secure, scalable gaming infrastructure",
    image: "/about-us/Image (Sarah Martinez).png",
  },
  {
    name: "David Thompson",
    initials: "DT",
    role: "Chief Compliance Officer",
    bio: "Regulatory expert ensuring all products meet jurisdiction-specific requirements",
    image: "/about-us/Image (David Thompson).png",
  },
  {
    name: "Jessica Wang",
    initials: "JW",
    role: "VP of Operations",
    bio: "Operations leader focused on delivering exceptional partner and venue experiences",
    image: "/about-us/Image (Jessica Wang).png",
  },
];

const milestones = [
  {
    year: "2019",
    title: "Company Founded",
    description:
      "Liberty Rewards established with a vision to transform compliant gaming",
    icon: "/about-us/timeline-icon-1.svg",
  },
  {
    year: "2020",
    title: "First Product Launch",
    description: "Released our flagship skill-based gaming platform to market",
    icon: "/about-us/timeline-icon-2.svg",
  },
  {
    year: "2021",
    title: "Regional Expansion",
    description:
      "Expanded operations across multiple jurisdictions with full compliance",
    icon: "/about-us/timeline-icon-3.svg",
  },
  {
    year: "2022",
    title: "500+ Venues",
    description:
      "Reached milestone of serving 500+ entertainment venues nationwide",
    icon: "/about-us/timeline-icon-4.svg",
  },
  {
    year: "2023",
    title: "Innovation Award",
    description:
      "Recognized for technological innovation in compliant gaming systems",
    icon: "/about-us/timeline-icon-5.svg",
  },
  {
    year: "2024",
    title: "Platform Evolution",
    description:
      "Launched next-generation gaming platform with advanced analytics",
    icon: "/about-us/timeline-icon-6.svg",
  },
];

/* ── Tiny reusable sub-components ─────────────────────────── */

const SectionBadge = ({ label }) => (
  <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-[24px] border border-[#2a2a2a] bg-[#1a1a1a] px-3.5 py-[5px] sm:px-4 sm:py-[7px] text-xs sm:text-sm text-white">
    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-b from-[#ff6a00] to-[#ffb200]"></span>
    {label}
  </span>
);

const GradientText = ({ children }) => (
  <span className="text-gradient">{children}</span>
);

const BulletDot = () => (
  <span className="flex w-6 h-6 items-center justify-center rounded-full border border-[#ffb200]/20 bg-gradient-to-br from-[#ff6a00]/20 to-[#ffb200]/10">
    <span className="w-2 h-2 rounded-full bg-gradient-to-b from-[#ff6a00] to-[#ffb200]"></span>
  </span>
);

/* Counter-animated stat card */
const StatCard = ({ value, label, delay = 0 }) => {
  const { ref, displayValue } = useCountUp(value, 2000);
  return (
    <AnimateOnScroll animation="scale-up" delay={delay} className="h-full">
      <div
        ref={ref}
        className="rounded-2xl border border-[#e2e2e2] bg-white py-4 sm:py-6 px-3 sm:px-6 text-center h-full flex flex-col justify-center items-center"
        style={{ boxShadow: "0 0 5px rgba(0,0,0,0.05)" }}
      >
        <p
          className="text-gradient text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-bold leading-tight"
          style={{ fontFamily: "Inter" }}
        >
          {displayValue}
        </p>
        <p
          className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-[15px] font-semibold text-[#666666] leading-snug"
          style={{ fontFamily: "Inter" }}
        >
          {label}
        </p>
      </div>
    </AnimateOnScroll>
  );
};

function AboutUs() {
  return (
    <div className="bg-white text-[#0c0c0d]">
      {/* ════════════ HERO ════════════ */}
      <section className="relative h-[300px] sm:h-[420px] md:h-[650px] lg:h-[816px] w-full overflow-hidden bg-[#0a0a0b]">
        <div className="absolute inset-0">
          <img
            src="/about-us/about-us-banner.png"
            alt="About Us Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-x-0 bottom-0 h-[145px] bg-gradient-to-b from-black/0 to-black"></div>
        </div>

        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full max-w-[1440px] mx-auto inset-x-0 px-5 md:px-8 lg:px-12 xl:px-[94px] pt-6 sm:pt-0">
          <div className="max-w-[935px]">
            <AnimateOnScroll animation="fade-up" as="h1"
              className="text-2xl sm:text-3xl md:text-5xl lg:text-[56px] xl:text-[64px] text-white uppercase font-adlam font-normal flex flex-col space-y-[4px] leading-tight md:leading-[60px] lg:leading-[70px] xl:leading-[74px]"
              style={{ letterSpacing: "-1.11px" }}
            >
              <span>About</span>
              <span>
                Liberty Rewards
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={200} as="p"
              className="mt-3 md:mt-6 max-w-[606px] text-[#FAFAFA] text-xs sm:text-sm md:text-lg leading-4 sm:leading-6 md:leading-[28px] font-normal"
              style={{ fontFamily: "Inter", letterSpacing: "0px", color: "#FAFAFA" }}
            >
              An informational platform showcasing compliant, sweepstakes-based
              and skill-driven gaming products designed for transparent,
              compliant, and engaging digital entertainment.
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ════════════ STATS / INTRO ════════════ */}
      <section className="w-full bg-white my-[24px] md:my-[50px]">
        <div className="max-w-[1440px] mx-auto py-[24px] md:py-[50px] px-5 md:px-8 lg:px-12 xl:px-[94px] flex flex-col items-center gap-[24px] md:gap-[50px]">
          <AnimateOnScroll animation="fade-up" className="flex flex-col items-center gap-4 text-center">
            <SectionBadge label="About Liberty Rewards" />
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-adlam font-normal text-[#0c0c0d] leading-tight md:leading-[44px] lg:leading-[58px]"
            >
              Building the Future
              <br />
              of <GradientText>Gaming</GradientText>
            </h2>
            <p
              className="max-w-[756px] text-sm sm:text-base md:text-lg leading-5 sm:leading-6 md:leading-[28px] font-normal text-[#777777]"
              style={{ fontFamily: "Inter" }}
            >
              Liberty Rewards is pioneering compliant, transparent gaming
              experiences that redefine entertainment for modern venues and
              digital platforms
            </p>
          </AnimateOnScroll>

          <div className="grid w-full max-w-[1252px] grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 px-0">
            {stats.map((stat, idx) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} delay={idx * 150} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ WHO WE ARE ════════════ */}
      <section className="w-full bg-[#f8f8f8]">
        <div className="max-w-[1440px] mx-auto py-[24px] md:py-[50px] px-5 md:px-8 lg:px-12 xl:px-[94px] flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12">
          {/* Left Column */}
          <AnimateOnScroll animation="fade-right" className="flex w-full lg:w-[657px] flex-col items-start gap-8">
            <SectionBadge label="Who We Are" />

            <div className="flex flex-col gap-6">
              <h2
                className="text-2xl sm:text-3xl md:text-[40px] font-adlam font-normal text-[#0c0c0d]"
                style={{ lineHeight: "clamp(28px, 6vw, 50px)", margin: "1px 0" }}
              >
                Redefining
                <br />
                <GradientText>Digital Entertainment</GradientText>
              </h2>
              <p
                className="text-[14px] sm:text-base md:text-[18px] leading-6 sm:leading-7 md:leading-[28px] font-normal text-[#555555]"
                style={{
                  fontFamily: "Inter",
                  marginTop: "1px",
                  marginBottom: "3px",
                }}
              >
                Liberty Rewards specializes in developing and distributing
                compliant, skill-based and sweepstakes-style gaming platforms.
                We bridge the gap between traditional arcade entertainment and
                modern digital experiences.
              </p>
              <p
                className="text-[14px] sm:text-base md:text-[16px] leading-6 sm:leading-7 md:leading-[24px] font-normal text-[#666666]"
                style={{
                  fontFamily: "Inter",
                  marginTop: "0.25px",
                  marginBottom: "5.75px",
                }}
              >
                Our systems are designed with transparency, fairness, and
                regulatory compliance at their core — ensuring operators can
                confidently deploy our products in diverse jurisdictions while
                maintaining the highest standards of player protection.
              </p>

              <ul className="flex flex-col gap-3.5 pt-2">
                {checklistItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <BulletDot />
                    <span
                      className="text-sm sm:text-base text-[#333333] font-medium"
                      style={{ fontFamily: "Inter" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Right Column — Mission / Vision / Values Cards */}
          <AnimateOnScroll animation="fade-left" delay={200} className="flex w-full lg:w-[548px] flex-col gap-5">
            {/* Mission Card */}
            <div
              className="rounded-[24px] border border-[#e2e2e2] bg-white pt-[23px] pb-[23px] px-6"
              style={{ boxShadow: "0 0 10px rgba(0,0,0,0.05)" }}
            >
              <div className="mb-4">
                <img
                  src="/about-us/our-mission-icon.svg"
                  alt="Mission Icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </div>
              <p
                className="text-[#0c0c0d] font-bold text-xl sm:text-2xl leading-tight"
                style={{ fontFamily: "Inter" }}
              >
                Our Mission
              </p>
              <p
                className="mt-2 text-[14px] sm:text-base text-[#666666]"
                style={{ fontFamily: "Inter" }}
              >
                To deliver transparent, compliant gaming experiences that
                operators trust and players enjoy
              </p>
            </div>

            {/* Vision + Values Cards Row */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div
                className="flex-1 rounded-[24px] border border-[#e2e2e2] bg-white pt-[23px] pb-[23px] px-6"
                style={{ boxShadow: "0 0 10px rgba(0,0,0,0.05)" }}
              >
                <div className="mb-3">
                  <img
                    src="/about-us/vision-icon.svg"
                    alt="Vision Icon"
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                </div>
                <p
                  className="text-lg sm:text-xl font-bold text-[#0c0c0d]"
                  style={{ fontFamily: "Inter" }}
                >
                  Vision
                </p>
                <p
                  className="mt-2 text-[14px] sm:text-base text-[#666666]"
                  style={{ fontFamily: "Inter" }}
                >
                  Industry-leading compliant gaming platform
                </p>
              </div>
              <div
                className="flex-1 rounded-[24px] border border-[#e2e2e2] bg-white pt-[23px] pb-[23px] px-6"
                style={{ boxShadow: "0 0 10px rgba(0,0,0,0.05)" }}
              >
                <div className="mb-3">
                  <img
                    src="/about-us/value-icon.svg"
                    alt="Values Icon"
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                </div>
                <p
                  className="text-lg sm:text-xl font-bold text-[#0c0c0d]"
                  style={{ fontFamily: "Inter" }}
                >
                  Values
                </p>
                <p
                  className="mt-2 text-[14px] sm:text-base text-[#666666]"
                  style={{ fontFamily: "Inter" }}
                >
                  Transparency, compliance, innovation
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ════════════ BUILT ON TRUST (Dark) ════════════ */}
      <section className="relative overflow-hidden bg-[#0a0a0b] w-full">
        <div className="max-w-[1440px] mx-auto py-[24px] md:py-[50px] px-5 md:px-8 lg:px-12 xl:px-[94px]">
          <AnimateOnScroll animation="fade-up" className="flex flex-col lg:flex-row lg:flex-nowrap items-start lg:items-center gap-6 lg:gap-12">
            <h2
              className="text-2xl sm:text-3xl lg:text-[40px] font-adlam font-normal text-white uppercase shrink-0 leading-tight lg:leading-[50px]"
            >
              Built on
              <br />
              <GradientText>Trust and Transparency</GradientText>
            </h2>
            <p
              className="flex-1 text-[14px] sm:text-sm md:text-lg leading-5 sm:leading-6 md:leading-[28px] font-normal text-[#B5B5B5]"
              style={{ fontFamily: "Inter", color: "#B5B5B5" }}
            >
              These core values guide everything we do, from the products we
              showcase to the partnerships we build. They're not just words —
              they're the foundation of our commitment to excellence in the
              gaming industry.
            </p>
          </AnimateOnScroll>

          <div className="mt-6 sm:mt-8 md:mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-8 xl:gap-[76px] pb-[16px] md:pb-[32px] stagger-children">
            {trustValues.map((item, index) => {
              const offsetClass =
                index % 2 === 1 ? "lg:translate-y-[32px]" : "";
                return (
                <AnimateOnScroll
                  key={item.title}
                  animation="fade-up"
                  delay={index * 120}
                  className={`flex flex-col items-center gap-3 sm:gap-4 md:gap-6 rounded-[16px] sm:rounded-[20px] md:rounded-[24px] border border-white/5 bg-[#111111] p-4 sm:p-6 md:p-8 text-center transition-transform duration-300 ${offsetClass}`}
                >
                  <div className="flex w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 items-center justify-center rounded-xl md:rounded-2xl border border-[#ffb200]/10 bg-gradient-to-br from-[#ff6a00]/10 to-[#ffb200]/10">
                     <img
                       src={item.icon}
                       alt={item.title}
                       className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain"
                     />
                  </div>
                  <div>
                    <p
                      className="text-sm sm:text-base md:text-lg font-bold text-white"
                      style={{ fontFamily: "Inter" }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="mt-1 sm:mt-2 text-[14px] sm:text-sm text-[#FAFAFA]"
                      style={{ fontFamily: "Inter", color: "#FAFAFA" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════ LEADERSHIP TEAM ════════════ */}
      <section className="w-full bg-white my-[24px] md:my-[50px]">
        <div className="max-w-[1440px] mx-auto py-[24px] md:py-[50px] px-5 md:px-8 lg:px-12 xl:px-[94px] flex flex-col items-center gap-[24px] md:gap-[50px]">
          <AnimateOnScroll animation="fade-up" className="flex flex-col items-center gap-[24px] text-center">
            <SectionBadge label="Leadership Team" />
            <h2
              className="text-2xl sm:text-3xl lg:text-[40px] font-adlam font-normal text-[#0c0c0d] leading-tight lg:leading-[50px]"
            >
              Meet the <GradientText>Experts</GradientText>
            </h2>
            <p
              className="max-w-[709px] text-sm sm:text-base md:text-[18px] leading-5 sm:leading-6 md:leading-[28px] font-normal text-[#989898]"
              style={{ fontFamily: "Inter" }}
            >
              Our leadership team brings decades of combined experience in
              gaming, technology, and regulatory compliance
            </p>
          </AnimateOnScroll>

          <div className="grid w-full max-w-[1252px] grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-[33px] stagger-children">
            {teamMembers.map((member) => (
              <AnimateOnScroll
                key={member.name}
                animation="fade-up"
                delay={teamMembers.indexOf(member) * 150}
                className="overflow-hidden rounded-[16px] sm:rounded-[20px] md:rounded-[24px] border border-[#e2e2e2] bg-white flex flex-col h-full w-full"
                style={{ boxShadow: "0 0 10px rgba(0,0,0,0.05)" }}
              >
                {/* Member Image or Placeholder */}
                {member.image ? (
                  <div className="w-full aspect-[4/5] sm:aspect-[4/5] md:h-[260px] lg:h-[287px] overflow-hidden bg-gray-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className="w-full aspect-[4/5] sm:aspect-[4/5] md:h-[260px] lg:h-[287px] bg-gradient-to-br from-[#ff6a00]/20 to-[#ffb200]/10 flex items-center justify-center shrink-0">
                    <span
                      className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#ff8a00]/40"
                      style={{ fontFamily: "Inter" }}
                    >
                      {member.initials}
                    </span>
                  </div>
                )}
                <div className="p-3 sm:p-4 md:p-6 flex flex-col flex-1">
                  <p
                    className="text-base sm:text-base md:text-xl font-bold text-[#0c0c0d] leading-snug"
                    style={{ fontFamily: "Inter" }}
                  >
                    {member.name}
                  </p>
                  <p
                    className="text-xs sm:text-xs md:text-sm font-semibold text-[#cc8e00] mt-0.5 sm:mt-1"
                    style={{ fontFamily: "Inter" }}
                  >
                    {member.role}
                  </p>
                  <p
                    className="mt-2 sm:mt-3 text-xs sm:text-xs md:text-sm text-[#777777] leading-relaxed"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 400,
                      letterSpacing: "0px",
                    }}
                  >
                    {member.bio}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ MILESTONES TIMELINE ════════════ */}
      <section className="w-full bg-[#f6f6f6]">
        <div className="max-w-[1440px] mx-auto py-[24px] md:py-[50px] px-5 md:px-8 lg:px-12 xl:px-[94px] flex flex-col items-center gap-[24px] md:gap-[50px]">
          <AnimateOnScroll animation="fade-up" className="flex flex-col items-center gap-3 text-center">
            <SectionBadge label="Our Journey" />
            <h2
              className="text-2xl sm:text-3xl lg:text-[40px] font-adlam font-normal text-[#0c0c0d] leading-tight lg:leading-[50px]"
            >
              Milestones <GradientText>&amp; Growth</GradientText>
            </h2>
            <p
              className="text-sm sm:text-base md:text-[18px] leading-5 sm:leading-6 md:leading-[28px] font-normal tracking-[-0.44px] text-center text-[#989898]"
              style={{ fontFamily: "Inter" }}
            >
              A timeline of innovation, expansion, and commitment to excellence
            </p>
          </AnimateOnScroll>

          <ol className="relative flex w-full max-w-[1024px] flex-col gap-4 sm:gap-8 md:gap-[64px] timeline-line">
            {milestones.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <li
                  key={item.year}
                  className="relative grid grid-cols-1 md:grid-cols-2 items-start gap-8 pl-8 md:pl-0"
                >
                  {/* Timeline dot */}
                  <div className="timeline-dot" />

                  {isLeft ? (
                    <>
                      <AnimateOnScroll animation="fade-right" delay={idx * 100}
                        className="relative z-10 rounded-[16px] sm:rounded-[24px] border border-[#e2e2e2] bg-white p-3.5 sm:p-5 md:p-[31px] mb-[7.5px]"
                        style={{ boxShadow: "0 0 10px rgba(0,0,0,0.05)" }}
                      >
                        {item.icon && (
                          <div
                            className="mb-2 sm:mb-4 flex w-9 h-9 sm:w-12 sm:h-12 items-center justify-center rounded-xl sm:rounded-[16px]"
                            style={{
                              border: "1px solid rgba(255, 138, 0, 0.1)",
                              borderTop: "1px solid #FF8A0033",
                              background:
                                "linear-gradient(135deg, rgba(255, 138, 0, 0.2) 0%, rgba(255, 165, 0, 0.1) 100%)",
                            }}
                          >
                            <img
                              src={item.icon}
                              alt={item.title}
                              className="w-4 h-4 sm:w-6 sm:h-6 object-contain"
                            />
                          </div>
                        )}
                        <p
                          className="text-gradient text-lg sm:text-2xl md:text-3xl font-bold"
                          style={{ fontFamily: "Inter" }}
                        >
                          {item.year}
                        </p>
                        <p
                          className="mt-1 sm:mt-3 text-base sm:text-xl md:text-2xl font-bold text-[#0c0c0d]"
                          style={{ fontFamily: "Inter" }}
                        >
                          {item.title}
                        </p>
                        <p
                          className="mt-1 sm:mt-3 text-xs sm:text-sm text-[#989898] leading-normal"
                          style={{ fontFamily: "Inter" }}
                        >
                          {item.description}
                        </p>
                      </AnimateOnScroll>
                      <div className="hidden md:block"></div>
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block"></div>
                      <AnimateOnScroll animation="fade-left" delay={idx * 100}
                        className="relative z-10 rounded-[16px] sm:rounded-[24px] border border-[#e2e2e2] bg-white p-3.5 sm:p-5 md:p-[31px] mb-[7.5px]"
                        style={{ boxShadow: "0 0 10px rgba(0,0,0,0.05)" }}
                      >
                        {item.icon && (
                          <div
                            className="mb-2 sm:mb-4 flex w-9 h-9 sm:w-12 sm:h-12 items-center justify-center rounded-xl sm:rounded-[16px]"
                            style={{
                              border: "1px solid rgba(255, 138, 0, 0.1)",
                              borderTop: "1px solid #FF8A0033",
                              background:
                                "linear-gradient(135deg, rgba(255, 138, 0, 0.2) 0%, rgba(255, 165, 0, 0.1) 100%)",
                            }}
                          >
                            <img
                              src={item.icon}
                              alt={item.title}
                              className="w-4 h-4 sm:w-6 sm:h-6 object-contain"
                            />
                          </div>
                        )}
                        <p
                          className="text-gradient text-lg sm:text-2xl md:text-3xl font-bold"
                          style={{ fontFamily: "Inter" }}
                        >
                          {item.year}
                        </p>
                        <p
                          className="mt-1 sm:mt-3 text-base sm:text-xl md:text-2xl font-bold text-[#0c0c0d]"
                          style={{ fontFamily: "Inter" }}
                        >
                          {item.title}
                        </p>
                        <p
                          className="mt-1 sm:mt-3 text-[11px] sm:text-sm text-[#989898] leading-normal"
                          style={{ fontFamily: "Inter" }}
                        >
                          {item.description}
                        </p>
                      </AnimateOnScroll>
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ════════════ LET'S CONNECT / CTA ════════════ */}
      <section id="contact" className="relative w-full bg-white overflow-hidden">
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

        <div className="relative z-30 max-w-[1440px] mx-auto w-full py-[24px] sm:py-[40px] md:py-[60px] lg:py-[80px] px-5 md:px-8 lg:px-12 xl:px-[94px] flex flex-col xl:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-12">
          {/* Left Column */}
          <AnimateOnScroll animation="fade-right" className="flex w-full lg:w-[487px] flex-col items-start gap-4 sm:gap-6">
            <SectionBadge label="Let's Connect" />
            <div className="flex flex-col gap-4">
              <h2
                className="text-2xl sm:text-3xl md:text-[40px] font-adlam font-normal text-[#0c0c0d]"
                style={{ lineHeight: "clamp(28px, 6vw, 50px)" }}
              >
                Ready to <GradientText>Partner</GradientText>
                <br />
                with Us?
              </h2>
              <p
                className="text-sm sm:text-base md:text-[18px] leading-5 sm:leading-6 md:leading-[28px] font-normal text-[#989898]"
                style={{ fontFamily: "Inter" }}
              >
                Discover how Liberty Rewards can transform your gaming venue with
                compliant, transparent entertainment solutions.
              </p>
            </div>

            <div className="flex w-full flex-col gap-2.5 sm:gap-4">
              <a
                href="tel:+15551234567"
                className="flex items-center gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border border-[#e2e2e2] bg-white p-2.5 sm:p-4 hover:border-[#ffb200]/40 transition-colors"
              >
                <span className="flex w-9 h-9 sm:w-12 sm:h-12 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-[#ff6a00]/20 to-[#ffb200]/10 shrink-0">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffb200]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>
                  <span
                    className="block text-[10px] sm:text-xs text-[#989898]"
                    style={{ fontFamily: "Inter" }}
                  >
                    Call Us
                  </span>
                  <span
                    className="block text-xs sm:text-sm font-semibold text-[#0c0c0d]"
                    style={{ fontFamily: "Inter" }}
                  >
                    +1 (555) 123-4567
                  </span>
                </span>
              </a>
              <a
                href="mailto:info@libertyrewards.com"
                className="flex items-center gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border border-[#e2e2e2] bg-white p-2.5 sm:p-4 hover:border-[#ffb200]/40 transition-colors"
              >
                <span className="flex w-9 h-9 sm:w-12 sm:h-12 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-[#ff6a00]/20 to-[#ffb200]/10 shrink-0">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffb200]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path
                      d="m22 6-10 7L2 6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>
                  <span
                    className="block text-[10px] sm:text-xs text-[#989898]"
                    style={{ fontFamily: "Inter" }}
                  >
                    Email Us
                  </span>
                  <span
                    className="block text-xs sm:text-sm font-semibold text-[#0c0c0d]"
                    style={{ fontFamily: "Inter" }}
                  >
                    info@libertyrewards.com
                  </span>
                </span>
              </a>
            </div>
          </AnimateOnScroll>

          {/* Right Column — CTA */}
          <AnimateOnScroll animation="fade-left" delay={200} className="flex w-full lg:w-[487px] flex-col items-center gap-4 sm:gap-8">
            <Link
              to="/contact"
              className="flex w-full items-center justify-center gap-[8px] rounded-[14px] sm:rounded-[20px] md:rounded-[24px] text-center text-white btn-gradient-primary"
              style={{
                paddingTop: "clamp(12px, 2.5vw, 32.75px)",
                paddingRight: "clamp(14px, 5vw, 66.5px)",
                paddingBottom: "clamp(12px, 2.5vw, 33.25px)",
                paddingLeft: "clamp(14px, 5vw, 66.5px)",
              }}
            >
              <span className="flex flex-col gap-[4px] sm:gap-[6px]">
                <span
                  className="block text-sm sm:text-xl md:text-[30px] font-bold tracking-[0.4px] leading-tight sm:leading-[36px]"
                  style={{ fontFamily: "Inter" }}
                >
                  Get Started Today
                </span>
                <span
                  className="block text-xs sm:text-[14px] md:text-[14px] font-medium tracking-[-0.15px] leading-[14px] sm:leading-[20px]"
                  style={{ fontFamily: "Inter" }}
                >
                  Schedule a consultation with our team
                </span>
              </span>
              <ArrowIcon size={22} color="white" />
            </Link>
            <div
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[10px] sm:text-xs text-[#989898]"
              style={{ fontFamily: "Inter" }}
            >
              <span className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-[#ff6a00] to-[#ffb200]"></span>
                Free Consultation
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-[#ff6a00] to-[#ffb200]"></span>
                24-Hour Response
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-[#ff6a00] to-[#ffb200]"></span>
                No Obligation
              </span>
            </div>
            <p
              className="text-[14px] sm:text-sm text-[#b3b3b3] text-center"
              style={{ fontFamily: "Inter", color: "#b3b3b3" }}
            >
              Join 500+ venues already using Liberty Rewards
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
