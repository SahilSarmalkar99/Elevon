import React, { useState } from "react";
import useTextReveal from "../hooks/useTextReveal";
import useFadeIn from "../hooks/useFadeIn";
const faqs = [
  {
    q: "What do I need to get started?",
    a: "We begin with a strategy call to understand your goals, audience, and current challenges.",
  },
  {
    q: "What services does Elevon offer?",
    a: "We offer branding, performance marketing, content strategy, and growth optimization.",
  },
  {
    q: "How long does it take to see results?",
    a: "Most clients begin seeing measurable improvements within 4–8 weeks.",
  },
  {
    q: "Do you offer customized marketing strategies?",
    a: "Yes, every strategy is tailored to your business goals and audience.",
  },
  {
    q: "Do I need a large budget to work with Elevon?",
    a: "No, we scale strategies based on your current stage and resources.",
  },
  {
    q: "How do you measure success?",
    a: "We track KPIs like conversions, ROI, engagement, and growth metrics.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
    const text = useTextReveal();
  const para = useTextReveal();
  const card = useFadeIn();

  return (
    
    <section className="w-full bg-black px-4 sm:px-6 py-24">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div>
          {/* Badge */}
          <div className="mb-6">
            <span className="px-5 py-3 font-[font3] rounded-full bg-white/10 text-gray-300 text-sl">
              FAQ
            </span>
          </div>

          {/* Heading */}
          <h2 ref={text} className="
            text-white font-semibold tracking-tighter
            text-4xl sm:text-5xl md:text-6xl
            leading-tighter font-[font5]
          ">
            Everything <br /> you’re wondering
          </h2>

          {/* Description */}
          <p ref={para} className="mt-6 text-gray-400 font-[font4] text-sm sm:text-base max-w-md">
            Have questions? Find clear, concise answers to the most common inquiries below.
          </p>
        </div>

        {/* RIGHT SIDE (Accordion) */}
        <div className="flex flex-col gap-4 font-[font4]">

          {faqs.map((item, index) => (
            <div
              key={index}
              className="fade-item bg-white/5 border border-white/5 rounded-2xl overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-white text-sm sm:text-base">
                  {item.q}
                </span>

                <span className="text-white text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-gray-400 text-sm">
                  {item.a}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default FAQ;