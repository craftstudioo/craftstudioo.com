import { PrimaryButton } from "../base/button";

const ContactUs = () => {
  return (
    <section
      className="flex flex-col justify-center items-center mt-20 md:mt-28 lg:mt-32 xl:mt-36 gap-16 sm:gap-20 md:gap-24 lg:gap-28 xl:gap-32 mb-16"
      id="contact-us"
    >
      <div className="flex w-full justify-between">
        <div className="w-[65%] p-24 flex flex-col gap-24">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left">
              CONTACT US !
            </h2>
            <div className="text-lg">
              Send us your requirements and talk to us
            </div>
          </div>

          <div className=" flex flex-col gap-10">
            <div>
              <h3 className="text-lg font-medium text-white mb-2">
                Company / Business
              </h3>
              <input
                type="text"
                placeholder=""
                className="w-full py-2 bg-transparent border-b border-white text-white placeholder-white focus:outline-none"
              />
            </div>
            <div className="flex w-full gap-10">
              <div className="w-full">
                <h3 className="text-lg font-medium text-white mb-2">Email</h3>
                <input
                  type="text"
                  placeholder=""
                  className="w-full py-2 bg-transparent border-b border-white text-white placeholder-white focus:outline-none"
                />
              </div>
              <div className="w-full">
                <h3 className="text-lg font-medium text-white mb-2">
                  Phone Number
                </h3>
                <input
                  type="text"
                  placeholder=""
                  className="w-full py-2 bg-transparent border-b border-white text-white placeholder-white focus:outline-none"
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Message</h3>
              <input
                type="text"
                placeholder=""
                className="w-full py-2 bg-transparent border-b border-white text-white placeholder-white focus:outline-none"
              />
            </div>
          </div>

          <PrimaryButton className="self-end font-bold">
            Send Message
          </PrimaryButton>
        </div>
        <div className="hidden sm:block">
          <img src="/fractal.png" alt="Fractal" className="object-contain" />
        </div>
      </div>
    </section>
  );
};

export { ContactUs };
