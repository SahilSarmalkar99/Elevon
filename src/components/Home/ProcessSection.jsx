import React from "react";
import { Search, Layers, Settings, TrendingUp } from "lucide-react";

const steps = [
  {
    title: "Discover",
    desc: "We audit your brand, audience, & competitors to uncover gaps, opportunities, & quick wins that others miss.",
    icon: <Search size={20} />,
  },
  {
    title: "Execute",
    desc: "We launch campaigns, test continuously, and optimize performance to improve results every day.",
    icon: <Layers size={20} />,
  },
  {
    title: "Strategize",
    desc: "We turn insights into a focused, data-driven roadmap with clear channels, messaging, and measurable goals.",
    icon: <Settings size={20} />,
  },
  {
    title: "Scale",
    desc: "We invest more into what’s working to drive stronger results, higher ROI, and long-term growth.",
    icon: <TrendingUp size={20} />,
    highlight: true,
  },
];

const ProcessSection = () => {
  return (
    <section className="w-full bg-black text-white py-24">

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT SIDE (Heading + Cards together) */}
        <div>

          {/* Heading */}
          <div className="mb-20">
            <p className="px-5 py-3 w-fit mb-5 rounded-full bg-white/10 text-sm font-[font1] text-gray-300">
              How We Work?
            </p>

            <h2 className="text-4xl md:text-6xl font-[font5] leading-tight mb-4">
              Our proven <br /> growth process
            </h2>

            <p className="text-gray-400 max-w-xl">
              We blend strategy, creativity, and data to design campaigns that grab
              attention, foster engagement, and drive tangible results.
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-6">
            {steps.map((step, index) => (
              <div key={index}>

                <div
                  className={`
                    w-full max-w-xl rounded-3xl p-10
                    border border-white/10
                    transition-all duration-300
                    ${
                      step.highlight
                        ? "bg-gradient-to-br from-red-900/40 via-orange-500/30 to-orange-400/40"
                        : "bg-white/[0.03] hover:bg-white/[0.06]"
                    }
                  `}
                >

                  {/* ICON */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 mb-8">
                    {step.icon}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-2xl font-semibold mb-4">
                    {step.title}
                  </h3>

                  {/* DIVIDER */}
                  <div className="h-[1px] bg-white/10 mb-6"></div>

                  {/* DESC */}
                  <p className="text-gray-400 text-base leading-relaxed max-w-md">
                    {step.desc}
                  </p>

                  {/* CTA only for Scale */}
                  {step.highlight && (
                    <button className="mt-8 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition">
                      Book an Appointment
                    </button>
                  )}

                </div>

              </div>
            ))}
          </div>

        </div>

        {/* RIGHT SIDE (Sticky Image aligned with cards) */}
        <div className="hidden lg:block">
          <div className="sticky top-24 flex justify-end">

            <div className="w-[90%]">
              <img
                src="https://framerusercontent.com/images/7zSE0iCVh5ArDivW2EDOo20IJI.png?width=1491&height=829"
                alt="process"
                className="w-full h-[75vh] object-cover rounded-3xl shadow-xl"
              />
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};

export default ProcessSection;