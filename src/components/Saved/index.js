import "./saved.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PostItem from "../PostItem";

import { useScrollToTop } from "../../hooks/useScrollToTop";

import { actFetchSavedPostsAsync } from "../../store/posts/actions";

// page = 1, per_page = 5 => start = 0, end = 4
// page = 2, per_page = 5 => start = 5, end = 9
// page = 3, per_page = 5 => start = 10, end = 14

// start = (page - 1) * per_page
// end = start + per_page - 1

export default function Saved() {
    const dispatch = useDispatch();
    const { scrollToTop } = useScrollToTop();
    const [loading, setLoading] = useState(false);
    const { page, per_page, hasMore, list } = useSelector(state => state.posts.save);

    const loadMore = direction => {
        if (loading) return;

        if (direction === 'previous') {
            if (page === 1) return;

            setLoading(true);

            dispatch(actFetchSavedPostsAsync({
                page: page - 1,
                per_page,
            })).finally(() => {
                setLoading(false);
            })
        }

        if (direction === 'next') {
            if (!hasMore) return;

            setLoading(true);

            dispatch(actFetchSavedPostsAsync({
                page: page + 1,
                per_page,
            })).finally(() => {
                setLoading(false);
            })
        }
    }

    useEffect(async () => {
        if (loading) return;

        setLoading(true);
        dispatch(actFetchSavedPostsAsync({
            page,
            per_page,
        })).finally(() => {
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        loading && scrollToTop();
    }, [loading]);
    
    return (
        <div className="main-content">
            <div className="container">
                <section className="saved">
                    <div className="inner-saved-content">
                        <div className="title">
                            <h2>Bài viết đã lưu</h2>
                        </div>
                        <div className="items">
                            {
                                !loading 
                                    ? (
                                        list?.length !== 0 
                                            ? (
                                                list.map(post => {
                                                    return <PostItem key={ post.id } post={ post } showRightSideImage={ true } />;
                                                })
                                            )
                                            : (
                                                page === 1 
                                                    ? (
                                                        <div className="end">
                                                            <p className="text">
                                                                <i className="fad fa-empty-set icon"></i>
                                                                Bạn chưa lưu bài viết nào!
                                                            </p>
                                                        </div>
                                                    )
                                                    : (
                                                        <div className="end">
                                                            <p className="text">
                                                                <i className="fad fa-bell-slash icon"></i>
                                                                Đã xem hết tất cả bài viết đã lưu!
                                                            </p>
                                                        </div>
                                                    )
                                            )
                                    )
                                    : (
                                        <div className="end">
                                            <p className="text loading">
                                                <span className="icon-wrap">
                                                    <i className="fad fa-spinner-third fa-spin icon"></i>
                                                </span>
                                            </p>
                                        </div>
                                    )
                            }
                        </div>
                        <div className="end pagination">
                            <button 
                                className={ page === 1 || loading ? "btn paging disabled" : "btn paging" } 
                                onClick={ () => loadMore('previous') }
                            >
                                <i className="fal fa-chevron-left icon left"></i>
                                Trang trước
                            </button>
                            <button 
                                className={ !hasMore || loading ? "btn paging disabled" : "btn paging" } 
                                onClick={ () => loadMore('next') }
                            >
                                Trang sau
                                <i className="fal fa-chevron-right icon right"></i>
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}