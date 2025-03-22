"use client";

import Image from "next/image";

const TopNav = () => {
  return (
    <nav className="mx-4 my-8 md:mx-12 md:my-16" id="navigation">
      <div className="flex justify-between items-center">
        <Image
          src="/carftstudioo-logo.svg"
          alt="Craft Studioo Logo"
          width={40}
          height={40}
          className="sm:w-30 sm:h-30"
        />
        <div className="hidden md:block absolute top-15 left-1/2 transform -translate-x-1/2">
          <div
            className="p-[0.5px] rounded-full"
            style={{ background: "linear-gradient(170deg, #888, #111)" }}
          >
            <div
              className="flex border border-zinc-800 gap-16 px-16 py-6 rounded-full"
              style={{ backgroundColor: "#111" }}
            >
              <a href="#hero">Home</a>
              <a href="#services">Service</a>
              <a href="#team">Team</a>
              <a href="#">About</a>
            </div>
          </div>
        </div>
        <div
          className="p-[0.5px] rounded-full"
          style={{ background: "linear-gradient(170deg, #aaa, #111)" }}
        >
          <button
            type="button"
            className="border bg-[#0a0a0a] border-zinc-800 px-4 py-2 rounded-full font-medium hidden md:block"
            onClick={() => {
              const contactSection = document.getElementById("contact-us");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export { TopNav };
