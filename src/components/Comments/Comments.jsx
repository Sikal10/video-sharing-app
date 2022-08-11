import {Avatar, CommentsContainer, Input, NewComment} from "./commentsStyle";
import Comment from "../Comment/Comment";


const Comments = () => {
    return (
        <CommentsContainer>
            <NewComment>
                <Avatar src={"https://yt3.ggpht.com/ytc/AMLnZu8t-B0GQmkMnHoxqlEv78fWiS4hTMUe8wELLwYvvA=s176-c-k-c0x00ffffff-no-rj"} />
                <Input placeholder={"Add a comment..."} />
            </NewComment>

            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </CommentsContainer>
    );
};

export default Comments;