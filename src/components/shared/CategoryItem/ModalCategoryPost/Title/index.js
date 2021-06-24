import "./title.scss";

import { useDispatch } from "react-redux";
import { actHideCategoryPostModal } from "../../../../../store/modals/actions";

export default function Title({
  loading = false,
}) 
{
  const dispatch = useDispatch();

  return (
    <h4 className="title">
      <i className="fad fa-th-list icon"></i>
      Danh sách bài viết liên quan đến danh mục
      {
        !loading
          ? null 
          : <span className="loading"><i className="fad fa-circle-notch fa-spin icon loading-icon"></i></span>
      }
      <i className="fal fa-times icon close-icon" onClick={ () => dispatch(actHideCategoryPostModal()) }></i>
    </h4>
  );
}
