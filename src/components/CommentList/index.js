import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CommentItem from "./../CommentItem";
import { actFetchAllCommentsByPostId } from "./../../store/comments/actions";

export default function CommentList({
    postID,
    commentCount = function(){},
}) 
{
    const dispatch = useDispatch();
    const [comments, setComments] = useState([]);

    useEffect(async () => {
        try {
            const cmts = await dispatch(actFetchAllCommentsByPostId(postID));

            setComments(cmts);
            commentCount(cmts.length);
        } catch (error) {
            
        }
    }, [postID]);

    return (
        <div className="comments-list">
            {
                comments.length !== 0 
                    ?   comments.map((comment, index) => {
                                return <CommentItem key={ comment.id } comment={ comment } />
                            }
                        )
                    :   null
            }
        </div>
    );
}