import "./style.scss";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actClearDetailPost, actFetchDetailPostAsync } from "./../../store/posts/actions";

import CommentList from "../CommentList";
import CommentListHeader from "../CommentListHeader";
import FormAddComment from "../FormAddComment";
import PostItem from "../PostItem";

import PostItemLoading from "../PostItem/PostItemLoading";
import FormAddCommentLoading from "../FormAddComment/FormAddCommentLoading";
import CommentListHeaderLoading from "../CommentListHeader/CommentListHeaderLoading";
import CommentListLoading from "../CommentList/CommentListLoading";
import NotFound from "../NotFound";

import { actResetCountTotalComments } from "../../store/comments/actions";
import { useScrollToTop } from "../../hooks/useScrollToTop";

export default function DetailPost({
  postID
}) 
{
  const dispatch = useDispatch();
  const { detailPost: post } = useSelector(state => state.posts);
  const [hasErrors, setHasErrors] = useState(false);

  useScrollToTop();

  useEffect(async () => {
    setHasErrors(false);
    
    if (!isNaN(postID)) {
      await dispatch(actFetchDetailPostAsync(postID));

      if (!post.id) {
        setHasErrors(true);
      }

    } else {
      setHasErrors(true);
    }
  }, [post.id, dispatch]);
  
  useEffect(() => {
    return () => {
      dispatch(actClearDetailPost());
      dispatch(actResetCountTotalComments());
    }
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
                post.id 
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
