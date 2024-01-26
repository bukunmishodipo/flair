import React, { useState, useEffect } from "react";
import FileBase64 from "react-file-base64";
import { post, get } from "../../utilities";

const ProfilePicture = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [url, setURL] = useState(null);

  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };

  useEffect(() => {
    console.log(props.userId);
    if (props.userId) {
      console.log("getting profile piucture");
      get("/api/profilePicture").then((URL) => {
        setURL(URL.profilePic);
        console.log("URL", URL);
      });
    }
  }, [props.userId]);

  const handleUpload = (event) => {
    event.preventDefault();
    if (selectedFile) {
      const formData = new FormData();
      const imageBlob = new Blob([selectedFile], { type: "text/plain" });
      formData.append("profilePicture", imageBlob);
      // const headers = new Headers();
      // headers.append(content - type, "multipart/form-data");
      console.log("File:", selectedFile);
      console.log("form", formData);
      console.log("blob:", imageBlob);
      fetch("/api/upload_files", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          console.log("response:", response);
          response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error uploading profile picture:", error);
        });
    }
  };

  return (
    <div>
      <FileBase64 type="file" multiple={false} onDone={({ base64 }) => handleUpload(base64)} />
      <button onClick={handleUpload}>Upload Profile Picture</button>
      {url ? (
        <img id="profilePicture" src={`${atob(url)}`} alt="Profile Picture" />
      ) : (
        "No profile picture available"
      )}
    </div>
  );
};

export default ProfilePicture;
