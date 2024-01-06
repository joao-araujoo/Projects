import { Link, useNavigate } from "react-router-dom";
import FormContainer from "../Auth/FormContainer/FormContainer";
import InputField from "../Auth/InputField/InputField";
import SubmitButton from "../Auth/SubmitButton/SubmitButton";
import useUser from "../../hooks/useUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { register } = useUser();

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
    try {
      const registerResult = await register({ name, profilePicture, email, password });

      if (registerResult.code === 201) {
        notify(registerResult.message, "success");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        notify(registerResult.message, "error");
      }
    } catch (error) {
      notify("An unexpected server error occurred. Please try again later.", "error");
    }
  };

  return (
    <>
      <ToastContainer />
      <FormContainer title="Register">
        <form>
          <InputField
            labeltext="Name"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            required="true"
          />
          <InputField
            labeltext="Profile Picture"
            type="text"
            name="profilePicture"
            id="profilePicture"
            value={profilePicture}
            onChange={(ev) => setProfilePicture(ev.target.value)}
          />
          <InputField
            labeltext="Email"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            required="true"
          />
          <InputField
            labeltext="Password"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            required="true"
          />
          <SubmitButton text="Register" handleFunction={handleSubmit} />
        </form>
        <p>
          Already have an account?
          <Link to="/login">Login</Link>
        </p>
      </FormContainer>
    </>
  );
}
