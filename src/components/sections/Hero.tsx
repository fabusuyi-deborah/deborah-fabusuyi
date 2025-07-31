import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex items-center justify-center text-center mt-10 mx-auto px-4">
      <div>
        {/* title with animation */}
        <h1 className="text-6xl font-semibold">
          <span className="block ">FRONTEND</span>
          <span className="block"> DEVELOPER</span>
        </h1>

        {/* images */}
    <div className="flex justify-center items-end gap-0 mt-10">
  <div className=" -mr-10 z-10 ">
    <Image src="/images/hero-img1.png" alt="Hero Image 1" width={279} height={383}  priority/>
  </div>
  <div className=" z-20 ">
    <Image src="/images/hero-img2.png" alt="Hero Image 2" width={249} height={250}  priority/>
  </div>
  <div className="-ml-10 z-10 ">
    <Image src="/images/hero-img3.png" alt="Hero Image 3" width={279} height={383}  priority/>
  </div>
</div>

        {/* Tech stack  */}
        <div className=" flex justify-center mt-10 space-x-8">
          <Image src="/images/html.png" alt="Html Logo" width={42} height={42} />
          <Image src="/images/css.png" alt="Css Logo" width={42} height={42} />
          <Image src="/images/javascript.png" alt="Javascript Logo" width={42} height={42} />
          <Image src="/images/reactjs.png" alt="React Logo" width={42} height={42} />
          <Image src="/images/nextjs.png" alt="Next.js Logo" width={42} height={42} />
        </div>
        
        {/* little about me */}
        <div className='mt-10 text-md'>
          <p className='mx-auto max-w-2xl'>
            Proficient in HTML, CSS, JavaScript, and React, with a strong attention to detail and a passion for crafting clean, efficient, and user-centric web interfaces. Focused on solving complex front-end challenges and continuously improving development practices within collaborative teams.
          </p>
        </div>

        {/* button */}
        <div className='mt-10 flex flex-col md:flex-row  justify-center items-center gap-4'>
          <button className='bg-[#9747FF] text-white px-8 py-3 rounded-full w-full md:w-48'>
            Resume
          </button>
          <button className='border border-[#9747FF] text-[#9747FF] px-8 py-3 rounded-full w-full md:w-48'>
            Contact me
          </button>
        </div>
      </div>
    </section>
  );
}
