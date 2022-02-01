import Lletra from "./components/Lletra/Lletra";
import lettersList from "./data/lettersData";
import Paraula from "./components/Paraula/Paraula";
import Utilitzada from "./components/Utilitzada/Utilitzada";

function App() {
  return (
    <>
      <div className="hangman-container">
        <svg className="hangman" viewBox="0 0 96 96" width="300" height="300">
          <line className="stage11" x1="62" y1="70" x2="56" y2="56"></line>
          <line className="stage10" x1="50" y1="70" x2="56" y2="56"></line>
          <line className="stage9" x1="68" y1="46" x2="56" y2="40"></line>
          <line className="stage8" x1="44" y1="46" x2="56" y2="40"></line>
          <line className="stage7" x1="56" y1="40" x2="56" y2="56"></line>
          <circle
            className="stage6"
            cx="56"
            cy="34"
            r="6"
            fill="#bee5eb"
          ></circle>
          <line className="stage5" x1="56" y1="16" x2="56" y2="28"></line>
          <line className="stage4" x1="24" y1="24" x2="32" y2="16"></line>
          <line className="stage3" x1="21" y1="16" x2="60" y2="16"></line>
          <line className="stage2" x1="24" y1="80" x2="24" y2="16"></line>
          <line className="stage1" x1="16" y1="80" x2="32" y2="80"></line>
        </svg>
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
      <section className="game-result">You're dead!</section>
      <ul className="letters">
        {lettersList.map((lletraData) => {
          return <Lletra text={lletraData} />;
        })}
      </ul>
    </>
  );
}

export default App;
