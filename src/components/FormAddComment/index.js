import "./form-add-comment.scss";

import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuthorization } from "../../hooks/useAuthorization";

import { actCreateNewCommentAsync } from "../../store/comments/actions";
import { actShowNotificationCard } from "../../store/notifications/actions";

const striptags = require('striptags');

export default function FormAddComment({
  post_id,
}) 
{
  const dispatch = useDispatch();
  const textAreaRef = useRef();

  const [content, setContent] = useState(null);

  const { auth } = useAuthorization();
  const { id, img_url, name } = useSelector(state => state.user);

  const autoSize = elem => {
    elem.style.height = "5px";
    elem.style.height = elem.scrollHeight + "px";
  }

  const comment = async e => {
    if (e.key !== 'Enter') {
      return;
    }

    setContent('');
    textAreaRef.current.style.height = 'auto';
    
    if (content.trim() === '') {
      dispatch(actShowNotificationCard('Nội dung bình luận của bạn rỗng!'));

      return;
    }

    if (!auth || !id) {
      dispatch(actShowNotificationCard('Hãy đăng nhập để bình luận!'));

      return;
    }

    const commentContent = striptags(content).trim();

    try {
      dispatch(actCreateNewCommentAsync(commentContent, id, post_id, img_url, Date.now(), name, 0));      
    } catch (error) {
      dispatch(actShowNotificationCard('Có lỗi khi bình luận! Xin vui lòng tải lại trang và thử lại!'));
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
              rows={ 1 }
              cols={ 1 }
              onChange={ e => { setContent(e.target.value); autoSize(e.target) } }
              ref={ textAreaRef }
              onKeyDown={ comment }
              onKeyUp={ e => { e.key === 'Enter' && setContent('') } }
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}
