import React from "react";
import BgVideo from "../BgVideo";

const projects = [
  {
    img: "https://framerusercontent.com/images/3mi6tjAFuZCki5P0WiLzf1vTpo.png?width=705&height=888",
    name: "Virella & Co.",
    year: "2026",
  },
  {
    img: "https://framerusercontent.com/images/IcoeDyYjWZv8O66e8YRmalvhdck.png?width=673&height=800",
    name: "Ardent Interiors Technologies",
    year: "2024",
  },
  {
    img: "https://framerusercontent.com/images/HoyFwUPQYJ8aTNHqqXvacXIALbs.png?width=753&height=827",
    name: "Nova Studio",
    year: "2025",
  },
  {
    img: "https://framerusercontent.com/images/5h4XHh71jq34zO0YooSF0Jpoho.png?width=662&height=892",
    name: "Flux Digital",
    year: "2023",
  },
  {
    img: "https://framerusercontent.com/images/TocFIjLvrC2lbKRdKSJnODd4k.png?width=715&height=879",
    name: "Vertex Agency",
    year: "2024",
  },
  {
    img: "https://framerusercontent.com/images/GVJmzeSm7TL3QXmmvm2NUUng7CI.png?width=713&height=895",
    name: "Orion Brand",
    year: "2022",
  },
];

const PortfolioSection = () => {
  return (
    <section className="w-full  text-white">
      {/* HERO */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <BgVideo />

        {/* GLOW */}
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_60%_40%,rgba(255,120,60,0.25),transparent_60%)] blur-3xl" />

        {/* CONTENT */}
        <div className="relative z-20 flex flex-col items-center">
          <span className="px-5 py-3 font-[font3] rounded-full bg-white/10 text-sl text-gray-300 mb-6 backdrop-blur-md">
            Explore Our Portfolio
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[font5] leading-tighter tracking-tighter max-w-4xl">
            Explore Our <br /> Impactful Projects
          </h2>

          <p className="mt-6 font-[font4] text-gray-300 text-sm sm:text-base md:text-lg max-w-xl">
            From ambitious startups to established brands, we build powerful
            digital experiences that elevate presence and drive measurable
            results.
          </p>
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 -mt-20 md:grid-cols-2 gap-2">
        {projects.map((item, i) => (
          <div
            key={i}
            className="
              group
              rounded-2xl
              overflow-hidden
              bg-[#0b0b0b]
              border border-white/5
              hover:border-white/10
              transition-all duration-300 font-[font4]
            "
          >
            {/* IMAGE */}
            <div className="relative h-[260px] md:h-[520px] overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />

              {/* GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* INFO BAR */}
            <div className="flex items-center justify-between px-5 py-4 bg-black">
              <span className="text-sm md:text-base text-gray-200">
                {item.name}
              </span>
              <span className="text-sm text-gray-400">{item.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
