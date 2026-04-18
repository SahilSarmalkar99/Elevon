import React from "react";
import useTextReveal from "../hooks/useTextReveal";
import useFadeIn from "../hooks/useFadeIn";

const testimonials = [
  {
    type: "text",
    text: "Refined our brand & increased inbound leads by 70% in just a few months.",
    name: "Sarah Ahmed",
    role: "MD, BrightLabs",
    img: "/images/user1.jpg",
  },
  {
    type: "image",
    text: "Their team understood our vision and delivered campaigns that drove real growth.",
    name: "Daniel Foster",
    role: "Founder, ScaleForge",
    img: "https://framerusercontent.com/images/vAkOzp2P96663kB5SnQXdc4bCtU.png?width=499&height=666",
  },
  {
    type: "text",
    text: "Cut acquisition costs by 40% & doubled qualified leads with Elevon’s strategy.",
    name: "Emily Carter",
    role: "CTO, TechFlow Inc",
    img: "/images/user2.jpg",
  },
  {
    type: "text",
    text: "From creative to performance, everything was handled with clarity and precision.",
    name: "Michael Reed",
    role: "CMO, UrbanEdge",
    img: "/images/user3.jpg",
  },
  {
    type: "text",
    text: "Elevon helped us scale faster with smarter strategy and stronger creative execution.",
    name: "Olivia Grant",
    role: "Co-Founder, Thrive",
    img: "/images/user4.jpg",
  },
  {
    type: "image",
    text: "Our engagement and conversions improved significantly within weeks of launching with Elevon.",
    name: "Ryan Mitchell",
    role: "MD, GreenSupply",
    img: "https://framerusercontent.com/images/O9RbdpzWkRkEs9brtwSUQzoE.png?width=519&height=655",
  },
];

const Testimonials = () => {
  const text = useTextReveal();
  const para = useTextReveal();
  const cards = useFadeIn();
  return (
    <section ref={cards} className="w-full bg-black px-4 sm:px-6 py-24">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="mb-6">
          <span className="px-5 py-3 font-[font3] rounded-full bg-white/10 text-gray-300 text-sl">
            Testimonial
          </span>
        </div>

        <h2 ref={text} className="text-white font-[font5] tracking-tighter leading-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Client Feedback
        </h2>

        <p ref={para} className="mt-4 text-gray-400 font-[font4] text-sm sm:text-base md:text-lg">
          Discover success stories from satisfied clients. Learn how we assisted
          them in reaching their objectives.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="ade-item columns-1 sm:columns-2 lg:columns-3 gap-2 font-[font4]  max-w-7xl mx-auto">
        {testimonials.map((item, index) => (
          <div key={index}>
            {item.type === "image" ? (
              <div className="relative rounded-3xl overflow-hidden h-[350px]">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <div className="text-orange-400 text-sm mb-2">★★★★★</div>

                  <p className="text-white text-sm mb-3">{item.text}</p>

                  <p className="text-white font-medium">
                    {item.name}
                    <span className="text-gray-400 font-normal">
                      {" "}
                      • {item.role}
                    </span>
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white/5 border border-white/5 rounded-3xl p-6 sm:p-8 h-[320px] flex flex-col justify-between">
                <div>
                  <div className="text-orange-400 text-sm mb-4">★★★★★</div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-6">
                  <img
                    src={item.img}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover"
                  />

                  <div>
                    <p className="text-white text-sm font-medium">
                      {item.name}
                    </p>
                    <p className="text-gray-400 text-xs">{item.role}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
