export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  code: null,
  token: null,
};

const reducer = (state, action) => {
  console.log(action.type);
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_CODE":
      return {
        ...state,
        code: action.code,
      };
    default:
      return state;
  }
};

export default reducer;
