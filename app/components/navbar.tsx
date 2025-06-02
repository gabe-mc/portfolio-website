"use client";

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState, useRef } from 'react';
import type { LottieRefCurrentProps } from 'lottie-react';
import animationData from '../animations/ball_animation.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Navbar() {
    const [isPlaying, setIsPlaying] = useState(false);
    const lottieRef = useRef<LottieRefCurrentProps>(null);

    const handleMouseEnter = () => {
        if (!isPlaying && lottieRef.current) {
            lottieRef.current.setSpeed(1.2);
            lottieRef.current.goToAndPlay(0, true);
            setIsPlaying(true);
        }
    };

    const handleComplete = () => {
        lottieRef.current?.goToAndStop(0, true);
        setIsPlaying(false);
    };

    return (
        <nav className="bg-white w-full">
            <div className="flex justify-between items-center pl-12 pr-20 py-4">
                <div
                    className="flex items-center relative"
                    onMouseEnter={handleMouseEnter}
                >
                    <Link href="/">
                        <img
                            src="/gm_logo.png"
                            alt="gm"
                            width={60}
                            height={60}
                            className="object-contain"
                        />
                    </Link>

                    <div className="absolute left-full -translate-x-9 ml-2 top-3 w-13 h-13 pointer-events-none">
                        <Lottie
                            lottieRef={lottieRef}
                            animationData={animationData}
                            autoplay={false}
                            loop={false}
                            onComplete={handleComplete}
                        />
                    </div>
                </div>


                <div className="hidden sm:flex sm:space-x-16">
                    {["projects", "experience", "contact"].map((label) => (
                        <Link
                            key={label}
                            href={`/${label}`}
                            className="relative text-md font-medium text-black after:content-[''] after:absolute after:left-0 after:-bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {label}
                        </Link>
                    ))}
                </div>

            </div>
        </nav>
    );
}
