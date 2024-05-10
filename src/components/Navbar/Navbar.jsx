"use client";
import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { menu, close, chevronDown, chevronUp } from "ionicons/icons";
import Dropdown from "./Dropdown";
import { DropdownLinks } from "./DropdownLinks";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMassageOpen, setMassageOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const toggleMassageMenu = () => {
    setMassageOpen(!isMassageOpen);
  };
  return (
    <div>
      <nav>
        {/* HAMBURGER */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="flex items-center px-3 py-2 text-gray-300 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <IonIcon icon={close} size="large" />
            ) : (
              <IonIcon icon={menu} size="large" />
            )}
          </button>
        </div>

        {/* LARGE SCREEN */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-center">
            <Link
              href="/"
              className="flex flex-row items-center px-3 py-2 ml-4 text-lg rounded-md focus:outline-none"
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="flex flex-row items-center px-3 py-2 ml-4 text-lg rounded-md focus:outline-none"
            >
              ABOUT
            </Link>
            {DropdownLinks.map((dropdown, index) => (
              <Dropdown
                key={index}
                name={dropdown.name}
                links={dropdown.links}
                toggleMassageMenu={toggleMassageMenu}
              />
            ))}
            <Link
              href="/beauty-treatments"
              className="flex flex-row items-center px-3 py-2 ml-4 text-lg rounded-md focus:outline-none"
            >
              BEAUTY
            </Link>
            <Link
              href="spa-packages"
              className="flex flex-row items-center px-3 py-2 ml-4 text-lg rounded-md focus:outline-none"
            >
              SPA PACKAGES
            </Link>
            <Link
              href="/price-list"
              className="flex flex-row items-center px-3 py-2 ml-4 text-lg rounded-md focus:outline-none"
            >
              PRICE LIST
            </Link>
            <Link
              href="/contact"
              className="flex flex-row items-center px-3 py-2 ml-4 text-lg rounded-md focus:outline-none"
            >
              CONTACT
            </Link>
          </div>
        </div>

        {/* MOBILE SCREEN */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* HOME Link in Mobile Menu */}
              <Link
                href="/"
                className="block w-full px-3 py-2 text-sm font-medium rounded-md focus:outline-none"
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="block w-full px-3 py-2 text-sm font-medium rounded-md focus:outline-none"
              >
                ABOUT
              </Link>
              {/* MASSAGE Menu in Mobile Menu */}

              <button
                onClick={toggleMassageMenu}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white focus:outline-none"
              >
                <span>MASSAGE</span>
                <IonIcon
                  icon={isMassageOpen ? chevronUp : chevronDown}
                  className="ml-2"
                />
              </button>
              {/* MASSAGE Dropdown in Mobile Menu */}
              {isMassageOpen && (
                <div className="w-full">
                  <div className="py-1">
                    {DropdownLinks[0].links.map((link, index) => (
                      <Link
                        key={index}
                        href={link.link}
                        toggleMassageMenu={toggleMassageMenu}
                        className="block w-full px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none"
                      >
                        {link.Head}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <Link
                href="/beauty-treatments"
                className="block w-full px-3 py-2 text-sm font-medium rounded-md focus:outline-none"
              >
                BEAUTY
              </Link>
              <Link
                href="/spa-packages"
                className="block w-full px-3 py-2 text-sm font-medium rounded-md focus:outline-none"
              >
                SPA PACKAGES
              </Link>
              <Link
                href="/price-list"
                className="block w-full px-3 py-2 text-sm font-medium rounded-md focus:outline-none"
              >
                PRICE LIST
              </Link>
              <Link
                href="/contact"
                className="block w-full px-3 py-2 text-sm font-medium rounded-md focus:outline-none"
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
