"use client";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from "next/link";

const Navigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMassageOpen, setMassageOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMassageMenu = () => {
    setMassageOpen(!isMassageOpen);
  };

  return (
    <nav className="bg-secondary-100">
      <div className="container px-6 mx-auto lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold tracking-widest text-black uppercase">
              <Link href="#">LOGO</Link>
            </h1>
          </div>
          {/* HAMBURGER */}
          <div className="block lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="flex items-center px-3 py-2 text-gray-300 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <IoClose className="text-5xl text-gray-500" />
              ) : (
                <FiMenu className="text-5xl text-gray-500" />
              )}
            </button>
          </div>

          {/* LARGE SCREEN =======================================*/}
          <div className="hidden lg:block">
            <div className="flex items-center">
              {/* HOME Link */}
              <Link
                href="/"
                className="flex flex-row items-center px-3 py-2 ml-4 text-lg font-semibold rounded-md focus:outline-none hover:text-secondary-600 focus:text-secondary-600"
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="flex flex-row items-center px-3 py-2 ml-4 text-lg font-semibold rounded-md hover:text-secondary-600 focus:text-secondary-600 focus:outline-none"
              >
                ABOUT
              </Link>

              {/* MASSAGE Menu */}
              <div className="relative">
                <button
                  onClick={toggleMassageMenu}
                  className="flex flex-row items-center px-3 py-2 ml-4 text-lg font-semibold focus:outline-none hover:text-secondary-600 focus:text-secondary-600"
                >
                  <span className="mx-1">MASSAGE</span>
                  {isMassageOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {/* MASSAGE dropdown */}
                {isMassageOpen && (
                  <div className="absolute z-20 mt-2 origin-top-right shadow-lg w-72 left-8">
                    <div className="py-1 bg-white rounded-md shadow-xs">
                      <Link
                        href="/massage-overview"
                        className="flex flex-row items-center px-4 py-2 text-lg hover:bg-secondary-101 focus:bg-secondary-101"
                      >
                        MASSAGE OVERVIEW
                      </Link>
                      <Link
                        href="/thai-massage-without-oil"
                        className="flex flex-row items-center px-4 py-2 text-lg hover:bg-secondary-101 focus:bg-secondary-101"
                      >
                        THAI MASSAGE WITHOUT OIL
                      </Link>
                      <Link
                        href="/thai-massage-with-oil"
                        className="flex flex-row items-center px-4 py-2 text-lg focus:outline-none hover:bg-secondary-101 focus:bg-secondary-101"
                      >
                        THAI MASSAGE WITH OIL
                      </Link>
                      <Link
                        href="/foot-reflexology"
                        className="flex flex-row items-center px-4 py-2 text-lg focus:outline-none hover:bg-secondary-101 focus:bg-secondary-101"
                      >
                        FOOT REXLEXOLOGY
                      </Link>
                      <Link
                        href="/couple massage"
                        className="flex flex-row items-center px-4 py-2 text-lg focus:outline-none hover:bg-secondary-101 focus:bg-secondary-101"
                      >
                        COUPLE MASSAGE
                      </Link>
                      <Link
                        href="/oil massage"
                        className="flex flex-row items-center px-4 py-2 text-lg focus:outline-none hover:bg-secondary-101 focus:bg-secondary-101"
                      >
                        OIL MASSAGE
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/beauty-treatments"
                className="flex flex-row items-center px-3 py-2 ml-4 text-lg font-semibold rounded-md focus:outline-none hover:text-secondary-600 focus:text-secondary-600"
              >
                BEAUTY
              </Link>
              <Link
                href="/spa-packages"
                className="flex flex-row items-center px-3 py-2 ml-4 text-lg font-semibold rounded-md focus:outline-none hover:text-secondary-600 focus:text-secondary-600"
              >
                SPA PACKAGES
              </Link>
              <Link
                href="/price-list"
                className="flex flex-row items-center px-3 py-2 ml-4 text-lg font-semibold rounded-md focus:outline-none hover:text-secondary-600 focus:text-secondary-600"
              >
                PRICE LIST
              </Link>
              <Link
                href="/contact"
                className="flex flex-row items-center px-3 py-2 ml-4 text-lg font-semibold rounded-md focus:outline-none hover:text-secondary-600 focus:text-secondary-600"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE SCREEN============================= */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-3 pt-2 pb-3 space-y-1 bg-secondary-500">
            <Link
              href="/"
              className="block w-full px-3 py-2 text-lg font-medium text-white focus:outline-none hover:bg-secondary-400 focus:bg-secondary-400"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block w-full px-3 py-2 text-lg font-medium text-white focus:outline-none hover:bg-secondary-400 focus:bg-secondary-400"
            >
              About
            </Link>
            {/* MASSAGE Menu in Mobile Menu */}

            <button
              onClick={toggleMassageMenu}
              className="flex items-center px-3 py-2 text-lg font-medium text-white focus:outline-none hover:bg-secondary-400 focus:bg-secondary-400"
            >
              <span className="pr-1">Massage</span>
              {isMassageOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {/* MASSAGE Dropdown in Mobile Menu */}
            {isMassageOpen && (
              <div className="w-full px-5">
                <Link
                  href="/massage-overview"
                  className="block w-full px-3 py-2 text-lg font-medium text-white focus:outline-none hover:bg-secondary-400 focus:bg-secondary-400 hover:border-b-2 border-primary-100 focus:border-b-2"
                >
                  Massage Overview
                </Link>
                <Link
                  href="/thai-massage-without-oil"
                  className="block w-full px-3 py-2 text-lg font-medium text-white focus:outline-none hover:bg-secondary-400 focus:bg-secondary-400 hover:border-b-2 border-primary-100 focus:border-b-2"
                >
                  Thai Massage Without Oil
                </Link>
                <Link
                  href="/thai-massage-with-oil"
                  className="block w-full px-3 py-2 text-lg font-medium text-white focus:outline-none hover:bg-secondary-400 focus:bg-secondary-400 hover:border-b-2 border-primary-100 focus:border-b-2"
                >
                  Thai Massage With Oil
                </Link>
                <Link
                  href="/foot-reflexology"
                  className="block w-full px-3 py-2 text-lg font-medium text-white focus:outline-none hover:bg-secondary-400 focus:bg-secondary-400 hover:border-b-2 border-primary-100 focus:border-b-2"
                >
                  Foot Reflexology
                </Link>
                <Link
                  href="/couple-massage"
                  className="block w-full px-3 py-2 text-lg font-medium text-white focus:outline-none hover:bg-secondary-400 focus:bg-secondary-400 hover:border-b-2 border-primary-100 focus:border-b-2"
                >
                  Couple Massage
                </Link>
                <Link
                  href="/oil massage"
                  className="block w-full px-3 py-2 text-lg font-medium text-white focus:outline-none hover:bg-secondary-400 focus:bg-secondary-400 hover:border-b-2 border-primary-100 focus:border-b-2"
                >
                  Oil Massage
                </Link>
              </div>
            )}

            
            {/* ===================================================== */}

            <Link
              href="/beauty-treatments"
              className="block w-full px-3 py-2 text-lg font-medium text-white focus:outline-none hover:bg-secondary-400 focus:bg-secondary-400"
            >
              Beauty
            </Link>
            <Link
              href="/spa-packages"
              className="block w-full px-3 py-2 text-lg text-white focus:outline-none hover:bg-secondary-400 focus:bg-secondary-400"
            >
              Spa Packages
            </Link>
            <Link
              href="/price-list"
              className="block w-full px-3 py-2 text-lg font-medium text-white focus:outline-none hover:bg-secondary-400 focus:bg-secondary-400"
            >
              Price List
            </Link>
            <Link
              href="/contact"
              className="block w-full px-3 py-2 text-lg font-medium text-white focus:outline-none hover:bg-secondary-400 focus:bg-secondary-400"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
