import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useFadeIn = (options = {}) => {
  const ref = useRef(null);

  const {
    selector = ".fade-item",
    y = 60,
    duration = 0.9,
    stagger = 0.12,
    start = "top 85%",
    end = "top 50%",
    scrub = false,
    once = true,
    markers = false,
  } = options;

  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(selector, ref.current);
      if (!items.length) return;

      //  Set initial state (better performance than fromTo)
      gsap.set(items, {
        opacity: 0,
        y,
        willChange: "transform, opacity",
      });

      // 🔥 Animate EACH item separately (big upgrade)
      items.forEach((item, i) => {
        gsap.to(item, {
          opacity: 1,
          y: 0,
          duration,
          ease: "power3.out",
          delay: i * stagger * 0.5, // subtle cascade (not too obvious)
          scrollTrigger: {
            trigger: item,
            start,
            end,
            scrub,
            markers,
            toggleActions: once
              ? "play none none none"
              : "play reverse play reverse",
          },
        });
      });
    }, ref);

    // safer refresh (prevents layout jump issues)
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, [selector, y, duration, stagger, start, end, scrub, once, markers]);

  return ref;
};

export default useFadeIn;