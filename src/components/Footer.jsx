import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="max-w-[1440px] mx-auto bg-[#080809] border-t border-white/5 pt-[100px] pb-0 px-6 md:px-[94px] relative overflow-hidden">
      {/* Background glow effects */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: "200px",
          height: "200px",
          opacity: 0.35,
          background:
            "linear-gradient(180deg, rgba(255, 106, 0, 0.15) 0%, rgba(255, 178, 0, 0.15) 100%)",
          filter: "blur(71.4285659790039px)",
          top: "292px",
          left: "-68px",
          zIndex: 1,
        }}
      ></div>

      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: "200px",
          height: "200px",
          opacity: 0.35,
          background:
            "linear-gradient(180deg, rgba(255, 106, 0, 0.15) 0%, rgba(255, 178, 0, 0.15) 100%)",
          filter: "blur(71.4285659790039px)",
          top: "-68px",
          right: "-68px",
          zIndex: 1,
        }}
      ></div>

      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-[24px] items-start justify-between relative z-10">
        {/* Brand Column - Fixed width 313px */}
        <div className="w-full md:w-[313px] shrink-0 flex flex-col">
          <a
            href="#home"
            className="flex items-center space-x-3 cursor-pointer mb-4"
          >
            <img
              src="/brand-logo.png"
              alt="Shelly Entertainment Group Logo"
              className="h-10 w-auto"
            />
          </a>
          <p
            className="text-[#B5B5B5] text-[14px] leading-[22px] font-normal mb-[16px]"
            style={{ fontFamily: "Inter", letterSpacing: "-0.15px" }}
          >
            A premium sweepstakes & skill-based gaming platform designed for
            transparent, compliant, and engaging digital entertainment.
          </p>

          {/* Social Media Links */}
          <div className="flex items-center mt-[8px] gap-[24px]">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D8D8D8] hover:text-[#FFB200] transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1667 1.75H11.6667C10.5616 1.75 9.50179 2.18899 8.72039 2.97039C7.93899 3.75179 7.5 4.8116 7.5 5.91667V8.41667H5V11.75H7.5V18.4167H10.8333V11.75H13.3333L14.1667 8.41667H10.8333V5.91667C10.8333 5.69565 10.9211 5.48369 11.0774 5.32741C11.2337 5.17113 11.4457 5.08333 11.6667 5.08333H14.1667V1.75Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D8D8D8] hover:text-[#FFB200] transition-colors"
            >
              <svg
                width="22"
                height="20"
                viewBox="35 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M54.6667 2.75653C54.6667 2.75653 54.0833 4.50653 53 5.58986C54.3333 13.9232 45.1667 20.0065 38 15.2565C39.8333 15.3399 41.6667 14.7565 43 13.5899C38.8333 12.3399 36.75 7.4232 38.8333 3.58986C40.6667 5.75653 43.5 7.00653 46.3333 6.9232C45.5833 3.4232 49.6667 1.4232 52.1667 3.75653C53.0833 3.75653 54.6667 2.75653 54.6667 2.75653Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D8D8D8] hover:text-[#FFB200] transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="72 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M85.6719 6.75C86.998 6.75 88.2697 7.27678 89.2074 8.21447C90.1451 9.15215 90.6719 10.4239 90.6719 11.75V17.5833H87.3385V11.75C87.3385 11.308 87.1629 10.884 86.8504 10.5715C86.5378 10.2589 86.1139 10.0833 85.6719 10.0833C85.2298 10.0833 84.8059 10.2589 84.4934 10.5715C84.1808 10.884 84.0052 11.308 84.0052 11.75V17.5833H80.6719V11.75C80.6719 10.4239 81.1987 9.15215 82.1363 8.21447C83.074 7.27678 84.3458 6.75 85.6719 6.75Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M77.3333 7.58203H74V17.582H77.3333V7.58203Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M75.6667 5.08333C76.5871 5.08333 77.3333 4.33714 77.3333 3.41667C77.3333 2.49619 76.5871 1.75 75.6667 1.75C74.7462 1.75 74 2.49619 74 3.41667C74 4.33714 74.7462 5.08333 75.6667 5.08333Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D8D8D8] hover:text-[#FFB200] transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="108 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M122.5 1.75H114.167C111.865 1.75 110 3.61548 110 5.91667V14.25C110 16.5512 111.865 18.4167 114.167 18.4167H122.5C124.801 18.4167 126.667 16.5512 126.667 14.25V5.91667C126.667 3.61548 124.801 1.75 122.5 1.75Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M121.67 9.55924C121.773 10.2528 121.654 10.9611 121.331 11.5834C121.008 12.2057 120.497 12.7104 119.871 13.0256C119.245 13.3408 118.535 13.4506 117.843 13.3392C117.151 13.2278 116.511 12.901 116.015 12.4052C115.52 11.9094 115.193 11.27 115.081 10.5777C114.97 9.88553 115.08 9.17581 115.395 8.54955C115.71 7.92328 116.215 7.41235 116.837 7.08944C117.459 6.76652 118.168 6.64806 118.861 6.7509C119.569 6.85581 120.224 7.18546 120.729 7.69116C121.235 8.19686 121.565 8.8518 121.67 9.55924Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M122.922 5.5H122.93"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right side 3 Columns sharing the remaining space equally */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full">
          {/* Quick Links Column */}
          <div>
            <h4
              className="text-white font-semibold text-[18px] mb-[16px]"
              style={{
                fontFamily: "Inter",
                letterSpacing: "-0.44px",
                lineHeight: "27px",
              }}
            >
              Quick Links
            </h4>
            <ul className="space-y-[8px]">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about-us" },
                { label: "Products", to: "/products" },
                { label: "Partners", to: "/partners" },
                { label: "Staff", to: "/staff" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li
                  key={link.label}
                  className="text-[#B5B5B5] hover:text-white transition-colors text-[14px] font-normal"
                  style={{
                    fontFamily: "Inter",
                    letterSpacing: "-0.15px",
                    lineHeight: "20px",
                  }}
                >
                  <Link
                    to={link.to}
                    className="text-inherit hover:text-white transition-colors block w-full"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links Column */}
          <div>
            <h4
              className="text-white font-semibold text-[18px] mb-[16px]"
              style={{
                fontFamily: "Inter",
                letterSpacing: "-0.44px",
                lineHeight: "27px",
              }}
            >
              Legal
            </h4>
            <ul className="space-y-[8px]">
              {[
                { label: "Privacy Policy", href: "#privacy" },
                { label: "Terms & Conditions", href: "#terms" },
                { label: "Compliance", href: "#compliance" },
              ].map((link) => (
                <li
                  key={link.label}
                  className="text-[#B5B5B5] hover:text-white transition-colors text-[14px] font-normal"
                  style={{
                    fontFamily: "Inter",
                    letterSpacing: "-0.15px",
                    lineHeight: "20px",
                  }}
                >
                  <a
                    href={link.href}
                    className="text-inherit hover:text-white transition-colors block w-full"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4
              className="text-white font-semibold text-[18px] mb-[16px]"
              style={{
                fontFamily: "Inter",
                letterSpacing: "-0.44px",
                lineHeight: "27px",
              }}
            >
              Contact Us
            </h4>
            <ul className="space-y-[12px]">
              {/* Email Row */}
              <li className="flex items-center gap-[12px]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#B5B5B5] shrink-0"
                >
                  <path
                    d="M17 3H3.66667C2.74619 3 2 3.74619 2 4.66667V14.6667C2 15.5871 2.74619 16.3333 3.66667 16.3333H17C17.9205 16.3333 18.6667 15.5871 18.6667 14.6667V4.66667C18.6667 3.74619 17.9205 3 17 3Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.6667 5.5L11.1917 10.25C10.9344 10.4112 10.6369 10.4967 10.3333 10.4967C10.0297 10.4967 9.73227 10.4112 9.475 10.25L2 5.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className="text-[#B5B5B5] text-[14px] font-normal"
                  style={{
                    fontFamily: "Inter",
                    letterSpacing: "-0.15px",
                    lineHeight: "20px",
                  }}
                >
                  <a
                    href="mailto:info@libertyrewards.com"
                    className="text-inherit hover:text-white transition-colors"
                  >
                    info@libertyrewards.com
                  </a>
                </span>
              </li>
              {/* Phone Row */}
              <li className="flex items-center gap-[12px]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 32 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#B5B5B5] shrink-0"
                >
                  <path
                    d="M18.5734 46.4334V48.9334C18.5744 49.1655 18.5268 49.3952 18.4339 49.6079C18.3409 49.6079 18.2045 50.0114 18.0335 50.1683C17.8625 50.3252 17.6606 50.4446 17.4407 50.519C17.2209 50.5934 16.9879 50.621 16.7568 50.6001C14.1925 50.3214 11.7293 49.4452 9.5651 48.0417C7.55162 46.7623 5.84454 45.0552 4.5651 43.0417C3.15675 40.8678 2.2803 38.3926 2.00676 35.8167C1.98594 35.5863 2.01333 35.354 2.08718 35.1348C2.16104 34.9155 2.27974 34.714 2.43574 34.5431C2.59173 34.3722 2.7816 34.2357 2.99326 34.1422C3.20491 34.0487 3.43371 34.0003 3.6651 34.0001H6.1651C6.56952 33.9961 6.96159 34.1393 7.26823 34.403C7.57487 34.6667 7.77516 35.033 7.83176 35.4334C7.93728 36.2335 8.13297 37.019 8.4151 37.7751C8.52722 38.0734 8.55148 38.3975 8.48502 38.7091C8.41856 39.0208 8.26415 39.3068 8.0401 39.5334L6.98176 40.5917C8.16806 42.678 9.89548 44.4055 11.9818 45.5917L13.0401 44.5334C13.2667 44.3094 13.5527 44.155 13.8644 44.0885C14.176 44.022 14.5002 44.0463 14.7984 44.1584C15.5545 44.4405 16.34 44.6362 17.1401 44.7417C17.5449 44.7989 17.9146 45.0028 18.1789 45.3147C18.4432 45.6266 18.5836 46.0247 18.5734 46.4334Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className="text-[#B5B5B5] text-[14px] font-normal"
                  style={{
                    fontFamily: "Inter",
                    letterSpacing: "-0.15px",
                    lineHeight: "20px",
                  }}
                >
                  <a
                    href="tel:+15551234567"
                    className="text-inherit hover:text-white transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </span>
              </li>
              {/* Location Row */}
              <li className="flex items-start gap-[12px]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 64 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#B5B5B5] shrink-0 mt-0.5"
                >
                  <path
                    d="M16.3333 72.6667C16.3333 76.8275 11.7175 81.1608 10.1675 82.4992C10.0231 82.6077 9.84733 82.6665 9.66667 82.6665C9.486 82.6665 9.31023 82.6077 9.16583 82.4992C7.61583 81.1608 3 76.8275 3 72.6667C3 70.8986 3.70238 69.2029 4.95262 67.9526C6.20286 66.7024 7.89856 66 9.66667 66C11.4348 66 13.1305 66.7024 14.3807 67.9526C15.631 69.2029 16.3333 70.8986 16.3333 72.6667Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.66406 75.166C11.0448 75.166 12.1641 74.0467 12.1641 72.666C12.1641 71.2853 11.0448 70.166 9.66406 70.166C8.28335 70.166 7.16406 71.2853 7.16406 72.666C7.16406 74.0467 8.28335 75.166 9.66406 75.166Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className="text-[#B5B5B5] text-[14px] font-normal"
                  style={{
                    fontFamily: "Inter",
                    letterSpacing: "-0.15px",
                    lineHeight: "20px",
                  }}
                >
                  1234 Digital Blvd, Tech City, TC 90210
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-[1440px] mx-auto border-t border-[#FFFFFF33] mt-12 pt-[32px] flex flex-col items-center justify-center text-center space-y-2 relative z-10">
        <p
          className="text-[#D8D8D8] text-[12px] leading-[16px] font-normal"
          style={{ fontFamily: "Inter", letterSpacing: "0px" }}
        >
          &copy; {new Date().getFullYear()} Liberty Rewards. All Rights
          Reserved.
        </p>
        <p
          className="text-[#D8D8D8] text-[12px] leading-[16px] font-normal"
          style={{ fontFamily: "Inter", letterSpacing: "0px" }}
        >
          Designed for adult audiences • Transparent • Compliant • Premium
        </p>
      </div>
    </footer>
  );
};

export default Footer;
