import styled from "styled-components";
import bg from "../../assets/bg.png";

export const XWarp = styled.div`
  width: 100vw;
  height: 100vh;
  background: red;
  background: ${(props) => props.theme.bgColor};
  position: relative;
  background-size: 100% 100%;
  background: url(${bg}) no-repeat;
`;
