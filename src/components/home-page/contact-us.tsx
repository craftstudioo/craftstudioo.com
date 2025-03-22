const ContactUs = () => {
  return (
    <section
      className="flex flex-col justify-center items-center mt-20 md:mt-28 lg:mt-32 xl:mt-36 py-20 sm:py-30 md:py-40 lg:py-54 xl:py-60 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-80 gap-10"
      style={{
        backgroundImage: "url(/fractal_effect.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="contact-us"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center">
        {"Let's turn ideas into impact, Partner with us and make it happen! "}
      </h2>

      <div className="relative mt-4 w-full sm:w-[80vw] md:w-[60vw] lg:w-[50vw] xl:w-[40vw] flex flex-col">
        <div className="flex items-center w-full bg-transparent border border-zinc-600 rounded-full backdrop-blur-md">
          <input
            type="text"
            placeholder="Enter your email address"
            className="w-4/5 py-2 sm:py-2 md:py-3 lg:py-4 xl:py-4 pl-4 bg-transparent focus:outline-none rounded-l-full"
          />
          <button className="w-32 mr-1 px-4 py-1 sm:py-1 md:py-2 lg:py-3 xl:py-3 text-white bg-[#E67919] rounded-full ml-auto">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export { ContactUs };
