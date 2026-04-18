import React from "react";
import useFadeIn from "../../hooks/useFadeIn";
import useTextReveal from "../../hooks/useTextReveal";

const projects = [
  {
    title: "Virella & Co.",
    year: "2026",
    img: "https://framerusercontent.com/images/IcoeDyYjWZv8O66e8YRmalvhdck.png?width=673&height=800",
  },
  {
    title: "Ardent Interiors Technologies",
    year: "2024",
    img: "https://framerusercontent.com/images/HoyFwUPQYJ8aTNHqqXvacXIALbs.png?width=753&height=827",
  },
  {
    title: "Nova Studios",
    year: "2025",
    img: "https://framerusercontent.com/images/3mi6tjAFuZCki5P0WiLzf1vTpo.png?width=705&height=888",
  },
  {
    title: "Zenith Labs",
    year: "2023",
    img: "https://framerusercontent.com/images/5h4XHh71jq34zO0YooSF0Jpoho.png?width=662&height=892",
  },
];

const Projects = () => {
  const text = useTextReveal();
  const para = useTextReveal();
  const card = useFadeIn();
  return (
    <section ref={card} className="w-full bg-black px-4 sm:px-6 py-24">

      {/* 🔥 Top Section (MISSING IN YOUR UI) */}
      <div className="max-w-3xl mx-auto text-center mb-16">

        {/* Badge */}
        <div className="mb-6">
           <span className="px-5 py-3 w-fit mb-5 rounded-full bg-white/10 text-sm font-[font1] text-gray-300">
            Portfolio
          </span>
        </div>

        {/* Heading */}
        <h2 ref={text} className="
          text-white font-semibold tracking-tighter leading-tighter
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[font4]
        ">
          The selected projects
        </h2>

        {/* Description */}
        <p ref={para} className="
          mt-4 text-gray-400
          text-sm sm:text-base md:text-lg font-[font5]
        ">
          Discover our selected projects, highlighting partnerships
          with forward-thinking clients in various sectors.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {projects.map((project, index) => (
          <div
            key={index}
            className="fade-item group relative rounded-3xl overflow-hidden"
          >
            {/* Image */}
            <img
              src={project.img}
              alt={project.title}
              className="
                w-full h-[260px] sm:h-[360px] md:h-[420px] lg:h-[600px]
                object-cover
                transition duration-500
                group-hover:scale-105
              "
            />

            {/* Bottom Overlay */}
            <div className="
              absolute bottom-0 left-0 w-full
              bg-black/90 backdrop-blur-sm
              px-6 py-5
              flex items-center justify-between
            ">
              <h3 className="text-white text-sm sm:text-base font-medium">
                {project.title}
              </h3>

              <span className="text-gray-400 text-sm">
                {project.year}
              </span>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Projects;