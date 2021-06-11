import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CommentItem from "./../CommentItem";
import { useSelector } from "react-redux";
import { actFetchAllCommentsByPostIdAsync } from "./../../store/comments/actions";

export default function CommentList({
    postID,
}) 
{
    const dispatch = useDispatch();
    const { listComment } = useSelector(state => state.comments);

    useEffect(() => {
        dispatch(actFetchAllCommentsByPostIdAsync(postID));
    }, [postID]);

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
        </div>
    );
}