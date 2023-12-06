import PropTypes from "prop-types";

BeerCharacteristics.propTypes = {
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.number.isRequired,
  ibu: PropTypes.number.isRequired,
  firstBrewed: PropTypes.string.isRequired
}

export default function BeerCharacteristics({ name, tagline, description, abv, ibu, firstBrewed}) {
  return (
    <div className="beer-characteristics">
      <h2>{name}</h2>
      <h4>{tagline}</h4>
      <p>{description}</p>
      <span>
        <strong>Alcohol By Volume: </strong>
        {abv}%
      </span>
      <br />
      <span>
        <strong>Bitterness: </strong>
        {ibu}
      </span>
      <br />
      <span>
        <strong>First Brewed: </strong>
        {firstBrewed}
      </span>
    </div>
  );
}