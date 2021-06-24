import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { actFetchPostsPaginationAsync } from "../../../store/posts/actions";
import { actFetchPostsByFollowingUsersAsync } from "../../../store/posts/actions";
import { actHideLoading, actShowLoading } from "../../../store/loading/actions";

import { useScrollToTop } from "../../../hooks/useScrollToTop";

export default function HeaderLogo() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { scrollToTop } = useScrollToTop();
  const { homepageTab: tab } = useSelector(state => state.posts);
  const { id: user_id } = useSelector(state => state.user);

  const actionAsyncCallback = (tab === 'latest') 
                                ? actFetchPostsPaginationAsync 
                                : actFetchPostsByFollowingUsersAsync;

  const fetchNew = () => {
    if (loading) return;

    if ( tab === 'following' && !user_id) return;

    setLoading(true);

    dispatch(actionAsyncCallback({
      [tab === 'following' ? 'user_id' : null]: user_id,
      page: 1,
      per_page: 8,
    })).finally(() => {
      setLoading(false);
      dispatch(actHideLoading());
    })
  }

    return (
        <div 
          className="header-logo" 
          onClick={ () => { dispatch(actShowLoading()); scrollToTop(); setTimeout(fetchNew, 1000) } }
        >
          <Link to="/" className="header-logo-link">
            Meme
          </Link>
        </div>
    );
}