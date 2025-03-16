import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center mt-20 sm:mt-24 md:mt-28 lg:mt-32 xl:mt-36 gap-10 sm:gap-14 md:gap-16 lg:gap-18 xl:gap-20 border-t border-t-zinc-500 pt-10 sm:pt-14 md:pt-16 lg:pt-18 xl:pt-20 pb-5 sm:pb-7 md:pb-8 lg:pb-9 xl:pb-10">
      <div className="flex flex-col sm:flex-row justify-between w-[90vw] sm:w-[85vw] gap-6 sm:gap-0">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
          <Image
            src="/carftstudioo-logo.svg"
            alt="Craft Studioo Logo"
            width={80}
            height={80}
            className="hidden sm:hidden md:block w-20 h-20 sm:w-24 sm:h-24"
          />
          <div className="flex flex-col items-center sm:items-start justify-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tighter z-10">
              CRAFT STUDIOO
              <span className="h-2 w-2 bg-[#E67919] rounded-full inline-block"></span>
            </div>
            <div className="text-base sm:text-lg md:text-xl">
              Email: mail@craftstudioo.com
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center sm:items-end mt-4 sm:mt-0">
          <div className="text-2xl sm:text-3xl md:text-4xl">
            Want to work with us?
          </div>
          <a
            className="text-2xl sm:text-3xl md:text-4xl font-light underline p-1 underline-offset-8"
            style={{ textDecorationThickness: "0.5px" }}
            href="#contact-us"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-20 justify-center w-[90vw] sm:w-[85vw] text-center sm:text-left">
        <div>Youtube: Craft Studioo</div>
        <div>Instagram: @ig_craftstudioo</div>
        <div>LinkedIn: Craft Studioo</div>
      </div>

      <div className="flex justify-center w-[90vw] sm:w-[85vw] mt-4 sm:mt-0">
        <a href="#" className="underline p-1 underline-offset-8 text-zinc-500">
          craftstudioo.com
        </a>
      </div>
    </footer>
  );
};

export { Footer };
