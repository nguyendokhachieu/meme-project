import "./style.scss";

import PostItemHeader from "./PostItemHeader";
import PostItemContent from "./PostItemContent";
import PostItemFooter from "./PostItemFooter";

import { useDispatch } from "react-redux";
import { useLocation } from "react-router";

export default function PostItem({
  post,
  showFooter = true,
  showRightSideImage = false,
}) 
{
  const dispatch = useDispatch();
  const location = useLocation();

  if (!post) {
    return null;
  }

  return (
    <div className="post-item">
      <PostItemHeader post={ post } />
      <PostItemContent post={ post } />
      {
        showFooter
          ? <PostItemFooter post={ post } />
          : null
      }
    </div>
  );
}
