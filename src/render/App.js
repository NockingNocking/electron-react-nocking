/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-08-24 16:37:21
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-08-25 09:04:45
 * @FilePath: \electron-react-nocking\src\render\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { XWarp } from "../render/style/theme";
import "./style/App.css";

import Roulette from "./components/Roulette";
import Update from "./components/Update";

const App = () => {
  return (
    <XWarp>
      <Update></Update>
      <Roulette></Roulette>
    </XWarp>
  );
};

export default App;
