import { useEffect, useState } from "react";
import { UserService } from "../../../services/user";
import Modal from "../../shared/Modal";

export default function UserStatistics({ 
  userInfo, 
  countFollowed 
}) 
{
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);
  const [following, setFollowing] = useState(0);
  const [follower, setFollower] = useState(0);

  const showModalPeople = async (type) => {
    setShow(!show);

    let response = null;

    try {
      if (type === 'follow-you') {
        setModalTitle(`Danh sách những người đang theo dõi ${ userInfo.name }`);
        response = await UserService.getListPeopleFollowYou(userInfo.user_id);
      } else {
        setModalTitle(`Danh sách những người ${ userInfo.name } đang theo dõi`);
        response = await UserService.getListPeopleYouFollowing(userInfo.user_id);
      }

      if (response) setLoading(false); 
      setList(response.data.data);
    } catch (error) {
      setHasErrors(true);
    }
  }

  useEffect(() => {
    setShow(false);
    setLoading(true);
    setHasErrors(false);
    setFollowing(Number(userInfo.count_following));
    setFollower(Number(userInfo.count_follower));
  }, [userInfo]);

  useEffect(() => {
    if (countFollowed === '+') {
      setFollower(follower + 1);
    } else {
      setFollower(follower - 1);
    }
  }, [countFollowed]);

  return (
    <div className="user-info-statistic">
      {
        show
          ? <Modal 
              title={ modalTitle }
              listUser={ list } 
              setOuterShowState={ val => { setShow(false) } } 
              loading={ loading }
              setOuterLoadingState={ val => { setLoading(true) } }
              hasErrors={ hasErrors }
            />
          : null
      }
      <p className="statistic-item">
        <i class="fad fa-newspaper left-statistic-icon"></i>
        <span className="statistic-item-text">Bài viết: </span>
        <span className="statistic-item-count">{ userInfo.count_posts }</span>
      </p>
      <p className="statistic-item">
        <i class="fal fa-user-friends left-statistic-icon"></i>
        <span className="statistic-item-text">Được theo dõi: </span>
        <span className="statistic-item-count">{ follower }</span>
        <button
          className="btn-show-more-statistic"
          onClick={ () => { showModalPeople('follow-you') } }
        >
          <i class="fad fa-eye show-more-statistic"></i>
        </button>
      </p>
      <p className="statistic-item">
        <i class="fal fa-user-plus left-statistic-icon"></i>
        <span className="statistic-item-text">Đang theo dõi: </span>
        <span className="statistic-item-count">{ following }</span>
        <button
          className="btn-show-more-statistic"
          onClick={ () => { showModalPeople('you-follow') } }
        >
          <i class="fad fa-eye show-more-statistic"></i>
        </button>
      </p>
    </div>
  );
}
