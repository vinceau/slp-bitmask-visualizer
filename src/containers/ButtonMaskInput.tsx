import React, { useContext, useState } from "react";
import { Types, AppContext } from "../store";
import { ControllerDisplay } from "../components/ControllerDisplay";

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

  return (
    <div>
      <div>{state.mask}</div>
      <input onChange={({ target }) => onChange(target.value)} />
      <div>{error}</div>
      <p>{state.buttons.join(" + ")}</p>
      <ControllerDisplay buttons={state.buttons} />
    </div>
  );
};
