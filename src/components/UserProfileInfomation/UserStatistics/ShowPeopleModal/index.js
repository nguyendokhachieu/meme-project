import "./modal.scss";

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actHidePeopleModal } from "../../../../store/modals/actions";
import { actFetchFollowersAsync, actFetchFollowingUsersAsync } from "../../../../store/user/actions";

import Title from "./Title";
import UserItem from "./UserItem";

export default function ShowPeopleModal() {
  const dispatch = useDispatch();
  const modalRef = useRef();
  const [loading, setLoading] = useState(false);

  const { showPeopleModal, peopleModalType, userId } = useSelector(state => state.modals);
  const { list, page, hasMore } = useSelector(state => {
    if (peopleModalType === 'following') return state.user.following;
    return state.user.follower;
  });

  const loadmore = () => {
    if (!userId) return;
    if (!showPeopleModal) return;
    if (loading) return;

    setLoading(true);

    if (peopleModalType === 'follower') {
      dispatch(actFetchFollowersAsync({
        user_id: userId,
        page: page + 1,
        per_page: 5,
      })).then(() => {
        setLoading(false);
      })
    } else if (peopleModalType === 'following') {
      dispatch(actFetchFollowingUsersAsync({
        user_id: userId,
        page: page + 1,
        per_page: 5,
      })).then(() => {
        setLoading(false);
      })
    }
  }

  useEffect(() => {
    if (!userId) return;
    if (!showPeopleModal) return;
    if (loading) return;

    setLoading(true);

    if (peopleModalType === 'follower') {
      dispatch(actFetchFollowersAsync({
        user_id: userId,
        page: 1,
        per_page: 5,
      })).then(() => {
        setLoading(false);
      })
    } else if (peopleModalType === 'following') {
      dispatch(actFetchFollowingUsersAsync({
        user_id: userId,
        page: 1,
        per_page: 5,
      })).then(() => {
        setLoading(false);
      })
    }

  }, [showPeopleModal, userId, peopleModalType]);

  const clickEventCallback = e => {
    showPeopleModal 
      && modalRef.current 
        && !modalRef.current.contains(e.target) 
          && dispatch(actHidePeopleModal());
  }

  useEffect(() => {
    document.addEventListener('click', clickEventCallback);

    return () => {
      document.removeEventListener('click', clickEventCallback);
    }
  });

  return (
    <div className={ showPeopleModal ? 'people-modal' : 'people-modal hidden' }>
      <div className="inner-modal" ref={ modalRef }>
        <Title loading={ loading } type={ peopleModalType } />
        <div className="content">
          {
            list.length === 0
              ? (
                <div className="empty">
                  <i className="fad fa-empty-set icon"></i>
                  {
                    !loading
                      ? 'Không có ai để hiển thị!'
                      : null
                  }
                </div> 
              )
              : (
                list.map(userItem => {
                  return <UserItem user={ userItem } />
                })
              )
          }
          {
            hasMore && (
                <div className="load-more">
                  <button 
                    className={ loading ? 'btn load-btn disabled' : 'btn load-btn' }
                    onClick={ loadmore }
                  >
                    Tải thêm
                  </button>
                </div>
              )
          }
        </div>
      </div>
    </div>
  );
}
