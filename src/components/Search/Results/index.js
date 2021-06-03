import PostItem from "../../PostItem";
import PostItemLoading from "../../PostItem/PostItemLoading";

export default function Results({
    q,
    results,
    loading,
}) 
{
  return (
    <div className="search-results">
      <h2 className="title">
        <i class="fad fa-poll-people icon"></i>
        Kết quả tìm kiếm
        {
            q ? <span className="keyword">Từ khóa: { q }</span> : null 
        }
      </h2>
      <div className="results-list">
        {
            loading 
                ? <PostItemLoading noOfItems={ 2 } />
                : results.length === 0
                    ? (
                        <div className="no-posts-found">
                            <i class="fad fa-empty-set icon"></i>
                            Không có bài viết nào
                        </div>
                    )
                    : results.map(post => {
                        return <PostItem post={ post } />
                    })
        }
      </div>
      {
          results.length !== 0 
            ? (
                <div className="load-more">
                    <button className="load-more-btn">Tải thêm bài viết</button>
                </div>
            )
            : null
      }
    </div>
  );
}
