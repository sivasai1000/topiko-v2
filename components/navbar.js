"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // ⭐ Simple Active Section Logic (No IntersectionObserver)
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "solutions", "pricing", "faq"];

      let current = "home";

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const offsetTop = el.offsetTop - 150; 
          if (window.scrollY >= offsetTop) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ⭐ Active Link Styling
  const navClass = (id) =>
    activeSection === id
      ? "text-[#FFFDF8]"
      : "text-[rgba(255,253,248,0.6)] hover:text-[#FFFDF8]";

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
      {/* Desktop Navigation */}
      <ul
        className="
          hidden md:flex justify-between items-center w-full max-w-[620px]
          list-none m-0 p-0
        "
      >
        <li>
          <a
            href="#home"
            className={`font-inter text-[20px] font-medium transition-colors duration-300 ${navClass(
              "home"
            )}`}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#solutions"
            className={`font-inter text-[20px] font-medium transition-colors duration-300 ${navClass(
              "solutions"
            )}`}
          >
            Solutions
          </a>
        </li>

        {/* Center Logo */}
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
            className={`font-inter text-[20px] font-medium transition-colors duration-300 ${navClass(
              "pricing"
            )}`}
          >
            Pricing
          </a>
        </li>

        <li>
          <a
            href="#faq"
            className={`font-inter text-[20px] font-medium transition-colors duration-300 ${navClass(
              "faq"
            )}`}
          >
            FAQ
          </a>
        </li>
      </ul>

      {/* Mobile Navbar */}
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

        <div className="w-6 h-5"></div>
      </div>

      {/* ⭐ Mobile Dropdown Menu with Active Highlight */}
      {menuOpen && (
        <div
          className="
            absolute top-[70px] left-0 w-full
            bg-[rgba(20,20,25,0.95)] backdrop-blur-xl
            border border-white/10 rounded-2xl
            flex flex-col items-center gap-4 py-6
            text-[16px]
            animate-fadeIn
          "
        >
          <a
            href="#home"
            className={`${navClass("home")} transition-colors`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>

          <a
            href="#solutions"
            className={`${navClass("solutions")} transition-colors`}
            onClick={() => setMenuOpen(false)}
          >
            Solutions
          </a>

          <a
            href="#pricing"
            className={`${navClass("pricing")} transition-colors`}
            onClick={() => setMenuOpen(false)}
          >
            Pricing
          </a>

          <a
            href="#faq"
            className={`${navClass("faq")} transition-colors`}
            onClick={() => setMenuOpen(false)}
          >
            FAQ
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
