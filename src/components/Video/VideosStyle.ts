import styled from "styled-components";

export const ContainerVideo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: inherit;
`;

export const Header = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

export const ContainerVideoSection = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
