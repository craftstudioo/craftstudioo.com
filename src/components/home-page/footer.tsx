import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center mt-40 gap-20 border-t border-t-zinc-500 pt-20 pb-10">
      <div className="flex justify-between w-[85vw]">
        <div className="flex gap-6">
          <Image
            src="/carftstudioo-logo.svg"
            alt="Craft Studioo Logo"
            width={100}
            height={100}
          />
          <div className="flex flex-col items-center justify-center">
            <div className="text-4xl font-extrabold tracking-tighter z-10">
              CRAFT STUDIOO
              <span className="h-2 w-2 bg-[#E67919] rounded-full inline-block"></span>
            </div>
            <div className="text-xl">Email: mail@craftstudioo.com</div>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-end">
          <div className="text-4xl">Want to work with us ?</div>
          <a
            className="text-4xl font-light underline p-1 underline-offset-8"
            style={{ textDecorationThickness: "0.5px" }}
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="flex gap-40 justify-center w-[85vw]">
        <div>Youtube: Craft Studioo</div>
        <div>Instagram: @ig_craftstudioo</div>
        <div>LinkedIn: Craft Studioo</div>
      </div>

      <div className="flex justify-center w-[85vw]">
        <a href="#" className="underline p-1 underline-offset-8 text-zinc-500">
          craftstudioo.com
        </a>
      </div>
    </footer>
  );
};

export { Footer };
