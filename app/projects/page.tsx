import ParticleBackground from "../components/particlebackground";
import Image from "next/image";

export default function Project() {
  return (
    <div>
      <ParticleBackground />
      <h1 className="text-4xl text-center font-bold p-8">Projects</h1>
      <p className="text-center p-8 px-12">
        Below you will find some descriptions of my projects, both completed
        ones and the ones in progress. I will be updating this page as they
        progress and as new ones start.
      </p>
      <h3 className="text-center text-2xl font-semibold text p-8">NestSplit</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
        <div>
          <p>
            NestSplit is my flutter project inspired by SplitWise. Splitwise is
            a mobile application that helps groups and households keep track of
            who owes who money and how much. The goal for NestSplit is to create
            an application where households or &apos;nests&apos; can keep track
            of who owes who money, create shared grocery lists, keep track of
            chores and more to help families, roommates and others keep track of
            what they need to do in their household.
          </p>
        </div>
        <div>
          <Image
            src={
              "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
            }
            alt="Placeholder image before adding a picture of NestSplit"
            height={50}
            width={50}
          />
        </div>
      </div>
    </div>
  );
}
