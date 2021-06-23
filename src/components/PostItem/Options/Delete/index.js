import { useDispatch } from "react-redux";
import { actShowDeleteModal } from "../../../../store/modals/actions";

export default function Delete({
  id,
}) 
{
  const dispatch = useDispatch();

  return (
    <li className="option-item">
      <a className="item-link" onClick={ e => { dispatch(actShowDeleteModal(id)) } }>
        <i className="fad fa-trash-alt item-icon"></i>
        Xóa bài viết
      </a>
    </li>
  );
}
