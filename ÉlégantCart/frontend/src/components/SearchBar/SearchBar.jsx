import { FiSearch } from "react-icons/fi";
import PropTypes from "prop-types";
import "./styles.css";

SearchBar.propTypes = {
  handleFunction: PropTypes.func,
  inputValue: PropTypes.string,
  setInputValue: PropTypes.func,
};

export default function SearchBar({ handleFunction, inputValue, setInputValue }) {
  return (
    <section>
      <form className="search-bar" onSubmit={handleFunction}>
        <button type="submit">
          <FiSearch />
        </button>
        <input
          type="search"
          value={inputValue}
          onChange={(ev) => setInputValue(ev.target.value)}
          placeholder="Search Products"
        />
      </form>
    </section>
  );
}
