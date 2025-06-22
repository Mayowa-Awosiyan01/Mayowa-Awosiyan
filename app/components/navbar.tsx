"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScrolling = () => {
      if (window.scrollY > 15) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScrolling);
    return () => {
      window.removeEventListener("scroll", handleScrolling);
    };
  }, []);

  return (
    <nav
      className={`grid grid-cols-4 z-0 text-center p-4 pb-6 font-bold bg-black text-lg  ${
        isSticky
          ? "fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm shadow-md"
          : "relative"
      }`}
    >
      <div>
        <Link
          href={"/"}
          className="flex-initial hover:text-gray-300 transition-colors"
        >
          Home
        </Link>
      </div>
      <div>
        <a
          href={"/Resume.pdf"}
          target="_blank"
          className="flex-initial hover:text-gray-300 hover:bg-white transition-colors"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
      <div>
        <Link
          className="flex-initial hover:text-gray-300 transition-colors"
          href={"https://www.linkedin.com/in/mayowa-awosiyan/"}
        >
          LinkedIn
        </Link>
      </div>
      <div>
        <Link
          className="flex-initial hover:text-gray-300 transition-colors"
          href={"https://github.com/Mayowa-Awosiyan01"}
        >
          GitHub
        </Link>
      </div>
    </nav>
  );
}
