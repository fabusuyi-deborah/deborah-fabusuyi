'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

// Letter animation
const letterAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
    },
  }),
};

// Animated line component
function AnimatedLine({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <div className="flex justify-center flex-wrap">
      {text.split('').map((char, i) => (
        <motion.span
          key={`${text}-${i}`}
          custom={i}
          variants={letterAnim}
          initial="hidden"
          animate="visible"
          transition={{ delay: delay / 1000 }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
}

export default function Hero() {
  const phrasePairs = [
    ['FRONTEND', 'DEVELOPER'],
    ['TECHNICAL', 'WRITER'],
  ];

  const [index, setIndex] = useState(0);
  const [showLine1, setShowLine1] = useState(true);
  const [showLine2, setShowLine2] = useState(false);

  const [line1, line2] = phrasePairs[index];

  useEffect(() => {
    setShowLine1(true);
    setShowLine2(false);

    // Wait for line1 to finish, then show line2
    const line2Timer = setTimeout(() => {
      setShowLine2(true);
    }, line1.length * 80); // delay based on character count

    // Change phrase pair after total time
    const cycleTimer = setTimeout(() => {
      setShowLine1(false);
      setShowLine2(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrasePairs.length);
      }, 300); // small pause before next pair
    }, 3000); // total time before next pair

    return () => {
      clearTimeout(line2Timer);
      clearTimeout(cycleTimer);
    };
  }, [index, line1.length, phrasePairs.length]);

  return (
    <section className="flex items-center justify-center text-center mt-10 mx-auto px-4">
      <div>
        {/* Animated headline */}
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight h-[150px] space-y-2">
          {showLine1 && <AnimatedLine text={line1} />}
          {showLine2 && <AnimatedLine text={line2} delay={500} />}
        </h1>

        {/* images */}
        <div className="flex justify-center items-end gap-0 mt-10">
          <div className="-mr-10 z-10">
            <Image src="/images/hero-img1.png" alt="Hero Image 1" width={279} height={383} priority />
          </div>
          <div className="z-20">
            <Image src="/images/hero-img2.png" alt="Hero Image 2" width={249} height={250} priority />
          </div>
          <div className="-ml-10 z-10">
            <Image src="/images/hero-img3.png" alt="Hero Image 3" width={279} height={383} priority />
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex justify-center mt-10 space-x-8">
          <Image src="/images/html.png" alt="Html Logo" width={42} height={42} />
          <Image src="/images/css.png" alt="Css Logo" width={42} height={42} />
          <Image src="/images/javascript.png" alt="Javascript Logo" width={42} height={42} />
          <Image src="/images/reactjs.png" alt="React Logo" width={42} height={42} />
          <Image src="/images/nextjs.png" alt="Next.js Logo" width={42} height={42} />
        </div>

        {/* about me */}
        <div className="mt-10 text-md">
          <p className="mx-auto max-w-2xl">
            Proficient in HTML, CSS, JavaScript, and React, with a strong attention to detail and a passion for crafting clean, efficient, and user-centric web interfaces. Focused on solving complex front-end challenges and continuously improving development practices within collaborative teams.
          </p>
        </div>

        {/* buttons */}
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-4">
          <button className="bg-[#9747FF] text-white px-8 py-3 rounded-full w-full md:w-48">
            Resume
          </button>
          <button className="border border-[#9747FF] text-[#9747FF] px-8 py-3 rounded-full w-full md:w-48">
            Contact me
          </button>
        </div>
      </div>
    </section>
  );
}
