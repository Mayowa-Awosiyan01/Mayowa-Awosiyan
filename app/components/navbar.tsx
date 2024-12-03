import Link from "next/link";

export default function NavBar() {
  console.log("NavBar is rendering");
  return (
    <div className="grid grid-rows-1 grid-cols-4 text-center p-4 font-bold">
      <div>
        <Link href={""} className="flex-initial">
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
        <Link className="flex-initial" href={"#"}>
          Projects
        </Link>
      </div>
    </div>
  );
}
