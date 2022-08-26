/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-08-26 11:43:47
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-08-26 12:13:11
 * @FilePath: \electron-react-nocking\src\render\router\beforeach.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// useResolvedPath
import { useNavigate, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { checkRouterAuth } from "./index";
import { useEffect, useState } from "react";
import Redirect from "./redirect";
const RouterBeforeEach = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    let obj = checkRouterAuth(location.pathname);
    let blLogin = sessionStorage.getItem("login");
    if (obj && obj.auth && blLogin === "false") {
      setAuth(false);
      navigate("/", { replace: true });
    } else {
      setAuth(true);
    }
  }, [location.pathname, navigate]);
  console.log(auth);
  return auth ? (
    <Redirect>
      <Outlet />
    </Redirect>
  ) : null;
};

export default RouterBeforeEach;
