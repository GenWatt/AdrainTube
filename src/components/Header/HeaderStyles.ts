import styled, { keyframes } from "styled-components";
import { centerFlex } from "../../themes/mixins";

export const ContainerHeader = styled.h1`
  ${centerFlex};
  color: ${({ theme }) => theme.fontColors.mainText};
`;

const rotateSettingsIcon = keyframes`
    0% {
        transform: rotate(0) scale(1.5);
    }

    100% {
        transform: rotate(360deg) scale(1.5);
    }
`;

export const HeaderSettingsBtn = styled.button`
  ${centerFlex}
  position: fixed;
  top: 15px;
  right: 15px;
  width: 40px;
  height: 40px;
  z-index: 3;
  cursor: pointer;
  transform: scale(1.7);
  background-color: transparent;
  outline: none;
  border: none;
  border-radius: 50%;
  transition: background-color 0.4s ease;
  color: ${({ theme }) => theme.fontColors.mainText};

  &:hover {
    animation: ${rotateSettingsIcon} 1.5s ease-in-out infinite;
    background-color: ${({ theme }) => theme.colors.opositeColorLowAlpha};
  }

  @media only screen and (max-width: 490px) {
    top: 5px;
    right: 5px;
  }

  @media only screen and (max-width: 320px) {
    right: 3px;
    transform: scale(1.5);
  }
`;

export const HeaderBrand = styled.header`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-shadow: ${({ theme }) => theme.boxShadows.common};
  color: ${({ theme }) => theme.fontColors.mainText};

  @media only screen and (max-width: 500px) {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;
