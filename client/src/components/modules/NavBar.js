import React from "react";
import { Link } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

import "./NavBar.css";
import "../../utilities.css";

const GOOGLE_CLIENT_ID = "846759232774-gvf4r9b6gq5mqpqc2jra692nak4fuurj.apps.googleusercontent.com";
/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const NavBar = ({ userId, handleLogin, handleLogout }) => {
  return userId ? (
    <nav className="NavBar-container NavBar-loggedIn">
      <div className="NavBar-title">Flair</div>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        {
          <div className="NavBar-linkContainer">
            <Link to="/" className="NavBar-link u-block">
              Home
            </Link>
            <Link to="/profile/" className="NavBar-link u-block">
              Profile
            </Link>
            <button
              onClick={() => {
                googleLogout();
                handleLogout();
              }}
            >
              Logout
            </button>
          </div>
        }
      </GoogleOAuthProvider>
    </nav>
  ) : (
    <nav className="NavBar-container NavBar-loggedOut">
      {/* <span className="NavBar-title u-inlineBlock">
        F<br></br>L<br></br>A<br></br>I<br></br>R
      </span>
      <span className="NavBar-title u-inlineBlock">
        F<br></br>L<br></br>A<br></br>I<br></br>R
      </span>
      <span className="NavBar-title">
        F<br></br>L<br></br>A<br></br>I<br></br>R
      </span> */}

      <div className="NavBar-title">FLAIR</div>
    </nav>
  );
};

export default NavBar;
