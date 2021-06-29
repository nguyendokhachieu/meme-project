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
            : null
          }
          {
            loading 
            ? <PostItemLoading noOfItems={ 4 } />
            : null
          }
          {
            !hasMore 
              ? (
                <div className="end-of-list">
                  <i className="fal fa-smile-beam icon"></i>
                  Đã hết bài viết rồi!
                </div>
              )
              : null
          }
      </div>
    </div>
  );
}
