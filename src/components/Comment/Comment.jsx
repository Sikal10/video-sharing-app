import React from 'react';
import {Avatar, CommentContainer, Date, Details, Name, Text} from "./commentStyle";

const Comment = () => {
    return (
        <CommentContainer>
            <Avatar src={"https://yt3.ggpht.com/ytc/AMLnZu8t-B0GQmkMnHoxqlEv78fWiS4hTMUe8wELLwYvvA=s176-c-k-c0x00ffffff-no-rj"}/>
            <Details>
                <Name>Kevin Powell <Date>1 day ago</Date></Name>
                <Text>
                    Great Explanation. Thumbs up 👍🏽👍🏽👍🏽
                </Text>

            </Details>
        </CommentContainer>
    );
};

export default Comment;