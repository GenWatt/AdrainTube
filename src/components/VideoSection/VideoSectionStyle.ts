import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const VideoBox = styled.article<{ vertical: boolean | undefined }>`
  background-color: ${({ theme }) => theme.colors.lowAlpha};
  display: grid;
  grid-template-rows: 75% 25%;
  width: ${({ vertical }) => (vertical ? "100%" : "480px")};
  height: ${({ vertical }) => (vertical ? "100%" : "400px")};
  margin: 10px;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.boxShadows.common};

  @media only screen and (max-width: 490px) {
    width: ${({ vertical }) => (vertical ? "100%" : "300px")};
    height: ${({ vertical }) => (vertical ? "100%" : "400px")};
  }
`;

export const LinkToVideo = styled(NavLink)`
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Thumbnail = styled.img.attrs({
  allow: "autoplay; encrypted-media",
})<{ vertical: boolean | undefined }>`
  justify-self: center;
  width: 100%;
  height: ${({ vertical }) => (vertical ? "300px" : "100%")};
  pointer-events: none;
`;

export const Details = styled.div`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.lowAlpha};
  justify-self: center;
  align-self: center;
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSizes.small};
  width: 95%;
`;

export const DescriptionBox = styled.div`
  display: flex;
`;

export const DescriptionText = styled.p`
  margin: 0 0 5px 5px;
  word-break: break-all;
`;
