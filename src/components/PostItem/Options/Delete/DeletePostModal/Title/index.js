import "./title.scss";

import { useDispatch } from "react-redux";
import { actHideDeletePostModal } from "../../../../../../store/modals/actions";

export default function Title({
  loading = false,
}) 
{
  const dispatch = useDispatch();

  return (
    <h4 className="title">
      <i className="fad fa-trash-alt icon"></i>
      Xóa bài viết
      {
        !loading
          ? null 
          : <span className="loading"><i className="fad fa-circle-notch fa-spin icon loading-icon"></i></span>
      }
      <i className="fal fa-times icon close-icon" onClick={ e => { dispatch(actHideDeletePostModal()) } }></i>
    </h4>
  );
}
