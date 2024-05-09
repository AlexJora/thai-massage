"use client";
import Image from "next/image";

const HeroHome = () => {
  return (
    <section className="relative bg-center bg-no-repeat bg-cover">
      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 z-10"></div> */}

      {/* Wrapper for title, text, and buttons */}

      <div className="relative z-20 max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:flex lg:h-screen lg:items-center">
        {/* Content Container */}
        <div className="z-20 max-w-xl mx-auto text-left lg:w-3/4 lg:mx-0">
          <div className="p-8 bg-black bg-opacity-50 rounded-md">
            <h1 className="font-sans text-3xl text-white sm:text-5xl">
              DISCOVER BLISSFUL
              <p className="block text-primary-100">THAI MASSAGE </p>
              <p>Experiences.</p>
            </h1>

            <p className="max-w-lg mt-4 leading-4 text-white sm:text-xl/relaxed">
              Welcome to RUAN THAI, where tranquility meets tradition. Immerse
              yourself in the art of Thai massage, a time-honored practice that
              rejuvenates both body and soul.
            </p>

            <div className="flex flex-wrap justify-start gap-4 mt-8 lg:justify-start">
              <a
                href="#"
                className="block px-8 py-3 text-sm font-medium text-white rounded shadow bg-primary-200 hover:bg-primary-200 focus:outline-none focus:ring sm:px-12 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block px-8 py-3 text-sm font-medium text-white rounded shadow bg-primary-200 hover:bg-primary-200 focus:outline-none focus:ring sm:px-12 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Picture Element for Responsive Images */}
      <div className="absolute inset-0 z-0">
        <picture>
          {/* Mobile Image */}
          <source media="(max-width: 768px)" srcSet="/assets/hero.jpg" />

          {/* Desktop Image */}
          <source media="(min-width: 769px)" srcSet="/assets/hero.jpg" />

          {/* Fallback Image */}
          <img
            src="/assets/hero.jpg"
            alt="Hero Image"
            className="object-cover w-full h-full"
          />
        </picture>
      </div>
    </section>
  );
};

export default HeroHome;
