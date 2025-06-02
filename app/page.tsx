"use client";

import { useMemo } from "react";
import Image from "next/image";
import AnimatedIcon from "./components/AnimatedIcon";
import { useIconSequence, Step } from "@/hooks/useIconSequence";

export default function Home() {
  const stepsLinkedIn = useMemo<Step[]>(() => [
    { variant: "idle", duration: 12000 },
    // {
    //   variant: "walk-forward",
    //   duration: 3000,
    //   transform: "translateY(40px)",
    //   transition: "transform 3s linear",
    // },
    { variant: "idle", duration: 5000 },
  ], []);

  const stepsGitHub = useMemo<Step[]>(() => [
    { variant: "idle", duration: 5000 },
    // {
    //   variant: "walk-right",
    //   duration: 5000,
    //   transform: "translateX(75px) translateY(30px)",
    //   transition: "transform 5s linear",
    // },
    { variant: "idle", duration: 3000 },
  ], []);

  const stepsMail = useMemo<Step[]>(() => [
  { variant: "idle", duration: 5000 },
  // {
  //   variant: "walk-right",
  //   duration: 5000,
  //   transform: "translateX(75px) translateY(30px)",
  //   transition: "transform 5s linear",
  // },
  { variant: "idle", duration: 3000 },
], []);

  const linkedInAnim = useIconSequence(stepsLinkedIn);
  const githubAnim = useIconSequence(stepsGitHub);
  const mailAnim = useIconSequence(stepsMail);

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

      {/* LinkedIn Icon */}
      <div className="absolute top-[33.24rem] right-[31.6rem] cursor-pointer" style={linkedInAnim.style}>
        <AnimatedIcon icon="linkedin" variant={linkedInAnim.variant} href="https://www.linkedin.com/in/gabrielmcfadyen" />

      </div>

      {/* GitHub Icon */}
      <div className="absolute top-[33.34rem] right-[26.5rem] cursor-pointer" style={githubAnim.style}>
        <AnimatedIcon icon="github" variant={githubAnim.variant} href="https://github.com/gabe-mc" />
      </div>

      {/* Mail Icon */}
      <div className="absolute top-[33.34rem] right-[21.3rem] cursor-pointer" style={mailAnim.style}>
        <AnimatedIcon icon="mail" variant={mailAnim.variant} href="mailto:gabemcfadyen@icloud.com" />
      </div>
    </div>
  );
}
