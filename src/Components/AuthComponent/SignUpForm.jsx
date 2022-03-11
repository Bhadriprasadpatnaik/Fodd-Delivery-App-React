import React, { useState } from "react";
import { Link,withRouter } from "react-router-dom";
import firebase from "../../firebase";
import { toast } from "react-toastify";

const SignUpForm = ({history}) => {
  let [state, setState] = useState({
    email: "",
    email1: "",
    password: "",
    profile_name: "",
    month: "",
    year: "",
    date: "",
    gender: "",
    loading:false,
  });
  let {
    email,
    email1,
    password,
    profile_name,
    month,
    year,
    date,
    gender,
    loading,
  } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
      try {
          console.log(state);
      setState({ loading: true });
      if (email === email1) {
        let USER_Data = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        let confirmMessage = `A verification message has been sent to ${email}, verify and login `;
        USER_Data.user.sendEmailVerification();
        toast.info(confirmMessage);

        USER_Data.user.updateProfile({
          displayName: profile_name,
          photoURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnEWdBy0UdHEZJvewfLM4Mkk3Yt4IeqCjXTxJ6GLegGPnYI5Z76NvDIG28lhZzV20BLcw&usqp=CAU",
        });

        history.push("/login");
        // toast.success("successfully user registered")
      } else {
        toast.error("confirm email is not matching");
      }
      } catch (error) {
        toast.error(error.message)
    }
    setState({ loading: false });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="formLabel">What's your email?</label>
          <input
            className="formInput"
            type="email"
            name="email"
            placeholder="Enter your email."
            value={email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="formLabel">Confirm your email</label>
          <input
            className="formInput"
            type="email"
            name="email1"
            placeholder="Enter your email again."
            value={email1}
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="formLabel">Create a password</label>
          <input
            className="formInput"
            type="password"
            name="password"
            value={password}
            placeholder="Create a password."
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="formLabel">What should we call you?</label>
          <input
            className="formInput"
            type="text"
            name="profile_name"
            placeholder="Enter a profile name."
            value={profile_name}
            onChange={handleChange}
          />
          <p style={{ fontSize: "14px", display: "flex", paddingTop: "10px" }}>
            This appears on your profile.
          </p>
        </div>
        <div>
          <label className="form-group">What's your date of birth?</label>
          <div className="dateBlock">
            <input
              type="text"
              id="text1"
              placeholder="Month"
              name="month"
              value={month}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              id="text2"
              placeholder="YYYY"
              name="year"
              value={year}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              id="text3"
              placeholder="DD"
              name="date"
              value={date}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <label className="formLabel">What's your gender?</label>
          <div
            className="formRadioBlock"
            value={gender}
            onChange={handleChange}
          >
            <input
              className="formRadio"
              type="radio"
              value="male"
              name="gender"
            />
        Male 
            <input
              className="formRadio"
              type="radio"
              value="female"
              name="gender"
            />Female
            <input
              className="formRadio"
              type="radio"
              value="nonbinary"
              name="gender"
            /> Non-binary
          </div>
        </div>
        <div className="checkbox1">
          <input type="checkbox" name="checkbox" value="" />
           I would prefer not to receive marketing messages from
          <br /> Spotify
        </div>
        <div className="checkbox2">
          <input type="checkbox" name="checkbox" value="" />
         Share my registration data with Spotify's content providers for
          <br />
          marketing purposes.
        </div>
        <div className="form-group">
          <p className="copyWriteText">
            <p>
              By clicking on sign-up, you agree to Spotify's Terms and
              Conditions of Use.
            </p>
            <br />
            To learn more about how Spotify collects, uses, shares and protects
            your
            <br /> personal data, please see Spotify's Privacy Policy.
          </p>
        </div>
        <div className="form-group btn-group">
                  <button>{loading === true ? "Loading..." : "SignUp"}</button>
        </div>
        <div>
          <p className="form-group1">
            Have an account?<Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default withRouter(SignUpForm);
