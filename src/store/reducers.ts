import { InitialStateType } from "./types";
import { bitmaskToButtons } from "../lib/bitmaskToButtons";

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  SetBitmask = "SET_BITMASK",
  Create = "CREATE_PRODUCT",
  Delete = "DELETE_PRODUCT",
  Add = "ADD_PRODUCT",
}

// Product

type ProductType = {
  id: number;
  name: string;
  price: number;
};

type ProductPayload = {
  [Types.SetBitmask]: {
    mask: number;
  };
  [Types.Create]: {
    id: number;
    name: string;
    price: number;
  };
  [Types.Delete]: {
    id: number;
  };
};

export type ProductActions = ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

export const productReducer = (state: InitialStateType, action: ProductActions) => {
  switch (action.type) {
    case Types.SetBitmask:
      const { payload } = action;
      const newProducts = { ...state };
      newProducts.mask = payload.mask;
      newProducts.buttons = bitmaskToButtons(payload.mask);
      return newProducts;
    case Types.Delete:
      return state;
    default:
      return state;
  }
};
