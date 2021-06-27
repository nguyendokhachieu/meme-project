import "./style.scss";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { actShowCategoryPostModal } from "../../../store/modals/actions";
import { actRemoveSelectOneCategory } from "../../../store/categories/actions";

export default function CategoryItem({
  category,
  small = false,
  hasClickEvent = true,
}) 
{
  const dispatch = useDispatch();
  const location = useLocation();
  
  useEffect(() => {
    if (location.search && location.search.length !== 0) {
      if (!isNaN(location.search.substr(4, location.search.length))) {
        hasClickEvent && dispatch(actShowCategoryPostModal(location.search.substr(4, location.search.length)));
      }
    }
  }, [location, dispatch]);

  if (!category) {
    return null;
  }

  return (
    <>
      {
        hasClickEvent 
          ? (
            <Link 
                to={ `/categories?id=${ category.id }` } 
                className={ small ? 'tags-item size-small' : 'tags-item' }
                onClick={ () => { hasClickEvent && dispatch(actShowCategoryPostModal(category.id)) } }
            >
                <span className="tags-text">{ category.name }</span>
            </Link>
          )
          : (
            <span className={ small ? 'tags-item size-small' : 'tags-item' }>
                <span className="inner">
                  <span className="tags-text">{ category.name }</span>
                  <span className="close" onClick={ () => dispatch(actRemoveSelectOneCategory(Number(category.id))) }><i className="fal fa-times icon"></i></span>
                </span>
            </span>
          )
      }
    </>
  );
}
