import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-black">
      {/* Spacer for fixed navbar */}
      <div className="h-[90px] bg-black"></div>

      {/* Content Section - White background */}
      <section className="bg-white w-full py-[50px] md:py-[77px] px-5 md:px-8 lg:px-12 xl:px-[94px]">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col gap-[50px] items-start">
          {/* Title Block */}
          <div className="flex flex-col gap-6 items-start w-full">
            <h1
              className="font-adlam text-black text-3xl sm:text-4xl lg:text-[48px] leading-[1.2] tracking-wide"
            >
              Privacy Policy
            </h1>
            <p
              className="font-bold text-lg text-black/50 tracking-tight"
              style={{ fontFamily: "Inter" }}
            >
              Last Modified : January 5, 2026
            </p>
          </div>

          {/* Policy Content */}
          <div
            className="flex flex-col gap-9 items-start w-full text-lg tracking-tight"
            style={{ fontFamily: "Inter" }}
          >

            <p className="text-[#989898] leading-7 w-full">
              At Liberty Rewards ("we", "us", or "our"), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or interact with our services.
            </p>

            {/* 1. Information We Collect */}
            <div className="flex flex-col gap-3 items-start w-full">
              <p className="font-bold text-black">1. Information We Collect</p>
              <div className="text-[#989898]">
                <p className="leading-7">We may collect personal information that you voluntarily provide to us when you:</p>
                <ul className="list-disc ml-[27px]">
                  <li className="leading-7">Submit an inquiry via our contact forms.</li>
                  <li className="leading-7">Request product specifications or partner information.</li>
                  <li className="leading-7">Subscribe to our newsletters or updates.</li>
                </ul>
              </div>
            </div>

            {/* 2. Use of Information */}
            <div className="flex flex-col gap-3 items-start leading-7 w-full">
              <p className="font-bold text-black">2. Use of Information</p>
              <div className="text-[#989898]">
                <p>We use the collected information for purposes such as:</p>
                <ul className="list-disc ml-[27px]">
                  <li>Responding to inquiries and providing requested information.</li>
                  <li>Improving our website, content, and services.</li>
                  <li>Ensuring compliance with our terms of service and applicable regulations.</li>
                </ul>
              </div>
            </div>

            {/* 3. Security */}
            <div className="flex flex-col gap-3 items-start leading-7 w-full">
              <p className="font-bold text-black">3. Security</p>
              <p className="text-[#989898]">We implement reasonable technical and organizational measures to safeguard the security of your personal information. However, no data transmission over the internet can be guaranteed as 100% secure.</p>
            </div>

            {/* 4. Third-Party Links */}
            <div className="flex flex-col gap-3 items-start leading-7 w-full">
              <p className="font-bold text-black">4. Third-Party Links</p>
              <p className="text-[#989898]">Our website may contain links to third-party sites, including those of partners. We are not responsible for the privacy practices or content of these external sites and encourage you to review their privacy policies.</p>
            </div>

            {/* 5. Age Requirement */}
            <div className="flex flex-col gap-3 items-start leading-7 w-full">
              <p className="font-bold text-black">5. Age Requirement</p>
              <p className="text-[#989898]">Our website and services are directed to individuals who are at least 21 years of age. We do not knowingly collect personal information from anyone under the age of 21. If we become aware that we have collected personal information from an individual under 21, we will take steps to delete that information.</p>
            </div>

            {/* 6. Changes to This Policy */}
            <div className="flex flex-col gap-3 items-start leading-7 w-full">
              <p className="font-bold text-black">6. Changes to This Policy</p>
              <p className="text-[#989898]">Liberty Rewards has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page. We encourage users to frequently check this page for any changes.</p>
            </div>

            {/* 7. Contact Us */}
            <div className="flex flex-col gap-3 items-start leading-7 w-full">
              <p className="font-bold text-black">7. Contact Us</p>
              <p className="text-[#989898]">If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
