import "./submit.scss";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { actHideEditModal } from "../../../../../../store/modals/actions";
import { actShowNotificationCard } from "../../../../../../store/notifications/actions";
import { actEditPost } from "../../../../../../store/posts/actions";

import { PostService } from "../../../../../../services/posts";

export default function Submit({
  fetchingFirst,
  deleteCurrentImage,
  content,
  imgURL,
  file,
  postID,
  isLoading = function() {},
}) 
{
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const edit = async () => {
    if (loading || fetchingFirst) {
      return;
    }

    if (content.trim() === '' && deleteCurrentImage) {
      dispatch(actShowNotificationCard('Nội dung rỗng!'));
      return;
    }

    if (!imgURL && content.trim() === '') {
      dispatch(actShowNotificationCard('Nội dung rỗng!'));
      return;
    }

    const frm = new FormData();

    frm.append('post_id', postID);
    frm.append('delete_current_img', deleteCurrentImage ? '1' : '0');
    frm.append('content', content);
    frm.append('img_url', imgURL);
    file && frm.append('image', file);

    setLoading(true);
    const response = await PostService.edit(frm);
    setLoading(false);

    if (response.data.status === 200) {
      dispatch(actEditPost(postID, response.data.new_img_url, content, deleteCurrentImage));
      dispatch(actHideEditModal());
      dispatch(actShowNotificationCard(response.data.message));
    } else {
      dispatch(actShowNotificationCard(response.data.message));
    }
  }

  useEffect(() => {
    isLoading(loading);
  }, [loading]);

  return (
    <>
    {
      !fetchingFirst
        ? (
          <div className="submit">
            <button 
              className={ loading ? 'btn save-change disabled' : 'btn save-change' } 
              onClick={ edit }
            >
              Lưu các thay đổi
            </button>
            <button 
              className={ loading ? 'btn cancel disabled' : 'btn cancel' } 
              onClick={ e => { dispatch(actHideEditModal()) } }
            >
              Hủy bỏ
            </button>
          </div>
        )
        : null
    }
    </>
  );
}
