const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const SpotifyWebApi = require("spotify-web-api-node");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(bodyParser());

app.get("/", (req, res) => {
  res.send("server is live");
});

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
    .catch((err) => {
      res.sendStatus(400);
      console.log(err);
    });
});

app.post("/refreshtoken", (req, res) => {
  const refreshToken = req.body.refresh_token;
  const credentials = {
    clientId: process.env.CLIENTID,
    clientSecret: process.env.SECRETE,
    redirectUri: process.env.REDIRECT_URL,
    refreshToken: refreshToken,
  };

  const spotifyApi = new SpotifyWebApi(credentials);

  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      res.json({
        access_token: data.body.access_token,
        expires_in: data.body.expires_in,
      });
    })
    .catch((err) => {
      res.sendStatus(400);
      console.log(err);
    });
});

app.listen(process.env.PORT || 30001, () => {
  console.log("on 30001");
});
