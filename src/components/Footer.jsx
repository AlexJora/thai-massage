"use client";
import React from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import Link from "next/link";


const Footer = () => {
  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="relative pt-10 text-white bg-primary-400">
      <div className="container flex flex-wrap justify-between mx-auto lg:px-16">
        {/* Column 1: Logo */}
        <div className="w-full pl-4 mb-8 md:w-1/4 md:mb-0">
          <div className="flex flex-col mb-4">
            <Image
              src="/assets/logo.webp"
              alt="Logo Ruan Thai"
              width={150}
              height={150}
            />
            <h2 className="text-lg font-bold mt-7 text-secondary-300">
              Connect with Us
            </h2>
          </div>
          <div className="flex w-2/4">
            <Link href="https://www.facebook.com/ruanthaispa" target="_blank" aria-label="Visit our Facebook page" passHref>
              <FaFacebook className="text-3xl text-primary-200"/>
            </Link>
            <Link href="https://x.com/RuanThaiMassage" target="_blank" aria-label="Visit our X (Twitter) page" passHref>
              <FaSquareXTwitter className="mx-6 text-3xl text-primary-200" />
            </Link>
          </div>   
        </div>

        {/* Column 2: Massage Treatments */}
        <div className="w-full pl-4 mb-8 md:w-1/4 md:mb-0">
          <h2 className="mb-3 text-lg font-bold text-secondary-300">Massage</h2>
          <ul>
            <li>
              <a href="/traditional-thai-massage">Traditional Thai Massage</a>
            </li>
            <li>
              <a href="/thai-oil-mix-massage">Thai Oil Mix Massage</a>
            </li>
            <li>
              <a href="/thai-hot-oil-massage">Thai Hot Oil Massage</a>
            </li>
            <li>
              <a href="/foot-reflexology">Foot Reflexology</a>
            </li>
            <li>
              <a href="/couple-massage">Couple massage</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Beauty Treatments */}
        <div className="relative w-full pl-4 mb-8 md:w-1/4 md:mb-0">
          <h2 className="mb-3 text-lg font-bold text-secondary-300">
            Treatments
          </h2>
          <ul>
            <li>
              <a href="/beauty-treatments">Beauty Treatments</a>
            </li>
            <li>
              <a href="/spa-packages">Spa Packages</a>
            </li>
            
          </ul>
          {/* Scroll to Top Icon for larger screens */}
         <div
          onClick={handleScrollUp}
          className="justify-start hidden pt-10 md:flex"
        >
          <FaAngleUp className="w-12 h-12 text-secondary-500" />
        </div>
          {/* Scroll to Top Icon for smaller screens */}
          <div
            onClick={handleScrollUp}
            className="absolute top-0 border rounded-lg right-6 md:hidden border-secondary-500"
          >
            <FaAngleUp className="w-10 h-10 text-secondary-500" />
          </div>
        </div>

        {/* Column 4: Contact Ruan Thai */}
        <div className="w-full pl-4 pr-4 md:w-1/4">
          <h2 className="mb-3 text-lg font-bold text-secondary-300">
            CONTACT RUAN THAI
          </h2>
          <p>
            <span className="font-bold text-primary-300">Phone:</span>
            <span className="text-xs">
              {" "}
              +27 (0) 21 424 7444 | +27 (0) 71 578 0477
            </span>
          </p>
          <p>
            {" "}
            <span className="font-bold text-primary-300">Address: </span>
            <span className="text-xs">
              46 Riebeek Street Cape Town <br></br>(Between Buitengracht Street
              and Bree Street)
            </span>
          </p>
          <p>
            {" "}
            <span className="font-bold text-primary-200">Hours:</span>
            <span className="text-xs">
              {" "}
              Monday to Sunday: 10:00 am to 7:00 pm
            </span>
          </p>
         
        </div>
         
        
      </div>
 {/* Copyright */}
 <div className="h-4 py-8 text-xs text-center text-secondary-300">
        <p>© 2024 Ruan Thai - All rights reserved.</p>
      </div>
     
    </footer>
  );
};

export default Footer;
