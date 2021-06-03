import "./results.scss";
import PostItem from "../../PostItem";
import PostItemLoading from "../../PostItem/PostItemLoading";

export default function Results({
    q,
    results,
    loading,
    buttonLoading,
    loadMore = function() {},
    hasMore,
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
                    ? null
                    : results.map(post => {
                        return <PostItem post={ post } />
                    })
        }
      </div>
      {
          hasMore
            ? (
                <div className="load-more">
                    <button className="load-more-btn" onClick={ e => { loadMore(true) } }>
                      {
                        buttonLoading ? "Đang tải" : "Tải thêm bài viết"
                      }
                    </button>
                </div>
            )
            : <div className="load-more"><span className="load-more-btn">Bạn đã xem hết bài viết</span></div>
      }
    </div>
  );
}
