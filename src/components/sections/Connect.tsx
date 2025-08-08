export default function Connect() {
  return (
    <section className="py-20 px-4 text-center">
      <div>
        {/* Social links */}
        <div className="flex flex-wrap gap-4 mb-16 justify-center text-sm sm:text-base md:text-lg">
          <p>LINKEDIN</p>
          <p>TWITTER</p>
          <p>HASHNODE</p>
          <p>GITHUB</p>
        </div>

        {/* Email button */}
        <div>
          <button className="px-3 py-2 rounded-full border border-black text-sm sm:text-lg md:text-2xl lg:text-3xl break-all">
            <span className="mr-1 bg-[#0DC420] rounded-full h-3 w-3 inline-block"></span>
            fabusuyideborah03@gmail.com
            <span className="ml-1 bg-[#0DC420] rounded-full h-3 w-3 inline-block"></span>
          </button>
        </div>

        {/* Heading */}
        <p className="font-bold pt-16 text-center mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          LET&apos;S WORK <br />TOGETHER
        </p>
      </div>
    </section>
  );
}

