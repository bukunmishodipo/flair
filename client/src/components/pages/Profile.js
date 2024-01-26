import React from "react";
import ProfilePicture from "../modules/ProfilePicture";
import "./Profile.css";

const Profile = (props) => {
  return (
    <>
      <ProfilePicture className="Profile-editButton" userId={props.userId} />
      <div className="Profile-avatarContainer">
        <div className="Profile-avatar">pic</div>
        <div className="Profile-bioContainer">bio</div>
      </div>

      <div className="Profile-promptContainer">prompt</div>
    </>
  );
};

export default Profile;
