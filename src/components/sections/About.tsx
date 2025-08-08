import Image from 'next/image';
import { FaHtml5, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiReact, SiNextdotjs, SiTypescript } from "react-icons/si";



export default function About() {
  return (
    <section className="py-20 px-4 bg-black text-white">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch justify-between gap-10">
    {/* TEXT */}
    <div className="flex-1 text-center md:text-left flex flex-col justify-center">
      <h2 className="text-4xl font-bold mb-6">ABOUT</h2>
      <p className="mb-4">
        Proficient in HTML, CSS, JavaScript, and React, with a strong attention to detail and a passion for crafting clean, efficient, and user-centric web interfaces.
      </p>
          <p className="mb-4">
            Proficient in HTML, CSS, JavaScript, and React, with a strong attention to detail and a passion for crafting clean, efficient, and user-centric web interfaces. Focused on solving complex front-end challenges and continuously improving development practices within collaborative teams.
      </p>
      <p className="font-semibold mt-6">MY TECH STACK</p>
          <div className="flex justify-center md:justify-start mt-4 space-x-4 text-2xl">
            <FaHtml5 />
            <FaCss3 />
            <IoLogoJavascript />
            <SiReact /> 
            <SiNextdotjs />
            <SiTailwindcss />
            <SiTypescript />
      </div>
    </div>

    {/* IMAGE */}
    <div className="flex-1 flex justify-center">
      <div className="w-full h-full relative aspect-square">
        <Image
          src="/images/debby.png"
              alt="Debby"
          fill
          className="object-contain"
        />
      </div>
    </div>
  </div>
</section>

  );
}
