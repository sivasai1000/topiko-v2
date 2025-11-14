"use client";

import Image from "next/image";
import Text from "@/components/ui/globals/test";

export default function StoryCard({ image, name, role, city, text }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full text-left border border-[#E8E8E8] transition-all duration-300 hover:shadow-xl">
      {/* Top part */}
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={image}
          alt={name}
          width={56}
          height={56}
          className="rounded-full object-cover"
        />
        <div>
          <Text as="h5" className="font-semibold text-[#0E091F] text-[18px]">
            {name}
          </Text>
          <Text as="p" className="text-[#0E091FB3] text-[14px]">
            {role}, {city}
          </Text>
        </div>
      </div>

      {/* Story Text */}
      <Text as="p" className="text-[#383247] leading-[24px] text-[15px]">
        {text}
      </Text>
    </div>
  );
}
