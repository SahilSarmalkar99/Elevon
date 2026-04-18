import React from "react";
import { Rocket, Sparkles, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const pricingPlans = [
  {
    name: "Basic",
    price: "$999",
    tag: "Individual & Professional",
    desc: "Our basic pricing plan is designed to offer great value while providing the essential features you need to get started.",
    icon: <Rocket size={18} />,
    features: [
      "Tailored content strategy",
      "Platform setup & optimization",
      "Hashtag & trend research",
    ],
    highlight: false,
  },
  {
    name: "Premium",
    price: "$1,599",
    tag: "Business & Team",
    desc: "Built for growing brands and startups ready to scale faster with advanced strategy and dedicated support.",
    icon: <Sparkles size={18} />,
    features: [
      "Multi-platform growth strategy",
      "Paid ad campaign setup",
      "Influencer collaboration",
      "In-depth analytics & reporting",
      "Dedicated account manager",
    ],
    highlight: true,
  },
];

const Pricing = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-black px-2 text-white py-24">

      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center px-4 mb-20">
        <p className="inline-block px-4 py-2 font-[font3]  rounded-full bg-white/10 text-sl text-gray-300 mb-6">
          Pricing
        </p>

        <h2 className="text-4xl md:text-6xl font-[font5] leading-tighter tracking-tighter mb-4">
          Simple Pricing. <br /> Serious Results.
        </h2>

        <p className="text-gray-400 font-[font4] max-w-xl mx-auto">
          Our plans give you exactly what you need — nothing more, nothing less — to grow with confidence.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2">

        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`
              rounded-3xl p-10 border border-white/10
              transition-all duration-300
              flex flex-col justify-between
              min-h-[700px] 

              ${plan.highlight
                ? "bg-gradient-to-br from-red-900/40 via-orange-500/30 to-orange-400/40"
                : "bg-white/[0.03]"
              }
            `}
          >

            {/* TOP */}
            <div>

              {/* Icon + Tag */}
              <div className="flex justify-between items-start mb-8">
                
                <div className="w-15 h-15 flex items-center justify-center rounded-xl bg-white/10">
                  {plan.icon}
                </div>

                <span className="text-[17px] px-3 py-1 rounded-full bg-white/10 text-gray-300">
                  {plan.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-[font5] mb-2">{plan.name}</h3>

              {/* Price */}
              <div className="flex items-end gap-2 mb-4">
                <span className="text-5xl font-[font5]">{plan.price}</span>
                <span className="text-gray-400 mb-2 font-[font5]">/ Month</span>
              </div>

              {/* Desc */}
              <p className="text-gray-400 text-sl mb-8 max-w-md font-[font5]">
                {plan.desc}
              </p>

              {/* Features */}
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex font-[font4] items-center gap-3 text-sl text-gray-300">

                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-500/80">
                      <Check size={14} />
                    </span>

                    {feature}
                  </li>
                ))}
              </ul>

            </div>

            {/* BUTTON */}
            <button onClick={()=> navigate("/contact")} className="mt-5 bg-white text-black px-6 py-3 w-fit rounded-full text-[18px] font-medium hover:scale-105 transition">
              Get Started
            </button>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Pricing;