import gsap from "gsap";

export const waveEnter = (container) => {
  const path = container.querySelector("path");

  gsap.fromTo(
    path,
    {
      attr: {
        d: "M0,0 C25,20 75,20 100,0 L100,100 L0,100 Z",
      },
    },
    {
      duration: 0.8,
      ease: "power4.out",
      attr: {
        d: "M0,100 C30,100 70,100 100,100 L100,100 L0,100 Z",
      },
    }
  );
};