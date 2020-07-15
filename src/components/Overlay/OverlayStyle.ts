import styled from "styled-components";

export const OverlayBox = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.3;
  z-index: -1;
`;

export const OverlayVideo = styled.iframe`
  width: 100vw;
  height: 100vh;
`;
