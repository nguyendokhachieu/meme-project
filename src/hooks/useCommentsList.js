import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchAllCommentsByPostIdAsync } from "../store/comments/actions";

export function useCommentsList(postID) 
{
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const { listComment, page, hasMore } = useSelector(state => state.comments);
 
    const handleLoadmore = () => {
        if (loading) {
            return;
        }

        if (!hasMore) {
            return;
        }

        setLoading(true);

        dispatch(actFetchAllCommentsByPostIdAsync(postID, page + 1, 5)).finally(() => { setLoading(false) });
    }

    useEffect(() => {
        if (loading) {
            return;
        }

        dispatch(actFetchAllCommentsByPostIdAsync(postID, 1, 5));
    }, [postID]);

    return {
        listComment,
        buttonLoadMore: (
            <div className="load-more-comments">
                <button 
                    className={ loading || !hasMore ? 'btn load-more-cmts-btn disabled' : 'btn load-more-cmts-btn' } 
                    onClick={ handleLoadmore }
                >
                    {
                        hasMore ? 'Xem thêm bình luận' : 'Bạn đã xem hết bình luận'
                    }
                    {
                        loading ? <i class="fad fa-spinner-third fa-spin icon"></i> : null
                    }
                </button>
            </div>
        )
    };
}