import PropTypes from "prop-types";

Ingredients.propTypes = {
  beerIngredients: PropTypes.object.isRequired
}

export default function Ingredients({ beerIngredients }) {
  return (
    <div>
      <strong>Ingredients:</strong>
      <br />
      {beerIngredients &&
        beerIngredients.malt &&
        beerIngredients.malt.map((malt) => malt.name + ", ")}
      {beerIngredients &&
        beerIngredients.hops &&
        beerIngredients.hops.map((hop) => hop.name + ", ")}
      {beerIngredients && beerIngredients.yeast && beerIngredients.yeast}
    </div>
  );
}
