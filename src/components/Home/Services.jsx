import React from "react";
import {
  Globe,
  Video,
  FileText,
  Users,
  DollarSign,
  BarChart3,
} from "lucide-react";
import useTextReveal from "../../hooks/useTextReveal";
import useCardPop from "../../hooks/useCardPop";

const services = [
  {
    title: "Social Media Strategy",
    desc: "We turn scattered posts into a system that attracts attention and builds demand.",
    icon: <Globe />,
  },
  {
    title: "Story-Driven Content",
    desc: "From concept to execution, we create content people want to consume—not ignore.",
    icon: <Video />,
  },
  {
    title: "Brand Identity",
    desc: "We build brands that feel intentional, cohesive, & impossible to confuse with competitors.",
    icon: <FileText />,
  },
  {
    title: "Influencer Marketing",
    desc: "We connect you with voices your audience already trusts, then turn trust into traction.",
    icon: <Users />,
  },
  {
    title: "Paid Campaigns",
    desc: "We are engineers at ad systems designed to generate pipeline, not vanity metrics.",
    icon: <DollarSign />,
  },
  {
    title: "Analytics & Growth",
    desc: "We translate data into clear decisions so every month performs better than the last.",
    icon: <BarChart3 />,
  },
];

const Services = () => {
  const text = useTextReveal();
  const para = useTextReveal();
  const card = useCardPop();
  return (
    <section ref={card} className="w-full bg-black px-4 sm:px-6 py-10 md:py-24">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        {/* Badge */}
        <div className="mb-6">
          <span className="px-5 py-3 font-[font3]  rounded-full  bg-white/10 text-gray-300 text-sl">
            Our Services
          </span>
        </div>

        {/* Title */}
        <h2
        ref={text}
          className="
          text-white font-[font5] leading-tighter tracking-tighter
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
        "
        >
          What we master
        </h2>

        {/* Subtitle */}
        <p
        ref={para}
          className="
          mt-4 text-gray-400
          text-sm sm:text-base md:text-lg
          max-w-2xl mx-auto font-[font4]
        "
        >
          We empower brands to grow, engage, and succeed with clever social
          tactics and captivating visuals.
        </p>
      </div>

      {/* Cards */}
      <div
        className="card
        max-w-7xl mx-auto
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        gap-6
      "
      >
        {services.map((item, index) => (
          <div
            key={index}
            className=" 
              bg-white/5 border border-white/5
              rounded-2xl
              p-6 sm:p-8
              min-h-[200px]
              flex flex-col justify-start
              hover:bg-white/10
              transition duration-300
            "
          >
            {/* Icon */}
            <div
              className="
  w-12 h-12
  rounded-xl
  bg-white/[0.04]
  border border-white/10
  flex items-center justify-center
  mb-6
  shadow-[0_0_15px_rgba(255,255,255,0.03)]
"
            >
              {React.cloneElement(item.icon, {
                size: 20,
                strokeWidth: 2.2,
                className: "text-white",
              })}
            </div>

            {/* Title */}
            <h3 className="text-white text-lg font-[font5] mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sl font-[font4] leading-tight">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
