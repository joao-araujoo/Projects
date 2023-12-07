import PropTypes from "prop-types";
import BeerCharacteristics from "./BeerCharacteristics";
import FoodPairing from "./FoodPairing";
import Ingredients from "./Ingredients";

BeerContainer.propTypes = {
  beer: PropTypes.object.isRequired
}

export default function BeerContainer({ beer }) {
  return (
    <>
      <div className="beer-container">
        <div className="top-content">
          <div className="beer-image">
            <img src={beer.image_url} alt={beer.name} width="100" />
          </div>
          <BeerCharacteristics
            name={beer.name}
            tagline={beer.tagline}
            description={beer.description}
            abv={beer.abv}
            ibu={beer.ibu}
            firstBrewed={beer.first_brewed}
          />
        </div>
        <hr />
        <div className="bottom-content">
          <p>{beer.brewers_tips}</p>
          <FoodPairing foodPairing={beer.food_pairing} />
          <Ingredients beerIngredients={beer.ingredients} />
        </div>
      </div>
    </>
  );
}