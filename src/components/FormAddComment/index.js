import { useState } from "react";
import NotificationCard from "../shared/NotificationCard";
import { useAuthorization } from "../../hooks/useAuthorization";
import { CommentService } from "../../services/comments";
import "./form-add-comment.scss";
import { useDispatch, useSelector } from "react-redux";
import { actCreateNewComment } from "../../store/comments/actions";
const striptags = require('striptags');

export default function FormAddComment({
  post_id,
}) 
{
  const dispatch = useDispatch();
  const [content, setContent] = useState('');
  const [notif, setNotif] = useState('');
  const [showNotif, setShowNotif] = useState(false);
  const { auth } = useAuthorization();
  const { id, img_url, name } = useSelector(state => state.user);

  const comment = async e => {
    setShowNotif(false);

    if (e.key !== 'Enter') {
      return;
    }
    
    if (content.trim() === '') {
      setNotif('Nội dung bình luận của bạn rỗng!');
      setShowNotif(prev => true);

      return;
    }

    if (!auth || !id) {
      setNotif('Bạn chưa đăng nhập!');
      setShowNotif(prev => true);

      return;
    }

    const cmt = striptags(content).trim();

    try {
      dispatch(actCreateNewComment(cmt, id, img_url, 0, name, 0));

      setContent('');
      setShowNotif(false);

      const response = await CommentService.create(cmt, id, post_id);

      if (!response.data.created_new_comment) {
        setNotif('Có lỗi xảy ra, xin tải lại trang và thử lại!');
        setShowNotif(prev => true);  

        return;
      }
    } catch (error) {
      setNotif('Có lỗi xảy ra, xin tải lại trang và thử lại!');
      setShowNotif(prev => true);
    }
  }

  return (
    <div className="add-comment-wrap">
      <div className="add-comment">
        <form className="comment-form">
          <div className="form-ctl-wrap">
            <i class="fas fa-pencil icon"></i>
            <textarea
              className="comment-input"
              placeholder="Bình luận công khai"
              value={ content }
              onChange={ e => { setContent(e.target.value) } }
              onKeyDown={ comment }
            ></textarea>
          </div>
        </form>
        <NotificationCard 
          show={ showNotif }
          content={ notif }
          showCloseButton={ true }
        />
      </div>
    </div>
  );
}
