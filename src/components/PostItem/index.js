import PostItemHeader from "./PostItemHeader";
import PostItemContent from "./PostItemContent";
import PostItemFooter from "./PostItemFooter";
import "./style.css";

export default function PostItem({
  post
}) 
{
  if (!post) {
    return null;
  }

  return (
    <div className="post-item">
      <PostItemHeader post={ post } />
      <PostItemContent post={ post } />
      <PostItemFooter post={ post } />
    </div>
  );
}
