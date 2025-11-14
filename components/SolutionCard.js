"use client";
import React from "react";
import VisitButton from "./VisitButton"; // <-- NEW reusable toggle button
import Text from "@/components/ui/globals/test";

const SolutionCard = ({
  image,
  title,
  description,
  learnMoreLink = "#",
  showButtons = false,
  visitLabel,
  isOn,
  onToggle,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300  flex flex-col justify-between overflow-hidden px-2 h-full">

      {/* Image */}
      <div
        className="
          w-full h-[270px] sm:h-[300px] md:h-[340px]
          bg-white flex items-center justify-center p-2
        "
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
     
        <div className="p-2 flex flex-col justify-between flex-grow  ">
        <div>
         
          <Text  as="h5" className="!text-start mx-auto ">
            {title}
          </Text>
          <Text  as="h4" className="!text-start mx-auto mb-5 ">
            {description}
          </Text>
        </div>

       
      

        {/* Footer Buttons */}
        {showButtons && (
          <div className="flex justify-between items-center mb-5">
            <a
              href={learnMoreLink}
              className="text-[#685EEF] font-medium text-[16px] hover:underline"
            >
              Learn more
            </a>

            {/* ⭐ Reusable VisitToggle */}
            <VisitButton
              isOn={isOn}
              onToggle={onToggle}
              label={visitLabel || "Visit"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SolutionCard;
