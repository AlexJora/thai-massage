"use client";
import Image from "next/image";
const HeroSpa = () => {
  return (
    <section className="relative bg-center bg-no-repeat bg-cover h-96">
      <div className="absolute inset-0 z-0">
        <picture>
          {/* Mobile Image */}
          <source
            media="(max-width: 768px)"
            srcSet="/assets/hero/heroSpa-sm.webp"
          />

          {/* Desktop Image */}
          <source
            media="(min-width: 769px)"
            srcSet="/assets/hero/heroSpa-lg.webp"
          />

          {/* Fallback Image */}
          <Image
            src="/assets/hero/heroSpa-lg.webp"
            alt="spa decor"
            className="object-cover w-full h-full"
            fill
          />
        </picture>
        {/* Black Overlay */}
        <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>
      </div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full max-w-screen-xl px-4 py-16 mx-auto text-center">
        {/* Content Container */}
        <div className="z-20 max-w-xl">
          <div className="text-4xl">
            <h1 className="font-sans text-white">SPA PACKAGES</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSpa;
