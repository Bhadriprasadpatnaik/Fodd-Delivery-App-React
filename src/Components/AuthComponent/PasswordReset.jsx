import React, { useState } from "react";
import { toast } from "react-toastify";
import firebase from "../../firebase";
import { useHistory } from "react-router-dom";

const PasswordReset = () => {
  let history = useHistory();
  let [state, setState] = useState({
    loading: false,
    email: "",
  });
  let { loading, email } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      await firebase.auth().sendPasswordResetEmail(email);
      let message = `Password reset message has been sent to ${email}`;
      toast.info(message);
      history.push("/login");
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <section id="authBlock">
      <article>
        <div className="authContent">
          <h1>Password Reset</h1>
          <p style={{ fontSize: "14px", paddingBottom: "20px" }}>
            Enter your Spotify username.or the email address that you used to
            register.We'll send you an email with your username and a link to
            reset your password.
          </p>
        </div>
        <div className='="formContent'>
          <div className="addForm">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="password_reset">
                  Email address or username
                </label>
                <input
                  type="text"
                  required
                  name="email"
                  onChange={handleChange}
                  value={email}
                />
              </div>
              <div className="form-group btn-group">
                <button>send</button>
                <p>If you still need help , contact Spotify Support.</p>
              </div>
            </form>
          </div>
        </div>
      </article>
    </section>
  );
};

export default PasswordReset;
