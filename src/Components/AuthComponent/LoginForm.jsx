import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import firebase from "../../firebase";

const LoginForm = ({ history }) => {
    let [state, setState] = useState({
        email: "",
        password: "",
        loading: false,
    });
    let { email, password, loading } = state;
    let handleChange = e => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    };
    let handleSubmit = async e => {
        e.preventDefault();
        try {
            setState({ loading: true });
            let UserData = await firebase
                .auth()
                .signInWithEmailAndPassword(email, password);
           if(UserData.user.emailVerified===true){
            toast.success(`Successfully ${email} logged in`);
            history.push("/");
        }else {
            history.push("/login");
            toast.error(`email has not yet verified go to ${email} verify then login`);
        }
    }

        catch (error) {
            toast.error(error.message);
        }
        setState({ loading: false });
    };
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="formLabel">Email address or username</label>
            <input
              className="formInput1"
              type="email"
              name="email"
              placeholder="Enter your email."
              value={email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="formLabel">Enter a password</label>
            <input
              className="formInput1"
              type="password"
              name="password"
              value={password}
              placeholder="Create a password."
              onChange={handleChange}
            />
          </div>

          <span className="checkbox1">
            <input type="checkbox" name="checkbox" value="" />
            Remember me
          </span>
          <span>
            <Link to="/PasswordReset" id="pass">
              Forgot your password?
            </Link>
          </span>
          <span className="form-group btn-group">
            <button>{loading === true ? "Loading..." : "Login"}</button>
          </span>
          <div className="line1"></div>
        </form>
      </div>
    );
}
export default withRouter(LoginForm);