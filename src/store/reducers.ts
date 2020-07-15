import { InitialStateType } from "./types";
import { bitmaskToButtons } from "../lib/bitmaskToButtons";
import { ButtonInput } from "react-gamecube";
import { generateInputBitmask } from "../lib/buttonsToBitmask";

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
  ToggleButton = "TOGGLE_BUTTON",
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
  [Types.ToggleButton]: {
    button: ButtonInput;
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
    case Types.ToggleButton:
      const { button } = action.payload;
      let newButtons = [...state.buttons];
      if (state.buttons.includes(button)) {
        // remove button from state
        newButtons = newButtons.filter((b) => b !== button);
      } else {
        // add button to state
        newButtons.push(button);
      }
      return {
        ...state,
        buttons: newButtons,
        mask: generateInputBitmask(...newButtons),
      };
    default:
      return state;
  }
};
