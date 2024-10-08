import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { fetchRandomBeer } from "./services/fetchRandomBeer";
import BeerContainer from "./components/BeerContainer";

export default function App() {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    fetchRandomBeer().then((randomBeer) => {
      setBeer(randomBeer[0]);
    });
  }, []);

  return (
    <>
      <header>
        <h1 className="logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Deus_Beer.png" width="50" alt="BeerVerse icon" />
          BeerVerse
        </h1>
      </header>
      <main>
        {beer ? (
          <>
            <BeerContainer beer={beer} />
            <button
              onClick={() => {
                fetchRandomBeer().then((randomBeer) => {
                  setBeer(randomBeer[0]);
                });
              }}
            >
              Another beer
            </button>
          </>
        ) : (
          <Oval
            height={100}
            width={100}
            color="#704da9"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#704da9"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        )}
      </main>
    </>
  );
}
