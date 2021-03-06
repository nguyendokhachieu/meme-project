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

    useEffect(() => {
        async function fetchSaved() {
            if (loading) return;
            
            setLoading(true);
            
            dispatch(actFetchSavedPostsAsync({
                page,
                per_page,
            })).finally(() => {
                setLoading(false);
            });
        } 
        

        fetchSaved();
    }, [dispatch, page, per_page]);

    useEffect(() => {
        loading && scrollToTop();
    }, [loading, scrollToTop]);
    
    return (
        <div className="main-content">
            <div className="container">
                <section className="saved">
                    <div className="inner-saved-content">
                        <div className="title">
                            <h2>B??i vi???t ???? l??u</h2>
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
                                                                B???n ch??a l??u b??i vi???t n??o!
                                                            </p>
                                                        </div>
                                                    )
                                                    : (
                                                        <div className="end">
                                                            <p className="text">
                                                                <i className="fad fa-bell-slash icon"></i>
                                                                ???? xem h???t t???t c??? b??i vi???t ???? l??u!
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
                                Trang tr?????c
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