export const initialState = {
  userName: "",
  email: "",
  user_playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  code: null,
  access_token: null,
  refresh_token: null,
  expires_in: null,
  isTokenSet: false,
};

const reducer = (state, action) => {
  console.log(action.type);
  // console.log("jdlfjk");

  switch (action.type) {
    case "SET_USER_NAME":
      return {
        ...state,
        userName: action.userName,
      };

    case "SET_ACCESS_TOKEN":
      return {
        ...state,
        access_token: action.access_token,
      };
    case "SET_REFRESH_TOKEN":
      // console.log("resesh token set ---");

      return {
        ...state,
        refresh_token: action.refresh_token,
      };
    case "SET_CODE":
      return {
        ...state,
        code: action.code,
      };
    case "SET_USER_PLAYLISTS":
      return {
        ...state,
        user_playlists: action.user_playlists,
      };
    case "IS_TOKEN_SET":
      return {
        ...state,
        isTokenSet: action.isTokenSet,
      };
    case "SET_EXPIRES_IN":
      return {
        ...state,
        expires_in: action.expires_in,
      };
    default:
      return state;
  }
};

export default reducer;
