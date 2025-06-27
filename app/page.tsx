"use client";

import { useMemo, useRef } from "react";
import dynamic from "next/dynamic";
import AnimatedIcon from "./components/AnimatedIcon";
import { useIconSequence, Step } from "@/hooks/useIconSequence";
import { useEffect, useState } from "react";


const ScrollLottie = dynamic(
  () => import("./components/scrollLottie"),
  { ssr: false }
);

export default function Home() {


  const [showScrollArrow, setShowScrollArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollArrow(window.scrollY < 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stepsLinkedIn = useMemo<Step[]>(() => [
    { variant: "idle", duration: 20000 },
    {
      variant: "walk-forward",
      duration: 2000,
      transform: "translateY(50px)",
      transition: "transform 2s linear",
    },
    {
      variant: "lift-weight",
      duration: 12000,
      transform: "translateY(50px)",
      transition: "transform 2s linear",
    },
    { variant: "idle", duration: 5000 },
  ], []);

  const stepsGitHub = useMemo<Step[]>(() => [
    { variant: "idle", duration: 50000 },
    {
      variant: "walk-right",
      duration: 5000,
      transform: "translateX(75px) translateY(30px)",
      transition: "transform 5s linear",
    },
    { variant: "idle", duration: 3000 },
  ], []);

  const stepsMail = useMemo<Step[]>(() => [
    { variant: "idle", duration: 5000 },
    {
      variant: "walk-right",
      duration: 5000,
      transform: "translateX(75px) translateY(30px)",
      transition: "transform 5s linear",
    },
    {
      variant: "walk-forward",
      duration: 5000,
      transform: "translateX(75px) translateY(120px)",
      transition: "transform 5s linear",
    },
    { variant: "idle", duration: 3000 },
  ], []);

  const linkedInAnim = useIconSequence(stepsLinkedIn);
  const githubAnim = useIconSequence(stepsGitHub);
  const mailAnim = useIconSequence(stepsMail);

  // Gallery logic
  const scroller = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scroller.current) return;
    isDragging.current = true;
    startX.current = e.pageX - scroller.current.offsetLeft;
    scrollLeft.current = scroller.current.scrollLeft;
  };
  const onMouseLeave = () => { isDragging.current = false; };
  const onMouseUp = () => { isDragging.current = false; };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scroller.current) return;
    e.preventDefault();
    const x = e.pageX - scroller.current.offsetLeft;
    const walk = (x - startX.current);
    scroller.current.scrollLeft = scrollLeft.current - walk;
  };

  const handlePrev = () => scroller.current?.scrollBy({ left: -400, behavior: 'smooth' });
  const handleNext = () => scroller.current?.scrollBy({ left: 400, behavior: 'smooth' });

  const projects = [
    {
      id: 1,
      title: 'YOLO-3D',
      img: '/yolo-3d.png',
      buttons: [
        {
          text: 'GitHub',
          href: 'https://github.com/gabe-mc/YOLO-3D',
          color: 'bg-[#ff64da] hover:bg-[#e055c0]',
        },
      ],
    },
    {
      id: 2,
      title: 'EAFC ML-Remaster',
      img: '/eafc-ml-remaster.png',
      buttons: [
        {
          text: 'GitHub',
          href: 'https://github.com/gabe-mc/EAFC-ML-Remaster',
          color: 'bg-[rgba(0,0,0,0.6)] hover:bg-[rgba(0,0,0,0.85)]',
        },
        {
          text: 'Demo',
          href: 'https://www.ea.com/en-gb',
          color: 'bg-[rgba(0,0,0,0.6)] hover:bg-[rgba(0,0,0,0.85)]',
        },
      ],
    },
    {
      id: 3,
      title: 'ThoughtMirror',
      img: '/thought-mirror.png',
      buttons: [
        {
          text: 'GitHub',
          href: 'https://github.com/jnnchi/thoughtmirror',
          color: 'bg-[#ff6b5b] hover:bg-[#e05c4e]',
        },
        {
          text: 'Devpost',
          href: 'https://devpost.com/software/thoughtmirror',
          color: 'bg-[#fdb746] hover:bg-[#e6a939]',
        },
      ],
    },
    {
      id: 4,
      title: 'RespiraCheck',
      img: '/respira-check.png',
      buttons: [
        {
          text: 'GitHub',
          href: 'https://github.com/jnnchi/RespiraCheck',
          color: 'bg-[#3e70f0] hover:bg-[#3361d1]',
        },
        {
          text: 'Demo',
          href: 'https://respira-check-liard.vercel.app',
          color: 'bg-[#83a2f1] hover:bg-[#7290d6]',
        },
      ],
    },
  ];


  return (
    <main className="w-full overflow-visible">
      {/* Hero Section */}
      <section className="w-full min-h-[90vh] flex justify-center pt-10 relative">
        <div className="relative">
          <img
            src="/gabriel_big.png"
            alt="gabriel"
            width={600}
            height={600}
            draggable={false}
            className="object-contain p-1 select-none"
          />

          <div className="absolute top-[76.5%] left-[12.5rem] transform -translate-x-1/2 -translate-y-full px-4 py-2">
            <p className="text-black font-extrabold text-center" style={{ fontSize: "0.77rem" }}>
              MATH + COMPUTER SCIENCE @ UofT
            </p>
          </div>
        </div>

        <div className="absolute transform translate-x-[17.2rem] translate-y-[16.5rem]">
          <a href="#experience">
            <h1 className="text-black font-bold text-3xl hover:text-gray-600">EXPERIENCE</h1>
          </a>
          <p className="text-black text-md transform translate-x-[0.1rem]" style={{ fontSize: "0.90rem" }}>
            Explore my extracurricular <br />
            involvement and <br />
            internship experience. -&gt;
          </p>
        </div>

        <div className="absolute transform -translate-x-[23.3rem] translate-y-42">
          <a href="#projects">
            <h1 className="text-black font-bold text-3xl hover:text-gray-600">PROJECTS</h1>
          </a>
          <p className="text-black text-md transform translate-x-[0.1rem]" style={{ fontSize: "0.90rem" }}>
            &gt; RespiraCheck <br />
            &gt; GLD-Pricing-ANN <br />
            &gt; IQ-GEN <br />
            &gt; See more -&gt;
          </p>
        </div>

        {/* LinkedIn Icon */}
        <div className="absolute top-[27.57rem] right-[31.6rem] cursor-pointer" style={linkedInAnim.style}>
          <AnimatedIcon icon="linkedin" variant={linkedInAnim.variant} href="https://www.linkedin.com/in/gabrielmcfadyen" />
        </div>

        {/* GitHub Icon */}
        <div className="absolute top-[27.57rem] right-[26.5rem] cursor-pointer" style={githubAnim.style}>
          <AnimatedIcon icon="github" variant={githubAnim.variant} href="https://github.com/gabe-mc" />
        </div>

        {/* Mail Icon */}
        <div className="absolute top-[27.57rem] right-[21.3rem] cursor-pointer" style={mailAnim.style}>
          <AnimatedIcon icon="mail" variant={mailAnim.variant} href="mailto:gabemcfadyen@icloud.com" />
        </div>

        <div
          className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${showScrollArrow ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
          <ScrollLottie />
        </div>


      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen bg-white px-6 pt-20 pb-40 overflow-visible"
      >
        <div className="flex items-center justify-between">
          {/* Arrow Buttons */}
          <button onClick={handlePrev} className="text-black px-20 hover:scale-125 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 transform scale-x-[-1]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>

          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-7xl font-serif">my projects</h2>
            <p className="py-4 font-sans font-extrabold text-[0.77rem]">
              THE FOLLOWING IS A CURATED SELECTION OF MY PERSONAL PROJECTS. <br />
              GO TO MY{' '}
              <a
                href="https://github.com/gabe-mc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9400ff] underline"
              >
                GITHUB
              </a>{' '}
              TO SEE THE FULL EXTENT OF MY PROJECTS
            </p>
          </div>

          <button onClick={handleNext} className="text-black px-20 hover:scale-125 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

        {/* Gallery */}
        <div
          ref={scroller}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          onMouseMove={onMouseMove}
          className="mt-8 flex space-x-8 overflow-x-auto overflow-y-visible px-4 relative pb-10 pt-4" // ✅ added pt-4
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            overflowY: 'visible',
            scrollbarWidth: 'none',
          }}
        >
          {projects.map(proj => (
            <div
              key={proj.id}
              onClick={() => window.open(proj.buttons?.[0]?.href, "_blank")}
              className="relative flex-shrink-0 w-[384px] aspect-[3/4] bg-white rounded-[2.1rem] overflow-hidden shadow hover:shadow-lg transition-transform hover:-translate-y-2 hover:z-10 scroll-snap-align-start select-none cursor-pointer"
            >
              <img
                src={proj.img}
                alt={proj.title}
                className="object-cover w-full h-full"
                draggable={false}
              />
              <div className="absolute bottom-4 left-4 flex gap-2">
                {proj.buttons?.map((btn, idx) => (
                  <a
                    key={idx}
                    href={btn.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-3 py-1 text-white rounded-[1.5rem] transition ${btn.color}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {btn.text}
                  </a>
                ))}
              </div>
            </div>



          ))}
        </div>
      </section>




      {/* Experience Section */}
      <section id="experience" className="min-h-screen bg-white px-6 py-10">
        <div className="text-center mx-auto overflow-x-auto py-5">
          <h2 className="text-7xl font-serif text-center">my experience</h2>
          <p className="py-4 font-sans font-extrabold text-[0.77rem] whitespace-nowrap inline-block">
            BELOW IS MY WORK EXPERIENCE, INCLUDING BOTH INTERNSHIPS AND EXTRACIRRICULAR <br />
            INVOLVMENT AT THE UNIVERSITY OF TORONTO. VIEW MY{' '}
            <a
              href="https://www.linkedin.com/in/gabrielmcfadyen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0076be] underline"
            >
              LINKEDIN
            </a>{' '}
            FOR MORE DETAILS.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="relative flex flex-col items-center my-16">
          {/* Vertical line removed */}

          {[
            {
              img: "/mercedes-logo.png",
              title: "AI Engineer",
              subtitle1: "Mercedes-Benz",
              subtitle2: "Jun 2024 – September 2024",
              text: "Worked on devoloping and testing conversational AI sales agents.",
              borderColor: "#0076bd",
            },
            {
              img: "/utmist-logo.png",
              title: "Team Lead",
              subtitle1: "UTMIST",
              subtitle2: "Sep 2024 - Present",
              text: "Lead a engineering team devoloping RespriaCheck.",
              borderColor: "#0076bd",
            },
            {
              img: "/sgc-logo.png",
              title: "Events Coordinator",
              subtitle1: "St. George Captial",
              subtitle2: "Aug 2024 – June 2025",
              text: "Coordinated club events, participated in ML research.",
              borderColor: "#0076bd",
            },
            {
              img: "/cmh-logo.png",
              title: "IT Intern",
              subtitle1: "Campbellford Memorial Hospital",
              subtitle2: "Oct 2022 – Feb 2023",
              text: "",
              borderColor: "#0076bd",
            },
          ].map((item, i) => {
            const isRight = i % 2 === 0;
            return (
              <div key={i} className="mb-20 relative">
                <div
                  className={`
              inline-flex items-center
              transition-transform duration-300
              ${isRight ? "hover:translate-x-4" : "hover:-translate-x-4"}
            `}
                >
                  {/* Left side */}
                  <div className={`${!isRight ? "w-1/2 flex justify-end pr-8" : "w-fit pr-2"}`}>
                    {!isRight && (
                      <div className="max-w-xs text-right">
                        <h3 className="text-2xl font-bold">{item.title}</h3>
                        <div className="text-sm text-gray-600 leading-tight mb-2">
                          <p>{item.subtitle1}</p>
                          <p>{item.subtitle2}</p>
                        </div>
                        <p className="text-base">{item.text}</p>
                      </div>
                    )}
                  </div>

                  {/* Center node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="bg-white mx-auto flex items-center justify-center rounded-full w-[13.3rem] h-[13.3rem]">
                      <div
                        className="bg-white border-4 rounded-md overflow-hidden w-[12.5rem] h-[12.5rem]"
                        style={{ borderColor: item.borderColor }}
                      >
                        <img
                          src={item.img}
                          alt={item.title}
                          className="object-cover w-full h-full"
                          draggable={false}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right side */}
                  <div className={`${isRight ? "w-1/2 flex justify-start pl-8" : "w-fit pl-2"}`}>
                    {isRight && (
                      <div className="max-w-xs text-left">
                        <h3 className="text-2xl font-bold">{item.title}</h3>
                        <div className="text-sm text-gray-600 leading-tight mb-2">
                          <p>{item.subtitle1}</p>
                          <p>{item.subtitle2}</p>
                        </div>
                        <p className="text-base">{item.text}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </main>
  );
}