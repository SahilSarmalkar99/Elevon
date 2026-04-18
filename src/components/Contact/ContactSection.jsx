import React from "react";
import BgVideo from "../BgVideo";
import useTextReveal from "../../hooks/useTextReveal";
import useFadeIn from "../../hooks/useFadeIn";

const ContactSection = () => {
  const inputClass =
    "w-full px-5 py-4 rounded-full bg-white/[0.03] border border-white/[0.06] text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-white/10 focus:bg-white/[0.05]";

  const textareaClass =
    "w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-white/10 focus:bg-white/[0.05]";

  const labelClass = "text-sm text-gray-400 mb-2 block";
  const selectClass = `
  w-full appearance-none
  bg-black
  border border-white/[0.08]
  text-white text-sm
  px-4 py-3 pr-10
  rounded-xl
  outline-none
  focus:border-white/20
  transition
`;
  const text = useTextReveal();
  const para = useTextReveal();
  const card = useFadeIn();

  return (
    <section ref={card} className="w-full bg-black text-white">
      {/* HERO */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* VIDEO */}
        <BgVideo />

        {/* CONTENT */}
        <div className="relative z-20 max-w-4xl">
          <span className="px-5 py-3 font-[font3] rounded-full bg-white/10 text-sm text-gray-300 mb-6 inline-block backdrop-blur-md">
            Let’s Work Together
          </span>

          <h2
            ref={text}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[font5] leading-tighter tracking-tighter"
          >
            Have Something in Mind?
            <br /> We are all here
          </h2>

          <p
            ref={para}
            className="mt-6 text-gray-300 font-[font4] text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed"
          >
            Whether you need clarity, strategy, or full-scale execution — our
            team is here to support your growth.
          </p>
        </div>
      </div>

      {/* FORM SECTION */}
      <div className="fade-item max-w-7xl -mt-24 mx-auto px-4 sm:px-6 lg:px-8 font-[font4] z-10 grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-8 lg:gap-12">
        {/* LEFT FORM */}
        <div className="relative bg-white/[0.03] backdrop-blur-2xl rounded-3xl p-6 sm:p-8 md:p-10 border border-white/[0.06] shadow-[0_40px_120px_rgba(0,0,0,0.9)] overflow-hidden">
          {/* subtle glow */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-red-500/20 blur-[120px] rounded-full" />

          <div className="relative z-10 space-y-6">
            {/* NAME */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>First name*</label>
                <input className={inputClass} placeholder="Adam" />
              </div>

              <div>
                <label className={labelClass}>Last Name*</label>
                <input className={inputClass} placeholder="Custa" />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className={labelClass}>How can we reach you?*</label>
              <input className={inputClass} placeholder="adam@framer.com" />
            </div>

            {/* SELECTS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Where are you from?*</label>

                <div className="relative">
                  <select className={selectClass} defaultValue="">
                    <option value="" disabled hidden>
                      Select your country...
                    </option>
                    <option>India</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>Australia</option>
                  </select>

                  {/* Custom Arrow */}
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/60 text-xs">
                    ▼
                  </div>
                </div>
              </div>

              <div>
                <label className={labelClass}>
                  What's the type of your company?*
                </label>

                <div className="relative">
                  <select className={selectClass} defaultValue="">
                    <option value="" disabled hidden>
                      Select category
                    </option>
                    <option>Startup</option>
                    <option>Agency</option>
                    <option>Enterprise</option>
                    <option>Freelancer</option>
                    <option>Other</option>
                  </select>

                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/60 text-xs">
                    ▼
                  </div>
                </div>
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className={labelClass}>Message*</label>
              <textarea
                className={`${textareaClass} h-[140px] resize-none`}
                placeholder="Tell us about your project..."
              />
            </div>

            {/* BUTTON */}
            <button className="w-full py-4 rounded-full bg-[#c02a14] hover:bg-[#d6321a] transition-all duration-300 font-medium text-white shadow-[0_10px_40px_rgba(255,50,20,0.35)] hover:scale-[1.02] active:scale-[0.98]">
              Submit Now
            </button>
          </div>
        </div>

        {/* RIGHT INFO */}
        <div className="space-y-6 flex flex-col justify-start">
          {[
            { title: "Email", value: "hello@elevon.media" },
            { title: "Phone", value: "4(000) 345–4567" },
            {
              title: "Address",
              value:
                "475 Madison Avenue, Floor 12\nNew York, NY 10022 United States",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/[0.04] backdrop-blur-xl rounded-2xl p-6 border border-white/[0.06] shadow-[0_30px_80px_rgba(0,0,0,0.8)] hover:bg-white/[0.06] transition duration-300"
            >
              <h4 className="text-gray-400 mb-2 text-xs uppercase tracking-wider">
                {item.title}
              </h4>

              <div className="h-[1px] bg-white/[0.06] mb-3"></div>

              <p className="whitespace-pre-line text-gray-200 leading-relaxed text-sm">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
