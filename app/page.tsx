import Feedback from "./components/feedback";
import ParticleBackground from "./components/particlebackground";
import Project from "./components/project";
import Skill from "./components/skill";

export default function Home() {
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
          my portfolio, which is still currently a work in progress but I hope
          it gives you an idea of my skills. I am also working on a project I am
          calling NestSplit which you can read about here soon! When I am taking
          a break from updating this portfolio or my projects I am embracing me
          newfound love for rouge-likes with Hades or playing Marvel Rivals.
        </p>
        <h1 className="text-center text-2xl font-bold">Professional History</h1>
        <p className="text-center p-8 px-12 text-lg">
          I graduated from the University of Ottawa with a degree in computer
          science in June 2024. During my degree, I did multiple Co-ops as a web
          developer with different departments in the Government of Canada and a
          software developer for the University of Ottawa working under a
          professor. For more details check my resume in the navigation bar.
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
        <div className="grid grid-cols-2 gap-2 p-8">
          <Project
            link="https://raw.githubusercontent.com/Mayowa-Awosiyan01/Mayowa-Awosiyan/refs/heads/main/app/assets/nestSplitLogo.png"
            alt="Testing stuff"
          >
            NestSplit is my flutter project inspired by Splitwise. Splitwise is
            a mobile application that helps groups and households keep track of
            who owes who money and how much. The goal of NestSplit is to create
            an application where households or &apos;nests&apos; can keep track
            of who owes who money, create shared grocery lists, keep track of
            chores and more to help families, roommates and others keep track of
            what they need to do in their household.
          </Project>
          <Project
            link="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Knapsack_Problem_Illustration.svg/250px-Knapsack_Problem_Illustration.svg.png"
            alt="Image showing an example of the knapsack problem"
          >
            For a course on artificial intelligence, I was tasked with solving
            the knapsack problem with ways involving algorithms used in
            artificial intelligence and comparing the results to the more
            traditional ways of solving the problem. <br></br>
            The knapsack problem is a problem where you are given a group of
            items each with a weight and a value alongside a knapsack with a
            maximum weight. Your task is to find the combination of items that
            maximizes total value without exceeding the max weight of the
            knapsack. In this report I solved instances of the problem using
            simulated annealing and the genetic algorithm to utilize concepts of
            artificial intelligence and machine learning which was the focus of
            the course.
          </Project>
        </div>
        <Feedback />
      </div>
    </div>
  );
}
