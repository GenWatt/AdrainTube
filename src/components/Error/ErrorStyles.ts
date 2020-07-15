import styled from "styled-components";
import { motion } from "framer-motion";
import { centerFlex } from "../../themes/mixins";

export const ErrorSection = motion.custom(styled.section`
  width: 100%;
  position: fixed;
  left: 0;
  opacity: 0;
  color: white;
  font-weight: bold;
  z-index: 1000;
  ${centerFlex};
  pointer-events: none;
`);

export const ErrorMessage = styled.div`
  background-color: ${({ theme }) => theme.colors.errorColor};
  width: 70%;
  text-align: center;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.boxShadows.neumorphismRed};
`;
