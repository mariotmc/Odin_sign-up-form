import { useState, createContext, useRef } from "react";
import "../src/styles/style.css";
import Background from "./components/Background";
import Content from "./components/Content";

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [error, setError] = useState("");
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const signUpUser = () => {
    setError("");
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    emailRef.current.value = "";
    phoneNumberRef.current.value = "";
    passwordRef.current.value = "";
    passwordRef.current.classList.remove("invalid");
    passwordConfirmationRef.current.value = "";
    passwordConfirmationRef.current.classList.remove("invalid");
  };

  const validatePassword = (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      setError("Passwords do not match");
      passwordRef.current.classList.add("invalid");
      passwordConfirmationRef.current.classList.add("invalid");
    } else {
      signUpUser();
    }
  };

  const value = {
    error,
    setError,
    firstNameRef,
    lastNameRef,
    emailRef,
    phoneNumberRef,
    passwordRef,
    passwordConfirmationRef,
    validatePassword,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

function App() {
  return (
    <ContextProvider>
      <Background />
      <Content />
    </ContextProvider>
  );
}

export default App;
