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
  return (
    <nav className="NavBar-container">
      <div className="NavBar-title u-inlineBlock">Flair</div>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        {userId ? (
          <div className="NavBar-linkContainer u-inlineBlock">
            <Link to="/" className="NavBar-link">
              Home
            </Link>
            <Link to="/profile/" className="NavBar-link">
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
        ) : (
          <div className="NavBar-linkContainer u-inlineBlock">
            <Link to="/" className="NavBar-link">
              Home
            </Link>
            <div className="NavBar-link u-inlineBlock">
              <GoogleLogin onSuccess={handleLogin} onError={(err) => console.log(err)} />
            </div>
          </div>
        )}
      </GoogleOAuthProvider>
    </nav>
  );
};

export default NavBar;
