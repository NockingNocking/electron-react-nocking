/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-08-26 12:06:26
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-08-26 12:12:34
 * @FilePath: \electron-react-nocking\src\render\router\redirect.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
const Redirect = () => {
  let navigate = useNavigate();
  let lc = useLocation();
  console.log(lc);
  useEffect(() => {
    if (lc.pathname === "/") {
      navigate("/Home");
    }
  }, [lc.pathname, navigate]);
  return <></>;
};

export default Redirect;
