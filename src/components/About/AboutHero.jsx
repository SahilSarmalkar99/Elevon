import React from "react";
import BgVideo from "../BgVideo";

const AboutHero = () => {
  return (
    <section className="w-full text-white">

      {/* HERO */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden">

        {/* VIDEO */}
        <BgVideo />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* CONTENT */}
        <div className="relative z-20 flex flex-col items-center">
          <span className="px-5 py-3 font-[font3] rounded-full bg-white/10 text-sl text-gray-300 mb-6 backdrop-blur-md">
            About Us
          </span>

          <h1 className="font-[font5] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tighter tracking-tighter max-w-4xl">
            Where brands <br /> become unforgettable
          </h1>

          <p className="mt-6 text-gray-300 font-[ ] text-sm sm:text-base md:text-lg max-w-xl">
            A team of creators and marketers elevating
            brands with powerful content and campaigns.
          </p>
        </div>
      </div>

      {/* BLACK SECTION + IMAGE */}
      <div className="relative z-20 -mt-32 md:-mt-40 lg:-mt-48">

        <div className="max-w-6xl mx-auto px-4 sm:px-6  pb-24">

          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="team"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px]  object-cover"
            />
          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutHero;