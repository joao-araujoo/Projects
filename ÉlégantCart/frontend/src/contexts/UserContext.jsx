import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext({});

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState({});

  const login = async (email, password) => {
    const response = await fetch("http://localhost:8080/api/auth/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const loginResult = await response.json();
    
    if (loginResult.code === 200) {
      delete loginResult.user.__v;
      console.log(loginResult.user);
      setUser(loginResult.user);
    }

    return loginResult;
  };

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
}
