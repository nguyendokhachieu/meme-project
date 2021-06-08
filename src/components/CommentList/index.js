import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CommentItem from "./../CommentItem";
import { useSelector } from "react-redux";
import { actFetchAllCommentsByPostId } from "./../../store/comments/actions";

export default function CommentList({
    postID,
    commentCount = function(){},
}) 
{
    const dispatch = useDispatch();
    const [comments, setComments] = useState([]);
    const [newList, setNewList] = useState([]);
    const { newComment } = useSelector(state => state.comments);

    useEffect(async () => {
        try {
            const cmts = await dispatch(actFetchAllCommentsByPostId(postID));

            setComments(cmts);
            commentCount(cmts.length);
        } catch (error) {
            
        }
    }, [postID]);

    useEffect(() => {
        newComment.content && setNewList([
            newComment,
            ...newList,
        ]);
    }, [newComment]);

    return (
        <div className="comments-list">
            {
                newList.length === 0
                    ? null  
                    : newList.map((comment, idx) => {
                        return <CommentItem key={ idx } comment={ comment } />
                    }) 
            }
            {
                comments.length !== 0 
                    ?   comments.map(comment => {
                                return <CommentItem key={ comment.id } comment={ comment } />
                            }
                        )
                    :   null
            }
        </div>
    );
}