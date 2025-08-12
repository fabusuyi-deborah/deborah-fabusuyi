export default function Connect() {
  return (
    <section className="py-20 px-4 text-center" id="connect">
      <div>
        {/* Social links */}
        <div className="flex flex-wrap gap-4 mb-16 justify-center text-sm sm:text-base md:text-lg">
  <a 
    href="https://www.linkedin.com/in/deborah-fabusuyi-b76968236/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:underline"
  >
    LINKEDIN
  </a>
  
  <a 
    href="https://x.com/Debbyiecodes" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:underline"
  >
    TWITTER
  </a>
  
  <a 
    href="https://hashnode.com/@Dherrbie" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:underline"
  >
    HASHNODE
  </a>
  
  <a 
    href="https://github.com/fabusuyi-deborah" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:underline"
  >
    GITHUB
  </a>
</div>


        {/* Email button */}
        <div>
          <a href="mailto:fabusuyideborah03@gmail.com" className="px-3 py-2 rounded-full border border-black text-md sm:text-lg md:text-2xl lg:text-3xl break-all">
            <span className="mr-1 bg-[#0DC420] rounded-full h-3 w-3 inline-block align-middle" />
            fabusuyideborah03@gmail.com
            <span className="ml-1 bg-[#0DC420] rounded-full h-3 w-3 inline-block align-middle" />
          </a>
        </div>

        {/* Heading */}
        <p className="font-bold pt-16 text-center mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          LET&apos;S WORK <br />
          TOGETHER
        </p>
      </div>
    </section>
  );
}
