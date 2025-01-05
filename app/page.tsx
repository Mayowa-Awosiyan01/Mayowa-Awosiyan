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
      <div className="text-center gap-4 m-6">
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
          different technologies including:
        </p>
        <div className="grid grid-cols-5 mb-6 gap-4 justify-items-center">
          <Skill
            link="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/172px-Python-logo-notext.svg.png"
            alt="Python's Logo"
          >
            <span className="text-center">Python</span>
          </Skill>
          <Skill
            link="https://static-00.iconduck.com/assets.00/java-icon-2048x2048-3pfathb3.png"
            alt="Java's Logo"
          >
            <span className="text-center">Java</span>
          </Skill>
          <Skill
            link="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            alt="JavaScript's Logo"
          >
            <span className="text-center">JavaScript</span>
          </Skill>
          <Skill
            link="https://cdn.iconscout.com/icon/free/png-256/free-typescript-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-7-pack-logos-icons-2945272.png?f=webp&w=256"
            alt="TypeScript's Logo"
          >
            <span className="text-center">TypeScript</span>
          </Skill>
          <Skill
            link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9uzErWz9EXqZDxZ5lP9aYpMz8eK6rr5X3w&s"
            alt="Next.JS's Logo"
          >
            <span className="text-center">Next.JS</span>
          </Skill>
          <Skill
            link="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png"
            alt="HTML Logo"
          >
            <span className="text-center">HTML</span>
          </Skill>
          <Skill
            link="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/544px-CSS3_logo_and_wordmark.svg.png"
            alt="CSS Logo"
          >
            <span className="text-center">CSS</span>
          </Skill>
          <Skill
            link="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png"
            alt="React's Logo"
          >
            <span className="text-center">React</span>
          </Skill>
          <Skill
            link="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png?20230715030042"
            alt="Tailwind Logo"
          >
            <span className="text-center">TailwindCSS</span>
          </Skill>
          <Skill
            link="https://storage.googleapis.com/cms-storage-bucket/4fd5520fe28ebf839174.svg"
            alt="Flutter Logo"
          >
            <span className="text-center">Flutter</span>
          </Skill>
          <Skill
            link="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png"
            alt=" Logo"
          >
            <span className="text-center">Docker</span>
          </Skill>
          <Skill
            link="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/810px-Postgresql_elephant.svg.png"
            alt="PostgreSQL"
          >
            <span className="text-center">PostgreSQL</span>
          </Skill>
          <Skill
            link="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/768px-Firebase_Logo.svg.png"
            alt="Firebasse Logo"
          >
            <span className="text-center">Firebase</span>
          </Skill>
        </div>
      </div>
    </div>
  );
}
