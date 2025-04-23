"use client";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="fixed w-screen grid grid-cols-4 z-20 top-0 text-center p-4 pb-6 font-bold text-lg">
      <div>
        <Link href={"/"} className="flex-initial">
          Home
        </Link>
      </div>
      <div>
        <a
          href={"/Resume.pdf"}
          target="_blank"
          className="flex-initial"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
      <div>
        <Link
          className="flex-initial"
          href={"https://www.linkedin.com/in/mayowa-awosiyan/"}
        >
          LinkedIn
        </Link>
      </div>
      <div>
        <Link
          className="flex-initial"
          href={"https://github.com/Mayowa-Awosiyan01"}
        >
          GitHub
        </Link>
      </div>
    </div>
  );
}
