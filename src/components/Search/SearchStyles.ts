import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
`;

export const InputBox = styled.div`
  position: relative;
  min-width: 70%;
  height: 35px;
  margin: 15px;

  &:hover,
  &:focus {
    ${({ theme }) => theme.boxShadows.common};
  }
`;

export const Label = styled.label<{ isFocus: boolean }>`
  position: absolute;
  top: 0;
  left: ${({ isFocus }) => (isFocus ? " 50%;" : "10px")};
  font-size: ${({ theme }) => theme.fontSizes.small};
  transition: transform 0.4s ease, left 0.4s ease-in-out;
  ${({ isFocus }) => isFocus && "transform: translateX(-50%);"};
`;

export const SearchInput = styled.input.attrs({ type: "text" })`
  width: 100%;
  height: 35px;
  padding: 10px 5px 0 10px;
  border: none;
  background-image: ${({ theme }) =>
    `linear-gradient(45deg, ${theme.colors.primary},${theme.colors.secondary});`};
  box-shadow: ${({ theme }) => theme.boxShadows.common};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  color: ${({ theme }) => theme.fontColors.mainText};
  outline: none;
  transition: box-shadow 0.7s ease-in-out;
`;

export const SearchBtn = styled.button.attrs({ type: "submit" })`
  background-color: ${({ theme }) => theme.colors.primary};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadows.common},
    ${({ theme }) => theme.boxShadows.inset};
  height: 100%;
  width: 50px;
  margin: 15px 0;
  padding: 10px;
  outline: none;
  cursor: pointer;
  border: none;
  border-left: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.fontColors.mainText};
  transition: box-shadow 0.4s ease-in-out;

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.boxShadows.common};
  }
`;
