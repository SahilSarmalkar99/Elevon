import React from "react";
import { useNavigate } from "react-router-dom";
import useTextReveal from "../../hooks/useTextReveal";
import useCardSlideIn from "../../hooks/useCardSlideIn";

const AboutContent = () => {
    const text = useTextReveal();
  const para = useTextReveal();
  const card = useCardSlideIn();
    const navigate = useNavigate();
  return (
    <section ref={card} className="w-full bg-black text-white px-6 md:px-10 lg:px-16 py-20 md:py-28">
      {/* TOP TAG */}
      <div className="max-w-7xl mx-auto">
        <span className="px-5 py-3 font-[font3] rounded-full bg-white/10 text-sl text-gray-300">
          Our Story
        </span>

        {/* HEADING */}
        <h2 ref={text} className="mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[font5] leading-tighter tracking-tighter max-w-4xl">
          Established in 2014, driven by creativity & innovation continuously.
        </h2>
      </div>

      {/* STATS */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {[
          { title: "Years Experience", value: "12+" },
          { title: "Agencies Rated", value: "200+" },
          { title: "Increased traffic", value: "91%" },
          { title: "Growth engagement", value: "94%" },
        ].map((item, i) => (
          <div
            key={i}
            className="card bg-[#0b0b0b] rounded-2xl p-6 md:p-8 flex flex-col justify-between h-[160px] md:h-[250px] border border-white/5"
          >
            <div className="flex justify-between font-[font4] text-gray-400 text-sm">
              <span>{String.fromCharCode(73 + i)}.</span>
              <span>{item.title}</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-[font4]">{item.value}</h3>
          </div>
        ))}
      </div>

      {/* BOTTOM SECTION */}
      <div className="max-w-7xl mx-auto mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT TEXT */}
        <p ref={para} className="text-gray-400 text-base md:text-lg font-[font4] leading-relaxed max-w-xl">
          At Elevon, we believe powerful marketing blends strategy, creativity,
          and performance. We craft campaigns that look great, connect deeply,
          and drive real growth.
        </p>

        {/* RIGHT CONTENT */}
        <div  className="card space-y-10 font-[font4]">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold">Our mission</h3>
            <p className="mt-3 text-gray-400">
              To help brands grow through bold strategy, creative storytelling,
              and performance-driven marketing.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl ">Vision</h3>
            <p className="mt-3 text-gray-400">
              To become a globally trusted marketing agency that turns ideas
              into measurable impact.
            </p>
          </div>

          {/* BUTTON */}
          <button onClick={()=> navigate("/contact")} className="mt-4 px-6 py-3 bg-red-600 hover:bg-red-700 transition rounded-full text-white font-medium">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
