"use client";

import Image from "next/image";
import whiteArrow from "@/public/assets/images/blackscroll2.svg";
import blackArrow from "@/public/assets/images/whitescroll2.svg";

export default function VisitButton({ isOn, onToggle, label = "Visit" }) {
  return (
    <button
      onClick={onToggle}
      className={`
        relative flex items-center
        h-[46px] md:h-[50px]
        rounded-[50px]
        border border-[#E2E4E97A]
        shadow-[0px_3px_6px_0px_#00000014]
        overflow-hidden transition-all duration-300
        ${isOn ? "bg-[#262626]" : "bg-[#F6F7F9]"}
        pl-[32px] pr-[32px]   /* reduced padding */
      `}
    >
      {/* Sliding Circle */}
      <span
        className={`
          absolute top-[4px]
          w-[36px] h-[36px] md:w-[42px] md:h-[42px]
          rounded-full flex items-center justify-center
          transition-all duration-300
          ${isOn
            ? "right-[4px] bg-white shadow-[0px_3px_6px_0px_#00000014]"
            : "left-[4px] bg-[#262626] shadow-[2px_4px_5px_0px_#FFFFFF1F_inset]"
          }
        `}
      >
        <Image
          src={isOn ? whiteArrow : blackArrow}
          alt="arrow"
          className="w-[16px] h-[16px] md:w-[18px] md:h-[18px]"
        />
      </span>

      {/* Sliding Label */}
      <span
        className={`
          font-inter font-medium
          text-[14px] md:text-[16px]
          leading-[20px] md:leading-[22px]
          whitespace-nowrap
          transition-transform duration-300
          ${isOn 
            ? "translate-x-[-20px] text-white" 
            : "translate-x-[20px] text-[#262626]"
          }
        `}
      >
        {label}
      </span>
    </button>
  );
}
