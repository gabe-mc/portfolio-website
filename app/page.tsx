"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AnimatedIcon from "./components/AnimatedIcon";

const Home = () => {
  const [variant, setVariant] = useState<"walk-forward" | "idle">("walk-forward");
    const [finalStyle, setFinalStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFinalStyle({
      transform: "translateY(80px)" // Match 100% of the keyframes
    });
      setVariant("idle");
    }, 8000); // Duration of 'walk-forward' animation

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full h-full flex justify-center pt-10">
      <div className="relative">
        <Image
          src="/gabriel_big.png"
          alt="gabriel"
          width={600}
          height={600}
          draggable={false}
          className="object-contain p-1 select-none"
        />

        <div className="absolute top-full transform translate-x-16 -translate-y-6 px-4 py-2">
          <p className="text-black font-extrabold text-center" style={{ fontSize: "0.77rem" }}>
            MATH + COMPUTER SCIENCE @ UofT
          </p>
        </div>
      </div>

      <div className="absolute transform translate-x-[17.2rem] translate-y-[16.5rem]">
        <h1 className="text-black font-bold text-3xl hover:text-gray-600">EXPERIENCE</h1>
        <p className="text-black text-md transform translate-x-[0.1rem]" style={{ fontSize: "0.90rem" }}>
          Explore my extracurricular <br />
          involvement and <br />
          internship experience. -&gt;
        </p>
      </div>

      <div className="absolute transform -translate-x-[23.3rem] translate-y-42">
        <h1 className="text-black font-bold text-3xl hover:text-gray-600">PROJECTS</h1>
        <p className="text-black text-md transform translate-x-[0.1rem]" style={{ fontSize: "0.90rem" }}>
          &gt; RespiraCheck <br />
          &gt; GLD-Pricing-ANN <br />
          &gt; IQ-GEN <br />
          &gt; See more -&gt;
        </p>
      </div>

      <div className="absolute top-[33.24rem] right-[31.6rem]">
        <AnimatedIcon variant={variant} style={finalStyle}/>
      </div>
    </div>
  );
};

export default Home;
