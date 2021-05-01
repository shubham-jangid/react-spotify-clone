import React, { createContext, useReducer, useContext } from "react";

export const StateContext = createContext();

export default function StateProvider({ reducer, initialState, children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
}

export const useStateValues = () => useContext(StateContext);
