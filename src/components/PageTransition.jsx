import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const PageTransition = ({ children }) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        {
          clipPath: "circle(0% at 0% 100%)",
        },
        {
          clipPath: "circle(140% at 100% 0%)",
          duration: 0.9,
          ease: "power4.out",
        }
      );
    }, ref);

    return () => ctx.revert(); // ✅ cleanup
  }, []);

  return (
    <div ref={ref} className="min-h-screen will-change-[clip-path]">
      {children}
    </div>
  );
};

export default PageTransition;