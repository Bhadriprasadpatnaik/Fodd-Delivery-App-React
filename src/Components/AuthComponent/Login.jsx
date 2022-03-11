import React from "react";
import Logo from "../../Pages/HeaderComponents/Logo";
import "./auth.css";
import LoginForm from './LoginForm';
import SocialLogin, { GoogleProvider, FacebookProvider } from "../AuthComponent/LoginWithSocialMedia"
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Login = () => {
  let history = useHistory();
  let handleClick = async provider => {
    try {
      let res = await SocialLogin(provider);
      console.log(res);
      toast.success("successflly loggedin");
      history.push("/userHome/profile")
    } catch (error) {
      toast.error(error);
      
    }
  }
  return (
    <section id="authBlock">
      <article>
        <Logo />
        <div className="line"></div>

        <div className="authContent1">
          <h3 id="continue">To continue, log in to Spotify.</h3>
          <button
            className="facebook"
            onClick={() => handleClick(FacebookProvider)}
          >
            Continue with Facebook
          </button>
          <button className="apple">Continue with Apple</button>
          <button
            className="google"
            onClick={() => handleClick(GoogleProvider)}
          >
            Continue with google
          </button>
          <Link id="number" to="/PhoneAuth">Continue with phone number</Link>
          <p className="orBlock1">
            <strong>or</strong>
          </p>
        </div>
        <LoginForm />
      </article>
    </section>
  );
};

export default Login;
