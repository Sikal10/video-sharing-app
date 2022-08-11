import styled from "styled-components";
import {flexItems} from "../../styles";

export const StyledVideo = styled.div`
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
`

export const VideoContainer = styled.div`
    
`;

export const Content = styled.div`
  flex: 5;
`;

export const Recommendation = styled.div`
  flex: 2;
`;

export const VideoTitle = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.text};
  margin-top: 10px;
`;

export const Channel = styled.div`
  ${flexItems};
  align-items: flex-start;
  gap: 15px;
  
`;

export const ChannelInfo = styled.div`
  
  flex: 1;
  
  span {
    display: block;
    font-size: 12px;
    margin-top: 4px;
    color: ${({theme}) => theme.colors.lightText};
  }
  
`;

export const ChannelImage = styled.img`
  width: 50px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  
`;

export const ChannelName = styled.h2`
  color: ${({theme}) => theme.colors.text};
  font-size: 14px;
`;

export const ChannelDescription = styled.p`
  margin-top: 15px;
  font-size: 14px;
  
`;

export const Subscribe = styled.button`
  background: #FF0000;
  color: white;
  border: none;
  padding: 10px 25px;
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
`;

export const Info = styled.div`
  color: ${({theme}) => theme.colors.lightText};
  font-size: 13px;
  margin-top: 5px;
`;

export const Details = styled.div`
  ${flexItems};
  
  div {
    ${flexItems};
    gap: 15px;
  }
`;

export const Button = styled.button`
  ${flexItems};
  background: none;
  color: white;
  border: none;
  gap: 5px;
  padding: 7px 3px;
  font-size: 16px;
  cursor: pointer;
`;

export const Line = styled.hr`
  border: .5px solid ${({theme}) => theme.colors.soft};
  margin: 15px 0;
`;