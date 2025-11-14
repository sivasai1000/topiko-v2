"use client";

import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const LottieWithImages = ({
  loop = true,
  autoplay = true,
}) => {
  const containerRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    if (animRef.current) {
      animRef.current.destroy();
      animRef.current = null;
    }

    animRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "canvas",
      loop,
      autoplay,
      path: "/assets/comp2.json",
      assetsPath: "/assets/images/",
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet",
        clearCanvas: true,
      },
    });

    return () => {
      if (animRef.current) {
        animRef.current.destroy();
        animRef.current = null;
      }
    };
  }, [loop, autoplay]);

  return (
    <div
      className="
        rounded-full overflow-hidden
        flex items-center justify-center
        w-[200px] h-[200px]
        sm:w-[260px] sm:h-[260px]
        md:w-[340px] md:h-[340px]
        lg:w-[400px] lg:h-[400px]
        xl:w-[500px] xl:h-[500px]
      "
    >
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
};

export default LottieWithImages;
