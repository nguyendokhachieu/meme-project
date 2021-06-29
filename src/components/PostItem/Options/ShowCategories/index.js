import { useDispatch } from "react-redux";

import { actShowPostCategoriesModal } from "../../../../store/modals/actions";

export default function ShowCategories({
  id,
  setShowOptions = function() {},
}) 
{
  const dispatch = useDispatch();

  return (
    <div className="option-item">
      <div className="item-link" onClick={ () => { setShowOptions(false); dispatch(actShowPostCategoriesModal(id))} }>
        <i className="fad fa-stream item-icon"></i>
        Xem danh mục của bài viết này
      </div>
    </div>
  );
}
