import { useDispatch } from "react-redux";
import { actShowDeletePostModal } from "../../../../store/modals/actions";

export default function Delete({
  id,
}) 
{
  const dispatch = useDispatch();

  return (
    <li className="option-item">
      <span className="item-link" onClick={ e => { dispatch(actShowDeletePostModal(id)) } }>
        <i className="fad fa-trash-alt item-icon"></i>
        Xóa bài viết
      </span>
    </li>
  );
}
