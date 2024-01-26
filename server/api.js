/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");

const multer = require("multer");
// const upload = multer({ dest: "uploads/" });
// const storage = multer.memoryStorage();
const upload = multer();

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user)
    socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

// router.post("/uploadProfilePicture", (req, res) => {
//   // do nothing if user not logged in
//   res.send({});
// });

router.post("/upload_files", upload.single("profilePicture"), uploadFiles);

function uploadFiles(req, res) {
  //console.log(req);
  //console.log(req.file);
  console.log(req.user._id);
  let newProfilePicture = req.file.buffer;
  User.updateOne(
    { _id: req.user._id },
    { $set: { profilePicture: Buffer.from(newProfilePicture) } }
  )
    .then(() => {
      console.log(Buffer.from(newProfilePicture));
      res.json({ message: "Successfully uploaded and updated profile picture" });
    })
    .catch((error) => {
      console.error("Error updating profile picture:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
}

router.get("/profilePicture", (req, res) => {
  User.findOne({ _id: req.user._id })
    .lean()
    .then((user) => {
      if (!user) {
        console.error("Error finding user:", user);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      if (!user || !user.profilePicture) {
        return res.send({});
      }

      // console.log(user.profilePicture);
      // Send the profile picture as the response
      // Adjust the content type based on your file type
      res.send({ profilePic: user.profilePicture });
    });
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});
module.exports = router;
