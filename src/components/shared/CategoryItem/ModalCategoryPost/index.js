import "./modal.scss";

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actHideCategoryPostModal } from "../../../../store/modals/actions";
import { actFetchPostsByCategoryAsync } from "../../../../store/categories/actions";

import Title from "./Title";
import PostItem from "../../../PostItem";

export default function ModalCategoryPost() {
  const dispatch = useDispatch();
  const modalRef = useRef();

  const [callingAPI, setCallingAPI] = useState(false);
  const { showCategoryPostModal, category_id } = useSelector(state => state.modals);
  const { page, per_page, list, hasMore } = useSelector(state => state.categories.postsByCategoryId);

  const loadMore = async () => {
    if (callingAPI) return;
    if (!hasMore) return;
    if (!category_id) return;

    setCallingAPI(true);

    dispatch(actFetchPostsByCategoryAsync(category_id, page + 1, per_page)).finally(() => {
      setCallingAPI(false);
    });
  }

  useEffect(() => {
    function fetchPosts() {
      if (callingAPI) return;
      if (!category_id) return;

      setCallingAPI(true);
      dispatch(actFetchPostsByCategoryAsync(category_id)).finally(() => {
        setCallingAPI(false);
      });
    }

    fetchPosts();
  }, [category_id, dispatch]);

  const clickEventCallback = e => {
    showCategoryPostModal 
    && modalRef.current 
    && !modalRef.current.contains(e.target) 
    && dispatch(actHideCategoryPostModal());
  }

  useEffect(() => {
    document.addEventListener('click', clickEventCallback);
    
    return () => {
      document.removeEventListener('click', clickEventCallback);
    }
  });

  return (
    <div className={ showCategoryPostModal ? 'list-modal' : 'list-modal hidden' }>
      <div className="inner-modal" ref={ modalRef }>
        <Title loading={ callingAPI } />
        <div className="content">
          {
            list.map(post => {
              return <PostItem post={ post } showFooter={ false }/>;
            })
          }
          {
            hasMore
              ? (
                <div className="load-more">
                  <span className={ callingAPI ? 'btn disabled' : 'btn'} onClick={ loadMore }>Tải thêm</span>
                </div>
              )
              : null
          }
        </div>
      </div>
    </div>
  );
}
