/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-08-25 11:21:06
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-08-26 11:22:18
 * @FilePath: \electron-react-nocking\src\render\components\Update\style.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styled from "styled-components";

export const VersionFont = styled.p`
  color: ${(props) => props.theme.ftColor};
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%);
  font-size: 14px;
  font-weight: 600;
`;
export const ProgressBox = styled.div`
  width: 50%;
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translate(-50%);
`;
