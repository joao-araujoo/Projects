import PropTypes from "prop-types";

FoodPairing.propTypes = {
  foodPairing: PropTypes.array.isRequired,
}

export default function FoodPairing({ foodPairing }) {
  return (
    <div>
      <strong>Food Pairing:</strong>
      <br />
      {foodPairing.map((food) => food + ", ")}
    </div>
  );
}
