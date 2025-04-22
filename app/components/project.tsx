"use client";
import Image from "next/image";
import { useState } from "react";
interface ProjectProps {
  link: string;
  alt: string;
  children: React.ReactNode;
  prompt: string;
  onProjectSelect: () => void;
}

export default function Project({
  link,
  alt,
  prompt,
  onProjectSelect,
}: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false);
  //const [isSelected, setSelected] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onProjectSelect}
      className="grid px-8 text-lg border-solid border-2 bg-gray-700 place-content-evenly rounded-xl hover:outline  hover:outline-6 hover:outline-white"
    >
      <div className="flex justify-center items-center">
        <Image
          layout="Responsive"
          className="object-contain max-w-full max-h-[100px] aspect-square"
          src={link}
          alt={alt}
          width={100}
          height={100}
        />
      </div>

      <div>
        <p>{prompt}</p>
      </div>
    </div>
  );
}
