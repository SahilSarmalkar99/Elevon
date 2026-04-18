import React from "react";
import footer from "../assets/display/footer.avif";

const Footer = () => {
  return (
    <footer className="mt-10 relative w-full text-white overflow-hidden bg-black">
      {/* 🔥 Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={footer}
          alt=""
          className="w-full h-full object-cover opacity-70"
        />

        {/* Glow blobs */}
        <div className="absolute w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-orange-400 opacity-30 blur-[120px] top-[30%] left-[10%] rounded-full" />
        <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-red-500 opacity-30 blur-[120px] bottom-[10%] right-[5%] rounded-full" />
      </div>

      {/* 🔥 Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 flex flex-col justify-between">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24">
          {/* LEFT */}
          <div className="font-[font4] flex flex-col-reverse md:flex-col justify-between gap-10">
            {/* Email Subscribe */}
            <div className="flex items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-1.5 w-full max-w-md shadow-lg">
              <input
                type="email"
                placeholder="Enter your email..."
                className="flex-1 min-w-0 bg-transparent px-4 py-3 outline-none text-sm placeholder-gray-400"
              />

              <button className="shrink-0 bg-red-600 hover:bg-red-700 transition-all duration-300 px-4 sm:px-6 py-2.5 rounded-full text-sm font-medium shadow-md hover:scale-[1.05] whitespace-nowrap">
                Subscribe
              </button>
            </div>

            {/* Nav */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              {["About", "Projects", "Blog", "Contact"].map((item, i) => (
                <a
                  key={i}
                  href={`/${item.toLowerCase()}`}
                  className="relative group hover:text-white transition-colors duration-300"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* BIG TEXT */}
            <h1
              className="
              font-[font5]
              text-[48px]
              sm:text-[72px]
              md:text-[100px]
              lg:text-[140px]
              xl:text-[170px]
              font-bold
              leading-[0.85]
              tracking-tight
              text-white/90
              break-words
            "
            >
              ELEVON
            </h1>
          </div>

          {/* RIGHT */}
          <div className="space-y-8 font-[font4] text-gray-300 text-sm max-w-sm lg:ml-auto">
            <div>
              <h3 className="text-white mb-2 text-base font-medium">Email</h3>
              <p className="opacity-80 break-all">hello@elevon.media</p>
            </div>

            <div>
              <h3 className="text-white mb-2 text-base font-medium">Phone</h3>
              <p className="opacity-80">4(000) 345-4567</p>
            </div>

            <div>
              <h3 className="text-white mb-2 text-base font-medium">
                Location
              </h3>
              <p className="font-semibold text-white">Elevon Studio</p>
              <p className="opacity-70 leading-relaxed">
                475 Madison Avenue, Floor 12 <br />
                New York, NY 10022 United States
              </p>
            </div>

            <div>
              <h3 className="text-white mb-3 text-base font-medium">Social</h3>
              <div className="flex flex-wrap gap-4">
                {["X", "Instagram", "Youtube", "Framer"].map((item, i) => (
                  <span
                    key={i}
                    className="cursor-pointer opacity-70 hover:opacity-100 transition duration-300 hover:-translate-y-0.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p className="opacity-70 text-center sm:text-left">
            © 2026 Elevon Studio
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {["Terms & Conditions", "Privacy Policy"].map((item, i) => (
              <span
                key={i}
                className="cursor-pointer hover:text-white transition duration-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
