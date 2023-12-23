import { Link, useNavigate } from "react-router-dom";
import FormContainer from "../components/Auth/FormContainer/FormContainer";
import InputField from "../components/Auth/InputField/InputField";
import { useState } from "react";
import SubmitButton from "../components/Auth/SubmitButton/SubmitButton";

export default function Login() { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (email === "admin@gmail.com" && password === "admin") {
      localStorage.setItem("elegantcart-token", "tokenjwt1234");
      navigate("/");
      return;
    }

    alert("Login inválido!");
  }
  
  return (
    <>
      <FormContainer title="Login">
        <form>
          <InputField
            labeltext="Email"
            type="emal"
            name="email"
            id="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <InputField
            labeltext="Password"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <SubmitButton text="Login" handleFunction={handleSubmit} />
        </form>
        <p>
          Don&apos;t have an account?
          <Link to="/register">Register</Link>
        </p>
      </FormContainer>
    </>
  );
}
