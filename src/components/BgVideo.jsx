import React from "react";
import vid from "../assets/display/bg_vid.mp4";

const BgVideo = ({ isGlobal = false }) => {
  return (
    <div
      className={`${
        isGlobal ? "fixed inset-0" : "absolute inset-0"
      } z-0 overflow-hidden`}
    >
      {/* VIDEO */}
      <video
        src={vid}
        autoPlay
        loop
        muted
        playsInline
        className="
          w-full h-full object-cover
          scale-110
          blur-[12px]          /* 👈 Gaussian feel */
          brightness-[0.7]     /* 👈 cinematic dark */
          contrast-[1.1]
        "
      />

      {/* SOFT OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* OPTIONAL: EXTRA SMOOTH GRADIENT BLUR (Framer style) */}
      <div className="absolute inset-0 backdrop-blur-[20px] opacity-20" />
    </div>
  );
};

export default BgVideo;