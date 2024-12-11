import NavBar from "./components/navbar";
import ParticleBackground from "./components/particlebackground";

export default function Home() {
  return (
    <div>
      <ParticleBackground />
      <NavBar />
      <header className="text-4xl text-center font-bold p-8">
        Mayowa Awosiyan
      </header>

      <br></br>
      <div className="text-center gap-4">
        <h1 className="text-center font-bold text-xl">About Me</h1>
        <p className="text-center p-8 px-12">
          My name is Mayowa Awosiyan and I am a software developer. Welcome to
          my portfolio, hopefully it impresses some of you! Currently I am
          working on a project I am calling NestSplit which you can read about
          here soon! When I am taking a break from updating this portfolio or my
          projects I am embracing my new found love for rouge-likes with Hades
          or playing Marvel Rivals.
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
      </div>
    </div>
  );
}
