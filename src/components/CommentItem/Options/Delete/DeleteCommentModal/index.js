import "./modal.scss";

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actHideDeleteCommentModal } from "../../../../../store/modals/actions";
import { actDeleteComment } from "../../../../../store/comments/actions";
import { actShowNotificationCard } from "../../../../../store/notifications/actions";

import { CommentService } from "../../../../../services/comments";

import Title from "./Title";

export default function DeleteCommentModal() {
  const dispatch = useDispatch();
  const modalRef = useRef();
  const [callingAPI, setCallingAPI] = useState(false);
  const { showDeleteCommentModal, commentID } = useSelector(state => state.modals);

  const deleteThisComment = async () => {
    if (callingAPI) return;

    setCallingAPI(true);

    const response = await CommentService.delete(commentID);

    setCallingAPI(false);

    dispatch(actDeleteComment(commentID));
    dispatch(actHideDeleteCommentModal());
    dispatch(actShowNotificationCard(response.data.message));
  }

  const clickEventCallback = e => {
    showDeleteCommentModal 
    && modalRef.current 
    && !modalRef.current.contains(e.target) 
    && dispatch(actHideDeleteCommentModal());
  }

  useEffect(() => {
    document.addEventListener('click', clickEventCallback);
    
    return () => {
      document.removeEventListener('click', clickEventCallback);
    }
  });

  return (
    <div className={ showDeleteCommentModal ? 'delete-modal' : 'delete-modal hidden' }>
      <div className="inner-modal" ref={ modalRef }>
        <Title loading={ callingAPI } />
        <div className="content">
          <p className="alert"><i className="fad fa-exclamation-triangle icon"></i></p>
          <p className="caption">Bình luận sẽ bị xóa vĩnh viễn</p>
          <div className="submit">
            <button 
              className={ callingAPI ? 'btn delete-btn disabled' : 'btn delete-btn' } 
              onClick={ deleteThisComment }
            >
              Xóa
            </button>
            <button 
              className={ callingAPI ? 'btn cancel disabled' : 'btn cancel' } 
              onClick={ () => { dispatch(actHideDeleteCommentModal()) } }
            >
              Hủy bỏ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
