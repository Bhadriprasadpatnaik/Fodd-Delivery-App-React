import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Pages/HeaderComponents/Navbar";
import "./Global.css";
import Home from "./Pages/Home";
import Login from "./Components/AuthComponent/Login";
import SignUp from "./Components/AuthComponent/SignUp";
import PageNotFound from "./Pages/PageNotFound";
import { AuthContextApi } from "./Apis/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserHome from "./UserComponent/UserHome";
import Spinner from "./Pages/Spinner/Spinner";
import ProtectedRouter from "./Helpers/ProtectedRouter";
import PublicRouter from "./Helpers/PublicRouter";
import PasswordReset from "./Components/AuthComponent/PasswordReset";
import PhoneAuth from "./Components/AuthComponent/PhoneAuth";
import CreatePlayList from "./Components/AudioComponent/CreatePlayList";

const App = () => {
  let Auth = useContext(AuthContextApi);
  return (
    <section id="SpotifyMainBlock">
      <article>
        <Router>
          <header>
            <Navbar />
          </header>
          <ToastContainer />
          <main>
            {/* dynamic rounting start */}
            <Switch>
              <PublicRouter path="/" exact>
                <Home />
              </PublicRouter>
              <PublicRouter path="/login" exact>
                <Login />
              </PublicRouter>
              <PublicRouter path="/signup" exact>
                <SignUp />
              </PublicRouter>
              <PublicRouter path="/PasswordReset" exact>
                <PasswordReset />
              </PublicRouter>
              <PublicRouter path="/PhoneAuth" exact>
                <PhoneAuth />
              </PublicRouter>
              <ProtectedRouter path="/userHome" component={UserHome} />
              {/* <ProtectedRouter path="/create-play-list" exact component={CreatePlayList} /> */}
              {/* start authentication */}
              {/* {Auth === null ? (
                  <Spinner />
                ) : (
                  <Route path="/UserHome">
                    <UserHome />
                     <ProtectedRouter/>
                  </Route>
                )} */}
              {/* end athentication */}
              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch>
          </main>
        </Router>
      </article>
    </section>
  );
};
export default App;
