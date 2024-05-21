"use client";
import Image from "next/image";
const HeroAbout = () => {
  return (
    <section className="relative bg-center bg-no-repeat bg-cover h-96">
      <div className="absolute inset-0 z-0">
        <picture>
          {/* Mobile Image */}
          <source
            media="(max-width: 768px)"
            srcSet="/assets/heroAbout-sm.webp"
          />

          {/* Desktop Image */}
          <source
            media="(min-width: 769px)"
            srcSet="/assets/heroAbout-lg.webp"
          />

          {/* Fallback Image */}
          <Image
            src="/assets/heroAbout-lg.webp"
            alt="spa decor"
            className="object-cover w-full h-full"
            fill
          />
        </picture>
        {/* Black Overlay */}
        {/* <div className="absolute inset-0 w-full h-full bg-black opacity-40"></div> */}
      </div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full max-w-screen-xl px-4 py-16 mx-auto text-center">
        {/* Content Container */}
        <div className="z-20 max-w-xl">
          <div className="text-4xl leading-relaxed">
            <h1 className="font-sans font-semibold text-white">ABOUT US</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;