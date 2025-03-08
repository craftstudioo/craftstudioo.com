"use client";

const HeroSection = () => {
  return (
    <section className="relative hero-section flex flex-col justify-center items-center mt-[8rem] gap-8">
      <div className="absolute z-1" style={{ top: "-10%" }}>
        <img
          src="/grid.svg"
          alt="Background Grid"
          className="object-cover"
          style={{ width: "100vw", height: "1600px" }}
        />
      </div>
      <div className="text-8xl font-extrabold tracking-tighter z-10">
        CRAFT STUDIOO
        <span className="h-4 w-4 bg-orange-500 rounded-full inline-block"></span>
      </div>
      <div className="text-xl font-medium text-white z-10">
        More than Execution, We Scale Brands
      </div>
      <div className="flex flex-col justify-center items-center gap-4 z-10">
        <div className="flex gap-4">
          <div className="bg-[#282828] rounded-full px-4 py-2">
            Digital Marketing
          </div>
          <div className="bg-[#282828] rounded-full px-4 py-2">
            Video Editing
          </div>
          <div className="bg-[#282828] rounded-full px-4 py-2">
            Website Devlopment
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <div className="bg-[#282828] rounded-full px-4 py-2"> UI / UX</div>
          <div className="bg-[#282828] rounded-full px-4 py-2">
            Content Creation
          </div>
        </div>
        <button className="mt-4 bg-orange-500 text-white rounded-full px-6 py-2">
          {"Let's Talk"}
        </button>
      </div>

      <div className="mt-8 z-10 w-[80%] h-full overflow-hidden rounded-lg border border-zinc-800">
        <video
          src="/hero_intro.mp4"
          loop
          muted
          className="object-cover w-full h-full"
          ref={(videoElement) => {
            if (videoElement) {
              const observer = new IntersectionObserver(
                ([entry]) => {
                  if (entry.isIntersecting) {
                    videoElement.play();
                  } else {
                    videoElement.pause();
                  }
                },
                { threshold: 0.8 }
              );
              observer.observe(videoElement);
            }
          }}
        />
      </div>
    </section>
  );
};

export { HeroSection };
