import React, { useState } from "react";
import { toast } from "react-toastify";
import firebase from "../../firebase";
import { useHistory } from "react-router-dom";
const PhoneAuth = () => {
  let history = useHistory();
  let [state, setState] = useState({
    loading: false,
    phone: "",
  });
  let { loading, phone } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      let recaptchaContainer = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container"
      );
      let ConfirmationMessage = await firebase
        .auth()
        .signInWithPhoneNumber(phone, recaptchaContainer);
      let code = window.prompt("enter otp");
      ConfirmationMessage.confirm(code);
      toast.success("successfully logged in");
      history.push("/userhome/profile");
    } catch (error) {
      toast.error(error.message);
    }
    setState({ loading: false, phone: "" });
  };
  return (
    <section id="authblock">
      <article>
        <div className="authContent">
          <h1>Enter phone number</h1>

          <p style={{ fontSize: "14px", paddingBottom: "20px" }}>
            Enter your Spotify username,or the email address that you used to
            register.We will send you an email with your username and a link to
            reset your password
          </p>
        </div>
        <div className="formContent">
          <div className="addForm">
            <form onSubmit={handleSubmit}>
              <div className="form-group1">
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                />
              </div>
              <div id="recaptcha-container"></div>

              <div className="form-group btn-group">
                <button onClick={handleSubmit}>
                  {loading ? "sending" : "send"}
                </button>
                <p>If you still need help,please contact spotify support</p>
              </div>
            </form>
          </div>
        </div>
      </article>
    </section>
  );
};

export default PhoneAuth;
