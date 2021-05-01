const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");
const app = express();

app.post("https://accounts.spotify.com/api/token", (req, res) => {
  const code = req.body.code;
  const credentials = {
    clientId: "334d4c8a77434a43933b31a11fcf0a56",
    clientSecret: "c73f19f3e5634e6f81c50de98ab3cec1",
    redirectUri: "http://localhost:3000/",
  };

  const spotifyApi = new SpotifyWebApi(credentials);

  spotifyApi.authorizationCodeGrant(code).then((data) => {
    console.log(data.body["access_token"]);
  });
});

app.listen("3001", () => {
  console.log("on 30001");
});
