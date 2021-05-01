const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");
const app = express();

app.post("https://accounts.spotify.com/api/token", (req, res) => {
  const code = req.body.code;
 

  const spotifyApi = new SpotifyWebApi(credentials);

  spotifyApi.authorizationCodeGrant(code).then((data) => {
    console.log(data.body["access_token"]);
  });
});

app.listen("3001", () => {
  console.log("on 30001");
});
