import { AiOutlineLoading } from "react-icons/ai";
import Product from "../Product/Product";
import PropTypes from "prop-types";
import "./styles.css";

ProductsSection.propTypes = {
  loadingState: PropTypes.bool.isRequired,
  productsState: PropTypes.array.isRequired,
};

export default function ProductsSection({ loadingState, productsState }) {
  return (
    <section>
      <div className="products">
        <h2>
          {loadingState
            ? "Searching for products..."
            : productsState.length > 0
            ? "Find results"
            : "Oops... Nothing found =C"}
        </h2>
        <div className="products__container">
          {loadingState ? (
            <AiOutlineLoading className="loading" />
          ) : (
            productsState.map((product) => (
              <Product productObject={product} key={product.id} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
