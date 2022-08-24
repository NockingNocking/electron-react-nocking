/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-08-24 15:43:14
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-08-24 15:43:23
 * @FilePath: \electron\src\render\components\Update\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useEffect } from "react";
const { ipcRender } = window.electron;

const Update = () => {
  const [text, setText] = useState("");
  const [version, setVersion] = useState("0.0.0");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    ipcRender.receive("downloadProgress", (data) => {
      console.log("data: download-progress", data);
      const progress = parseInt(data.percent, 10);
      setProgress(progress);
    });
    ipcRender.receive("isUpdateNow", () => {
      ipcRender.send("isUpdateNow");
    });
    ipcRender.receive("version", (version) => {
      console.log("version", version);
      setVersion(version);
    });
    ipcRender.send("checkAppVersion");
    ipcRender.receive("updateAvailable", (data) => {
      console.log("data-updateAvailable", data);
    });
    ipcRender.receive("message", (data) => {
      console.log("data: message", data);
      setText(data);
    });
    ipcRender.send("checkForUpdate");
  }, []);

  return (
    <div style={{ color: "#fff" }}>
      <p>current app version: {version}</p>
      <p>{text}</p>
      {progress ? <p>下载进度：{progress}%</p> : null}
    </div>
  );
};

export default Update;
