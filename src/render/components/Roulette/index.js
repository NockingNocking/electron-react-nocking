/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-08-25 08:50:16
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-08-26 12:23:37
 * @FilePath: \electron-react-nocking\src\render\components\Roulette\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { BtnGroups, BtnItem } from "./style";
import { useNavigate } from "react-router-dom";

const Roulette = () => {
  const navigate = useNavigate();

  return (
    <>
      <BtnGroups>
        <BtnItem onClick={() => navigate("/Game")}>点击开始</BtnItem>
        <BtnItem>关闭游戏</BtnItem>
      </BtnGroups>
    </>
  );
};
export default Roulette;
