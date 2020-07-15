import styled from "styled-components";

export const CommentContainer = styled.section`
  grid-column: 1/2;
  background-image: ${({ theme }) => theme.colors.commentGradient};
  margin: 10px;
  border-radius: 10px;

  @media only screen and (max-width: 610px) {
    grid-row: 3/4;
  }
`;

export const CommentDetails = styled.article`
  border-top: 1px solid ${({ theme }) => theme.colors.opositeColorLowAlpha};
  padding: 5px;
  margin-bottom: 5px;
  margin-left: 5px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
`;

export const UserAvatar = styled.img.attrs({ alt: "Avatar" })`
  border-radius: 50%;
  margin: 5px;
`;

export const CommentText = styled.p`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  padding: 5px;
`;

export const MoreInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Likes = styled.span`
  margin-right: 20px;
  color: green;
`;

export const PublishInfo = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
`;
