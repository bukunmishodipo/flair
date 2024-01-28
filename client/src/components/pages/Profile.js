import React from "react";
import ProfilePicture from "../modules/ProfilePicture";
import EditProfileButton from "../modules/EditProfileButton";
import "./Profile.css";

const Profile = (props) => {
  return (
    <>
      <div className="Profile-header">
        <div className="Profile-avatarContainer">
          <ProfilePicture userId={props.userId} />
        </div>
        <div className="Profile-bioContainer">bio</div>
        <div>
          <EditProfileButton></EditProfileButton>
        </div>
      </div>

      <div className="Profile-promptContainer">prompt</div>
    </>
  );
};

export default Profile;
