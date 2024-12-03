import NavBar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <header className="text-4xl text-center font-bold p-8">
        Mayowa Awosiyan
      </header>

      <br></br>
      <div className="text-center gap-4">
        <h1 className="text-center">About Me</h1>
        <p className="text- center">
          I graduated from the University of Ottawa with a degree in computer
          science in June 2024. And I will add more to this later, including a
          navbar above this.
        </p>
      </div>
    </div>
  );
}
