"use client";
import { useState } from "react";
import Feedback from "./components/feedback";
import ParticleBackground from "./components/particlebackground";
import Project from "./components/project";
import Skill from "./components/skill";
import Image from "next/image";

interface ProjectType {
  link: string;
  alt: string;
  prompt: string;
  children: React.ReactNode;
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  const handleProjectSelect = (project: ProjectType) => {
    console.log(project.prompt.toString());
    // Toggle project selection
    setSelectedProject((prevProject) =>
      prevProject?.prompt.toString() === project.prompt.toString()
        ? null
        : project
    );
  };

  const projects: ProjectType[] = [
    {
      link: "https://raw.githubusercontent.com/Mayowa-Awosiyan01/Mayowa-Awosiyan/refs/heads/main/app/assets/nestSplitLogo.png",
      alt: "Testing stuff",
      prompt: "Home Management App",
      children: (
        <div>
          <h2 className="text-2xl font-bold mb-4">NestSplit Project Details</h2>
          <p>
            NestSplit is my Flutter project inspired by Splitwise. Splitwise is
            a mobile application that helps groups and households keep track of
            who owes whom money and how much. The goal of NestSplit is to create
            an application where households or &apos;nests&apos; can keep track
            of who owes who money, create shared grocery lists, keep track of
            chores and more to help families, roommates and others keep track of
            what they need to do in their household.
          </p>
        </div>
      ),
    },
    {
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Knapsack_Problem_Illustration.svg/250px-Knapsack_Problem_Illustration.svg.png",
      alt: "Image showing an example of the knapsack problem",
      prompt: "AI Knapsack Problem",
      children: (
        <div>
          <h2 className="text-2xl font-bold mb-4">
            AI Knapsack Problem Project Details
          </h2>
          <p>
            For a course on artificial intelligence, I was tasked with solving
            the knapsack problem with ways involving algorithms used in
            artificial intelligence and comparing the results to the more
            traditional ways of solving the problem.
          </p>
          <p className="mt-4">
            The knapsack problem is a problem where you are given a group of
            items, each with a weight and a value, alongside a knapsack with a
            maximum weight. Your task is to find the combination of items that
            maximizes total value without exceeding the max weight of the
            knapsack.
          </p>
          <p className="mt-4">
            In this report, I solved instances of the problem using simulated
            annealing and the genetic algorithm to utilize concepts of
            artificial intelligence and machine learning, which was the focus of
            the course.
          </p>
        </div>
      ),
    },
    {
      link: "https://raw.githubusercontent.com/Mayowa-Awosiyan01/Mayowa-Awosiyan/629d9319ecd4a8df73aa7b6e0e3dc77efb80b24e/app/assets/you-are-here-icon.svg",
      alt: "A you are here icon",
      prompt: "My Website",
      children: (
        <div>
          <h2 className="text-2xl font-bold mb-4">My Portfolio</h2>
          <div>
            <div>
              <p>
                My latest project is this website which I developed to showcase
                my skills and experience. I developed it using Next.JS so the
                frontend is React, HTML, JavaScript and TailwindCSS. Meanwhile
                it is deployed with Vercel. The animated background was inspired
                by the Matrix and created using the JavaScript library
                react-particles-js. For added difficulty and because I have the
                free time right now, I am doing everything from scratch instead
                of just using a pre-existing template, admittedly, some ideas
                are inspired by templates and other portfolios I have seen but I
                am creating all these components from scratch to get them to
                look how they do in my head. It is going pretty well so far, I
                think but if you disagree send me a message on LinkedIn or if
                you want to stay anonymous submit your feedback down below!
              </p>
              <p className="mt-4">
                Some things I want to add to this website include: a button to
                change the animated background to different styles and changing
                the skills on the homepage so when they are clicked they give a
                more detailed picture on how I have used the skill. I also want
                to add a full page scroll section to welcome users when they get
                to this site, preferably with an animation that looks like my
                name is being typed out.
              </p>
              <p className="mt-4">
                I am going to keep updating this website whenever I have time
                and new ideas on how to make it look better so check in every
                once in a while to see the progress! Also feel free to click my
                LinkedIn and connect with me!
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div>
      <ParticleBackground />

      <header className="text-4xl text-center font-bold p-8">
        Mayowa Awosiyan
      </header>

      <br></br>
      <div className="text-center gap-4 m-6">
        <h1 className="text-center font-bold text-2xl">About Me</h1>
        <p className="text-center p-8 px-12 text-lg">
          My name is Mayowa Awosiyan, and I am a software developer. Welcome to
          my portfolio, which is still currently a work in progress, but I hope
          it gives you an idea of my skills. I am also working on a project I am
          calling NestSplit, which you can read about here soon! When I am
          taking a break from updating this portfolio or my projects, I am often
          applying to jobs since I want a full-time software developer/engineer
          role, recruiters, if you see this, feel free to help a guy out! I have
          also recently been embracing my newfound love for roguelikes with
          Hades or playing Marvel Rivals where I am sadly hard stuck platinum.
        </p>
        <h1 className="text-center text-2xl font-bold">Professional History</h1>
        <p className="text-center p-8 px-12 text-lg">
          I graduated from the University of Ottawa with a bachelor&apos;s
          degree in computer science in June 2024. During my degree, I did
          multiple co-ops as a software developer with different departments in
          the Government of Canada and one co-op as a software developer for the
          University of Ottawa working under a professor. For more details check
          my resume in the navigation bar.
        </p>
        <h1 className="text-center text-2xl font-bold">
          Technologies and Skills
        </h1>
        <p className="text-center p-8 px-12 text-lg">
          Over time, I have learned plenty of skills and technologies from my
          Co-op positions, coursework, and independent study. I am still
          learning new skills and will definitely add to these in the future.
          Currently, I am learning cloud computing technologies such as Amazon
          Web Services (AWS). For now, however, the skills and tools I feel the
          most comfortable with are the following:
        </p>
        <div className="grid md:grid-cols-5 mb-6 gap-4 justify-items-center sm:grid-cols-2">
          <Skill
            link="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/172px-Python-logo-notext.svg.png"
            alt="Python's Logo"
          >
            Python
          </Skill>
          <Skill
            link="https://static-00.iconduck.com/assets.00/java-icon-2048x2048-3pfathb3.png"
            alt="Java's Logo"
          >
            Java
          </Skill>
          <Skill
            link="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            alt="JavaScript's Logo"
          >
            JavaScript
          </Skill>
          <Skill
            link="https://cdn.iconscout.com/icon/free/png-256/free-typescript-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-7-pack-logos-icons-2945272.png?f=webp&w=256"
            alt="TypeScript's Logo"
          >
            TypeScript
          </Skill>
          <Skill
            link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9uzErWz9EXqZDxZ5lP9aYpMz8eK6rr5X3w&s"
            alt="Next.JS's Logo"
          >
            Next.JS
          </Skill>
          <Skill
            link="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png"
            alt="HTML Logo"
          >
            HTML
          </Skill>
          <Skill
            link="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/544px-CSS3_logo_and_wordmark.svg.png"
            alt="CSS Logo"
          >
            CSS
          </Skill>
          <Skill
            link="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png"
            alt="React's Logo"
          >
            React
          </Skill>
          <Skill
            link="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png?20230715030042"
            alt="Tailwind Logo"
          >
            TailwindCSS
          </Skill>
          <Skill
            link="https://storage.googleapis.com/cms-storage-bucket/4fd5520fe28ebf839174.svg"
            alt="Flutter Logo"
          >
            Flutter
          </Skill>
          <Skill
            link="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png"
            alt=" Logo"
          >
            Docker
          </Skill>
          <Skill
            link="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/810px-Postgresql_elephant.svg.png"
            alt="PostgreSQL"
          >
            PostgreSQL
          </Skill>
          <Skill
            link="https://raw.githubusercontent.com/Mayowa-Awosiyan01/Mayowa-Awosiyan/05e5008fcd9938621e34560cbc25340010384006/public/Logomark_Full%20Color.svg"
            alt="Firebasse Logo"
          >
            Firebase
          </Skill>
          <Skill
            link="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/900px-Octicons-mark-github.svg.png?20180806170715"
            alt="Github Logo"
          >
            GitHub
          </Skill>
          <Skill
            link="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png"
            alt="Node.js Logo"
          >
            Node.js
          </Skill>
        </div>
        <h1 className="text-center text-2xl font-bold">Projects</h1>
        <h4>Click on the project for more details!</h4>
        <div className="grid grid-cols-2 gap-2 p-8">
          {projects.map((project, index) => (
            <Project
              key={index}
              link={project.link}
              alt={project.alt}
              prompt={project.prompt}
              onProjectSelect={() => handleProjectSelect(project)}
            >
              {project.children}
            </Project>
          ))}
        </div>
        {selectedProject && (
          <div className="p-6 m-8 border-solid border-2 bg-gray-700 rounded-xl">
            <div className="flex">
              <div className="w-1/2 pr-8">
                <Image
                  src={selectedProject.link}
                  alt={selectedProject.alt}
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="w-1/2 text-left">{selectedProject.children}</div>
            </div>
          </div>
        )}
        <Feedback />
      </div>
    </div>
  );
}
