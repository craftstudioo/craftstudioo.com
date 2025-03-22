import React from "react";
import { Heading } from "../base";

const Team = () => {
  return (
    <section
      className="flex flex-col justify-center items-center mt-20 md:mt-28 lg:mt-32 xl:mt-36 gap-16 sm:gap-20 md:gap-24 lg:gap-28 xl:gap-32 mb-16"
      id="team"
    >
      <Heading text="Team" />
      <div className="flex flex-col gap-6">
        <div
          className="p-[0.5px] rounded-lg"
          style={{ background: "linear-gradient(170deg, #888, #111)" }}
        >
          <div className="w-[80vw] h-[35vw] bg-zinc-900 rounded-lg"></div>
        </div>
        <div className="text-xl w-[80vw]">
          A powerhouse of creativity—where a video storyteller, a digital
          architect, a design visionary, and a marketing strategist unite to
          craft unforgettable digital experiences
        </div>
      </div>
    </section>
  );
};

export { Team };
