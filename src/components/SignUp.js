const SignUp = () => {
  return (
    <section className="sign-up">
      <button type="submit" form="sign-up-form" className="sign-up-button">
        Create Account
      </button>
      <p className="login-cta">
        Already have an account? <span>Log in</span>
      </p>
    </section>
  );
};

export default SignUp;
