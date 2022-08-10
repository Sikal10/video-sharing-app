import styled from "styled-components";
import {FaYoutube} from "react-icons/fa";

export const SidebarContainer = styled.aside`
  height: 100vh;
  background: ${({theme}) => theme.colors.lightBG};
  color:  ${({theme}) => theme.colors.text};
  position: sticky;
  top: 0;
  flex: 2;
`;

export const SidebarWrapper = styled.div`
  padding-right: 15px;
`;

export const SidebarTop = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding-left: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 25px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  p {
    font-size: 14px;
  }
`;

export const Image = styled(FaYoutube)`
  color: #FF0000;
  font-size: 35px;
`;

export const Item = styled.div`
  padding: 0 25px;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  min-height: 40px;
  
  p {
    font-size: 14px;
  }
  
  &:hover {
    background: #ffffff1a;
  }
`;

export const Title = styled.h2`
    font-weight: 500;
  font-size: 14px;
  color: #aaa;
  margin-bottom: 20px;
  text-transform: uppercase;
  margin-left: 25px;
`;

export const Line = styled.hr`
    border: .5px solid ${({theme}) => theme.colors.soft};
  margin: 12px 0;
`;