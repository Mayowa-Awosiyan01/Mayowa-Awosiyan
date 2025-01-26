import Image from "next/image";

interface ProjectProps {
  link: string;
  alt: string;
  children: React.ReactNode;
}

export default function Project({ link, alt, children }: ProjectProps) {
  return (
    <div className="">
      <Image src={link} alt={alt} />
      {children}
    </div>
  );
}
