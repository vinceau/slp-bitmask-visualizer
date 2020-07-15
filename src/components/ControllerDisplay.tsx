import React from "react";
import { ButtonInput, Controller } from "react-gamecube";
import { buttonsToControllerState } from "../lib/buttonsToController";

export interface ControllerDisplayProps {
  buttons: ButtonInput[];
}

export const ControllerDisplay: React.FC<ControllerDisplayProps> = ({ buttons }) => {
  const state = buttonsToControllerState(buttons);
  return <Controller value={state} hideAnalogSticks={true} />;
};
