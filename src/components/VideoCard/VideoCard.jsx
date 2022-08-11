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

const VideoCard = ({type, card}) => {
    return (
        <Link to={`/video/${card.id}`}>
            <CardContainer type={type}>
                <Image type={type} src={card.image} />

                <VideoDetails type={type}>
                    <ChannelImage src={card.image} type={type} />

                    <TextDetails>
                        <VideoTitle>{card.title}</VideoTitle>
                        <ChannelName>{card.channel}</ChannelName>
                        <Info> {card.views} · {card.time} </Info>
                    </TextDetails>
                </VideoDetails>
            </CardContainer>
        </Link>
    );
};

export default VideoCard;