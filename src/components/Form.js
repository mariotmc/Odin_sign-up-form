import { useContext } from "react";
import { AppContext } from "../App";

const Form = () => {
  const {
    error,
    firstNameRef,
    lastNameRef,
    emailRef,
    phoneNumberRef,
    passwordRef,
    passwordConfirmationRef,
    validatePassword,
  } = useContext(AppContext);

  return (
    <section className="form">
      <h3 className="form-heading">Let's do this!</h3>

      <form id="sign-up-form" onSubmit={(e) => validatePassword(e)}>
        <div className="input-container">
          <label htmlFor="firstName">FIRST NAME</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            ref={firstNameRef}
            minLength="2"
            maxLength="20"
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="lastName">LAST NAME</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            ref={lastNameRef}
            minLength="2"
            maxLength="20"
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="email">EMAIL</label>
          <input type="email" name="email" id="email" ref={emailRef} maxLength="30" required />
        </div>

        <div className="input-container">
          <label htmlFor="phoneNumber">PHONE NUMBER</label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            ref={phoneNumberRef}
            minLength="9"
            maxLength="20"
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            name="password"
            id="password"
            ref={passwordRef}
            minLength="6"
            maxLength="20"
            required
          />
          {error && <label className="error-message">* Passwords do not match</label>}
        </div>

        <div className="input-container">
          <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            ref={passwordConfirmationRef}
            minLength="6"
            maxLength="20"
            required
          />
        </div>
      </form>
    </section>
  );
};

export default Form;
