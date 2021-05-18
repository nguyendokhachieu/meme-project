import "./style.css";

import { useEffect, useState } from "react";
import CommentList from "../CommentList";
import CommentListHeader from "../CommentListHeader";
import FormAddComment from "../FormAddComment";
import PostItem from "../PostItem";
import Loading from "./../shared/Loading";
import { actFetchDetailPostAsync } from "./../../store/posts/actions";
import { useDispatch } from "react-redux";
import NotFound from "../NotFound";

export default function DetailPost({
  postID
}) 
{
  const dispatch = useDispatch();
  const [post, setPost] = useState({} = false);
  const [hasErrors, setHasErrors] = useState(false);
  const [totalComments, setTotalComments] = useState(0);

  const countTotalComments = (totalComments) => {
    setTotalComments(totalComments);
  }

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

  if (hasErrors) {
    return <NotFound />;
  }

  return (
    <div className="main-content">
      <div className="container">
        <div className="col-wrap">
          <div className="main-col-8">
            {
              !post 
                ? <div className="align-center padding-tb-2rem"><Loading opacity={ 0.9 } /></div>
                : <PostItem post={ post } />
            }
            {
              !post 
                ? <div className="align-center padding-tb-2rem"><Loading opacity={ 0.7 } /></div>
                : <FormAddComment />
            }
            {
              !post
                ? <div className="align-center padding-tb-2rem"><Loading opacity={ 0.5 } /></div>
                : <CommentListHeader totalComments={ totalComments } />
            }
            {
              !post
                ? <div className="align-center padding-tb-2rem"><Loading opacity={ 0.2 } /></div>
                : <CommentList postID={ postID } commentCount={ countTotalComments } />
            }
          </div>
          <div className="main-col-4">
            <h3 className="featured-posts-header">Bài viết của bạn</h3>
            <p className="notification">
              Bạn chưa đăng nhập. Vui lòng đăng nhập để xem bài viết của mình
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
