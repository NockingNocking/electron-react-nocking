/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-08-25 09:41:35
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-08-26 17:31:10
 * @FilePath: \electron-react-nocking\src\render\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BgCircle, BgWarp, Operation, Item, Pointer } from "./style";

const Game = () => {
  const navigate = useNavigate();
  const [resultArr, setResultArr] = useState(["1", "2", "3", "4", "5"]);

  const itemWidth = 225;

  const itemRotate = 360 / resultArr.length;

  let isStart = false;
  useEffect(() => {
    if (resultArr.length % 2 !== 0) {
      setResultArr([...resultArr, "再来一次"]);
    }
  }, [resultArr]);

  const pointerClick = (event) => {
    event.stopPropagation();
    if (isStart) return;
    let target = event.target;
    isStart = true;
    let next = getReward();

    target.style.transform = `rotateZ(${next.currentDeg}deg)`;
    let timer = setTimeout(() => {
      target.innerText = next.rewardText;
      isStart = false;
      clearTimeout(timer);
    }, 2000);
  };
  const getReward = (function () {
    let currentDeg = 0;
    return function () {
      let rotateDeg = Math.random() * 360 + 3600;
      currentDeg += rotateDeg;
      let rewardText = resultArr[Math.floor((currentDeg % 360) / 60)];
      return {
        currentDeg,
        rewardText,
      };
    };
  })();

  return (
    <>
      <BgWarp>
        <Operation></Operation>
        <BgCircle onClick={() => navigate("/")}>
          <Pointer onClick={(event) => pointerClick(event)}></Pointer>
          {resultArr.map((item, index) => {
            return (
              <Item
                key={index}
                width={itemWidth}
                rotate={index * itemRotate}
                color={index % 2 === 0 ? "#fff" : "#fef6e0"}
                char={item}
              >
                {item}
              </Item>
            );
          })}
        </BgCircle>
      </BgWarp>
    </>
  );
};

export default Game;
