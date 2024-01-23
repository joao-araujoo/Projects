import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext({});

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(() => {
    const user = localStorage.getItem("elegantcart-user");
    return user ?? {};
  });

  const login = async (email, password) => {
    const response = await fetch(
      "https://elegantcart-api-production.up.railway.app/auth/login",
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const loginResult = await response.json();

    if (loginResult.code === 200) {
      delete loginResult.user.__v;
      setUser(loginResult.user);
      localStorage.setItem("elegantcart-user", JSON.stringify(loginResult.user));
    }

    return loginResult;
  };

  const register = async ({ name, profilePicture, email, password }) => {
    const response = await fetch(
      "https://elegantcart-api-production.up.railway.app/users",
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          name,
          profilePicture,
          email,
          password,
        }),
      }
    );

    const registerResult = await response.json();

    if (registerResult.code === 201) {
      setUser(registerResult.data);
      localStorage.setItem("elegantcart-user", JSON.stringify(registerResult.data));
    }

    return registerResult;
  };

  return (
    <UserContext.Provider value={{ user, login, register }}>
      {children}
    </UserContext.Provider>
  );
}
