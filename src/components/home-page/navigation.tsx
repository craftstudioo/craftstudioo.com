import Image from "next/image";

const TopNav = () => {
  return (
    <nav className="mx-12 my-16">
      <div className="flex justify-between items-center">
        <Image
          src="/carftstudioo-logo.svg"
          alt="Craft Studioo Logo"
          width={60}
          height={60}
        />
        <div>
          <div
            className="p-[0.5px] rounded-full"
            style={{ background: "linear-gradient(170deg, #888, #111)" }}
          >
            <div
              className="flex border border-zinc-800 gap-16 px-16 py-6 rounded-full"
              style={{ backgroundColor: "#111" }}
            >
              <a href="#">Home</a>
              <a href="#">Work</a>
              <a href="#">Service</a>
              <a href="#">Team</a>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="border border-zinc-800 px-4 py-2 rounded-full font-medium"
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export { TopNav };
