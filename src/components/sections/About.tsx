import Image from 'next/image';
import TechStack from '../shared/TechStack';

export default function About() {
  return (
    <section className="py-20 px-4 bg-black text-white" id="about">
      {/* Add this container div with max-width */}
      <div className="mx-auto">
        <div className="mx-3 flex flex-col lg:flex-row lg:items-stretch gap-12 lg:gap-20">
          
          {/* TEXT */}
          <div className="flex-1 text-center lg:text-left flex flex-col justify-center">
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
            <div className="flex justify-center lg:justify-start mt-4">
              <TechStack className="text-white" fadeColor='black' />
            </div>
          </div>

          {/* IMAGE */}
          <div className="w-full lg:flex-1">
            <div className="relative w-full h-64 sm:h-80 lg:h-full">
              <Image
                src="/images/debby.png"
                alt="Debby speaking at Google i/o extended ilorin"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}