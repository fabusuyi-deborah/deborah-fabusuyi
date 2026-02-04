"use client";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import TechStack from "../shared/TechStack";


function AnimatedLine({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <div className="flex justify-center flex-wrap">
      {text.split("").map((char, i) => (
        <motion.span
          key={`${text}-${i}`}
          custom={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: (j: number) => ({
              opacity: 1,
              y: 0,
              transition: {
                delay: delay / 1000 + j * 0.05,
                duration: 0.4,
              },
            }),
          }}
          initial="hidden"
          animate="visible"
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
}

const middleImageVariant: Variants = {
  hidden: { y: 100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  },
};

const sideImageLeftVariant: Variants = {
  hidden: { x: 0, opacity: 0 },
  show: {
    x: -20,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 1.2 },
  },
};

const sideImageRightVariant: Variants = {
  hidden: { x: 0, opacity: 0 },
  show: {
    x: 20,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 1.2 },
  },
};

export default function Hero() {
  const phrasePairs = [
    ["FRONTEND", "DEVELOPER"],
    ["TECHNICAL", "WRITER"],
  ];

  const [index, setIndex] = useState(0);
  const [showLine1, setShowLine1] = useState(true);
  const [showLine2, setShowLine2] = useState(false);

  const [line1, line2] = phrasePairs[index];

  useEffect(() => {
    setShowLine1(true);
    setShowLine2(false);

    const line2Timer = setTimeout(() => setShowLine2(true), line1.length * 80);

    const cycleTimer = setTimeout(() => {
      setShowLine1(false);
      setShowLine2(false);
      setTimeout(() => setIndex((prev) => (prev + 1) % phrasePairs.length), 300);
    }, 3000);

    return () => {
      clearTimeout(line2Timer);
      clearTimeout(cycleTimer);
    };
  }, [index, line1.length, phrasePairs.length]);

  return (
    <section className="flex items-center justify-center text-center mt-6 mx-auto px-4">
      <div>
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight h-[150px] space-y-2">
          <AnimatePresence mode="wait">
            {showLine1 && (
              <motion.div
                key={`line1-${line1}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <AnimatedLine text={line1} />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {showLine2 && (
              <motion.div
                key={`line2-${line2}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <AnimatedLine text={line2} delay={500} />
              </motion.div>
            )}
          </AnimatePresence>
        </h1>

        {/* Images with load animation */}
        <div className="flex justify-center items-end gap-0 mt-4 scale-95">
          <motion.div
            className="-mr-12 z-10"
            variants={sideImageLeftVariant}
            initial="hidden"
            animate="show"
          >
            <Image
              src="/images/hero-img1.png"
              alt="Hero Image 1"
              width={279}
              height={383}
              priority
            />
          </motion.div>

          <motion.div
            className="z-20"
            variants={middleImageVariant}
            initial="hidden"
            animate="show"
          >
            <Image
              src="/images/hero-img2.png"
              alt="Hero Image 2"
              width={249}
              height={250}
              priority
            />
          </motion.div>

          <motion.div
            className="-ml-12 z-10"
            variants={sideImageRightVariant}
            initial="hidden"
            animate="show"
          >
            <Image
              src="/images/hero-img3.png"
              alt="Hero Image 3"
              width={279}
              height={383}
              priority
            />
          </motion.div>
        </div>

        {/* Tech stack */}
        <div className="flex justify-center mt-10 space-x-4 text-3xl">
          <TechStack />
        </div>

        {/* About me */}
        <div className="mt-10 text-md">
          <p className="mx-auto max-w-2xl">
          Hi, I&apos;m Deborah - a frontend developer focused on creating clean, responsive websites that are easy to use. I enjoy tackling challenges, improving my skills, and building apps that make a real difference for users.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-4">
          <a href="/deborah-fabusuyi-resume.pdf"
            className="bg-[#9747FF] text-white px-8 py-3 rounded-full w-full md:w-48"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <a href= "#connect" className="border border-[#9747FF] text-[#9747FF] px-8 py-3 rounded-full w-full md:w-48">
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}
