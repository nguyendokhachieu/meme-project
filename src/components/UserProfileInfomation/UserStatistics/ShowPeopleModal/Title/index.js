import "./title.scss";

import { useDispatch } from "react-redux";
import { actHidePeopleModal } from "../../../../../store/modals/actions";

export default function Title({
  loading,
  type,
}) 
{
  const dispatch = useDispatch();

  return (
    <h4 className="title">
      <i className="fad fa-user-friends icon"></i>
      {
        type === 'following' ? 'Người dùng đang theo dõi' : 'Được theo dõi bởi'
      }
      {
        !loading
          ? null 
          : <span className="loading"><i className="fad fa-circle-notch fa-spin icon loading-icon"></i></span>
      }
      <i className="fal fa-times icon close-icon" onClick={ () => { dispatch(actHidePeopleModal()) } }></i>
    </h4>
  );
}
