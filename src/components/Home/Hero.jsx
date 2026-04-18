import React from "react";
import Carousel from "./Carousel";
import BgVideo from "../BgVideo";
import useTextReveal from "../../hooks/useTextReveal";
import useFadeIn from "../../hooks/useFadeIn";

const Hero = () => {

  const ref = useTextReveal();
  const fade = useFadeIn();
  return (
    <section ref={fade} className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-30">

        <BgVideo />
      {/* Content */}
      <div className="max-w-4xl z-20 w-full mx-auto">

        {/* Rating */}
        <div className="mb-4 sm:mb-6">
          <div className="fade-item text-orange-400 text-xs sm:text-sm mb-2">
            ★★★★★
          </div>
          <p className="fade-item text-gray-300 text-xs sm:text-sm font-[font6]">
            5.0 rating · Helped over 100+ businesses
          </p>
        </div>

        {/* Heading */}
        <h1 ref={ref} className="
          text-white font-semibold font-[font4]
          leading-[1.1] tracking-tight
          text-3xl sm:text-4xl md:text-6xl lg:text-7xl
        ">
          Moving Brands <br />
          Forward, Faster
        </h1>

        {/* Description */}
        <p className="fade-item
          mt-4 sm:mt-6 text-gray-300
          text-xs sm:text-sm md:text-lg
          max-w-xl sm:max-w-2xl mx-auto font-[font6]
        ">
          We help ambitious brands scale with performance marketing,
          creative strategy, and conversion-focused campaigns.
        </p>

        {/* CTA */}
        <div className="fade-item mt-6 sm:mt-8">
          <button className="
            bg-white text-black
            px-5 sm:px-6 py-2.5 sm:py-3
            rounded-full
            text-xs sm:text-sm md:text-base
            font-medium font-[font2]
            hover:scale-105 transition duration-300
          ">
            Book a Consultation
          </button>
        </div>
      </div>

      {/* Carousel (separate + responsive spacing) */}
      <div className="fade-item mt-5 z-20  w-full">
        <Carousel />
      </div>

    </section>
  );
};

export default Hero;