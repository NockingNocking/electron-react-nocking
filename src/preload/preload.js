/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-08-24 10:20:59
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-08-24 15:38:35
 * @FilePath: \electron\src\preload\preload.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { contextBridge, ipcRenderer, remote, shell } = require("electron");

const ipc = {
  render: {
    // From render to main.
    send: [
      "toMain",
      "render-send",
      "checkForUpdate",
      "isUpdateNow",
      "checkAppVersion",
    ],
    // From main to render.
    receive: [
      "updateAvailable",
      "message",
      "downloadProgress",
      "checking-for-update",
      "update-not-available",
      "isUpdateNow",
      "version",
    ],
    // From render to main and back again.
    sendReceive: [],
  },
};

contextBridge.exposeInMainWorld("electron", {
  ipcRenderer,
  remote,
  shell,
  ipcRender: {
    send: (channel, data) => {
      // whitelist channels
      let validChannels = ipc.render.send;
      if (validChannels.includes(channel)) {
        ipcRenderer.send(channel, data);
      }
    },
    receive: (channel, func) => {
      let validChannels = ipc.render.receive;
      // console.log('validChannels', validChannels);
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.on(`${channel}`, (event, ...args) => func(...args));
      }
    },
    invoke: (channel, args) => {
      let validChannels = ipc.render.sendReceive;
      if (validChannels.includes(channel)) {
        return ipcRenderer.invoke(channel, args);
      }
    },
  },
});
