import { Link } from "react-router-dom";
import FormContainer from "../components/Auth/FormContainer/FormContainer";
import InputField from "../components/Auth/InputField/InputField";
import SubmitButton from "../components/Auth/SubmitButton/SubmitButton";

export default function Register() {
  return (
    <>
      <FormContainer title="Register">
        <form>
          <InputField
            labeltext="Username"
            type="text"
            name="username"
            id="username"
            style={{ marginBottom: "30px" }}
          />
          <InputField
            labeltext="Email"
            type="email"
            name="email"
            id="email"
            style={{ marginBottom: "30px" }}
          />
          <InputField
            labeltext="Password"
            type="password"
            name="password"
            id="password"
            style={{ marginBottom: "30px" }}
          />
          <SubmitButton text="Register" />
        </form>
        <p>
          Already have an account?
          <Link to="/login">Login</Link>
        </p>
      </FormContainer>
    </>
  );
}
