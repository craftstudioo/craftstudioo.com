"use client";

const ServiceTag = ({ serviceName }: { serviceName: string }) => {
  return (
    <div
      className="p-[0.5px] rounded-full"
      style={{ background: "linear-gradient(170deg, #888, #111)" }}
    >
      <div className="bg-[#111] rounded-full px-4 py-2">{serviceName}</div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative hero-section flex flex-col justify-center items-center mt-[8rem] gap-8">
      <div className="absolute z-1" style={{ top: "-5%" }}>
        <img
          src="/grid.svg"
          alt="Background Grid"
          className="object-cover"
          style={{ width: "100vw", height: "1400px" }}
        />
      </div>
      <div className="text-8xl font-extrabold tracking-tighter z-10">
        CRAFT STUDIOO
        <span className="h-4 w-4 bg-[#E67919] rounded-full inline-block"></span>
      </div>
      <div className="text-xl font-medium text-white z-10">
        More than Execution, We Scale Brands
      </div>
      <div className="flex flex-col justify-center items-center gap-4 z-10">
        <div className="flex gap-4">
          <ServiceTag serviceName="Digital Marketing" />
          <ServiceTag serviceName="Video Editing" />
          <ServiceTag serviceName="Website Development" />
        </div>

        <div className="flex gap-4 mb-4">
          <ServiceTag serviceName="UI / UX" />
          <ServiceTag serviceName="Content Creation" />
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
                { threshold: 0.6 }
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
