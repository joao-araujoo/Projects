import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import PropTypes from "prop-types";
import "./styles.css";

Header.propTypes = {
  handleFunction: PropTypes.func,
  hamburgerRef: PropTypes.object,
  profilePicture: PropTypes.string,
  username: PropTypes.string,
};

export default function Header({ handleFunction, hamburgerRef, profilePicture, username }) {
  return (
    <header className="home-header">
      <div className="user-profile">
        <img
          src={profilePicture ? profilePicture : "profile.avif"}
          alt="Profile Picture"
        />
        <div className="greetings">
          <p>Hello,</p>
          <h3>{username ? username : "Buddy =)"}</h3>
        </div>
      </div>
      <div className="cart" onClick={handleFunction} ref={hamburgerRef}>
        <HiOutlineBars3BottomRight />
      </div>
    </header>
  );
}
