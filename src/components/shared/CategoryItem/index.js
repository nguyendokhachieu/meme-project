import "./style.scss";

import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { actShowCategoryPostModal } from "../../../store/modals/actions";
import { useEffect } from "react";

export default function CategoryItem({
  category,
  small = false,
}) 
{
  const dispatch = useDispatch();
  const location = useLocation();
  
  useEffect(() => {
    if (location.search && location.search.length !== 0) {
      if (!isNaN(location.search.substr(4, location.search.length))) {
        dispatch(actShowCategoryPostModal(location.search.substr(4, location.search.length)));
      }
    }
  }, [location, dispatch]);

  if (!category) {
    return null;
  }

  return (
    <Link 
        to={ `/categories?id=${ category.id }` } 
        className={ small ? 'tags-item size-small' : 'tags-item' }
        onClick={ () => { dispatch(actShowCategoryPostModal(category.id)) } }
    >
        <span className="tags-text">{ category.name }</span>
    </Link>
  );
}
