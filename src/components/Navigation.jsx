"use client";
import { useState, useRef, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  // State to track whether the mobile menu is open
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  // State to track whether the "Massage" dropdown is open
  const [isMassageOpen, setMassageOpen] = useState(false);
  // Ref to track the "Massage" dropdown container
  const dropdownRef = useRef(null);

  // Function to toggle the mobile menu open/closed
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to toggle the "Massage" dropdown open/closed
  const toggleMassageMenu = () => {
    setMassageOpen(!isMassageOpen);
  };

  // Function to handle clicks outside the "Massage" dropdown to close it
  const handleClickOutside = (event) => {
    // Check if the click was outside the dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setMassageOpen(false); // Close the dropdown
    }
  };

  // useEffect hook to add the event listener for detecting clicks outside the dropdown
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-secondary-100">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/assets/logo-text.webp"
                alt="logo"
                width={200}
                height={200}
              />
            </Link>
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
          <div className="hidden text-lg lg:block">
            <div className="flex items-center">
              {/* HOME Link */}
              <Link
                href="/"
                className="flex flex-row items-center px-3 py-2 ml-4 font-semibold rounded-md focus:outline-none hover:text-secondary-600 focus:text-secondary-600"
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="flex flex-row items-center px-3 py-2 ml-4 font-semibold rounded-md hover:text-secondary-600 focus:text-secondary-600 focus:outline-none"
              >
                ABOUT
              </Link>

              {/* MASSAGE Menu */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleMassageMenu}
                  className="flex flex-row items-center px-3 py-2 ml-4 font-semibold focus:outline-none hover:text-secondary-600 focus:text-secondary-600"
                >
                  <span className="mx-1">MASSAGE</span>
                  {isMassageOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {/* MASSAGE dropdown */}
                {isMassageOpen && (
                  <div className="absolute z-40 mt-2 origin-top-right shadow-lg text-secondary-700 w-80 left-8">
                    <div className="py-1 bg-white rounded-md shadow-xs">
                      <Link
                        href="/massage-overview"
                        passHref
                        className="flex flex-row items-center px-4 py-2 hover:bg-secondary-101 focus:bg-secondary-101"
                        onClick={() => setMassageOpen(false)}
                      >
                        MASSAGE OVERVIEW
                      </Link>
                      <Link
                        href="/traditional-thai-massage"
                        className="flex flex-col items-start px-4 py-2 hover:bg-secondary-101 focus:bg-secondary-101"
                        onClick={() => setMassageOpen(false)}
                      >
                        <span>TRADITIONAL THAI MASSAGE</span>
                        <span className="text-secondary-400">(No Oil)</span>
                      </Link>
                      <Link
                        href="/thai-oil-mix-massage"
                        className="flex flex-col items-start px-4 py-2 hover:bg-secondary-101 focus:bg-secondary-101"
                        onClick={() => setMassageOpen(false)}
                      >
                        <span>THAI OIL MIX MASSAGE</span>
                        <span className="text-secondary-400">(With Oil)</span>
                      </Link>
                      <Link
                        href="/thai-hot-oil-massage"
                        className="flex flex-col items-start px-4 py-2 focus:outline-none hover:bg-secondary-101 focus:bg-secondary-101"
                        onClick={() => setMassageOpen(false)}
                      >
                        <span>THAI HOT OIL MASSAGE</span>
                        <span className="text-secondary-400">(With Oil)</span>
                      </Link>
                      <Link
                        href="/foot-reflexology"
                        className="flex flex-row items-center px-4 py-2 focus:outline-none hover:bg-secondary-101 focus:bg-secondary-101"
                        onClick={() => setMassageOpen(false)}
                      >
                        FOOT REXLEXOLOGY
                      </Link>
                      <Link
                        href="/couple-massage"
                        className="flex flex-row items-center px-4 py-2 focus:outline-none hover:bg-secondary-101 focus:bg-secondary-101"
                        onClick={() => setMassageOpen(false)}
                      >
                        COUPLE MASSAGE
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/beauty-treatments"
                className="flex flex-row items-center px-3 py-2 ml-4 font-semibold rounded-md focus:outline-none hover:text-secondary-600 focus:text-secondary-600"
              >
                BEAUTY
              </Link>
              <Link
                href="/spa-packages"
                className="flex flex-row items-center px-3 py-2 ml-4 font-semibold rounded-md focus:outline-none hover:text-secondary-600 focus:text-secondary-600"
              >
                SPA PACKAGES
              </Link>
              <Link
                href="/price-list"
                className="flex flex-row items-center px-3 py-2 ml-4 font-semibold rounded-md focus:outline-none hover:text-secondary-600 focus:text-secondary-600"
              >
                PRICE LIST
              </Link>
              <Link
                href="/contact"
                className="flex flex-row items-center px-3 py-2 ml-4 font-semibold rounded-md focus:outline-none hover:text-secondary-600 focus:text-secondary-600"
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
          <div className="px-3 pt-2 pb-3 space-y-1 bg-secondary-600">
            <Link
              href="/"
              className="block w-full px-3 py-2 text-xl font-medium text-white focus:outline-none hover:bg-secondary-400 focus:bg-secondary-400"
              onClick={closeMobileMenu}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="block w-full px-3 py-2 text-xl font-medium text-white focus:outline-none hover:bg-secondary-400 focus:bg-secondary-400"
              onClick={closeMobileMenu}
            >
              ABOUT
            </Link>
            {/* MASSAGE Menu in Mobile Menu */}
            <div ref={dropdownRef}>
              <button
                onClick={toggleMassageMenu}
                className="flex items-center px-3 py-2 text-xl font-medium text-white focus:outline-none hover:bg-secondary-400 focus:bg-secondary-400"
              >
                <span className="pr-1">MASSAGE</span>
                {isMassageOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {/* MASSAGE Dropdown in Mobile Menu */}
              {isMassageOpen && (
                <div className="w-full px-5">
                  <Link
                    href="/massage-overview"
                    className="block w-full px-3 py-2 text-base font-medium text-white focus:outline-none hover:bg-secondary-400 focus:bg-secondary-400 hover:border-b-2 border-primary-100 focus:border-b-2"
                    onClick={closeMobileMenu}
                  >
                    MASSAGE OVERVIEW
                  </Link>
                  <Link
                    href="/traditional-thai-massage"
                    className="block w-full px-3 py-2 text-base font-medium text-white focus:outline-none hover:bg-secondary-400 focus:bg-secondary-400 hover:border-b-2 border-primary-100 focus:border-b-2"
                    onClick={closeMobileMenu}
                  >
                    TRADITIONAL THAI MASSAGE <br></br>
                    <span className="text-secondary-200">(No Oil)</span>
                  </Link>
                  <Link
                    href="/thai-oil-mix-massage"
                    className="block w-full px-3 py-2 text-base font-medium text-white focus:outline-none hover:bg-secondary-400 focus:bg-secondary-400 hover:border-b-2 border-primary-100 focus:border-b-2"
                    onClick={closeMobileMenu}
                  >
                    THAI OIL MIX MASSAGE <br></br>
                    <span className="text-secondary-200">(With Oil)</span>
                  </Link>
                  <Link
                    href="/thai-hot-oil-massage"
                    className="block w-full px-3 py-2 text-base font-medium text-white focus:outline-none hover:bg-secondary-400 focus:bg-secondary-400 hover:border-b-2 border-primary-100 focus:border-b-2"
                    onClick={closeMobileMenu}
                  >
                    THAI HOT OIL MASSAGE <br></br>
                    <span className="text-secondary-200">(With Oil)</span>
                  </Link>
                  <Link
                    href="/foot-reflexology"
                    className="block w-full px-3 py-2 text-base font-medium text-white focus:outline-none hover:bg-secondary-400 focus:bg-secondary-400 hover:border-b-2 border-primary-100 focus:border-b-2"
                    onClick={closeMobileMenu}
                  >
                    FOOT REFLEXOLOGY
                  </Link>
                  <Link
                    href="/couple-massage"
                    className="block w-full px-3 py-2 text-base font-medium text-white focus:outline-none hover:bg-secondary-400 focus:bg-secondary-400 hover:border-b-2 border-primary-100 focus:border-b-2"
                    onClick={closeMobileMenu}
                  >
                    COUPLE MASSAGE
                  </Link>
                </div>
              )}

              <Link
                href="/beauty-treatments"
                className="block w-full px-3 py-2 text-xl font-medium text-white focus:outline-none hover:bg-secondary-400 focus:bg-secondary-400"
                onClick={closeMobileMenu}
              >
                BEAUTY
              </Link>
              <Link
                href="/spa-packages"
                className="block w-full px-3 py-2 text-xl font-medium text-white focus:outline-none hover:bg-secondary-400 focus:bg-secondary-400"
                onClick={closeMobileMenu}
              >
                SPA PACKAGES
              </Link>
              <Link
                href="/price-list"
                className="block w-full px-3 py-2 text-xl font-medium text-white focus:outline-none hover:bg-secondary-400 focus:bg-secondary-400"
                onClick={closeMobileMenu}
              >
                PRICE LIST
              </Link>
              <Link
                href="/contact"
                className="block w-full px-3 py-2 text-xl font-medium text-white focus:outline-none hover:bg-secondary-400 focus:bg-secondary-400"
                onClick={closeMobileMenu}
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
