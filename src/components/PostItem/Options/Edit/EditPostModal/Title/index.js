import "./title.scss";

import { useDispatch } from "react-redux";
import { actHideEditModal } from "../../../../../../store/modals/actions";

export default function Title({
  loading,
}) 
{
  const dispatch = useDispatch();

  return (
    <h4 className="title">
      <i className="fad fa-edit icon"></i>
      Sửa bài viết
      {
        !loading
          ? null 
          : <span className="loading"><i className="fad fa-circle-notch fa-spin icon loading-icon"></i></span>
      }
      <i className="fal fa-times icon close-icon" onClick={ e => { dispatch(actHideEditModal()) } }></i>
    </h4>
  );
}
