/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-08-25 11:26:52
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-08-26 11:21:39
 * @FilePath: \electron-react-nocking\src\render\components\Roulette\style.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styled from "styled-components";
export const BtnGroups = styled.div`
  font-size: 24px;
  font-weight: 600px;
  color: black;
  width: 250px;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid gray;
  box-shadow: 0, 0, 0, 0.5;
  background: white;
  background: rgba(255, 255, 255, 0.5);
  border: 4px solid black;
  border-radius: 12px;
`;
export const BtnItem = styled.div`
  width: 80%;
  height: 70px;
  margin: 10px 0px;
  border: 4px solid black;
  text-align: center;
  line-height: 56px;
  cursor: pointer;
  border-radius: 12px;
  &:hover {
    color: black;
    border: 4px solid black;
  }
`;
