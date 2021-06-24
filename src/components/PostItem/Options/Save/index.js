import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { PostService } from "../../../../services/posts";

import { actShowNotificationCard } from "../../../../store/notifications/actions";
import { actDeleteSavedPost } from "../../../../store/posts/actions";

export default function Save({
  id,
  setShowOptions = function() {},
}) 
{
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const save = async id => {
    if (loading) return;
    
    setLoading(true);

    if (!isSaved) {
      const response = await PostService.save(id);

      setIsSaved(true);
      setLoading(false);

      dispatch(actShowNotificationCard(response.data.message, true, '/saved', 'Xem danh sách'));

      return;
    }

    if (isSaved) {
      const response = await PostService.unsave(id);
      
      setIsSaved(false);
      setLoading(false);

      dispatch(actDeleteSavedPost(id));
      dispatch(actShowNotificationCard(response.data.message));

      return;
    }
  }

  useEffect(() => {
    async function check() {
      if (loading) return;
  
      if (id) {
        setLoading(true);
        const response = await PostService.checkSaved(id);
        setLoading(false);
  
        response?.data && response.data.is_saved && setIsSaved(true);
      }
    }

    check();
  }, [id])

  return (
    <div className="option-item">
      <div className="item-link" onClick={ e => { setShowOptions(false); save(id); } }>
        {
          !isSaved 
            ? (
              <>
                <i className="fad fa-file-plus item-icon"></i>
                Lưu bài viết này
              </>
            )
            : (
              <>
                <i className="fad fa-file-minus item-icon"></i>
                Bỏ lưu bài viết
              </>
            )
        }
      </div>
    </div>
  );
}
