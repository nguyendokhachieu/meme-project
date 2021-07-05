import "./suggestions.scss";

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { useScrollToTop } from "../../hooks/useScrollToTop";
import UserItem from "./UserItem";
import DropView from "./DropView";

import { actFetchUserSuggestionsAsync } from "../../store/user/actions";

export default function Saved() {
    const dispatch = useDispatch();
    const { scrollToTop } = useScrollToTop();
    const [loading, setLoading] = useState(false);
    const { list, page, per_page, hasMore } = useSelector(state => state.user.suggestions);

    const loadmore = () => {
        if (loading) return;
        if (!hasMore) return;

        setLoading(true);
        dispatch(actFetchUserSuggestionsAsync({
            page: page + 1,
            per_page: 5,
        })).finally(() => {
            setLoading(false);
        })
    }

    useEffect(() => {
        if (loading) return;

        setLoading(true);
        dispatch(actFetchUserSuggestionsAsync({
            page: 1,
            per_page: 5,
        })).finally(() => {
            setLoading(false);
        })

    }, [dispatch]);

    useEffect(() => {
        scrollToTop();
    }, []);
    
    return (
        <div className="main-content">
            <DropView />
            <div className="container">
                <section className="suggestions-section-page">
                    <div className="inner-suggestions-content">
                        <div className="title">
                            <h2>Gợi ý theo dõi</h2>
                        </div>
                        <div className="items">
                            {
                                list.length !== 0 
                                    ? list.map(userItem => {
                                        return <UserItem key={ userItem.id } user={ userItem } />
                                    })
                                    : !loading &&  <div className="pre"><span><i className="fad fa-empty-set icon"></i></span>Chưa có gợi ý nào! Hãy follow nhiều người hơn</div>
                            }
                        </div>
                        {
                            hasMore
                                ? (
                                    <div className="end pagination">
                                        <button
                                            onClick={ loadmore }
                                            className={ loading ? "btn paging disabled" : "btn paging" } 
                                        >
                                            {
                                                loading ? <i className="fal fa-spinner-third fa-spin icon"></i> : null
                                            }
                                            {
                                                loading ? null : "Hiển thị thêm"
                                            }
                                        </button>
                                    </div>
                                )
                                : null
                        }
                    </div>
                </section>
            </div>
        </div>
    );
}