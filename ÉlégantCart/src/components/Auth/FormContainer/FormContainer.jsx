import "../styles.css";
import PropTypes from "prop-types";

FormContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default function FormContainer({ title, children }) {
  return (
    <main className="container">
      <div className="form-container">
        <h1>{title}</h1>
        {children}
      </div>
    </main>
  );
}
