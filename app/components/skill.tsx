//this component will house an image representing the logo of a skill. When a user hovers over it it will
//expand to show the name of the skill. Finally when clicked on it will toggle to a bigger size where it will
//show where I have used the skill such as course work previous jobs and projects that I used the skill for/in.
import Image from "next/image";
interface SkillProps {
  link: string;
  description: string; // Optional prop
  alt: string;
}

export default function Skill({ link, alt, description }: SkillProps) {
  return (
    <span className="bg-zinc-500 p-4">
      <Image src={link} alt={alt} width={100} height={100} />
      <span className="text-red-400">{description}</span>
    </span>
  );
}
