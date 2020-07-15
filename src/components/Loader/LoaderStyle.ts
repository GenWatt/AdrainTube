import styled, { keyframes } from "styled-components";
import { centerFlex } from "../../themes/mixins";

export const LoaderBox = styled.div`
  ${centerFlex};
`;

const loaderAnimation = keyframes`
  0%,
  100% {
    transform: scale(0.7) translateY(0);
  }

  25% {
    transform: scale(1) translateY(20px);
  }

  50% {
    transform: scale(0.4) translateY(-20px);
  }
`;

export const Dot = styled.span`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: grey;
  margin-left: 25px;
  animation: ${loaderAnimation} 2s ease-in-out infinite;

  &:nth-child(1) {
    animation-delay: 0.3s;
  }

  &:last-child {
    animation-delay: 0.6s;
  }
`;
