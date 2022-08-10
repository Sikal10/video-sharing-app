import styled from "styled-components";

export const CardContainer = styled.div`
  width: 340px;
  margin-bottom: 45px;
  cursor: pointer;

`;

export const Image = styled.img`
  width: 100%;
  height: 202px;
  background: #999;
`;

export const VideoDetails = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  margin-top: 16px;
`;

export const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #999;
`;

export const TextDetails = styled.div`

`;

export const VideoTitle = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.text};
`;

export const ChannelName = styled.h2`
  color: ${({theme}) => theme.colors.text};
  font-size: 14px;
  margin: 8px 0 0 0;
`;

export const Info = styled.div`
  color: ${({theme}) => theme.colors.text};
  font-size: 14px;
  margin-top: 5px;
`;