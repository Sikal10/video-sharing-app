import React from 'react';
import {
    CardContainer,
    ChannelImage,
    ChannelName,
    Image, Info,
    TextDetails,
    VideoDetails,
    VideoTitle
} from "./videoCardStyles";
import {Link} from "react-router-dom";

const VideoCard = ({image}) => {
    return (
        <Link to={"/video/1"}>
            <CardContainer>
                <Image src={image} />

                <VideoDetails>
                    <ChannelImage />

                    <TextDetails>
                        <VideoTitle> Title </VideoTitle>
                        <ChannelName>Lama Dev</ChannelName>
                        <Info> 19k views · 1 day ago </Info>
                    </TextDetails>
                </VideoDetails>
            </CardContainer>
        </Link>
    );
};

export default VideoCard;