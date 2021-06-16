import { useDispatch } from "react-redux";
import { actShowEditModal } from "../../../../store/modals/actions";

export default function Edit() {
  const dispatch = useDispatch();

  return (
    <li className="option-item">
      <a className="item-link" onClick={ e => { dispatch(actShowEditModal()) } }>
        <i class="fad fa-edit item-icon"></i>
        Sửa bài viết
      </a>
    </li>
  );
}
