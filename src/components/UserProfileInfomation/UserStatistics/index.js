import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { actShowPeopleModal } from "../../../store/modals/actions";

export default function UserStatistics({ 
  userInfo, 
  countFollowed 
}) 
{
  const dispatch = useDispatch();

  const [following, setFollowing] = useState(0);
  const [follower, setFollower] = useState(0);

  useEffect(() => {
    setFollowing(Number( userInfo.count_following || 0));
    setFollower(Number(userInfo.count_follower || 0));
  }, [userInfo]);

  useEffect(() => {
    if (countFollowed === '+') {
      setFollower(prev => prev + 1);
    } else {
      setFollower(prev => prev - 1);
    }
  }, [countFollowed]);

  return (
    <div className="user-info-statistic">
      <p className="statistic-item">
        <i className="fad fa-newspaper left-statistic-icon"></i>
        <span className="statistic-item-text">Bài viết: </span>
        <span className="statistic-item-count">{ userInfo?.count_posts }</span>
      </p>
      <p className="statistic-item people" onClick={ () => dispatch(actShowPeopleModal({ user_id: userInfo.user_id, type: 'follower' })) }>
        <i className="fal fa-user-friends left-statistic-icon"></i>
        <span className="statistic-item-text">Được theo dõi: </span>
        <span className="statistic-item-count">{ follower }</span>
      </p>
      <p className="statistic-item people" onClick={ () => dispatch(actShowPeopleModal({ user_id: userInfo.user_id, type: 'following' })) }>
        <i className="fal fa-user-plus left-statistic-icon"></i>
        <span className="statistic-item-text">Đang theo dõi: </span>
        <span className="statistic-item-count">{ following }</span>
      </p>
    </div>
  );
}
