import PropTypes from "prop-types";
import "./styles.css";
import Ripples from "./Ripples";
import { useState } from "react";

SubmitButton.propTypes = {
  text: PropTypes.any,
  handleFunction: PropTypes.func,
};

export default function SubmitButton({ text, handleFunction }) {
  const [ripples, setRipples] = useState([]);

  const handleClick = (ev) => {
    ev.preventDefault();
    const { offsetX, offsetY } = ev.nativeEvent;

    setRipples((prevRipples) => [
      ...prevRipples,
      { left: offsetX, top: offsetY, id: Date.now() },
    ]);

    setTimeout(() => {
      setRipples((prevRipples) => prevRipples.slice(1));
      handleFunction();
    }, 1000);
  };

  return (
    <button id="submit-button" type="submit" onClick={handleClick}>
      {text}
      <Ripples ripples={ripples} />
    </button>
  );
}
