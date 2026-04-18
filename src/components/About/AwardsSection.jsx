import React from "react";
import useTextReveal from "../../hooks/useTextReveal";
import useFadeIn from "../../hooks/useFadeIn";
const awards = [
  { year: "2025", title: "Site of the Day", org: "CSS Design Awards", brand: "Elevon X" },
  { year: "2025", title: "Best Digital Experience", org: "Awwwards", brand: "Nova" },
  { year: "2024", title: "Excellence in UX/UI", org: "Design Merit Awards", brand: "Pulse Brand" },
  { year: "2024", title: "Agency of the Year", org: "Digital Showcase", brand: "Vertex" },
  { year: "2023", title: "Best No-Code Website", org: "Framer Showcase", brand: "Nexora" },
  { year: "2022", title: "Innovation in Web Design", org: "Innovation Awards", brand: "Flux Project" },
  { year: "2022", title: "Website of the Day", org: "Orion Brand", brand: "Brandoria" },
];

const AwardsSection = () => {
    const text = useTextReveal();
  const para = useTextReveal();
  const card = useFadeIn();
  return (
    <section className="card w-full bg-black text-white px-6 md:px-10 lg:px-16 py-20 md:py-28">

      <div className="max-w-7xl mx-auto">

        {/* TAG */}
        <span className="px-5 py-3 font-[font3] rounded-full bg-white/10 text-sl text-gray-300">
          Awards
        </span>

        {/* HEADING */}
        <h2 ref={text} className="mt-8 text-4xl sm:text-5xl md:text-6xl font-[font5] leading-tighter tracking-tighter">
          Awards & <br /> Achievements
        </h2>

        {/* SUBTEXT */}
        <p ref={para} className="mt-6 font-[font5] text-gray-400 max-w-md text-base md:text-lg">
          We’re honored to be recognized for our creativity, performance,
          and commitment to delivering outstanding marketing results.
        </p>

      </div>

      {/* LIST */}
      <div className="fade-item max-w-7xl mx-auto mt-16 font-[font5] space-y-2">

        {awards.map((item, i) => (
          <div
            key={i}
            className="w-full bg-[#0b0b0b] rounded-2xl px-6 md:px-10 py-6 md:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border border-white/5 hover:border-white/10 transition"
          >

            {/* YEAR */}
            <div className="w-full md:w-[120px] text-gray-400">
              {item.year}
            </div>

            {/* TITLE */}
            <div className="w-full md:flex-1 text-lg md:text-xl">
              {item.title}
            </div>

            {/* ORG */}
            <div className="w-full md:w-[220px] text-gray-400">
              {item.org}
            </div>

            {/* BRAND */}
            <div className="w-full md:w-[160px] text-gray-300">
              {item.brand}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default AwardsSection;