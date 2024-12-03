import Link from "next/link";

export default function NavBar() {
  //switch the p tags to links as the new pages are made
  return (
    <div className="text-center flex gap-x-4 flex-row">
      <p className="flex-initial">Resume</p>
      <Link
        className="flex-initial"
        href={"https://www.linkedin.com/in/mayowa-awosiyan/"}
      >
        LinkedIn
      </Link>
      <Link
        className="flex-initial"
        href={"https://github.com/Mayowa-Awosiyan01"}
      >
        GitHub
      </Link>
    </div>
  );
}
