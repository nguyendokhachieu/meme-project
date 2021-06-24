import "./modal.scss";

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";

import { PostService } from "../../../../../services/posts";

import { actHideDeletePostModal } from "../../../../../store/modals/actions";
import { actDeletePost } from "../../../../../store/posts/actions";
import { actShowNotificationCard } from "../../../../../store/notifications/actions";

import Title from "./Title";

export default function DeletePostModal() {
  const dispatch = useDispatch();
  const modalRef = useRef();
  const history = useHistory();
  const location = useLocation();
  
  const [callingAPI, setCallingAPI] = useState(false);
  
  const { showDeleteModal, postID } = useSelector(state => state.modals);

  const isProfilePage = location.pathname.includes('profile');

  const deleteThisPost = async () => {
    if (callingAPI) {
      return;
    }

    setCallingAPI(true);
    
    const response = await PostService.delete(postID);

    setCallingAPI(false);

    if (response.data.deleted) {
      dispatch(actDeletePost(postID, isProfilePage));
      dispatch(actHideDeletePostModal());
      dispatch(actShowNotificationCard("Xóa bài viết thành công"));
      history.location.pathname.includes('post') && history.push('/');

      return;
    }

    dispatch(actShowNotificationCard("Có lỗi xảy ra, vui lòng thử lại"));
  };

  const clickEventCallback = e => {
    showDeleteModal 
      && modalRef.current 
        && !modalRef.current.contains(e.target) 
          && dispatch(actHideDeletePostModal());
  }

  useEffect(() => {
    document.addEventListener('click', clickEventCallback);

    return () => {
      document.removeEventListener('click', clickEventCallback);
    }
  });

  return (
    <div className={ showDeleteModal ? 'delete-modal' : 'delete-modal hidden' }>
      <div className="inner-modal" ref={ modalRef }>
        <Title loading={ callingAPI } />
        <div className="content">
          <p className="alert"><i className="fad fa-exclamation-triangle icon"></i></p>
          <p className="caption">Bài viết sẽ bị xóa vĩnh viễn</p>
          <div className="submit">
            <button 
              className={ callingAPI ? 'btn delete-btn disabled' : 'btn delete-btn' } 
              onClick={ deleteThisPost }
            >
              Xóa
            </button>
            <button 
              className={ callingAPI ? 'btn cancel disabled' : 'btn cancel' } 
              onClick={ e => { dispatch(actHideDeletePostModal()) } }
            >
              Hủy bỏ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
