import React from "react";
import BgVideo from "../BgVideo";

const projects = [
  {
    img: "https://framerusercontent.com/images/SAJvaLNAGIIH6BHYuGgM6Sl2Tg.png?width=724&height=656",
    name: "Virella & Co.",
    year: "2026",
  },
  {
    img: "https://framerusercontent.com/images/bV8IhYs62ENlu7ZJQFVzNdWs6Q.png?width=698&height=829",
    name: "Ardent Interiors Technologies",
    year: "2024",
  },
  {
    img: "https://framerusercontent.com/images/2vH64uPjJJBc9yALuAsAcCVp0.png?width=588&height=661",
    name: "Nova Studio",
    year: "2025",
  },
  {
    img: "https://framerusercontent.com/images/fPM1MjlflYZnhMXbPZ6CWSlny7k.png?scale-down-to=1024&width=1190&height=892",
    name: "Flux Digital",
    year: "2023",
  },
  {
    img: "https://framerusercontent.com/images/ha02jydEUw2cVXNduqFl4HYEMBk.png?scale-down-to=1024&width=960&height=1153",
    name: "Vertex Agency",
    year: "2024",
  },
  {
    img: "https://framerusercontent.com/images/RJTu8PD7KgKfZbqVo5uqF0NJijY.png?width=670&height=896",
    name: "Orion Brand",
    year: "2022",
  },
];

const BlogsSection = () => {
  return (
    <section className="w-full text-white">
      {/* HERO */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <BgVideo />

        {/* GLOW */}
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_60%_40%,rgba(255,120,60,0.25),transparent_60%)] blur-3xl" />

        {/* CONTENT */}
        <div className="relative z-20 flex flex-col items-center">
          <span className="px-5 py-3 font-[font3] rounded-full bg-white/10 text-sl text-gray-300 mb-6 backdrop-blur-md">
            Blogs
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[font5] leading-tighter tracking-tighter max-w-4xl">
            Explore Our <br /> Insight-Driven Thinking
          </h2>

          <p className="mt-6 font-[font4] text-gray-300 text-sm sm:text-base md:text-lg max-w-xl">
            Strategic insights, marketing clarity, and growth-focused thinking from Elevon.
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

export default BlogsSection;
