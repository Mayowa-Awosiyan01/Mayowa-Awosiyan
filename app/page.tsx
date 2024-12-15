import ParticleBackground from "./components/particlebackground";
import Skill from "./components/skill";

export default function Home() {
  return (
    <div>
      <ParticleBackground />

      <header className="text-4xl text-center font-bold p-8">
        Mayowa Awosiyan
      </header>

      <br></br>
      <div className="text-center gap-4">
        <h1 className="text-center font-bold text-xl">About Me</h1>
        <p className="text-center p-8 px-12">
          My name is Mayowa Awosiyan and I am a software developer. Welcome to
          my portfolio, which is still currently a work in progress but I hope
          it gives you an idea of my skills. I am also working on a project I am
          calling NestSplit which you can read about here soon! When I am taking
          a break from updating this portfolio or my projects I am embracing my
          new found love for rouge-likes with Hades or playing Marvel Rivals.
        </p>
        <h1 className="text-center text-xl font-bold">Professional History</h1>
        <p className="text-center p-8 px-12">
          I graduated from the University of Ottawa with a degree in computer
          science in June 2024. During my degree I did multiple Co-ops as a web
          developer with different departments in the Government of Canada and a
          software developer for the University of Ottawa working under a
          professor. For more details see the resume tab, which is currently a
          work in progress!
        </p>
        <h1 className="text-center text-xl font-bold">
          Technologies and Skills
        </h1>
        <p className="text-center p-8 px-12">
          From personal projects to coursework I have experience with several
          different technologies including: A List Of my skills coming soon!
        </p>
        <div className="grid-cols-5">
          <Skill
            link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdJjR3QYvEGUXMgsZKvy2Llx3rWKDQgpxjIQ&s"
            alt="Python's Logo"
          >
            <span className="text-center">Python</span>
          </Skill>
          {/* Place holder skills for testing formatting */}
          <Skill
            link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdJjR3QYvEGUXMgsZKvy2Llx3rWKDQgpxjIQ&s"
            alt="Python's Logo"
          >
            <span className="text-center">Python</span>
          </Skill>
          <Skill
            link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdJjR3QYvEGUXMgsZKvy2Llx3rWKDQgpxjIQ&s"
            alt="Python's Logo"
          >
            <span className="text-center">Python</span>
          </Skill>
          <Skill
            link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdJjR3QYvEGUXMgsZKvy2Llx3rWKDQgpxjIQ&s"
            alt="Python's Logo"
          >
            <span className="text-center">Python</span>
          </Skill>
          <Skill
            link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdJjR3QYvEGUXMgsZKvy2Llx3rWKDQgpxjIQ&s"
            alt="Python's Logo"
          >
            <span className="text-center">Python</span>
          </Skill>
          <Skill
            link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdJjR3QYvEGUXMgsZKvy2Llx3rWKDQgpxjIQ&s"
            alt="Python's Logo"
          >
            <span className="text-center">Python</span>
          </Skill>
          <Skill
            link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdJjR3QYvEGUXMgsZKvy2Llx3rWKDQgpxjIQ&s"
            alt="Python's Logo"
          >
            <span className="text-center">Python</span>
          </Skill>
          <Skill
            link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdJjR3QYvEGUXMgsZKvy2Llx3rWKDQgpxjIQ&s"
            alt="Python's Logo"
          >
            <span className="text-center">Python</span>
          </Skill>
        </div>
      </div>
      <p>
        {" "}
        This is just some temporary dummy content so I can see the bottom of the
        page without having to go fullscreen every time because that is kinda
        annoying
      </p>
    </div>
  );
}
