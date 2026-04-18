import gsap from "gsap";

export const pageEnter = (el) => {
  gsap.fromTo(
    el,
    {
      clipPath: "circle(0% at 0% 100%)",
    },
    {
      clipPath: "circle(150% at 100% 0%)",
      duration: 1.2,
      ease: "power4.inOut",
    }
  );
};

export const pageExit = (el) => {
  return gsap.to(el, {
    opacity: 0,
    duration: 0.4,
  });
};