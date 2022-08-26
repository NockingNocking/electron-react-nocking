/*
 * @Author: Mocking 497773732@qq.com
 * @Date: 2022-08-26 13:26:04
 * @LastEditors: Mocking 497773732@qq.com
 * @LastEditTime: 2022-08-26 17:13:56
 * @FilePath: \electron-react-nocking\src\render\utils\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 获取随机颜色
export const randomColor = () => {
  let color = "#";
  for (let i = 0; i < 6; i++)
    color += parseInt(Math.random() * 16).toString(16);
  return color;
};
export const drawSector = (origin, extension, sectorEl) => {
  const angleRange = [origin, origin + extension];
  console.log(angleRange);
  const points = {
    0: "100% 50%",
    45: `100% 0%`,
    90: `50% 0%`,
    135: `0% 0%`,
    180: `0% 50%`,
    225: `0% 100%`,
    270: `50% 100%`,
    315: `100% 100%`,
  };
  const clipPoints = [];
  for (let pointIndex = 0; pointIndex < 17; pointIndex++) {
    let pointAngle = pointIndex * 45;
    let pointAngleKey = pointAngle % 360;
    if (angleRange[0] <= pointAngle && angleRange[1] >= pointAngle) {
      let clipPoint = points[pointAngleKey];
      clipPoints.push(clipPoint);
      if (clipPoints.length >= 8) break;
    } else if (clipPoints.length > 0) {
      break;
    }
  }

  let clipPointStartXY = {
    x: 160 * 10 * Math.cos((angleRange[0] / 360) * 2 * Math.PI),
    y: 160 * 10 * Math.sin((angleRange[0] / 360) * 2 * Math.PI),
  };
  let clipPointFinishXY = {
    x: 160 * 10 * Math.cos((angleRange[1] / 360) * 2 * Math.PI),
    y: 160 * 10 * Math.sin((angleRange[1] / 360) * 2 * Math.PI),
  };
  let clipPointStart = `${clipPointStartXY.x + 160}px ${
    -clipPointStartXY.y + 160
  }px`;
  let clipPointFinish = `${clipPointFinishXY.x + 160}px ${
    -clipPointFinishXY.y + 160
  }px`;
  let clipPointCenter = "50% 50%";

  let clipPointsAll = [
    clipPointStart,
    ...clipPoints,
    clipPointFinish,
    clipPointCenter,
    clipPointStart,
  ].join(",");
  //
  sectorEl.style["clip-path"] = `polygon(${clipPointsAll})`;
};
