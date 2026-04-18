import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useCardPop = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".card");

      gsap.fromTo(
        cards,
        {
          scale: 0.85,              // 🔥 subtle (not 0)
          opacity: 0.5,
          y: 60,
          filter: "blur(2px)",      // 🔥 depth feel
          transformOrigin: "center center",
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          // duration: 1,      //  premium easing
          // stagger: 0.12,            // smooth flow
          scrollTrigger: {
            trigger: ref.current,
            start: "top 60%",
            end: "top 30%",
            scrub: 2,             // smoother than true
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
};

export default useCardPop;