import Lletra from "./components/Lletra/Lletra";
import lettersList from "./data/lettersData";
import Paraula from "./components/Paraula/Paraula";
import Utilitzada from "./components/Utilitzada/Utilitzada";
import EstatdelJoc from "./components/EstatDelJoc/EstatDelJoc";
import Penjat from "./components/Penjat/Penjat";
import paraulaObject from "./data/paraules";

function App() {
  return (
    <>
      <div className="hangman-container">
        <svg className="hangman" viewBox="0 0 96 96" width="300" height="300">
          <Penjat />
        </svg>
      </div>
      <ul className="guess-letters">
        {paraulaObject.map((lletraData) => {
          debugger;
          return <Paraula lletra={lletraData} />;
        })}
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
      <EstatdelJoc />
      <ul className="letters">
        {lettersList.map((lletraData) => {
          return <Lletra text={lletraData} />;
        })}
      </ul>
    </>
  );
}

export default App;
