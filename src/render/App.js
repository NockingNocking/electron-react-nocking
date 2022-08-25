import React from "react";
import { XWarp } from "../render/style/theme";
import "./style/App.css";

import Roulette from "./components/Roulette";
import Update from "./components/Update";

const App = () => {
  return (
    <>
      <XWarp>
        <Update></Update>
        <Roulette></Roulette>
      </XWarp>
    </>
  );
};

export default App;
