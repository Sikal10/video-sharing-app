import styled from "styled-components";
import {flexItems} from "../../styles";

export const StyledNavbar = styled.nav`
  position: sticky;
  top: 0;
  background: ${({theme}) => theme.colors.lightBG};
  height: 56px;
`;

export const NavbarContainer = styled.div`
  ${flexItems};
  height: 100%;
  padding: 0 20px;
`;

export const MiddleContainer = styled.div`
  ${flexItems};
  width: 35%;
  gap: 10px;
  
  > div:last-child {
    background: #000;
    width: 45px;
    height: 40px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    color: white;
  }
`;

export const SearchBar = styled.div`
  height: 40px;
  ${flexItems};
  width: 100%;

  div {
    color: white;
    width: 70px;
    ${flexItems};
    justify-content: center;
    background: #373737;
    height: 39px;
  }
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  border: 1px solid rgba(211, 211, 211, 0.06);
  background: ${({theme}) => theme.colors.bg};
  padding-left: 10px;
  outline: none;
  color: white;
`;

export const Button = styled.button`
  padding: 7px 20px;
  background: transparent;
  border: 1px solid #3ea6ff;
  font-weight: 500;
  color: #3ea6ff;
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 3px;
  cursor: pointer;

`;