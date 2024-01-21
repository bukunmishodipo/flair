import React from "react";
// import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

import "../../utilities.css";
import "./Home.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
// const GOOGLE_CLIENT_ID = "846759232774-gvf4r9b6gq5mqpqc2jra692nak4fuurj.apps.googleusercontent.com";

const Home = () => {
  return (
    <div>home page</div>

    // <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    //   {userId ? (
    //     <button
    //       onClick={() => {
    //         googleLogout();
    //         handleLogout();
    //       }}
    //     >
    //       Logout
    //     </button>
    //   ) : (
    //     <div>
    //       <GoogleLogin onSuccess={handleLogin} onError={(err) => console.log(err)} />
    //     </div>
    //   )}
    // </GoogleOAuthProvider>
  );
};

export default Home;
