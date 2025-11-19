"use client";

import Image from "next/image";
import whiteArrow from "@/public/assets/images/blackscroll2.svg";
import blackArrow from "@/public/assets/images/whitescroll2.svg";
import pinkarrow from "@/public/assets/images/pinkarrow.svg";
import whiteCross from "@/public/assets/images/white-cross.svg"

export default function VisitButton({ 
  isOn, 
  onToggle, 
  label = "Visit",
  variant = "default"
}) {

  /** BUTTON BACKGROUND */
  const buttonBg = variant === "pink"
    ? isOn
      ? "bg-white"   // ON gradient
      : "bg-white"   
     : variant === "blue"
      ? isOn
        ? "bg-[#CD56D0]"
        : "bg-[#CD56D0]"                                    // OFF white
    : isOn
      ? "bg-[#262626]"
      : "bg-[#F6F7F9]";

  /** CIRCLE BACKGROUND */
  const circleBg = variant === "pink"
    ? isOn
      ? "bg-gradient-to-r from-[#D953FF] to-[#FF70A2]"                                   // ON dark circle
      : "bg-gradient-to-r from-[#D953FF] to-[#FF70A2]"   // OFF gradient
    : variant === "blue"
      ? isOn
        ? "bg-white"
        : "bg-white"  
    : isOn
      ? "bg-white"
      : "bg-[#262626]";

  /** ARROW ICON */
  const arrowIcon =
    variant === "pink"
      ? isOn
        ? whiteCross     // ON → pink arrow
        : blackArrow    // OFF → black arrow
       : variant === "blue"
      ? isOn
        ? whiteArrow
        : pinkarrow
      : isOn
        ? whiteArrow
        : blackArrow;

  /** TEXT COLOR */
  const textColor =
    variant === "pink"
      ? isOn
        ? "text-[#262626]"      // ON → white text
        : "text-[#262626]"  // OFF → black text
         : variant === "blue"
      ? isOn
        ? "text-white"
        : "text-white"
      : isOn
        ? "text-white"
        : "text-[#262626]";




  return (
    <button
      onClick={onToggle}
      className={` 
        relative flex items-center cursor-pointer  
        h-[46px] md:h-[50px]
        rounded-[50px]
        border border-[#E2E4E97A]
        shadow-[0px_3px_6px_0px_#00000014]
        overflow-hidden transition-all duration-300
        ${buttonBg}
        pl-[32px] pr-[32px]
      `}
    >
      {/* Sliding Circle */}
      <span
        className={`
          absolute top-[4px]
          w-[36px] h-[36px] md:w-[42px] md:h-[42px]
          rounded-full flex items-center justify-center
          transition-all duration-300
          ${isOn ? "right-[4px]" : "left-[4px]"}
          ${circleBg}
        `}
      >
        <Image
          src={arrowIcon}
          alt="arrow"
          className="w-[16px] h-[16px] md:w-[18px] md:h-[18px]"
        />
      </span>

      {/* Label */}
      <span
        className={`
          font-inter font-medium
          text-[14px] md:text-[16px]
          transition-transform duration-300
          whitespace-nowrap
          ${isOn ? "translate-x-[-20px]" : "translate-x-[20px]"}
          ${textColor}
        `}
      >
        {label}
      </span>
    </button>
  );
}
