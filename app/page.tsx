"use client";

import { useMemo } from "react";
import Image from "next/image";
import AnimatedIcon from "./components/AnimatedIcon";
import { useIconSequence, Step } from "@/hooks/useIconSequence";

export default function Home() {
  
  const steps = useMemo<Step[]>(() => [
    { variant: "idle",         duration: 4000 },
    {
      variant: "walk-forward",
      duration: 8000,
      transform: "translateY(80px)",
      transition: "transform 8s linear",
    },
    { variant: "idle",         duration: 7000 },
    {
      variant: "walk-right",
      duration: 6000,
      transform: "translate(70px, 80px)",
      transition: "transform 6s linear",
    },
    { variant: "idle",         duration: 20000 },
        {
      variant: "walk-right",
      duration: 3500,
      transform: "translate(100px, 100px)",
      transition: "transform 3.5s linear",
    },
    { variant: "idle",         duration: 1000 },
  ], []);

  const { variant, style } = useIconSequence(steps);

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

      <div className="absolute top-[33.24rem] right-[31.6rem]" style={style}>
        <AnimatedIcon variant={variant}/>
      </div>
    </div>
  );
};
