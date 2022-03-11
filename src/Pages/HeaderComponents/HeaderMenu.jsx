import React, { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { AuthContextApi } from "../../Apis/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from "../../firebase";
import { toast } from "react-toastify";

const HeaderMenu = () => {
 
  let [state, setstate] = useState(false);
  let toggleElement = useRef();
  let chiildRef = useRef();
  let handleChange = () => {
    setstate(!state);
  };

  const handleClickOutside = event => {
    if (
      chiildRef.current &&
      toggleElement.current &&
      !toggleElement.current.contains(event.target) &&
      !chiildRef.current.contains(event.target)
    ) {
      setstate(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, []);

  let Logout = () => {
    firebase
      .auth()
      .signOut()
      .then(_ => {
        toast.success("successfully logged out from application");
        window.location.assign("/login");
      })
      .catch(err => toast.error(err.message));
  }
  
  let AUTH = useContext(AuthContextApi);
  console.log(AUTH);

  let AnonymousUser = () => (
    <Fragment>
      <li>
        <Link to="/">Premium</Link>
      </li>
      <li>
        <Link to="/">Support</Link>
      </li>
      <li>
        <Link to="/">Download</Link>
      </li>
      <li className="bar"></li>
      <li>
        <Link to="/signup">Sign up</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );
  let AuthenticatedUser = () => (
    <Fragment>
      <div style={{ paddingRight: "560px", marginTop: "30px" }}>
        <i
          class="fas fa-chevron-left"
          style={{ padding: "10px", height: "70px", color: "white" }}
        ></i>
        <i
          class="fas fa-chevron-right"
          style={{ padding: "10px", height: "70px", color: "white" }}
        ></i>
      </div>

      <button
        style={{
          borderRadius: "20px",
          background: "#000",
          color: "white",
          padding: "10px",
          margin: "20px 12px",
          border: "1px solid white",
          width: "33mm",
          height: "37px",
        }}
      >
        UPGRADE
      </button>
      <li>
        <Link to="" ref={toggleElement} onClick={handleChange}>
          <figure className="profile_img">
            <img src={AUTH.photoURL} alt={AUTH.displayName} />
            <figcaption>{AUTH.displayName}</figcaption>&nbsp;&nbsp;
            <i class="fas fa-sort-down"></i>
          </figure>
        </Link>
      </li>
      <div
        ref={chiildRef}
        className="dropdown"
        style={state === false ? { display: "none" } : { display: "block" }}
      >
        <ul className="right">
          <li className="menu1">
            <Link to="">
              &nbsp; account &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              <i className="fas fa-external-link-alt"></i>
            </Link>
          </li>
          <li className="menu2">
            <Link to="/userhome/profile">profile</Link>
          </li>
          <li className="menu3">
            <Link to="">
              upgrade to premium &nbsp;&nbsp;
              <i className="fas fa-external-link-alt"></i>
            </Link>
          </li>
          <li className="menu5">
            <Link to="">setting </Link>
          </li>
          <li className="menu6">
            <Link onClick={Logout}>logout</Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      <nav>
        <ul className="ul">
          {AUTH ? <AuthenticatedUser /> : <AnonymousUser />}
        </ul>
      </nav>
    </Fragment>
  );
};

export default HeaderMenu;
