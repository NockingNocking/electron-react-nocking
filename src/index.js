/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-08-24 10:08:25
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-08-25 08:34:32
 * @FilePath: \electron\src\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./render/App";
import { ThemeProvider } from "styled-components";
import { defaultThemeProps } from "./render/style/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultThemeProps}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
