import "./style.scss";

import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { actFetchDetailPostAsync } from "./../../store/posts/actions";

import CommentList from "../CommentList";
import CommentListHeader from "../CommentListHeader";
import FormAddComment from "../FormAddComment";
import PostItem from "../PostItem";

import PostItemLoading from "../PostItem/PostItemLoading";
import FormAddCommentLoading from "../FormAddComment/FormAddCommentLoading";
import CommentListHeaderLoading from "../CommentListHeader/CommentListHeaderLoading";
import CommentListLoading from "../CommentList/CommentListLoading";
import NotFound from "../NotFound";


export default function DetailPost({
  postID
}) 
{
  const dispatch = useDispatch();
  const [post, setPost] = useState({} = false);
  const [hasErrors, setHasErrors] = useState(false);

  useEffect(async () => {
    setHasErrors(false);

    if (!isNaN(postID)) {
      try {
        const p = await dispatch(actFetchDetailPostAsync(postID));

        if (p) {
          setPost(p);
        } else {
          setHasErrors(true);
        }
      } catch (error) {
        setHasErrors(true);
      }
    } else {
      setHasErrors(true);
    }
  }, [postID]);

  const scrollToTop = useCallback(() => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 12);
    }
  }
  );
  
  useEffect(() => {
    scrollToTop();
  }, []);
  
  if (hasErrors) {
    return <NotFound />;
  }

  return (
    <div className="main-content">
      <div className="container">
        <section className="detail-post-section">
          <div className="col-wrap">
            <div className="main-col-8">
              {
                post 
                  ? (
                    <>
                      <PostItem post={ post } />
                      <FormAddComment post_id={ postID } />
                      <CommentListHeader />
                      <CommentList postID={ postID } />
                    </>
                  )
                  : (
                    <>
                      <PostItemLoading noOfItems={ 1 } />
                      <FormAddCommentLoading />
                      <CommentListHeaderLoading />
                      <CommentListLoading noOfItems={ 2 } />
                    </>
                  )
              }
            </div>
            <div className="main-col-4">
              
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
