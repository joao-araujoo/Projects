import { Link, useNavigate } from "react-router-dom";
import FormContainer from "../Auth/FormContainer/FormContainer";
import InputField from "../Auth/InputField/InputField";
import { useState } from "react";
import SubmitButton from "../Auth/SubmitButton/SubmitButton";
import useUser from "../../hooks/useUser";

export default function Login() { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useUser();

  const handleSubmit = async () => {
    const loginResult = await login(email, password);

    if (loginResult.code === 200) {
      localStorage.setItem("elegantcart-token", loginResult.token);
      navigate("/");
    }
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
