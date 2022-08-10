import styled from "styled-components";
import {flexItems} from "../../styles";

export const Container = styled.div`
  border-top: 1px solid rgba(220, 220, 220, 0.15);
  border-bottom: 1px solid rgba(220, 220, 220, 0.15);
  height: 56px;
  padding: 0 20px;
  position: sticky;
  top: 56px;
`;

export const Wrapper = styled.div`
  ${flexItems};
  gap: 20px;
  justify-content: flex-start;
  height: 100%;
`;

export const Button = styled.div`
  color: ${({theme}) => theme.colors.lightText};
  background: ${({theme}) => theme.colors.bgSecondary};
  height: 32px;
  ${flexItems};
  padding: 0 12px;
  border-radius: 30px;
  cursor: pointer;
  border: .5px solid ${({theme}) => theme.colors.bgSecondary};
`;