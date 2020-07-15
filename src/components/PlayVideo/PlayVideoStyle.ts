import styled from "styled-components";

export const PlayVideoSection = styled.section`
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  display: grid;
  grid-template-columns: minmax(50%, 30%);
  grid-template-rows: 600px 1fr;
  background-image: ${({ theme }) =>
    `linear-gradient(45deg,${theme.colors.primary},${theme.colors.secondary})`};

  @media only screen and (max-width: 610px) {
    grid-template-columns: 1fr;
  }
`;

export const MainVideo = styled.iframe.attrs({
  allow: "autoplay; encrypted-media;",
  allowFullScreen: true,
})`
  grid-column: 1/3;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const AsideVideos = styled.aside`
  display: grid;
  grid-auto-rows: minmax(300px, 400px);
  grid-gap: 5px;
  margin-top: 10px;
  margin-right: 10px;
  place-items: center;

  @media only screen and (max-width: 610px) {
    margin-left: 10px;
  }
`;
