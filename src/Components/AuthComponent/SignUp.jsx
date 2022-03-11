import React from "react";
import Logo from "../../Pages/HeaderComponents/Logo";
import "./auth.css";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <section id="authBlock">
      <article>
        <Logo />
        <div className="authContent">
          <h1>Sign up for free to start listning.</h1>
          <button>Sign up with Facebook</button>
          <p className="orBlock">
            <strong>or</strong>
          </p>
        </div>
        <SignUpForm/>
      </article>
    </section>
  );
};

export default SignUp;
