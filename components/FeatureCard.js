"use client";
import React from "react";
import Text from "@/components/ui/globals/test";


const FeatureCard = ({
  image,
  title,
  description,
}) => {

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between  overflow-hidden px-2 ">

<div className="w-full aspect-square bg-white flex items-center justify-center overflow-hidden   ">
  <img
    src={image}
    alt={title}
    className="w-full h-[300px] object-contain px-2"
  />
</div>

      <div className="px-2 flex flex-col justify-between flex-grow text-center ">
        <div>
         
          <Text  as="h5" className="!text-start mx-auto ">
            {title}
          </Text>
          <Text  as="h4" className="!text-start mx-auto mb-5 ">
            {description}
          </Text>
        </div>

       
      </div>
    </div>
  );
};

export default FeatureCard;
