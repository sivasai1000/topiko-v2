"use client";
import React from "react";
import Text from "@/components/ui/globals/test";

export default function StoryCard({ image, name, role, city, text }) {
  return (
    <div
  className="
    w-full
    bg-white
    rounded-[20px]
    p-4 sm:p-6
    border border-[#12376914]
    shadow-sm
    flex flex-col
    gap-3
    text-left
  "
>
  {/* Top Row */}
  <div className="flex items-start gap-3 text-left mt-3">
    <img
      src={image}
      alt={name}
      className="
        w-16 h-16
        rounded-[12px]
        border-[4px] border-[#F4F4F4]
        bg-[#F4F4F4]
        object-cover
      "
    />

    <div className="flex flex-col text-left">
      <Text
        as="h5"
        className="
          font-[Anek_Latin]
          font-medium
          text-[18px]
          leading-[20px]
          text-[#242424]
        "
      >
        {name} – {role}
      </Text>

      <Text
        as="p"
        className="
          font-[Anek_Latin]
          font-normal
          text-[14px]
          leading-[18px]
          text-[#0E091F8A]
        "
      >
        {city}
      </Text>
    </div>
  </div>

  {/* Review Text */}
  <Text
    as="p"
    className="
      font-[Anek_Latin]
      font-normal
      text-[16px]
      leading-[22px]
      text-[#0E091F99]
    "
  >
    “{text}”
  </Text>
</div>

  );
}
