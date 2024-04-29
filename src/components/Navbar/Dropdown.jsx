"use client";
import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { chevronDown, chevronUp } from "ionicons/icons";

const Dropdown = ({ name, links, toggleMassageMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);

    toggleMassageMenu();
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex flex-row items-center px-3 py-2 text-lg rounded-md focus:outline-none"
      >
        <span className="mx-2">{name}</span>
        <IonIcon icon={isOpen ? chevronUp : chevronDown} className="mx-2" />
      </button>
      {isOpen && (
        <div className="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg">
          <div className="py-1 bg-white rounded-md shadow-xs">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="flex flex-row items-center px-4 py-2 text-sm focus:outline-none"
              >
                {link.Head}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
