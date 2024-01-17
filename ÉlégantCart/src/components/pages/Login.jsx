import { Link, useNavigate } from "react-router-dom";
import FormContainer from "../Auth/FormContainer/FormContainer";
import InputField from "../Auth/InputField/InputField";
import { useState } from "react";
import SubmitButton from "../Auth/SubmitButton/SubmitButton";
import useUser from "../../hooks/useUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineLoading } from "react-icons/ai";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useUser();
  const [loading, setLoading] = useState(false);

  const notify = (message, type) =>
    toast(message, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      type: type === "success" ? toast.TYPE.SUCCESS : toast.TYPE.ERROR,
    });

  const handleSubmit = async () => {
    setLoading(true);
    
    try {
      const loginResult = await login(email, password);

      if (loginResult.code === 200) {
        notify(loginResult.message, "success");
        setTimeout(() => {
          localStorage.setItem("elegantcart-token", loginResult.token);
          navigate("/");
        }, 2000);
      } else {
        notify(loginResult.message, "error");
      }
    } catch (error) {
      notify("An unexpected server error occurred. Please try again later.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <FormContainer title="Login">
        <form>
          <InputField
            labeltext="Email"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            required={true}
          />
          <InputField
            labeltext="Password"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            required={true}
          />
          <SubmitButton text={loading ? <AiOutlineLoading className="loading" style={{ width: "20px", height: "20px" }} /> : "Login"} handleFunction={handleSubmit} />
        </form>
        <p>
          Don&apos;t have an account?
          <Link to="/register">Register</Link>
        </p>
      </FormContainer>
    </>
  );
}
