"use client";
import Image from "next/image";

const HeroHome = () => {
  return (
    <section className="relative bg-center bg-no-repeat bg-cover">
      <div className="relative z-20 max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:flex lg:h-screen lg:items-center">
        {/* Content Container */}
        <div className="z-20 max-w-xl mx-auto text-center lg:w-3/4 lg:mx-0">
          <div className="p-8 bg-black bg-opacity-50 rounded-md">
            <div className="text-3xl leading-relaxed">
              <h1 className="font-sans text-white">
                <span className="md:text-4xl">DISCOVER BLISSFUL</span> <br></br>
                <span className="text-primary-300">THAI MASSAGE</span>
                <br></br>
                EXPERIENCES AT{" "}
                <span className="text-primary-300">RUAN THAI</span>
              </h1>
            </div>

            {/* Contact Us Button */}
            <div className="flex flex-wrap justify-center mt-20">
              <a
                href="#"
                className="block w-auto px-6 py-4 text-lg text-left text-black border-2 border-black hover:bg-black hover:text-white focus:outline-none focus:ring bg-primary-200"
              >
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Picture Element for Responsive Images */}
      <div className="absolute inset-0 z-0">
        <picture>
          {/* Mobile Image */}
          <source
            media="(max-width: 768px)"
            srcSet="/assets/heroHome-sm.webp"
          />

          {/* Desktop Image */}
          <source
            media="(min-width: 769px)"
            srcSet="/assets/heroHome-lg.webp"
          />

          {/* Fallback Image */}
          <img
            src="/assets/heroHome-lg.webp"
            alt="Hero Image"
            className="object-cover w-full h-full"
          />
        </picture>
      </div>
    </section>
  );
};

export default HeroHome;
