import styled from "styled-components";

export const CommentsContainer = styled.div`
`;

export const NewComment = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({theme}) => theme.colors.soft};
  outline: none;
  padding: 5px;
  width: 100%;
  background: transparent;
`;