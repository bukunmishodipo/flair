import React from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

import "../../utilities.css";
import "./Home.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "846759232774-gvf4r9b6gq5mqpqc2jra692nak4fuurj.apps.googleusercontent.com";

const Home = (props) => {
  return !props.userId ? (
    <div className="Home-loggedOutContainer">
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        {
          <div>
            <GoogleLogin onSuccess={props.handleLogin} onError={(err) => console.log(err)} />
          </div>
        }
      </GoogleOAuthProvider>

      <div className="Home-message">
        <p className="u-textLeft">Dear creative,</p>
        <div className="Home-messageCenter">
          <p>Flair is a digital creative hub that gives you the space to</p>
          <p>
            thrive <br></br> talk your shit! <br></br> invest in your artistry <br></br> document
            your work <br></br> find collaborators <br></br> educate <br></br> be inspired <br></br>{" "}
            empower
            <br></br> ...
          </p>
        </div>
        <p className="u-textLeft">This mini universe has been created for you to show off.</p>
      </div>
    </div>
  ) : (
    <div className="Home-loggedInContainer">This is the home page</div>
  );
};

export default Home;
