import "./style.scss";
import PostItemHeader from "./PostItemHeader";
import PostItemContent from "./PostItemContent";
import PostItemFooter from "./PostItemFooter";

export default function PostItem({
  post,
  showFooter = true,
  showRightSideImage = false,
}) 
{
  if (!post) {
    return null;
  }

  return (
    <div className="post-item">
      <PostItemHeader post={ post } />
      <PostItemContent post={ post } showRightSideImage={ showRightSideImage } />
      {
        showFooter
          ? <PostItemFooter post={ post } />
          : null
      }
    </div>
  );
}
