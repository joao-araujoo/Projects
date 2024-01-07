import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles.css";

Header.propTypes = {
  handleFunction: PropTypes.func,
  hamburgerRef: PropTypes.object
};

export default function Header({ handleFunction, hamburgerRef }) {
  return (
    <header>
      <Link to="/">
        <button className="back-button">
          <IoIosArrowRoundBack className="arrow-left" /> Back
        </button>
      </Link>
      <button onClick={handleFunction} ref={hamburgerRef} >
        <HiOutlineBars3BottomRight />
      </button>
    </header>
  );
}
