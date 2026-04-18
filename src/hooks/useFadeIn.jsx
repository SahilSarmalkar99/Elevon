import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useFadeIn = (options = {}) => {
  const ref = useRef(null);

  const {
    selector = ".fade-item",
    y = 80,
    duration = 0.7,
    stagger = 0.15,
    start = "top 50%",
    end = null,
    scrub = false,
    once = true,
    markers = false,
  } = options;

  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const items = ref.current.querySelectorAll(selector);
      if (!items.length) return;

      gsap.fromTo(
        items,
        {
          opacity: 0,
          y,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          ease: "power2.out",
          stagger,
          scrollTrigger: {
            trigger: ref.current,
            start,
            end,
            scrub,
            markers,
            toggleActions: once
              ? "play none none none"
              : "play reverse play reverse",
          },
        }
      );
    }, ref);

    // refresh for layout shifts (important with images/fonts)
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [selector, y, duration, stagger, start, end, scrub, once, markers]);

  return ref;
};

export default useFadeIn;