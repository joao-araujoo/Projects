import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import PropTypes from "prop-types";
import Ripples from "./Ripples";

SidebarButton.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
};

export default function SidebarButton({ url, children }) {
  const [ripples, setRipples] = useState([]);

  const handleClick = (ev) => {
    const { offsetX, offsetY } = ev.nativeEvent;

    setRipples((prevRipples) => [
      ...prevRipples,
      { left: offsetX, top: offsetY, id: Date.now() },
    ]);

    setTimeout(() => {
      setRipples((prevRipples) => prevRipples.slice(1));
    }, 1000);
  };

  return (
    <Link to={url} className={styles.wrapper} onClick={(ev) => handleClick(ev)}>
      {children}
      <Ripples ripples={ripples} />
    </Link>
  );
}
