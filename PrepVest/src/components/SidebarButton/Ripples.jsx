import PropTypes from "prop-types";

Ripples.propTypes = {
  ripples: PropTypes.array.isRequired
}

export default function Ripples({ ripples }) {
  return (
    <>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          style={{ left: ripple.left, top: ripple.top }}
        />
      ))}
    </>
  );
}
