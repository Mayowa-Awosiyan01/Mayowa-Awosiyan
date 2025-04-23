"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScrolling = () => {
      const windowHeight = window.innerHeight;
      if (window.scrollY > windowHeight) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScrolling);
  });

  return (
    <div
      className={`grid grid-cols-4 z-0 text-center p-4 pb-6 font-bold bg-black text-lg  ${
        isSticky
          ? "fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm shadow-md"
          : "relative"
      }`}
    >
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
