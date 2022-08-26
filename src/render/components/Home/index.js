/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-08-25 09:41:35
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-08-26 12:18:23
 * @FilePath: \electron-react-nocking\src\render\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { XWarp } from "./style";

import Roulette from "../Roulette";
import Update from "../Update";

const Home = () => {
  return (
    <>
      <XWarp>
        <Roulette></Roulette>
        <Update></Update>
      </XWarp>
    </>
  );
};

export default Home;
