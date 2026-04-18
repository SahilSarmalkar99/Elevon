import React from "react";

import img1 from "../../assets/carousal/img1.svg";
import img2 from "../../assets/carousal/img2.svg";
import img3 from "../../assets/carousal/img3.svg";
import img4 from "../../assets/carousal/img4.svg";
import img5 from "../../assets/carousal/img5.svg";
import img6 from "../../assets/carousal/img6.svg";

const logos = [img1, img2, img3, img4, img5, img6];

const industries = [
  "Finance", "Industrial", "Fintech", "Technology", "SaaS",
  "Real Estate", "Software", "Architecture",
  "Fashion & Lifestyle", "Education", "Health & Wellness", "Automotive"
];

const TrustedSection = () => {
  return (
    <section className="w-full bg-black text-white px-6  md:px-10 lg:px-16 ">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <h3 className="text-xl md:text-2xl font-[font4] text-gray-400 mb-10">
          Trusted by teams building what’s ahead.
        </h3>

        {/* LOGO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {logos.map((logo, i) => (
            <div
              key={i}
              className="
                bg-[#0b0b0b]
                rounded-2xl
                h-[120px] md:h-[140px]
                flex items-center justify-center
                border border-white/5
                hover:border-white/10
                transition
              "
            >
              <img
                src={logo}
                alt="brand"
                className="h-6 md:h-8 opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}

        </div>

        {/* INDUSTRIES */}
        <div className="mt-20">

          <div className="flex items-center font-[font5] justify-between mb-6">
            <h3 className="text-lg md:text-xl text-gray-400">
              Industries We Power.
            </h3>

          </div>

          {/* TAGS */}
          <div className="flex flex-wrap gap-3">

            {industries.map((item, i) => (
              <span
                key={i}
                className="
                  px-5 py-3
                  rounded-full
                  bg-[#0b0b0b]
                  text-sm text-gray-300
                  border border-white/5
                  hover:border-white/10
                  transition font-[font6]
                "
              >
                {item}
              </span>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default TrustedSection;