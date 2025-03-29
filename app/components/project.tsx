"use client";
import Image from "next/image";
import { useState } from "react";
interface ProjectProps {
  link: string;
  alt: string;
  children: React.ReactNode;
}

export default function Project({ link, alt, children }: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="grid px-8 text-lg border-solid border-2 bg-slate-600 place-content-evenly rounded-xl hover:outline  hover:outline-6 hover:outline-white transition-all duration-300"
    >
      <div className="flex justify-center items-center">
        <Image
          layout="Responsive"
          className="w-full h-full object-contain"
          src={link}
          alt={alt}
          width={100}
          height={200}
        />
      </div>
      {isHovered && (
        <div>
          <p>{children}</p>
        </div>
      )}
    </div>
  );
}
