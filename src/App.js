import Lletra from "./components/Lletra/Lletra";
import lettersList from "./data/lettersData";
import Paraula from "./components/Paraula/Paraula";
import Utilitzada from "./components/Utilitzada/Utilitzada";
import EstatdelJoc from "./components/EstatDelJoc/EstatDelJoc";
import Penjat from "./components/Penjat/Penjat";
import paraulaObject from "./data/paraules";

function App() {
  let guessedLetters = [];
  const afegitGuessedLetters = (lletra) => {
    guessedLetters.push(lletra.text);
  };
  return (
    <>
      <div className="hangman-container">
        <svg className="hangman" viewBox="0 0 96 96" width="300" height="300">
          <Penjat />
        </svg>
      </div>
      <ul className="guess-letters">
        {paraulaObject.map((lletraData, index) => {
          return <Paraula key={index} lletra={lletraData} />;
        })}
      </ul>
      <section className="used-letters-container">
        <h2>Used letters</h2>
        <ul className="used-letters">
          {guessedLetters.map((lletraData) => {
            return <Utilitzada text={lletraData} />;
          })}
        </ul>
      </section>
      <EstatdelJoc />

      <ul className="letters">
        {lettersList.map((lletraData, index) => {
          return (
            <Lletra
              key={index}
              text={lletraData}
              actionOnClick={(event) => {
                afegitGuessedLetters(lletraData);
                event.preventDefault();
              }}
            />
          );
        })}
      </ul>
    </>
  );
}

export default App;
