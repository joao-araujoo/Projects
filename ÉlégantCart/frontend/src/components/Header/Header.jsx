import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import PropTypes from "prop-types";
import "./styles.css";

Header.propTypes = {
  handleFunction: PropTypes.func,
};

export default function Header({ handleFunction }) {
  return (
    <header className="home-header">
        <div className="user-profile">
          <img
            src="https://br.web.img3.acsta.net/pictures/19/03/19/17/22/2985063.jpg"
            alt="Profile Picture"
          />
          <div className="greetings">
            <p>Hello,</p>
            <h3>Tarantino</h3>
          </div>
        </div>
        {/* TODO quando clicar e o carrinho estiver aberto, mudar para position fixed para acompanhar o carrinho */}
        <div className="cart" onClick={handleFunction}>
          <HiOutlineBars3BottomRight />
        </div>
      </header>
  )
}
