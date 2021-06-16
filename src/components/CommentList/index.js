import "./comments-list.scss";

import CommentItem from "./../CommentItem";
import { useCommentsList } from "../../hooks/useCommentsList";

export default function CommentList({
    postID,
}) 
{
    const { listComment,
            buttonLoadMore
    } = useCommentsList(postID);

    return (
        <div className="comments-list">
            {
                listComment.length !== 0 
                    ?   listComment.map(comment => {
                                return <CommentItem key={ comment.id } comment={ comment } />
                            }
                        )
                    :   null
            }
            {
                buttonLoadMore
            }
        </div>
    );
}