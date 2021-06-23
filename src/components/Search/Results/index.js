import "./results.scss";

import ModalUserItem from "../../shared/ModalUserItem";
import PostItem from "../../PostItem";
import PostItemLoading from "../../PostItem/PostItemLoading";

export default function Results({
    q,
    results,
    loading,
    buttonLoading,
    loadMore = function() {},
    hasMore,
    searchBy,
}) 
{
  return (
    <div className="search-results">
      <h2 className="title">
        <i className="fad fa-poll-people icon"></i>
        Kết quả tìm kiếm
        {
            q ? <span className="keyword">Từ khóa: { q }</span> : null 
        }
      </h2>
      <div className="results-list">
        {
            loading 
                ? <PostItemLoading noOfItems={ 2 } />
                : searchBy === 'posts'
                  ? results.length === 0
                    ? null
                    : results.map(post => {
                        return <PostItem key={ post.id } post={ post } showRightSideImage={ true } />
                    })
                  : results.length === 0
                    ? null
                    : results.map(user => {
                        return <ModalUserItem key={ user.user_id } user={ user } />
                    })
        }
      </div>
      {
          hasMore
            ? (
                <div className="load-more">
                    <button className="load-more-btn" onClick={ e => { loadMore(true) } }>
                      {
                        buttonLoading ? "Đang tải" : "Tải thêm"
                      }
                    </button>
                </div>
            )
            : <div className="load-more"><span className="load-more-btn">Bạn đã xem hết</span></div>
      }
    </div>
  );
}
