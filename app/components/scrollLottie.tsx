// app/components/ScrollLottie.tsx
"use client";

import Lottie from "lottie-react";
import scrollDownAnimation from "../animations/scroll_animation.json";

export default function ScrollLottie() {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-24">
      <Lottie
        animationData={scrollDownAnimation}
        loop
        autoplay
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
