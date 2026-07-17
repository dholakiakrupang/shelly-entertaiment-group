import React from "react";
import ArrowIcon from "../components/ArrowIcon";

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
  <span className="inline-flex items-center gap-2 rounded-[24px] border border-[#2a2a2a] bg-[#1a1a1a] px-4 py-[7px] text-sm text-white">
    <span className="w-2 h-2 rounded-full bg-gradient-to-b from-[#ff6a00] to-[#ffb200]"></span>
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

function AboutUs() {
  return (
    <div className="bg-white text-[#0c0c0d]">
      {/* ════════════ HERO ════════════ */}
      <section className="relative h-[816px] w-full overflow-hidden bg-[#0a0a0b]">
        <div className="absolute inset-0">
          <img
            src="/about-us/about-us-banner.png"
            alt="About Us Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-x-0 bottom-0 h-[145px] bg-gradient-to-b from-black/0 to-black"></div>
        </div>

        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full max-w-[1440px] mx-auto inset-x-0 px-6 md:px-[94px]">
          <div className="max-w-[935px]">
            <h1
              className="text-4xl md:text-[64px] text-white uppercase font-adlam font-normal flex flex-col space-y-[4px]"
              style={{ letterSpacing: "-1.11px" }}
            >
              <span className="leading-tight md:leading-[74px]">About</span>
              <span className="leading-tight md:leading-[74px]">
                Liberty Rewards
              </span>
            </h1>
            <p
              className="mt-6 max-w-[606px] text-gray-400 text-[16px] leading-[28px] font-normal"
              style={{ fontFamily: "Inter", letterSpacing: "0px" }}
            >
              An informational platform showcasing compliant, sweepstakes-based
              and skill-driven gaming products designed for transparent,
              compliant, and engaging digital entertainment.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════ STATS / INTRO ════════════ */}
      <section className="w-full bg-white my-[50px]">
        <div className="max-w-[1440px] mx-auto py-[50px] px-6 md:px-[94px] flex flex-col items-center gap-[50px]">
          <div className="flex flex-col items-center gap-4 text-center">
            <SectionBadge label="About Liberty Rewards" />
            <h2
              className="text-3xl md:text-[48px] font-adlam font-normal text-[#0c0c0d]"
              style={{ lineHeight: "58px" }}
            >
              Building the Future
              <br />
              of <GradientText>Gaming</GradientText>
            </h2>
            <p
              className="max-w-[756px] text-[18px] leading-[28px] font-normal text-[#989898]"
              style={{ fontFamily: "Inter" }}
            >
              Liberty Rewards is pioneering compliant, transparent gaming
              experiences that redefine entertainment for modern venues and
              digital platforms
            </p>
          </div>

          <div className="grid w-full max-w-[1252px] grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-[178px]">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[#e2e2e2] bg-white py-[24px] px-6 text-center"
                style={{ boxShadow: "0 0 5px rgba(0,0,0,0.05)" }}
              >
                <p
                  className="text-gradient text-[36px] font-bold leading-[40px]"
                  style={{ fontFamily: "Inter" }}
                >
                  {stat.value}
                </p>
                <p
                  className="mt-2 text-sm font-medium text-[#989898]"
                  style={{ fontFamily: "Inter" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ WHO WE ARE ════════════ */}
      <section className="w-full bg-[#f8f8f8]">
        <div className="max-w-[1440px] mx-auto pt-[25px] pb-[25px] md:pt-[25px] md:pb-[75px] px-6 md:px-[94px] flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Left Column */}
          <div className="flex w-full md:w-[657px] flex-col items-start gap-8">
            <SectionBadge label="Who We Are" />

            <div className="flex flex-col gap-6">
              <h2
                className="text-3xl md:text-[40px] font-adlam font-normal text-[#0c0c0d]"
                style={{ lineHeight: "50px", margin: "1px 0" }}
              >
                Redefining
                <br />
                <GradientText>Digital Entertainment</GradientText>
              </h2>
              <p
                className="text-[18px] leading-[28px] font-normal text-[#989898]"
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
                className="text-[16px] leading-[24px] font-normal text-[#b5b5b5]"
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

              <ul className="flex flex-col gap-4 pt-4">
                {checklistItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <BulletDot />
                    <span
                      className="text-sm text-[#b5b5b5]"
                      style={{ fontFamily: "Inter" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column — Mission / Vision / Values Cards */}
          <div className="flex w-full md:w-[548px] flex-col gap-5">
            {/* Mission Card */}
            <div
              className="rounded-[24px] border border-[#e2e2e2] bg-white pt-[23px] pb-[23px] px-6"
              style={{ boxShadow: "0 0 10px rgba(0,0,0,0.05)" }}
            >
              <div className="mb-4">
                <img
                  src="/about-us/our-mission-icon.svg"
                  alt="Mission Icon"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <p
                className="text-[#0c0c0d]"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 700,
                  fontSize: "24px",
                  lineHeight: "32px",
                  letterSpacing: "0.07px",
                }}
              >
                Our Mission
              </p>
              <p
                className="mt-2 text-sm text-[#989898]"
                style={{ fontFamily: "Inter" }}
              >
                To deliver transparent, compliant gaming experiences that
                operators trust and players enjoy
              </p>
            </div>

            {/* Vision + Values Cards Row */}
            <div className="flex gap-3">
              <div
                className="flex-1 rounded-[24px] border border-[#e2e2e2] bg-white pt-[23px] pb-[23px] px-6"
                style={{ boxShadow: "0 0 10px rgba(0,0,0,0.05)" }}
              >
                <div className="mb-3">
                  <img
                    src="/about-us/vision-icon.svg"
                    alt="Vision Icon"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <p
                  className="text-xl font-bold text-[#0c0c0d]"
                  style={{ fontFamily: "Inter" }}
                >
                  Vision
                </p>
                <p
                  className="mt-2 text-xs text-[#989898]"
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
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <p
                  className="text-xl font-bold text-[#0c0c0d]"
                  style={{ fontFamily: "Inter" }}
                >
                  Values
                </p>
                <p
                  className="mt-2 text-xs text-[#989898]"
                  style={{ fontFamily: "Inter" }}
                >
                  Transparency, compliance, innovation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ BUILT ON TRUST (Dark) ════════════ */}
      <section className="relative overflow-hidden bg-[#0a0a0b] w-full">
        <div className="max-w-[1440px] mx-auto py-[50px] px-6 md:px-[94px]">
          <div className="flex flex-col md:flex-row md:flex-nowrap items-start md:items-center gap-12">
            <h2
              className="text-3xl md:text-[40px] font-adlam font-normal text-white uppercase shrink-0 whitespace-nowrap"
              style={{ lineHeight: "50px" }}
            >
              Built on Trust
              <br />
              <GradientText>Trust and Transparency</GradientText>
            </h2>
            <p
              className="flex-1 text-[18px] leading-[28px] font-normal text-gray-400"
              style={{ fontFamily: "Inter" }}
            >
              These core values guide everything we do, from the products we
              showcase to the partnerships we build. They're not just words —
              they're the foundation of our commitment to excellence in the
              gaming industry.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-[76px] pb-[32px]">
            {trustValues.map((item, index) => {
              const offsetClass =
                index % 2 === 1 ? "lg:translate-y-[32px]" : "";
              return (
                <div
                  key={item.title}
                  className={`flex flex-col items-center gap-6 rounded-[24px] border border-white/5 bg-[#111111] p-8 text-center transition-transform duration-300 ${offsetClass}`}
                >
                  <div className="flex w-16 h-16 items-center justify-center rounded-2xl border border-[#ffb200]/10 bg-gradient-to-br from-[#ff6a00]/10 to-[#ffb200]/10">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <p
                      className="text-lg font-bold text-white"
                      style={{ fontFamily: "Inter" }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="mt-2 text-sm text-[#fafafa]"
                      style={{ fontFamily: "Inter" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════ LEADERSHIP TEAM ════════════ */}
      <section className="w-full bg-white my-[50px]">
        <div className="max-w-[1440px] mx-auto py-[50px] px-6 md:px-[94px] flex flex-col items-center gap-[50px]">
          <div className="flex flex-col items-center gap-[24px] text-center">
            <SectionBadge label="Leadership Team" />
            <h2
              className="text-3xl md:text-[40px] font-adlam font-normal text-[#0c0c0d]"
              style={{ lineHeight: "50px" }}
            >
              Meet the <GradientText>Experts</GradientText>
            </h2>
            <p
              className="max-w-[709px] text-[18px] leading-[28px] font-normal text-[#989898]"
              style={{ fontFamily: "Inter" }}
            >
              Our leadership team brings decades of combined experience in
              gaming, technology, and regulatory compliance
            </p>
          </div>

          <div className="grid w-full max-w-[1252px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[33px]">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-[24px] border border-[#e2e2e2] bg-white"
                style={{ boxShadow: "0 0 10px rgba(0,0,0,0.05)" }}
              >
                {/* Member Image or Placeholder */}
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-auto object-cover"
                  />
                ) : (
                  <div className="h-[287px] w-full bg-gradient-to-br from-[#ff6a00]/20 to-[#ffb200]/10 flex items-center justify-center">
                    <span
                      className="text-[48px] font-bold text-[#ff8a00]/40"
                      style={{ fontFamily: "Inter" }}
                    >
                      {member.initials}
                    </span>
                  </div>
                )}
                <div className="p-6">
                  <p
                    className="text-xl font-bold text-[#0c0c0d]"
                    style={{ fontFamily: "Inter" }}
                  >
                    {member.name}
                  </p>
                  <p
                    className="text-sm font-medium text-[#cc8e00] mt-[4px]"
                    style={{ fontFamily: "Inter" }}
                  >
                    {member.role}
                  </p>
                  <p
                    className="mt-3 text-[#989898]"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 400,
                      fontSize: "12px",
                      lineHeight: "19.5px",
                      letterSpacing: "0px",
                    }}
                  >
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ MILESTONES TIMELINE ════════════ */}
      <section className="w-full bg-[#f6f6f6]">
        <div className="max-w-[1440px] mx-auto py-[50px] px-6 md:px-[94px] flex flex-col items-center gap-[50px]">
          <div className="flex flex-col items-center gap-3 text-center">
            <SectionBadge label="Our Journey" />
            <h2
              className="text-3xl md:text-[40px] font-adlam font-normal text-[#0c0c0d]"
              style={{ lineHeight: "50px" }}
            >
              Milestones <GradientText>&amp; Growth</GradientText>
            </h2>
            <p
              className="text-[18px] leading-[28px] font-normal tracking-[-0.44px] text-center text-[#989898]"
              style={{ fontFamily: "Inter" }}
            >
              A timeline of innovation, expansion, and commitment to excellence
            </p>
          </div>

          <ol className="relative flex w-full max-w-[1024px] flex-col gap-[64px] timeline-line">
            {milestones.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <li
                  key={item.year}
                  className="relative grid grid-cols-1 md:grid-cols-2 items-start gap-8"
                >
                  {/* Timeline dot */}
                  <div className="timeline-dot" />

                  {isLeft ? (
                    <>
                      <div
                        className="rounded-[24px] border border-[#e2e2e2] bg-white p-[31px] mb-[7.5px]"
                        style={{ boxShadow: "0 0 10px rgba(0,0,0,0.05)" }}
                      >
                        {item.icon && (
                          <div
                            className="mb-4 flex w-12 h-12 items-center justify-center rounded-[16px]"
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
                              className="w-6 h-6 object-contain"
                            />
                          </div>
                        )}
                        <p
                          className="text-gradient text-3xl font-bold"
                          style={{ fontFamily: "Inter" }}
                        >
                          {item.year}
                        </p>
                        <p
                          className="mt-4 text-2xl font-bold text-[#0c0c0d]"
                          style={{ fontFamily: "Inter" }}
                        >
                          {item.title}
                        </p>
                        <p
                          className="mt-4 text-sm text-[#989898]"
                          style={{ fontFamily: "Inter" }}
                        >
                          {item.description}
                        </p>
                      </div>
                      <div></div>
                    </>
                  ) : (
                    <>
                      <div></div>
                      <div
                        className="rounded-[24px] border border-[#e2e2e2] bg-white p-[31px] mb-[7.5px]"
                        style={{ boxShadow: "0 0 10px rgba(0,0,0,0.05)" }}
                      >
                        {item.icon && (
                          <div
                            className="mb-4 flex w-12 h-12 items-center justify-center rounded-[16px]"
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
                              className="w-6 h-6 object-contain"
                            />
                          </div>
                        )}
                        <p
                          className="text-gradient text-3xl font-bold"
                          style={{ fontFamily: "Inter" }}
                        >
                          {item.year}
                        </p>
                        <p
                          className="mt-4 text-2xl font-bold text-[#0c0c0d]"
                          style={{ fontFamily: "Inter" }}
                        >
                          {item.title}
                        </p>
                        <p
                          className="mt-4 text-sm text-[#989898]"
                          style={{ fontFamily: "Inter" }}
                        >
                          {item.description}
                        </p>
                      </div>
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
        <div className="hidden md:block absolute left-0 bottom-0 select-none pointer-events-none z-10">
          <img
            src="/about-us/about-element.png"
            alt="Arcade Machine Cabinet Left"
            className="h-[442px] w-auto object-contain"
          />
        </div>

        {/* Right Side Cabinet Element */}
        <div className="hidden md:block absolute right-0 bottom-0 select-none pointer-events-none z-10">
          <img
            src="/about-us/about-element-2.png"
            alt="Arcade Machine Cabinet Right"
            className="h-[442px] w-auto object-contain"
          />
        </div>

        <div className="relative z-20 max-w-[1440px] mx-auto py-[50px] px-6 md:px-[208px] flex flex-col md:flex-row flex-wrap items-center justify-center gap-12">
          {/* Left Column */}
          <div className="flex w-full md:w-[487px] flex-col items-start gap-6">
            <SectionBadge label="Let's Connect" />
            <div className="flex flex-col gap-4">
              <h2
                className="text-3xl md:text-[40px] font-adlam font-normal text-[#0c0c0d]"
                style={{ lineHeight: "50px" }}
              >
                Ready to <GradientText>Partner</GradientText>
                <br />
                with Us?
              </h2>
              <p
                className="text-[18px] leading-[28px] font-normal text-[#989898]"
                style={{ fontFamily: "Inter" }}
              >
                Discover how Liberty Rewards can transform your gaming venue with
                compliant, transparent entertainment solutions.
              </p>
            </div>

            <div className="flex w-full flex-col gap-4">
              <a
                href="tel:+15551234567"
                className="flex items-center gap-4 rounded-2xl border border-[#e2e2e2] bg-white p-4 hover:border-[#ffb200]/40 transition-colors"
              >
                <span className="flex w-12 h-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff6a00]/20 to-[#ffb200]/10">
                  <svg
                    className="w-5 h-5 text-[#ffb200]"
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
                    className="block text-xs text-[#989898]"
                    style={{ fontFamily: "Inter" }}
                  >
                    Call Us
                  </span>
                  <span
                    className="block text-sm font-semibold text-[#0c0c0d]"
                    style={{ fontFamily: "Inter" }}
                  >
                    +1 (555) 123-4567
                  </span>
                </span>
              </a>
              <a
                href="mailto:info@libertyrewards.com"
                className="flex items-center gap-4 rounded-2xl border border-[#e2e2e2] bg-white p-4 hover:border-[#ffb200]/40 transition-colors"
              >
                <span className="flex w-12 h-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff6a00]/20 to-[#ffb200]/10">
                  <svg
                    className="w-5 h-5 text-[#ffb200]"
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
                    className="block text-xs text-[#989898]"
                    style={{ fontFamily: "Inter" }}
                  >
                    Email Us
                  </span>
                  <span
                    className="block text-sm font-semibold text-[#0c0c0d]"
                    style={{ fontFamily: "Inter" }}
                  >
                    info@libertyrewards.com
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Right Column — CTA */}
          <div className="flex w-full md:w-[487px] flex-col items-center gap-8">
            <a
              href="#contact"
              className="flex w-full items-center justify-center gap-[8px] rounded-[24px] bg-gradient-to-b from-[#ff6a00] to-[#ffb200] text-center text-white transition-transform hover:scale-[1.01]"
              style={{
                paddingTop: "32.75px",
                paddingRight: "66.5px",
                paddingBottom: "33.25px",
                paddingLeft: "66.5px",
              }}
            >
              <span className="flex flex-col gap-[6px]">
                <span
                  className="block text-[30px] font-bold tracking-[0.4px] leading-[36px]"
                  style={{ fontFamily: "Inter" }}
                >
                  Get Started Today
                </span>
                <span
                  className="block text-[14px] font-medium tracking-[-0.15px] leading-[20px]"
                  style={{ fontFamily: "Inter" }}
                >
                  Schedule a consultation with our team
                </span>
              </span>
              <ArrowIcon size={32} color="white" />
            </a>
            <div
              className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#989898]"
              style={{ fontFamily: "Inter" }}
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-[#ff6a00] to-[#ffb200]"></span>
                Free Consultation
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-[#ff6a00] to-[#ffb200]"></span>
                24-Hour Response
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-[#ff6a00] to-[#ffb200]"></span>
                No Obligation
              </span>
            </div>
            <p
              className="text-sm text-[#989898] text-center"
              style={{ fontFamily: "Inter" }}
            >
              Join 500+ venues already using Liberty Rewards
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
