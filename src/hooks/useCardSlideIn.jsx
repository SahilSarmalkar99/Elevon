import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useCardSlideIn = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".card");

      gsap.fromTo(
        cards,
        {
          xPercent: 20,   // from right
          opacity: 0,
          scale: 0.96,
        },
        {
          xPercent: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.15, // 🔥 async effect
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
};

export default useCardSlideIn;
