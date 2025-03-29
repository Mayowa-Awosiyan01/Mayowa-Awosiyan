import Image from "next/image";

interface ProjectProps {
  link: string;
  alt: string;
  children: React.ReactNode;
}

export default function Project({ link, alt, children }: ProjectProps) {
  return (
    <div className="grid grid-cols-2 px-8 text-lg border-solid border-2 bg-slate-600 place-content-evenly rounded-xl hover:outline  hover:outline-6 hover:outline-white">
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
      <div>
        <p>{children}</p>
      </div>
    </div>
  );
}
