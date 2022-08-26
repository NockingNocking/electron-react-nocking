/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-08-24 10:08:25
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-08-26 12:20:08
 * @FilePath: \electron\src\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { ThemeProvider } from "styled-components";
import { defaultThemeProps } from "./render/style/theme/theme";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./render/router/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={defaultThemeProps}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </ThemeProvider>
);
