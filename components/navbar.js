"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-5 left-1/2 -translate-x-1/2 z-[1000]
        w-[687px] h-[66px] rounded-full px-6 py-2
        bg-[rgba(30,34,39,0.7)] backdrop-blur-[160px]
        border border-white/10 flex justify-center items-center
        max-md:w-[90%] max-md:px-4 max-md:py-2
      "
    >
      {/* Desktop / Tablet Navigation */}
      <ul
        className="
          hidden md:flex justify-between items-center w-full max-w-[620px]
          list-none m-0 p-0
        "
      >
        <li>
          <a
            href="#home"
            className="text-white text-[18px] font-medium hover:text-pink-400 transition-colors duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#solutions"
            className="text-white text-[18px] font-medium hover:text-pink-400 transition-colors duration-300"
          >
            Solutions
          </a>
        </li>

        {/* ✅ Center Logo */}
        <li className="flex items-center justify-center gap-2">
          <img
            src="/assets/images/topikonav.svg"
            alt="Topiko"
            className="w-6 h-auto"
          />
          <span
            className="
              font-medium text-[22px] uppercase
              bg-gradient-to-b from-[#E5BEE5] to-[#682C6A]
              bg-clip-text text-transparent
            "
          >
            TOPIKO
          </span>
        </li>

        <li>
          <a
            href="#pricing"
            className="text-white text-[18px] font-medium hover:text-pink-400 transition-colors duration-300"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="#faq"
            className="text-white text-[18px] font-medium hover:text-pink-400 transition-colors duration-300"
          >
            FAQ
          </a>
        </li>
      </ul>

      {/* ✅ Mobile Navbar */}
      <div className="w-full flex items-center justify-between md:hidden">
        {/* Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col justify-between w-6 h-5 focus:outline-none"
        >
          <span className="block w-full h-[3px] bg-white rounded"></span>
          <span className="block w-full h-[3px] bg-white rounded"></span>
          <span className="block w-full h-[3px] bg-white rounded"></span>
        </button>

        {/* Center Logo */}
        <div className="flex items-center justify-center gap-2 mx-auto">
          <img
            src="/assets/images/topikonav.svg"
            alt="Topiko"
            className="w-5 h-auto"
          />
          <span
            className="
              font-semibold text-[18px] uppercase
              bg-gradient-to-b from-[#E5BEE5] to-[#682C6A]
              bg-clip-text text-transparent
            "
          >
            TOPIKO
          </span>
        </div>

        {/* Placeholder to balance spacing */}
        <div className="w-6 h-5"></div>
      </div>

      {/* ✅ Slide-down menu for mobile */}
      {menuOpen && (
        <div
          className="
            absolute top-[70px] left-0 w-full
            bg-[rgba(20,20,25,0.95)] backdrop-blur-xl
            border border-white/10 rounded-2xl
            flex flex-col items-center gap-4 py-6
            text-white text-[16px]
            animate-fadeIn
          "
        >
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#solutions" onClick={() => setMenuOpen(false)}>Solutions</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
