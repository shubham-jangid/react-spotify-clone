export const initialState = {
  user: null,
  user_playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  code: null,
  access_token: null,
  refresh_token: null,
};

const reducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_ACCESS_TOKEN":
      return {
        ...state,
        access_token: action.access_token,
      };
    case "SET_REFRESH_TOKEN":
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
    default:
      return state;
  }
};

export default reducer;
