import React from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="py-12 text-white bg-primary-400">
      <div className="container flex flex-wrap justify-between mx-auto">
        {/* Column 1: Logo */}
        <div className="w-full pl-4 mb-8 md:w-1/4 md:mb-0">
          <div className="flex flex-col mb-4">
            <Image
              src="/assets/logo.webp"
              alt="Logo"
              width={120}
              height={120}
            />
            <h2 className="text-lg font-bold mt-7 text-secondary-300">
              Connect with Us
            </h2>
          </div>
          <div className="flex">
            <div className="pr-6">
              <FaFacebook className="text-3xl text-primary-200" />
            </div>
            <div className="">
              <MdEmail className="text-3xl text-primary-200" />
            </div>
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
        <div className="w-full pl-4 mb-8 md:w-1/4 md:mb-0">
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
        </div>

        {/* Column 4: Contact Ruan Thai */}
        <div className="w-full pl-4 pr-4 md:w-1/4">
          <h2 className="mb-3 text-lg font-bold text-secondary-300">
            CONTACT RUAN THAI
          </h2>
          <p>
            <span className="font-bold text-primary-300">Call:</span>
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
      <div className="mt-4 text-xs text-center text-secondary-300">
        <p>© 2024 Ruan Thai - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
