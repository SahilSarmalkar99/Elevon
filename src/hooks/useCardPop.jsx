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

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            scale: 0,
            opacity: 0,
            y: 40, // slight upward pop
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "back.out(1.7)", // 🔥 pop effect
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 60%",
              scrub: true, // 👈 key for reverse on scroll
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