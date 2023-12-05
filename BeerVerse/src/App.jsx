import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";

const fetchRandomBeer = async () => {
  const response = await fetch("https://api.punkapi.com/v2/beers/random");
  const data = await response.json();
  return data;
};

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
        <h1>BeerVerse</h1>
      </header>
      <main>
        {beer ? (
          <div className="beer-container">
            <div className="top-content">
              <div className="beer-image">
                <img src={beer.image_url} alt={beer.name} width="100" />
              </div>
              <div className="beer-stats">
                <h2>{beer.name}</h2>
                <h4>{beer.tagline}</h4>
                <p>{beer.description}</p>
                <span>
                  <strong>Alcohol By Volume: </strong>
                  {beer.abv}%
                </span>
                <br />
                <span>
                  <strong>Bitterness: </strong>
                  {beer.ibu}
                </span>
                <br />
                <span><strong>First Brewed: </strong>{beer.first_brewed}</span>
              </div>
            </div>
            <hr />
            <div className="bottom-content">
              <p>{beer.brewers_tips}</p>
              <div>
                <strong>Food Pairing:</strong><br />
                {beer.food_pairing.map((food) => food + ", ")}
              </div>
              <div>
                <strong>Ingredients:</strong><br />
                {beer.ingredients &&
                  beer.ingredients.malt &&
                  beer.ingredients.malt.map((malt) => malt.name + ", ")}
                {beer.ingredients &&
                  beer.ingredients.hops &&
                  beer.ingredients.hops.map((hop) => hop.name + ", ")}
                {beer.ingredients &&
                  beer.ingredients.yeast &&
                  beer.ingredients.yeast}
              </div>
            </div>
          </div>
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
