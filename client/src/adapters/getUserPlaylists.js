import { spotifyApi } from "./spotifyApi";
import { useStateValues } from "../contexts/stateProvider";

export async function GetUserPlaylists() {
  const [{ access_token, user_playlists }, dispatch] = useStateValues();

  spotifyApi.setAccessToken(access_token);

  spotifyApi
    .getUserPlaylists()
    .then((playlists) => {
      console.log(playlists.items);
      dispatch({
        type: "SET_USER_PLAYLISTS",
        user_playlists: user_playlists,
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
