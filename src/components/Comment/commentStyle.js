import styled from "styled-components";

export const CommentContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  font-weight: 500;
  font-size: 13px;
  color: ${({theme}) => theme.colors.lightText};
`;

export const Date = styled.span`
    font-size: 12px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.lightText};
  margin-left: 5px;
`;

export const Text = styled.span`
    font-size: 14px;
  color: ${({theme}) => theme.colors.text};
  margin-top: 5px;

`;