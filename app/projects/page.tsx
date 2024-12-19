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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="p-4">
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
        <div className="p-4">
          <Image
            src={
              "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
            }
            alt="Placeholder image before adding a picture of NestSplit"
            height={100}
            width={100}
          />
        </div>
      </div>
      <h3 className="text-center text-2xl font-semibold text p-8">
        Knapsack Problem Empirical Study
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="p-4">
          <Image
            src={
              "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
            }
            alt="Placeholder image before adding a picture of NestSplit"
            height={100}
            width={100}
          />
        </div>
        <div className="p-4">
          <p>
            For a course on artificial intelligence I was tasked with solving
            the knapsack problem with ways involving algorithms used in
            Artificial Intelligence and comparing the results to the more
            traditional ways of solving the problem. <br></br>
            The knapsack problem is a problem where you are given a group of
            items each with their own weight and value alongside a knapsack with
            a maximum weight. Your task is to find the combination of items that
            maximizes total value without exceeding the max weight of the
            knapsack. In this report I solved instances of the problem using
            simmulated annealing and the genetic algorithm to utilize concepts
            of artificail intelligence and machine learning which was the focus
            of the course.
          </p>
        </div>
      </div>
    </div>
  );
}
