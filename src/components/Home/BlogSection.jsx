import React from "react";
import useTextReveal from "../../hooks/useTextReveal";
import useFadeIn from "../../hooks/useFadeIn";

const blogs = [
  {
    title: "Building a Brand People Trust",
    img: "https://framerusercontent.com/images/SAJvaLNAGIIH6BHYuGgM6Sl2Tg.png?width=724&height=656",
  },
  {
    title: "High-Converting Campaigns",
    img: "https://framerusercontent.com/images/bV8IhYs62ENlu7ZJQFVzNdWs6Q.png?width=698&height=829",
  },
  {
    title: "Beyond Likes and Shares",
    img: "https://framerusercontent.com/images/2vH64uPjJJBc9yALuAsAcCVp0.png?width=588&height=661",
  },
];

const BlogSection = () => {
    const text = useTextReveal();
  const para = useTextReveal();
  const card = useFadeIn();

  return (
    <section ref={card} className="w-full bg-black text-white py-10 md:py-24 px-4 sm:px-6">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-16">

        <span className="px-5 py-3 font-[font3] rounded-full bg-white/10 text-sl text-gray-300">
          Blog and News
        </span>

        <h2 ref={text} className="mt-6 text-4xl md:text-6xl font-[font5] tracking-tighter leading-tighter">
          Insights, Ideas, and Perspectives
        </h2>

        <p ref={para} className="mt-4 text-gray-400 max-w-xl font-[font4] text-sm sm:text-base">
          Have questions? Our FAQ section has you covered with
          quick answers to the most common inquiries.
        </p>

      </div>

      {/* BOTTOM GRID */}
      <div className=" max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {blogs.map((item, index) => (
          <div key={index} className="fade-item group cursor-pointer">

            {/* Image */}
            <div className="overflow-hidden rounded-2xl">
              <img
                src={item.img}
                alt=""
                className="w-full h-[300px] object-cover rounded-2xl 
                transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* Title */}
            <h3 className="mt-4 text-sm font-[font4] sm:text-base text-gray-300 group-hover:text-white transition">
              {item.title}
            </h3>

          </div>
        ))}

      </div>

    </section>
  );
};

export default BlogSection;