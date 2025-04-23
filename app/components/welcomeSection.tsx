"use client";
import WhiteArrow from "../assets/WhiteArrow.svg";

export default function WelcomeSection() {
  const goToNext = function () {
    const header = document.getElementById("name");
    if (header) {
      header.scrollIntoView();
    } else {
      console.log("error element not found");
    }
  };
  return (
    <div className=" h-screen w-screen content-center place-content-center text-center bg-green-700 z-10">
      <h1 className="content-center text-6xl font-bold pb-20">Welcome!</h1>
      <div className="text-sm">
        <button onClick={goToNext} className="text-sm">
          <WhiteArrow />
        </button>
      </div>
    </div>
  );
}
