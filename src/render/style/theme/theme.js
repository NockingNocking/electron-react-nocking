/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-08-25 08:16:20
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-08-26 11:39:05
 * @FilePath: \electron-react-nocking\src\render\style\theme.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import styled from "styled-components";

export const redThemeProps = {
  color: "red",
  bgColor: "red",
  ftColor: "rgba(0,0,0,1)",
};
export const defaultThemeProps = {
  color: "gray",
  bgColor: "white",
  ftColor: "rgba(0,0,0,1)",
};

export const XButton = styled.button`
  font-size: 1rem;
  margin: 1rem;
  padding: 0.25rem 1rem;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.ftColor};
  border: 2px solid ${(props) => props.theme.color};
`;
