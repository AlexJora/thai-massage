"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";


const HeroHome = () => {
  return (
    <section className="relative bg-center bg-no-repeat bg-cover">
      <div className="relative z-20 max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:flex lg:h-screen lg:items-center">
        {/* Content Container */}
        <div className="z-20 max-w-xl mx-auto text-center lg:w-3/4 lg:mx-0">
          <div className="p-8 bg-black bg-opacity-50 rounded-md">
            <div className="text-3xl leading-loose">
              <h1 className="text-white">
                DISCOVER
                <br></br>
                <span className="text-primary-200 md:text-5xl">
                  THAI MASSAGE
                </span>
                <br></br>
                EXPERIENCES AT <br></br>
                <span className="text-primary-200 md:text-5xl">RUAN THAI</span>
              </h1>
            </div>

            {/* Contact Us Button */}
            <div className="flex flex-wrap justify-center mt-10">
              <Link
                href="/contact"
                className="block w-auto px-10 py-4 text-lg text-left text-black border-2 border-black hover:bg-black hover:text-white focus:outline-none focus:ring bg-primary-200"
              >
                CONTACT US
              </Link>
            </div>
             {/* Social Media Icons */}
      <div className="flex justify-center mt-6 space-x-5">
        <Link href="https://www.facebook.com/ruanthaispa" target="_blank" aria-label="Visit our Facebook page" passHref>
          <FaFacebookF className="text-3xl transition-colors duration-300 text-primary-300 hover:text-white" />
        </Link>
        <Link href="https://x.com/RuanThaiMassage" target="_blank" aria-label="Visit our X (Twitter) page" passHref>
          <FaXTwitter className="text-3xl transition-colors duration-300 text-primary-300 hover:text-white" />
        </Link>
        <Link href="" target="_blank" aria-label="Visit our TikTok page" passHref>
          <FaTiktok className="text-3xl transition-colors duration-300 text-primary-300 hover:text-white" />
        </Link>
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
            srcSet="/assets/hero/heroHome-sm.webp"
          />

          {/* Desktop Image */}
          <source
            media="(min-width: 769px)"
            srcSet="/assets/hero/heroHome-lg.webp"
          />

          {/* Fallback Image */}
          <Image
            src="/assets/hero/heroHome-lg.webp"
            alt="Hero Image"
            className="object-cover w-full h-full"
            fill
          />
        </picture>
      </div>
      {/* Sale Image */}
      {/* <div className="absolute z-30 top-4 right-4 md:top-10 md:right-10">
        <Image
          src="/assets/sale.webp"
          alt="Sale"
          width={100}
          height={100}
          className="md:w-[150px] md:h-[150px]"
          
        />
      </div> */}
    </section>
  );
};

export default HeroHome;
