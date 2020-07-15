import React, { createContext, useReducer, Dispatch } from "react";
import { productReducer, ProductActions } from "./reducers";
import { InitialStateType } from "./types";

const initialState: InitialStateType = {
  buttons: [],
  mask: 0,
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ProductActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (state: InitialStateType, action: ProductActions) => productReducer(state, action);

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
