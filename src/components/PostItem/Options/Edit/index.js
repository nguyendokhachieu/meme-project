import { useDispatch } from "react-redux";
import { actShowEditModal } from "../../../../store/modals/actions";

export default function Edit({
  id,
}) 
{
  const dispatch = useDispatch();

  return (
    <li className="option-item">
      <span className="item-link" onClick={ e => { dispatch(actShowEditModal(id)) } }>
        <i className="fad fa-edit item-icon"></i>
        Sửa bài viết
      </span>
    </li>
  );
}
