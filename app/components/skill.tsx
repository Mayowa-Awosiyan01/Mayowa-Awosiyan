//this component will house an image representing the logo of a skill. When a user hovers over it it will
//expand to show the name of the skill. In the future I want it so that when clicked on it will toggle to a bigger size where it will
//show where I have used the skill such as course work previous jobs and projects that I used the skill for/in.
"use client";
import Image from "next/image";
import { useState } from "react";
interface SkillProps {
  link: string;
  children?: React.ReactNode;
  description?: string;
  alt: string;
}

export default function Skill({ link, alt, children }: SkillProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-16 bg-gray-700 p-4 mx-2 hover:p-6 hover:h-32 hover:self-center cursor-default transition-all rounded-lg flex flex-col items-center justify-center"
    >
      <Image
        className="place-content-center"
        src={link}
        alt={alt}
        width={30}
        height={30}
      />
      {isHovered && (
        <div className="text-center w-full mt-2">
          <span className="text-center">{children}</span>
        </div>
      )}
    </button>
  );
}
