import Link from "next/link";
//import { usePathname } from 'next/navigation';

export default function NavBar() {
  //const pathname = usePathname();
  return (
    <div className="grid grid-rows-1 grid-cols-5 text-center p-4 font-bold">
      <div>
        <Link href={"/"} className="flex-initial">
          Home
        </Link>
      </div>
      <div>
        <Link href={"/resume"} className="flex-initial">
          Resume
        </Link>
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
      <div>
        <Link className="flex-initial" href={"/projects"}>
          Projects
        </Link>
      </div>
    </div>
  );
}
