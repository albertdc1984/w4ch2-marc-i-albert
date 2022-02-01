import Lletra from "./components/Lletra/Lletra";
import lettersList from "./data/lettersData";
import Paraula from "./components/Paraula/Paraula";
import Utilitzada from "./components/Utilitzada/Utilitzada";

function App() {
  return (
    <>
      <div className="hangman-container">
        <svg
          className="hangman"
          viewBox="0 0 96 96"
          width="300"
          height="300"
        ></svg>
      </div>
      <ul className="guess-letters">
        <Paraula />
        <Paraula />
        <Paraula />
        <Paraula />
        <Paraula />
      </ul>
      <section className="used-letters-container">
        <h2>Used letters</h2>
        <ul className="used-letters">
          <Utilitzada />
          <Utilitzada />
          <Utilitzada />
          <Utilitzada />
          <Utilitzada />
          <Utilitzada />
        </ul>
      </section>

      <ul className="letters">
        {lettersList.map((lletraData) => {
          return <Lletra text={lletraData} />;
        })}
      </ul>
    </>
  );
}

export default App;
