import React from "react";

const WarningIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mt-1.5">
    <path d="M9.28385 14H6.71745C3.63049 14 2.08702 14 1.51823 12.9959C0.949434 11.9919 1.73889 10.6609 3.31781 7.999L4.60103 5.83555C6.11771 3.27852 6.87605 2 8.00065 2C9.12525 2 9.88359 3.27851 11.4003 5.83555L12.6835 7.999C14.2624 10.6609 15.0519 11.9919 14.4831 12.9959C13.9143 14 12.3708 14 9.28385 14Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 6V9" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 11.3281V11.3348" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TermsConditions = () => {
  return (
    <div className="bg-black">
      {/* Spacer for fixed navbar */}
      <div className="h-[90px] bg-black"></div>

      {/* Content Section - White background */}
      <section className="bg-white w-full py-[50px] md:py-[77px] px-5 md:px-8 lg:px-12 xl:px-[94px]">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col gap-8 md:gap-[50px] items-start">
          {/* Title Block */}
          <div className="flex flex-col gap-6 items-start w-full">
            <h1
              className="font-adlam text-black text-2xl sm:text-3xl lg:text-[48px] leading-[1.2] tracking-wide"
            >
              Terms &amp; Conditions
            </h1>
            <p
              className="font-bold text-base md:text-lg text-black/50 tracking-tight"
              style={{ fontFamily: "Inter" }}
            >
              Last Updated: February 24, 2026
            </p>
          </div>

          {/* Important Notice Banner */}
          <div
            className="bg-white border border-[#e2e2e2] rounded-[16px] md:rounded-[20px] w-full flex items-start gap-2.5 md:gap-3 px-4 md:px-6 py-4 md:py-6"
            style={{ boxShadow: "0 0 10px rgba(0,0,0,0.05)" }}
          >
            <WarningIcon />
            <p className="text-sm md:text-lg text-black leading-6 md:leading-7" style={{ fontFamily: "Inter" }}>
              <span className="font-semibold">Important Notice :</span> This website is for informational purposes only. No real money gambling services are offered or conducted on this platform.
            </p>
          </div>

          {/* Terms Content */}
          <div
            className="flex flex-col gap-6 md:gap-9 items-start w-full text-base md:text-lg tracking-tight"
            style={{ fontFamily: "Inter" }}
          >
            <p className="text-[#989898] leading-6 md:leading-7 w-full">
              Welcome to Liberty Rewards. By accessing or using our website, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully.
            </p>

            {/* 1. Acceptance of Terms */}
            <div className="flex flex-col gap-3 items-start leading-6 md:leading-7 w-full">
              <p className="font-bold text-black">1. Acceptance of Terms</p>
              <p className="text-[#989898]">By accessing this website, you confirm that you are at least 21 years of age and legally capable of entering into binding contracts. If you do not agree to these terms, you must strictly stop using the site immediately.</p>
            </div>
          </div>

          {/* 2. Informational Purpose Only */}
          <div className="flex flex-col gap-3 items-start w-full">
            <p className="font-bold text-black">2. Informational Purpose Only</p>
            <div className="text-[#989898]">
              <p className="leading-6 md:leading-7">The content provided on this website, including product descriptions, partner information, and compliance data, is for general informational and educational purposes.</p>
              <ul className="list-disc ml-4 md:ml-[27px]">
                <li className="leading-6 md:leading-7">We do not operate an online casino.</li>
                <li className="leading-6 md:leading-7">We do not facilitate betting or wagering.</li>
                <li className="leading-6 md:leading-7">We do not process financial transactions for gambling purposes.</li>
              </ul>
            </div>
          </div>

          {/* 3. Compliance & Legal Status */}
          <div className="flex flex-col gap-3 items-start w-full">
            <p className="font-bold text-black">3. Compliance &amp; Legal Status</p>
            <p className="text-[#989898] leading-6 md:leading-7">Liberty Rewards showcases skill-based gaming systems and sweepstakes promotional engines. The legality of these products varies by jurisdiction.</p>
            <ul className="list-disc ml-4 md:ml-[27px]">
              <li className="text-[#989898] leading-6 md:leading-7">
                <span className="font-bold text-black">Operator Responsibility :</span> It is the sole responsibility of the venue operator or distributor to ensure that any product purchased or operated complies with all local, state, and federal laws in their specific jurisdiction. Liberty Rewards assumes no liability for the unlawful operation of these devices.
              </li>
            </ul>
          </div>

          {/* 4. Intellectual Property */}
          <div className="flex flex-col gap-3 items-start leading-6 md:leading-7 w-full">
            <p className="font-bold text-black">4. Intellectual Property</p>
            <p className="text-[#989898]">All content on this site, including text, graphics, logos, and images, is the property of Liberty Rewards or its content suppliers and is protected by international copyright laws. Unauthorized use of this material is strictly prohibited.</p>
          </div>

          {/* 5. Limitation of Liability */}
          <div className="flex flex-col gap-3 items-start leading-6 md:leading-7 w-full">
            <p className="font-bold text-black">5. Limitation of Liability</p>
            <p className="text-[#989898]">In no event shall Liberty Rewards, its directors, employees, or partners be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the website or the information contained herein.</p>
          </div>

          {/* 6. Third-Party Links */}
          <div className="flex flex-col gap-3 items-start leading-6 md:leading-7 w-full">
            <p className="font-bold text-black">6. Third-Party Links</p>
            <p className="text-[#989898]">Our website may contain links to third-party websites or services (e.g., our Partners) that are not owned or controlled by Liberty Rewards. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites.</p>
          </div>

          {/* 7. Governing Law */}
          <div className="flex flex-col gap-3 items-start leading-6 md:leading-7 w-full">
            <p className="font-bold text-black">7. Governing Law</p>
            <p className="text-[#989898]">These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.</p>
          </div>

          {/* 8. Contact Information */}
          <div className="flex flex-col gap-3 items-start leading-6 md:leading-7 w-full">
            <p className="font-bold text-black">8. Contact Information</p>
            <p className="text-[#989898]">Questions about the Terms and Conditions should be sent to us at:</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
