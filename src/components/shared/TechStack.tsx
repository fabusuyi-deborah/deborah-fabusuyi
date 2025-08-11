"use client";

import React from 'react';
import { FaHtml5, FaCss3 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';

interface TechStackProps {
  className?: string;
  speed?: string;
}

const TechStack: React.FC<TechStackProps> = ({ 
  className = "", 
  speed = "20s"
}) => {
  return (
    <>
      <div className={`relative w-full max-w-xs sm:max-w-sm md:max-w-lg overflow-hidden ${className}`}>
        {/* Fade overlay on left */}
        <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-8 md:w-12 bg-gradient-to-r from-white to-transparent z-10"></div>
        
        {/* Fade overlay on right */}
        <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-8 md:w-12 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        {/* Scrolling container */}
        <div 
          className="flex space-x-4 sm:space-x-6 md:space-x-8 text-2xl sm:text-3xl tech-scroll"
          style={{
            animation: `scroll ${speed} linear infinite`,
          }}
        >
          {/* First set */}
          <div className="flex-shrink-0"><FaHtml5 size={24} className=" sm:w-7 sm:h-7 md:w-8 md:h-8 " /></div>
          <div className="flex-shrink-0"><FaCss3 size={24} className=" sm:w-7 sm:h-7 md:w-8 md:h-8" /></div>
          <div className="flex-shrink-0"><IoLogoJavascript size={24} className=" sm:w-7 sm:h-7 md:w-8 md:h-8" /></div>
          <div className="flex-shrink-0"><SiReact size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" /></div>
          <div className="flex-shrink-0"><SiNextdotjs size={24} className=" sm:w-7 sm:h-7 md:w-8 md:h-8" /></div>
          <div className="flex-shrink-0"><SiTailwindcss size={24} className=" sm:w-7 sm:h-7 md:w-8 md:h-8" /></div>
          <div className="flex-shrink-0"><SiTypescript size={24} className=" sm:w-7 sm:h-7 md:w-8 md:h-8" /></div>

          {/* Second set for seamless loop */}
          <div className="flex-shrink-0"><FaHtml5 size={24} className=" sm:w-7 sm:h-7 md:w-8 md:h-8" /></div>
          <div className="flex-shrink-0"><FaCss3 size={24} className=" sm:w-7 sm:h-7 md:w-8 md:h-8" /></div>
          <div className="flex-shrink-0"><IoLogoJavascript size={24} className=" sm:w-7 sm:h-7 md:w-8 md:h-8" /></div>
          <div className="flex-shrink-0"><SiReact size={24} className=" sm:w-7 sm:h-7 md:w-8 md:h-8" /></div>
          <div className="flex-shrink-0"><SiNextdotjs size={24} className=" sm:w-7 sm:h-7 md:w-8 md:h-8" /></div>
          <div className="flex-shrink-0"><SiTailwindcss size={24} className=" sm:w-7 sm:h-7 md:w-8 md:h-8" /></div>
          <div className="flex-shrink-0"><SiTypescript size={24} className=" sm:w-7 sm:h-7 md:w-8 md:h-8" /></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .tech-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};

export default TechStack;