import "./App.scss";

import React from "react";
import { hot } from "react-hot-loader/root";

import { AppProvider } from "./store";
import { ButtonMaskInput } from "./containers/ButtonMaskInput";

const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="App">
        <header className="App-header">
          <h1>Slippi Bitmask Input Visualizer</h1>
          <ButtonMaskInput />
        </header>
      </div>
    </AppProvider>
  );
};

export default hot(App);
