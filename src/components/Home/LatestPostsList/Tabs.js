import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actSetHomePageTabs } from "../../../store/posts/actions";
import { useLatestPostsScroll } from "../../../hooks/useLatestPostsScroll";
import { useFollowingUsersPostsScroll } from "../../../hooks/useFollowingUsersPostsScroll";

export default function Tabs({
    posts = function() {},
    loading = function() {},
    hasMore = function() {},
}) 
{
  const dispatch = useDispatch();
  const { homepageTab: tab } = useSelector(state => state.posts);

  const {
    posts: postsForLatest,
    loading: loadingForLatest,
    hasMore: hasMoreForLatest,
  } = useLatestPostsScroll({
      fetch: tab === 'latest',
  });

  const {
    list: postsForFollowings,
    loading: loadingForFollowing,
    hasMore: hasMoreForFollowing,
  } = useFollowingUsersPostsScroll({
      fetch: tab === 'following',
  });

  useEffect(() => {
    posts(tab === 'latest' ? postsForLatest : postsForFollowings);
    loading(tab === 'latest' ? loadingForLatest : loadingForFollowing);
    hasMore(tab === 'latest' ? hasMoreForLatest : hasMoreForFollowing);
  }, 
    [
        tab, 
        postsForLatest, 
        postsForFollowings, 
        loadingForLatest, 
        loadingForFollowing, 
        hasMoreForLatest, 
        hasMoreForFollowing
    ]
  );
  
  return (
    <div className="home-tabs"> 
        <div 
            className={ tab === 'latest' ? 'tab active' : 'tab' }
            onClick={ () => { dispatch(actSetHomePageTabs('latest')) } }
        >
            Bài viết mới nhất
        </div>
        <div 
            className={ tab === 'following' ? 'tab active' : 'tab' }
            onClick={ () => { dispatch(actSetHomePageTabs('following')) } }
        >
            Đang theo dõi
        </div>
    </div>
  );
}
