import { useDispatch, useSelector } from "react-redux";

import { actSetHomePageTabs } from "../../store/posts/actions";

export default function Tabs() 
{
  const dispatch = useDispatch();
  const { homepageTab: tab } = useSelector(state => state.posts);
  const { id: user_id } = useSelector(state => state.user);
  
  return (
    <div className="home-tabs"> 
        <div 
            className={ tab === 'latest' ? 'tab active' : 'tab' }
            onClick={ () => { dispatch(actSetHomePageTabs('latest')) } }
        >
            Bài viết mới nhất
        </div>
        <div 
            className={ !user_id ? 'tab disabled' : tab === 'following' ? 'tab active' : 'tab'  }
            onClick={ () => { user_id && dispatch(actSetHomePageTabs('following')) } }
        >
            Đang theo dõi
        </div>
        <div 
            className={ !user_id ? 'tab suggestions-tab disabled' : tab === 'suggestions' ? 'tab suggestions-tab active' : 'tab suggestions-tab'  }
            onClick={ () => { user_id && dispatch(actSetHomePageTabs('suggestions')) } }
        >
            Gợi ý theo dõi
        </div>
    </div>
  );
}
