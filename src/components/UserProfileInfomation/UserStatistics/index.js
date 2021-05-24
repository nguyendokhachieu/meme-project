import { useEffect, useState } from "react";
import { UserService } from "../../../services/user";
import Modal from "../../shared/Modal";

export default function UserStatistics({ userInfo }) {
  const [show, setShow] = useState(false);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);

  const showPeopleFollowYou = async () => {
    setShow(!show);
    const response = await UserService.getListPeopleFollowYou(userInfo.user_id);

    if (response) setLoading(false); 
    setList(response.data.data);
  };

  const showPeopleYouFollow = async () => {
    setShow(!show);
    const response = await UserService.getListPeopleYouFollowing(userInfo.user_id);

    if (response) setLoading(false); 
    setList(response.data.data);
  };

  const showModalPeople = async (type) => {
    setShow(!show);

    let response = null;

    try {
      if (type === 'follow-you') {
        response = await UserService.getListPeopleFollowYou(userInfo.user_id);
      } else {
        response = await UserService.getListPeopleYouFollowing(userInfo.user_id);
      }
    } catch (error) {
      setHasErrors(true);
    }
    
    if (response) setLoading(false); 
    setList(response.data.data);
    setHasErrors(false);
  }

  useEffect(() => {
    setShow(false);
    setLoading(true);
    setHasErrors(false);
  }, [userInfo]);

  return (
    <div className="user-info-statistic">
      {
        show
          ? <Modal 
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
        <span className="statistic-item-count">{ userInfo.count_follower }</span>
        <button
          className="btn-show-more-statistic"
          // onClick={showPeopleFollowYou}
          onClick={ () => { showModalPeople('follow-you') } }
        >
          <i class="fal fa-info-square show-more-statistic"></i>
        </button>
      </p>
      <p className="statistic-item">
        <i class="fal fa-user-plus left-statistic-icon"></i>
        <span className="statistic-item-text">Đang theo dõi: </span>
        <span className="statistic-item-count">{userInfo.count_following}</span>
        <button
          className="btn-show-more-statistic"
          // onClick={showPeopleYouFollow}
          onClick={ () => { showModalPeople('you-follow') } }
        >
          <i class="fal fa-info-square show-more-statistic"></i>
        </button>
      </p>
    </div>
  );
}
