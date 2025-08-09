import Image from 'next/image';
import { FaHtml5, FaCss3 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiTailwindcss, SiReact, SiNextdotjs, SiTypescript } from 'react-icons/si';

export default function About() {
  return (
    <section className="py-20 px-4 bg-black text-white" id="about">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch justify-between gap-10">
        {/* TEXT */}
        <div className="flex-1 text-center md:text-left flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6">ABOUT</h2>
          <p className="mb-4">
            I am Deborah, a Frontend developer and Technical writer who loves building clean, responsive websites and applications, while also documenting how they work.
            I excel in React.js and modern frontend tools like Next.js, typescript and Tailwind CSS to create user-friendly interfaces.
          </p>
          <p className="mb-4">
            Beyond coding, I bridge the gap between technology and people through writing and translating complex technical concepts into accessible content. I am passionate about sharing knowledge and helping others grow in their tech journey.  I&apos;ve written tutorials, technical blogs, and API documentation that appeal to both technical and non-technical readers.
          </p>
          <p className="mb-4">
            I&apos;m also exploring developer advocacy, combining writing, speaking, and community involvement to help others learn and grow.
          </p>
          <p className="mb-6">
            When I&apos;m not doing any of these, you can find me reading or learning to play chess.
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
