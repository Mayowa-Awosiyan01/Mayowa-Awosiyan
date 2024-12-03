import NavBar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <header className="text-4xl text-center font-bold p-8">
        Mayowa Awosiyan
      </header>
      <NavBar />
      <br></br>
      <div>
        <header>About Me</header>
        <p>
          I graduated from the University of Ottawa with a degree in computer
          science in June 2024. And I will add more to this later, including a
          navbar above this.
        </p>
      </div>
    </div>
  );
}
