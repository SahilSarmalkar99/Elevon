import gsap from "gsap";

let overlay = null;

export const runPageExit = (navigateCallback) => {
  if (overlay) return;

  overlay = document.createElement("div");

  Object.assign(overlay.style, {
    position: "fixed",
    inset: "0",
    zIndex: "9999",
    pointerEvents: "none",

    // ✨ More visible but still transparent
    background:
      "radial-gradient(circle at 0% 100%, rgba(255,255,255,0.12), rgba(0,0,0,0.08))",

    backdropFilter: "blur(0px)",
    WebkitBackdropFilter: "blur(0px)",

    opacity: "0",
    clipPath: "circle(0% at 0% 100%)",
  });

  document.body.appendChild(overlay);

  const tl = gsap.timeline();

  // 🔥 STEP 1: grow + fade + blur together
  tl.to(overlay, {
    clipPath: "circle(140% at 100% 0%)",
    opacity: 1,
    duration: 0.55,
    ease: "power3.out",

    // animate blur smoothly
    onUpdate: () => {
      const progress = tl.progress();
      const blur = 6 * progress; // max blur = 6px
      overlay.style.backdropFilter = `blur(${blur}px)`;
      overlay.style.WebkitBackdropFilter = `blur(${blur}px)`;
    },

    onComplete: () => {
      navigateCallback();
    },
  });

  // 🔥 STEP 2: smooth exit (no flicker)
  tl.to(overlay, {
    opacity: 0,
    duration: 0.25,
    ease: "power2.out",
    onComplete: () => {
      overlay?.remove();
      overlay = null;
    },
  });
};