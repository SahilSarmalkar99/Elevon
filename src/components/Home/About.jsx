import React from "react";

const stats = [
  {
    id: "I.",
    title: "Years Experience",
    value: "12+",
  },
  {
    id: "II.",
    title: "Agencies Rated",
    value: "200+",
  },
  {
    id: "III.",
    title: "Increased traffic",
    value: "91%",
  },
  {
    id: "IV.",
    title: "Growth engagement",
    value: "94%",
  },
];

const About = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center">
      {/* Top Tag */}
      <div className="mb-6">
        <span className="px-5 py-3 rounded-full bg-white/10 text-sl font-[font1] text-gray-300">
          About
        </span>
      </div>

      {/* Heading */}
      <h1
        className="
        text-center font-semibold tracking-tighter 
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        leading-tighter
        max-w-3xl font-[font5]
      "
      >
        We make <br /> brands memorable
      </h1>

      {/* Description */}
      <p
        className="
        mt-4 text-center text-gray-400
        text-sm sm:text-base md:text-lg
        max-w-2xl font-[font4]
      "
      >
        We blend strategy & creativity to help brands grow, connect, & stand out
        with content that drives real engagement.
      </p>

      {/* cards */}
      <div className="mt-20 w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {stats.map((item, index) => (
          <div
            key={index}
            className="
        bg-white/[0.03]
        border border-white/10
        rounded-2xl
        p-8
        min-h-[260px]
        flex flex-col justify-between

        transition-all duration-300
        hover:bg-white/[0.06]
        hover:-translate-y-1
      "
          >
            {/* Top Row */}
            <div className="flex justify-between items-start  text-gray-500 text-sm font-[font5]">
              <span className="text-white/70">{item.id}</span>
              <span className="text-right">{item.title}</span>
            </div>

            {/* Value */}
            <div className="mt-12 text-white text-4xl sm:text-5xl font-semibold tracking-tight">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
