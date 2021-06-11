import "./delete.scss";
import { CommentService } from "../../../../services/comments";
import { actShowNotificationCard } from "../../../../store/notifications/actions";
import { actDeleteComment } from "../../../../store/comments/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Delete({ 
  comment,
  hideDeleteConfirmBox = true,
  hideCommentOptions = function() {}
}) 
{
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [callingAPI, setCallingAPI] = useState(false);
  const [isThisPerson, setIsThisPerson] = useState(false);

  const { id } = useSelector(state => state.user);

  const deleteThisComment = async () => {
    if (callingAPI) {
      return;
    }

    setCallingAPI(true);

    const response = await CommentService.delete(comment.id);

    setCallingAPI(false);

    setShow(false);
    dispatch(actDeleteComment(comment.id));
    dispatch(actShowNotificationCard(response.data.message));
  }

  useEffect(() => {
    hideDeleteConfirmBox && setShow(false);
  }, [hideDeleteConfirmBox]);

  useEffect(() => {
    Number(comment.user_id) === Number(id) && setIsThisPerson(true);
  }, [comment.user_id, id]);

  if (!isThisPerson) {
    return false;
  }

  return (
    <li className="delete-item">
      <a onClick={ e => { setShow(true) } }>
        <i className="fal fa-trash-alt icon"></i>
        Xóa bình luận này
      </a>
      <div className={ show ? 'confirm-box show' : 'confirm-box' }>
        <h6 className="title">
          {
            callingAPI
              ? (
                <>
                  <i class="fa fa-spinner fa-spin icon"></i>
                  <span className="text">Đang xóa</span>
                </>
              )
              : (
                <>
                  <i class="fal fa-trash-alt icon"></i>
                  <span className="text">Xác nhận xóa?</span>
                </>
              )
          }
          
        </h6>
        <p className="alert"><i class="fad fa-exclamation-triangle icon"></i></p>
        <p className="caption">Bình luận sẽ bị xóa vĩnh viễn</p>
        <div className="btns">
          <button className="btn delete" onClick={ deleteThisComment }>Xóa</button>
          <button 
            className="btn cancel" 
            onClick={ e => { e.stopPropagation(); hideCommentOptions(true); setShow(false) } }
          >
            Hủy bỏ
          </button>
        </div>
      </div>
    </li>
  );
}
