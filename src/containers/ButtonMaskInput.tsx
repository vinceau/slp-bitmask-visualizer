import React, { useContext, useState } from "react";
import { Types, AppContext } from "../store";
import { ControllerDisplay } from "../components/ControllerDisplay";
import { ButtonInput } from "react-gamecube";

export const ButtonMaskInput = () => {
  const { state, dispatch } = useContext(AppContext);
  const [error, setError] = useState<string>("");

  const setBitmask = (mask: number) => {
    dispatch({
      type: Types.SetBitmask,
      payload: {
        mask,
      },
    });
  };

  const onChange = (value: string) => {
    if (isNaN(+value)) {
      setError("Invalid number");
    } else {
      setError("");
      setBitmask(+value);
    }
  };

  const onButtonClick = (button: ButtonInput): void => {
    dispatch({
      type: Types.ToggleButton,
      payload: {
        button,
      },
    });
  };

  return (
    <div>
      <div>{state.mask}</div>
      <input onChange={({ target }) => onChange(target.value)} />
      <div>{error}</div>
      <p>{state.buttons.join(" + ")}</p>
      <ControllerDisplay buttons={state.buttons} onClick={onButtonClick} />
    </div>
  );
};
