import { useState } from "react";
import { useDispatch } from "react-redux";
import { PostService } from "../../../../services/posts";
import { actShowNotificationCard } from "../../../../store/notifications/actions";
import { actDeletePost } from "../../../../store/posts/actions";

export default function Delete({
  id
}) 
{
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [callingAPI, setCallingAPI] = useState(false);

  const deleteThisPost = async () => {
    setCallingAPI(true);
    
    const response = await PostService.delete(id);

    setCallingAPI(false);

    if (response.data.deleted) {
      dispatch(actDeletePost(id));
      dispatch(actShowNotificationCard("Xóa bài viết thành công"));

      return;
    }

    dispatch(actShowNotificationCard("Có lỗi xảy ra, vui lòng thử lại"));
  };

  return (
    <li className="option-item">
      <a className="item-link" onClick={ e => { setShow(true) } }>
        <i class="fad fa-trash-alt item-icon"></i>
        Xóa bài viết
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
        <p className="caption">Bài viết sẽ bị xóa vĩnh viễn</p>
        <div className="btns">
          <button className="btn delete" onClick={ deleteThisPost }>Xóa</button>
          <button 
            className="btn cancel" 
            onClick={ e => { e.stopPropagation(); setShow(false) } }
          >
            Hủy bỏ
          </button>
        </div>
      </div>
    </li>
  );
}
