import { useEffect, useRef } from "react";

const CursorDot = () => {
  const dotRef = useRef(null);

  useEffect(() => {
    let x = 0, y = 0;          // current position
    let targetX = 0, targetY = 0; // mouse position

    const moveCursor = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      // smooth follow (lerp)
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x - 6}px, ${y - 6}px)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor);
    animate();

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={dotRef}
      className="
        fixed top-0 left-0
        w-3 h-3 md:w-4 md:h-4
        bg-white rounded-full
        pointer-events-none
        z-40
        mix-blend-difference
      "
    />
  );
};

export default CursorDot;