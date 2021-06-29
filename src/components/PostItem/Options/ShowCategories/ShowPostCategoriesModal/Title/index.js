import "./title.scss";

import { useDispatch } from "react-redux";

export default function Title({
  loading = false,
}) 
{
  const dispatch = useDispatch();

  return (
    <h4 className="title">
      <i className="fad fa-stream icon"></i>
      Danh sách danh mục của bài viết này
      {
        !loading
          ? null 
          : <span className="loading"><i className="fad fa-circle-notch fa-spin icon loading-icon"></i></span>
      }
      {/* <i className="fal fa-times icon close-icon" ></i> */}
    </h4>
  );
}
