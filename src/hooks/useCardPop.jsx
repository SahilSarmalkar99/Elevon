import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useCardPop = () => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".card");

      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            scale: 0.9,
            opacity: 0,
            y: 80,
            filter: "blur(6px)",
            transformOrigin: "center center",
            willChange: "transform, opacity",
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 50%",
              scrub: 1, // smoother + responsive
              // markers: true,
            },
          }
        );
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
};

export default useCardPop;