import React from "react";
import { bitmaskToButtons } from "../lib/bitmaskToButtons";
import { ControllerDisplay } from "./ControllerDisplay";

export const ButtonMaskInput: React.FC = () => {
  const [error, setError] = React.useState<string>("");
  const [bitmask, setBitmask] = React.useState<number>(0);
  const buttons = bitmaskToButtons(bitmask);
  const onChange = (value: string) => {
    if (isNaN(+value)) {
      setError("Invalid number");
    } else {
      setError("");
      setBitmask(+value);
    }
  };
  return (
    <div>
      <input onChange={({ target }) => onChange(target.value)} />
      <div>{error}</div>
      <p>{buttons.join(" + ")}</p>
      <ControllerDisplay buttons={buttons} />
    </div>
  );
};
