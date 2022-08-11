import styled from "styled-components";

export const CardContainer = styled.div`
  width:  ${({type}) => type !== "sm" && "340px" };
  margin-bottom: ${({type}) => type === "sm" ? "10px" : "45px" };
  cursor: pointer;
  display: ${({type}) => type === "sm" && "flex" };
  gap: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: ${({type}) => type === "sm" ? "120px" : "202px" };
  background: #999;
  flex: 1;
`;

export const VideoDetails = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  margin-top: ${({type}) => type !== "sm" &&  "16px" };
  flex: 1;
`;

export const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #999;
  display:  ${({type}) => type === "sm" && "none" };
`;

export const TextDetails = styled.div`
`;

export const VideoTitle = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.text};
`;

export const ChannelName = styled.h2`
  color: ${({theme}) => theme.colors.lightText};
  font-size: 14px;
  margin: 4px 0 0 0;
`;

export const Info = styled.div`
  color: ${({theme}) => theme.colors.lightText};
  font-size: 14px;
  margin-top: 5px;
`;