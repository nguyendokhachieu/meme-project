import "./modal.scss";

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actHidePostCategoriesModal } from "../../../../../store/modals/actions";
import { actFetchCategoriesByPostIdAsync, 
         actClearCategoriesByPostId } from "../../../../../store/categories/actions";

import Title from "./Title";
import CategoryItem from "../../../../shared/CategoryItem";

export default function ShowPostCategoriesModal() {
  const dispatch = useDispatch();
  const modalRef = useRef();
  
  const [loading, setLoading] = useState(false);
  
  const { showPostCategoriesModal, postID } = useSelector(state => state.modals);
  const { list } = useSelector(state => state.categories.categoriesByPostId);

  useEffect(() => {
    if (!postID) return;
    if (!showPostCategoriesModal) return;
    if (loading) return;

    setLoading(true);
    dispatch(actFetchCategoriesByPostIdAsync(postID)).then(() => {
      setLoading(false);
    });

  }, [showPostCategoriesModal, postID, dispatch]);

  const clickEventCallback = e => {
    showPostCategoriesModal 
      && modalRef.current 
        && !modalRef.current.contains(e.target) 
          && dispatch(actHidePostCategoriesModal())
          && dispatch(actClearCategoriesByPostId());
  }

  useEffect(() => {
    document.addEventListener('click', clickEventCallback);

    return () => {
      document.removeEventListener('click', clickEventCallback);
    }
  });

  return (
    <div className={ showPostCategoriesModal ? 'show-categories-modal' : 'show-categories-modal hidden' }>
      <div className="inner-modal" ref={ modalRef }>
        <Title />
        <div className="content">
          <div className="items">
          {
            loading
            ? <div className="loading"><i className="fad fa-circle-notch fa-spin icon"></i></div>
            : list.length === 0
              ? <div className="loading"><i className="fad fa-empty-set icon"></i>Bài viết này không có danh mục nào!</div>
              : (
                list.map(category => {
                  return <CategoryItem category={ category } />
                })
              )
          }            
          </div>
          <div className="submit">
            <button 
              className={ loading ? 'btn cancel disabled' : 'btn cancel' } 
              onClick={ () => { dispatch(actHidePostCategoriesModal()); dispatch(actClearCategoriesByPostId()) } }
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
