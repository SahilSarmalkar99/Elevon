import React from "react";

import t1 from "../../assets/team/t1.avif";
import t2 from "../../assets/team/t2.avif";
import t3 from "../../assets/team/t3.avif";
import t4 from "../../assets/team/t4.avif";
import t5 from "../../assets/team/t5.avif";
import t6 from "../../assets/team/t6.avif";

const team = [
  { img: t1, name: "Michael Reed", role: "CEO & Founder" },
  { img: t2, name: "Olivia Grant", role: "Creative Director" },
  { img: t3, name: "Ryan Mitchell", role: "Marketing Lead" },
  { img: t4, name: "Sophia Carter", role: "UI/UX Designer" },
  { img: t5, name: "Daniel Brooks", role: "Growth Strategist" },
  { img: t6, name: "Emma Watson", role: "Brand Manager" },
];

const TeamSection = () => {
  return (
    <section className="w-full bg-black text-white px-6 md:px-10 lg:px-16 py-20 md:py-28">

      <div className="max-w-7xl mx-auto">

        {/* TAG */}
        <span className="px-5 py-3 font-[font3] rounded-full bg-white/10 text-sl text-gray-300">
          Team Members
        </span>

        {/* HEADING */}
        <h2 className="mt-8 text-4xl sm:text-5xl md:text-6xl font-[font4] leading-tighter tracking-tighter">
          Minds behind Elevon
        </h2>

        {/* SUBTEXT */}
        <p className="mt-6 text-gray-400 max-w-md text-base font-[font4] md:text-lg">
          Our team blends strategy, creativity, and performance
          to build marketing that drives real growth.
        </p>

      </div>

      {/* TEAM GRID */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {team.map((member, i) => (
          <div
            key={i}
            className="
              bg-[#0b0b0b]
              rounded-3xl
              overflow-hidden
              border border-white/5
              hover:border-white/10
              transition-all duration-300
            "
          >

            {/* IMAGE */}
            <div className="w-full h-[300px] md:h-[460px] bg-gray-200">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* INFO */}
            <div className="p-6">
              <h3 className="text-lg md:text-xl font-[font5]">
                {member.name}
              </h3>
              <p className="text-gray-400 font-[font4] text-sm mt-1">
                {member.role}
              </p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default TeamSection;