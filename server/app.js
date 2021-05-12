const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const SpotifyWebApi = require("spotify-web-api-node");
const app = express();

require("dotenv").config();

app.use(cors());
app.use(bodyParser());

console.log(process.env.REDIRECT_URL);
app.post("/login", (req, res) => {
  const code = req.body.code;
  const credentials = {
    clientId: process.env.CLIENTID,
    clientSecret: process.env.SECRETE,
    redirectUri: process.env.REDIRECT_URL,
  };

  const spotifyApi = new SpotifyWebApi(credentials);

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        access_token: data.body.access_token,
        expires_in: data.body.expires_in,
        refresh_token: data.body.refresh_token,
      });
    })
    .catch((error) => {
      res.sendStatus(400);
      console.log(error);
    });
});

app.listen("3001", () => {
  console.log("on 30001");
});
