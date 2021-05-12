import { spotifyApi } from "./spotifyApi";
import { useStateValues } from "../contexts/stateProvider";
import { useEffect } from "react";

export default function useApiCalls() {
  const [{ access_token, user_playlists }, dispatch] = useStateValues();

  useEffect(() => {
    if (!access_token) return;

    spotifyApi.setAccessToken(access_token);

    console.log("uses api");
    spotifyApi
      .getUserPlaylists()
      .then((playlists) => {
        console.log(playlists.items);
        dispatch({
          type: "SET_USER_PLAYLISTS",
          user_playlists: playlists.items,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [access_token]);
}
