import "./style.scss";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { actShowCategoryPostModal } from "../../../store/modals/actions";

export default function CategoryItem({
  category,
  small = false,
}) 
{
  const dispatch = useDispatch();
  
  if (!category) {
    return null;
  }

  return (
    <Link 
        to={ `/categories` } 
        className={ small ? 'tags-item size-small' : 'tags-item' }
        onClick={ () => { dispatch(actShowCategoryPostModal(category.id)) } }
    >
        <span className="tags-text">{ category.name }</span>
    </Link>
  );
}
