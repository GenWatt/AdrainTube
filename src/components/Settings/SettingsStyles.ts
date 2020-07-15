import styled from "styled-components";
import { motion } from "framer-motion";
import { centerFlex, button } from "../../themes/mixins";

export const SettingsSection = styled(motion.section)`
  ${centerFlex};
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  transform-origin: top right;
  padding: ${({ theme }) => theme.colors};
  background-image: ${({ theme }) =>
    `linear-gradient(45deg, ${theme.colors.primary}, ${theme.colors.secondary})`};
`;

export const SettingsHeader = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const SettingsForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const InputBoxes = styled(motion.div)`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  margin-top: 20px;
`;

export const FormInput = styled.input.attrs({ type: "checkbox" })`
  justify-self: self-end;
  margin-right: 30px;
  width: 80px;
  height: 25px;
  position: relative;

  &::before {
    content: "";
    background-color: white;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    transition: background-color 0.3s ease-out;
  }

  &:checked::before {
    background-color: black;
  }

  &::after {
    content: "";
    background-color: rgb(63, 63, 231);
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    left: 65%;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    transition: background-color 0.4s ease-in, left 0.5s ease-in-out;
  }

  &:checked::after {
    background-color: white;
    left: 0;
  }
`;

export const Label = styled.label`
  justify-self: flex-start;
  align-self: center;
`;

export const SettingsBtn = styled.button.attrs({ type: "submit" })<{
  isShow: boolean;
}>`
  ${button};
  background-image: linear-gradient(45deg, rgb(31, 120, 236), rgb(8, 123, 218));
  position: fixed;
  bottom: 30px;
  left: 50%;
  ${({ isShow }) =>
    isShow
      ? "transform: scale(1) translate(-50%, 0);"
      : "transform: scale(0) translateY(100px);"}
  width: 100px;
  height: 35px;
  border-radius: 10px;
  padding: 5px;
  transform-origin: center center;
  transition: transform 0.4s ease-in-out;
  color: white;

  &:hover,
  &:focus {
    transform: scaleX(1.1) translate(-50%, 0);
  }
`;
