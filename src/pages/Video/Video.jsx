import {
    Button, Channel, ChannelDescription, ChannelImage, ChannelInfo, ChannelName,
    Content,
    Details,
    Info,
    Line,
    Recommendation,
    StyledVideo, Subscribe,
    VideoContainer,
    VideoTitle
} from "./videoStyles";
import {MdOutlineThumbUp, MdOutlineReply, MdOutlineAddTask, MdOutlineThumbDown} from "react-icons/md";
import Comments from "../../components/Comments/Comments";
import VideoCard from "../../components/VideoCard/VideoCard";
import {videoCards} from "../../data";

const Video = () => {

    return (
        <StyledVideo>
            <Content>
                <VideoContainer>
                    <iframe title={"Youtube Video Player"} width={"100%"} height={"720"} src="https://www.youtube.com/embed/r6hx35TbtN4" frameBorder="0"></iframe>
                </VideoContainer>
              
                <VideoTitle>Building a site from scratch</VideoTitle>
                
                <Details>
                    <Info> 19k views · 1 day ago </Info>
                    <div>
                        <Button>
                            <MdOutlineThumbUp size={"20px"}/> 10
                        </Button>

                        <Button>
                            <MdOutlineThumbDown size={"20px"}/> 1
                        </Button>

                        <Button>
                            <MdOutlineReply size={"20px"}/> Share
                        </Button>

                        <Button>
                            <MdOutlineAddTask size={"20px"}/> Save
                        </Button>
                    </div>
                </Details>

                <Line />
                <Channel>
                    <ChannelImage src={"https://yt3.ggpht.com/ytc/AMLnZu8t-B0GQmkMnHoxqlEv78fWiS4hTMUe8wELLwYvvA=s176-c-k-c0x00ffffff-no-rj"}/>

                    <ChannelInfo>
                        <ChannelName>Kevin Powell</ChannelName>
                        <span>150k subscribers</span>

                        <ChannelDescription>
                            Helping you learn how to make the web, and make it look good while you're at it.
                        </ChannelDescription>
                    </ChannelInfo>

                    <Subscribe>
                        Subscribe
                    </Subscribe>
                </Channel>

                <Line />
                <Comments />
            </Content>
            
            <Recommendation>
                {videoCards.map((card) => <VideoCard type={"sm"} card={card}/>)}

            </Recommendation>
        </StyledVideo>
    );
};

export default Video;