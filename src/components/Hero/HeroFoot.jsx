import Image from "next/image";
import Link from "next/link";
const HeroFoot = () => {
  return (
    <section className="relative bg-center bg-no-repeat bg-cover h-96 md:h-[500px]">
      <div className="absolute inset-0 z-0">
        <picture>
          {/* Mobile Image */}
          <source
            media="(max-width: 768px)"
            srcSet="/assets/hero/heroFoot-sm.webp"
          />

          {/* Desktop Image */}
          <source
            media="(min-width: 769px)"
            srcSet="/assets/hero/heroFoot-lg.webp"
          />

          {/* Fallback Image */}
          <Image
            src="/assets/hero/heroFoot-lg.webp"
            alt="Hero Image"
            className="object-cover w-full h-full"
            fill
          />
        </picture>
        {/* Black Overlay */}
        <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>
      </div>
      <div className="pt-28 relative z-20 flex flex-col items-center justify-center h-full max-w-screen-xl px-4 py-16 mx-auto text-center">
        {/* Content Container */}
        <div className="z-20 max-w-xl">
          <h1 className=" text-white text-4xl leading-relaxed md:text-5xl">
            {" "}
            FOOT REFLEXOLOGY
          </h1>
          <div className="flex flex-wrap justify-center my-16">
            <Link
              href="/contact"
              className="block w-auto px-6 py-4 text-lg text-left text-white bg-white border-2 border-white bg-opacity-20 hover:bg-black hover:text-white focus:outline-none focus:ring"
            >
              SESSION REQUEST
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroFoot;
