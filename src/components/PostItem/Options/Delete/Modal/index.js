import "./modal.scss";

import { useCallback, useEffect, useRef, useState } from "react";
import { PostService } from "../../../../../services/posts";
import { actShowNotificationCard } from "../../../../../store/notifications/actions";

import { useDispatch } from "react-redux";

export default function Modal({ 
    reset = function () {}, 
    id 
}) 
{
  const dispatch = useDispatch();
  const modalRef = useRef();
  const [hidden, setHidden] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    const response = await PostService.delete(id);

    setLoading(false);

    if (response.data.deleted) {
      setHidden(true);
      dispatch(actShowNotificationCard("Đã xóa bài viết thành công"));

      setTimeout(() => {
        window.location.reload();
      }, 1000);

      return;
    }

    setHidden(true);
    dispatch(actShowNotificationCard("Có lỗi xảy ra, vui lòng thử lại"));
  };

  const clickEventCallback = useCallback((e) => {
    modalRef.current && !modalRef.current.contains(e.target) && setHidden(true);
    modalRef.current && !modalRef.current.contains(e.target) && reset(false);
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", clickEventCallback);

    return () => {
      document.removeEventListener("mousedown", clickEventCallback);
    };
  });

  return (
    <div className={hidden ? "delete-modal-wrap hide" : "delete-modal-wrap"}>
      <div className="float-modal" ref={modalRef}>
        <h3 className="modal-title">
            {
                loading 
                    ? <i class="fa fa-spinner fa-spin" style={{ marginRight: "1rem" }}></i> 
                    : <i class="fad fa-trash-alt icon"></i>
            }
                Xóa bài viết này ?
        </h3>
        <div className="inner-modal">
          <div className="icon-wrap">
            <i class="fad fa-exclamation-square icon"></i>
          </div>
          <h6 className="title">
            Bài viết sẽ bị xóa vĩnh viễn và không thể khôi phục
          </h6>
          <div className="btn-group">
            <button 
                className="delete btn" 
                onClick={handleDelete}
            >
              Xóa
            </button>
            <button
              className="cancel btn"
              onClick={(e) => {
                setHidden(true);
              }}
            >
              Hủy bỏ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
