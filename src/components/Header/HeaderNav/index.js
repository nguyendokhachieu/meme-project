import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { useScrollToTop } from "../../../hooks/useScrollToTop";

import { actFetchPostsPaginationAsync } from "../../../store/posts/actions";
import { actFetchPostsByFollowingUsersAsync } from "../../../store/posts/actions";
import { actShowLoading, actHideLoading } from "../../../store/loading/actions";

export default function HeaderNav() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { scrollToTop } = useScrollToTop();

  const [loading, setLoading] = useState(false);

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
    <ul className="header-nav">
      <li className={ pathname === '/' ? 'header-nav-item active' : 'header-nav-item' } >
        <Link 
          className='header-nav-item-link' 
          to="/"
          onClick={ () => { dispatch(actShowLoading()); scrollToTop(); setTimeout(fetchNew, 1000) } } 
        >
          <i className="fad fa-home nav-icon"></i>
          { tab === 'latest' ? 'Mới nhất' : 'Đang theo dõi' }
        </Link>
      </li>
      <li className={ pathname === '/categories' ? 'header-nav-item active' : 'header-nav-item' } >
        <Link className='header-nav-item-link' to="/categories" >
          <i className="fad fa-list-alt nav-icon"></i>
          Danh mục
        </Link>
      </li>
    </ul>
  );
}
