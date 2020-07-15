import "./App.scss";

import React from "react";
import { hot } from "react-hot-loader/root";

import { ButtonMaskInput } from "./components/ButtonMaskInput";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Slippi Bitmask Input Visualizer</h1>
        <ButtonMaskInput />
      </header>
    </div>
  );
};

export default hot(App);
