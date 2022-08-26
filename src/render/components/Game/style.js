import styled from "styled-components";

export const BgWarp = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
`;

export const BgCircle = styled.div`
  width: 450px;
  height: 450px;
  border-radius: 50%;
  background: red;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;
export const Item = styled.div`
  z-index: 10;
  width: ${(props) => props.width}px;
  height: 225px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 225px;
  transform-origin: 0% 100%;
  transform: rotate(${(props) => props.rotate}deg);
  background: ${(props) => props.color};
  :first-child {
    z-index: 11;
  }
`;

export const Operation = styled.div`
  width: 300px;
  height: 100%;
  background: blue;
`;

export const Pointer = styled.div`
  position: absolute;
  left: 195px;
  top: 195px;
  z-index: 11;
  height: 60px;
  width: 60px;
  padding: 6px;
  color: #fff899;
  line-height: 28px;
  font-size: 22px;
  text-align: center;
  background-color: #ff5350;
  border-radius: 50%;
  border: 1px solid #ff5350;
  cursor: pointer;
  transition: transform 2s cubic-bezier(0.2, 0.93, 0.43, 1);
  ::after {
    content: "";
    position: absolute;
    left: 16px;
    top: -44px;
    border-width: 24px 12px;
    border-style: solid;
    border-color: transparent;
    border-bottom-color: #ff5350;
    transform-origin: center;
  }
`;
