import { useState } from "react";

import PostItem from "../../PostItem";
import PostItemLoading from "../../PostItem/PostItemLoading";
import Tabs from "./Tabs";

export default function LatestPostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  
  return (
    <div className="main-col-8">
      <Tabs 
        posts={ p => setPosts(p) }
        loading={ l => setLoading(l) }
        hasMore={ hm => setHasMore(hm) }
      />
      <div className="posts-list">
        {
          posts.length !== 0 
            ? (
              posts.map(post => {
                return <PostItem key={ post.id } post={post} />;
              })
            ) 
            : <PostItemLoading />
          }
          {
            loading 
            ? <PostItemLoading noOfItems={ 2 } />
            : null
          }
          {
            !hasMore 
              ? (
                <div className="end-of-list">
                  <i className="fad fa-times-circle end-icon"></i>
                  Không còn bài viết để hiển thị
                </div>
              )
              : null
          }
      </div>
    </div>
  );
}
